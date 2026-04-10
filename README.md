<div align="center">

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/jsPDF-FF0000?style=for-the-badge&logo=adobe-acrobat-reader&logoColor=white" />

# 🧾 Invoice Generator

**A clean, responsive web app to create and download professional invoices — instantly.**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_App-4CAF50?style=for-the-badge)](https://react-invoice-generator-web-app.netlify.app)

</div>

---

## ✨ Features

| Feature | Description |
|--------|-------------|
| 👤 Client Details | Add client name, email, and address |
| 📋 Dynamic Line Items | Add/remove items with quantity and unit price |
| 🧮 Auto Calculations | Real-time subtotal, tax, and total computation |
| 📄 PDF Export | One-click invoice download via jsPDF |
| 📱 Responsive Design | Works seamlessly on mobile and desktop |
| 🎨 Clean UI | Minimal, professional, user-friendly interface |

---

## 📸 Preview

<img width="1380" height="993" alt="Screenshot 2026-04-10 174502" src="https://github.com/user-attachments/assets/4492f5c8-6b14-404c-938b-69b2fba694a6" />

---

## 🛠️ Tech Stack

- **Framework:** React.js
- **Styling:** Tailwind CSS, HTML5, CSS3
- **PDF Generation:** jsPDF
- **Language:** JavaScript (ES6+)

---

## 📂 Project Structure

```
invoice-generator/
├── public/
└── src/
    ├── components/
    │   ├── InvoiceForm.js       # Client & invoice metadata inputs
    │   ├── ItemList.js          # Dynamic line item management
    │   └── InvoicePreview.js    # Live invoice preview panel
    ├── utils/
    │   └── pdfGenerator.js      # jsPDF export logic
    ├── App.js
    └── index.js
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `v16+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/invoice-generator.git

# 2. Navigate into the project
cd invoice-generator

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will be running at `http://localhost:3000`.

---

## 📖 Usage

1. **Fill in client details** — name, email, and billing address
2. **Add line items** — enter item description, quantity, and price
3. **Review the totals** — subtotal, tax, and total update in real time
4. **Download** — click **Download PDF** to save your invoice

---

## 🗺️ Roadmap

- [ ] User authentication & accounts
- [ ] Invoice history stored in a database
- [ ] Company logo upload & customization
- [ ] Email invoice directly to clients
- [ ] Multiple currency support
- [ ] Invoice status tracking (Draft / Sent / Paid)

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

```bash
# Fork the repo, then:
git checkout -b feature/your-feature-name
git commit -m "Add: your feature description"
git push origin feature/your-feature-name
```

---

<div align="center">

Made with ❤️ by **[Vishal Gupta](https://github.com/your-username)** · Freelance Full Stack Developer

⭐ **Star this repo** if you found it useful!

</div>
