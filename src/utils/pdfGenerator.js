import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const generateInvoicePDF = (invoiceData) => {
  const doc = new jsPDF();
  
  // Custom font size and styling
  doc.setFontSize(20);
  doc.setTextColor(40);
  doc.text('INVOICE', 14, 22);
  
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text(`Invoice Number: ${invoiceData.invoiceNumber}`, 14, 30);
  doc.text(`Date: ${invoiceData.date}`, 14, 35);
  
  // Company Info (Mock or from state)
  doc.setFontSize(12);
  doc.setTextColor(40);
  doc.text('Your Company Name', 140, 22);
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text('123 Business Rd.', 140, 28);
  doc.text('City, State, 12345', 140, 33);
  doc.text('contact@yourcompany.com', 140, 38);

  // Client Info
  doc.setFontSize(12);
  doc.setTextColor(40);
  doc.text('Bill To:', 14, 50);
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text(`Name: ${invoiceData.clientName || 'N/A'}`, 14, 56);
  doc.text(`Email: ${invoiceData.clientEmail || 'N/A'}`, 14, 61);
  const splitAddress = doc.splitTextToSize(`Address: ${invoiceData.clientAddress || 'N/A'}`, 80);
  doc.text(splitAddress, 14, 66);
  
  // Items Table
  const tableColumn = ["Item", "Quantity", "Price", "Total"];
  const tableRows = [];

  invoiceData.items.forEach(item => {
    const itemData = [
      item.name,
      item.quantity,
      `$${parseFloat(item.price).toFixed(2)}`,
      `$${(item.quantity * item.price).toFixed(2)}`
    ];
    tableRows.push(itemData);
  });

  const finalYStart = 66 + (splitAddress.length * 5) + 10;

  // We need to use jspdf-autotable but wait! I didn't install jspdf-autotable yet!
  // It's much better to install it or build manually. Let's build manually to avoid installing or I'll just install it.
  // Wait, I can install jspdf-autotable it makes tables much easier.
  // Actually, I can draw the table manually or just install `jspdf-autotable`. Let's assume I install it now, it's safer.
  // Wait, I will just run `npm install jspdf-autotable` in the background while I finish this file.
  
  doc.autoTable({
    startY: finalYStart,
    head: [tableColumn],
    body: tableRows,
    theme: 'striped',
    headStyles: { fillColor: [79, 70, 229] }, // Indigo 600
  });

  const finalY = doc.lastAutoTable.finalY + 10;

  doc.setFontSize(10);
  doc.setTextColor(40);
  doc.text(`Subtotal: $${invoiceData.subtotal.toFixed(2)}`, 140, finalY);
  doc.text(`Tax (${invoiceData.taxRate}%): $${invoiceData.taxAmount.toFixed(2)}`, 140, finalY + 7);
  
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text(`Grand Total: $${invoiceData.grandTotal.toFixed(2)}`, 140, finalY + 16);

  doc.save(`invoice-${invoiceData.invoiceNumber || 'draft'}.pdf`);
};
