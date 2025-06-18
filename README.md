# PlaywriteOrangeHRM

This repository contains an automation framework using **Playwright** and **JavaScript** for testing [Oragne HRM](https://opensource-demo.orangehrmlive.com/). 🚀

---

## 📌 Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (v16 or later) 👉 [Download Here](https://nodejs.org/)
- **Git** 👉 [Download Here](https://git-scm.com/)
- **Visual Studio Code** 👉 [Download Here](https://code.visualstudio.com/Download)
---

## 🚀 Setup Instructions

### **Open Terminal**

### **Clone the Repository**
``git clone https://github.com/rohits06oct/PlaywriteOrangeHRM.git``

### **Now Open the PlaywriteOrangeHRM in Visual Studio code**

### Goto Terminal under Visual Studio Code

### Now Hit the below command for setup Node.js version in your path
``fnm env --use-on-cd | Out-String | Invoke-Expression``

### Hit the below command to run login test cases
``npx playwright test login.spec.js --project=chromium --headed``

### Hit the below command to run Navigation test cases
``npx playwright test navigateLeftSection.spec.js --project=chromium --headed``

### Hit the below command to run both test files
``npx playwright test --project=chromium --headed``

---

## Hit the below command for display the report
``npx playwright show-report``

![image](https://github.com/user-attachments/assets/e65b415f-0bba-471a-847b-b5c39ea1d526)

---

## If facing issues Install Dependencies
```npm install```
```npx playwright install```
```npm init playwright@latest```
