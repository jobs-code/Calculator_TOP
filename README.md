# 🧮 Calculator

A functional, browser-based calculator built with JavaScript, HTML, and CSS — designed to perform basic arithmetic operations and handle common edge cases without using insecure shortcuts like `eval()` or `Function()`. Built as part of The Odin Project to practice clean logic, DOM manipulation, and UI responsiveness.

---

## 📚 Table of Contents

- [About](#about)
- [Features](#features)
- [What I Learned](#what-i-learned)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Screenshots](#screenshots)
- [Extra Credit Features](#extra-credit-features)
- [License](#license)
- [Contact](#contact)

---

## 🧠 About

This project simulates a real-world calculator using vanilla JavaScript. The logic is entirely custom-built without relying on `eval()` for safety and learning. It supports chained operations, decimal inputs, keyboard functionality, and proper display behavior. It also gracefully handles divide-by-zero errors and invalid operations.

![Default Layout](screenshots/s1.png)
---

## ✨ Features

- Basic arithmetic: Add, Subtract, Multiply, Divide
- Fully responsive number and operator buttons
- Result shown after pressing `=`
- Clear (`C`) button resets all values
- Supports continuous operations (e.g. `12 + 7 - 4`)
- Handles invalid input like repeated operators
- Proper display update after result
- Rounds long decimal outputs
- Error handling for division by zero
- Prevents appending digits to a result — starts a fresh calculation
- Button disable states to prevent multiple decimal inputs

---

## 🧠 What I Learned

- Building a calculator from scratch without `eval()`.
- Managing multiple states and inputs in JavaScript
- DOM manipulation using `addEventListener`
- Conditional UI logic and edge case handling
- Clean UI/UX layout using CSS Flexbox and responsive design
- Preventing invalid input sequences and sanitizing state

---

## 🚀 Demo

🔗 [Live Demo](https://jobs-code.github.io/Calculator_TOP/)  

---

## ⚙️ Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)

---

## 🛠 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/calculator.git
