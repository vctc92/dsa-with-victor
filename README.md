# 🧠 DSA-WITH-VICTOR

Welcome to your personal **DSA (Data Structures & Algorithms) problem-solving playground** using **Node.js**! This repository is structured to help you learn, solve, and grow your coding skills using JavaScript.

---

## 📁 Folder Structure

```
📦dsa-playground/
 ┣ 📂problems/
 ┃ ┣ 📂two-sum/
 ┃ ┃ ┣ 📄index.js         // Your solution
 ┃ ┃ ┣ 📄input.txt        // Test input for the problem
 ┃ ┃ ┣ 📄output.txt       // Expected or generated output
 ┃ ┃ ┗ 📄explanation.md   // Problem explanation, logic, and complexity
 ┣ 📄run.js               // Script to execute a problem with input/output
 ┣ 📄README.md            // You're reading it!
```

---

## 🚀 How to Use

### 1. 📦 Install dependencies (if any)

This setup uses Node.js core modules. No additional npm packages are required.

Make sure Node.js is installed:

```bash
node -v
```

---

### 2. ▶️ Run a problem

```bash
npm run problem two-sum
```

This script will:

- Read `input.txt`
- Run your solution file (`index.js`)
- Display output on the console
- Save the output into `output.txt`

> ℹ️ Make sure the folder `problems/two-sum/` contains the following:
>
> - `input.txt` → test input (required)
> - `index.js` → your code (required)
> - `output.txt` → auto-generated or can be used for comparison
> - `explanation.md` → logic, brute-force to optimized, complexity (optional but recommended)

---

## 📝 Problem File Format

### 📄 `input.txt`

Write test input line by line as expected by your program.  
_Example for Two Sum:_

```
2 7 11 15
9
```

### 📄 `index.js`

Use this pattern to read input:

```js
import fs from "fs";
const input = fs.readFileSync(0, "utf-8").trim().split("\n");
```

Write logic and print output using `console.log`.

### 📄 `output.txt`

This file will automatically be created or updated after running the problem. It stores your program’s output.

### 📄 `explanation.md`

Structure:

- Problem statement
- Brute-force logic and complexity
- Optimized approach and complexity
- Learnings
- Author

> ✨ It’s your personal DSA journal. Keep it clean and insightful.

---

## 🎯 Why This Setup?

✅ Hands-on DSA with real input/output handling  
✅ Encourages clear explanations of logic  
✅ Helps track your progress problem-by-problem  
✅ Scripted execution makes testing easy  
✅ Markdown explanations boost understanding and resume-worthy content

---

## 💡 Learn and Grow

> 🔁 Start with brute-force.  
> 🚀 Think and optimize step by step.  
> 🧠 Understand time vs space tradeoffs.  
> 📖 Document your learnings.  
> 🧪 Test thoroughly with multiple inputs.

---

## ✍️ Author

**Victor Rajkumar**  
_Learning one problem at a time. Building muscle memory for interviews and real-world problem solving._
