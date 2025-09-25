# 🚀 JavaScript Bootcamp Practice  

This repository contains my **daily practice files** while learning JavaScript from the very basics to advanced topics.  
I am documenting everything here as part of my self-learning journey so that others can also follow along and learn.

---

## 📜 About JavaScript  

JavaScript was created in **1995 by Brendan Eich** at Netscape. Initially called **Mocha**, then **LiveScript**, it became **JavaScript** to align with Java’s popularity at that time — but JavaScript and Java are completely different languages.  

Originally built to make web pages interactive, JavaScript has now become one of the **most widely used programming languages**.  
Today, it powers not only web browsers but also servers, desktop apps, mobile apps, IoT devices and more (thanks to Node.js, React, Angular, etc.).

---

## 🛠️ What This Repository Covers (So Far)  

Below are the topics I’ve covered up to now:

### 1️⃣ **Hello World**  
- My first JavaScript program and basic script execution.

### 2️⃣ **Datatypes**  
- Understanding primitive types like `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.  
- Non-primitive types like `object`, arrays, and functions.

### 3️⃣ **Variables**  
- `var`, `let`, `const` declarations.  
- Scope, hoisting, and best practices for using variables.

### 4️⃣ **JavaScript Execution**  
- How the browser executes JavaScript.  
- The call stack and execution context.  
- The role of the JavaScript engine.

### 5️⃣ **Alert, Confirm & Prompt**  
- Using built-in browser dialogs for user interaction.  
- `alert()`, `confirm()`, `prompt()` and their real-life use cases.

### 6️⃣ **Strings: Methods & Properties**  
- String properties like `length`.  
- Common methods like `charAt()`, `split()`, `slice()`, `substring()`, `replace()`, `toUpperCase()`, `toLowerCase()`.  
- Template literals for easier string formatting.

### 7️⃣ **Math in JavaScript**  
- Using the `Math` object.  
- Common methods like `Math.floor()`, `Math.ceil()`, `Math.random()`.  
- Real-life scenarios (calculations, random number generation).

### 8️⃣ **Truthy and Falsy Values**  
- How JavaScript evaluates conditions.  
- Lists of truthy and falsy values.  
- Common pitfalls when writing conditions.

### 9️⃣ **Comparison Operators** (Current Topic)  
- Understanding equality and relational comparisons.  
- `==` vs `===` (loose vs strict equality).  
- `!=` vs `!==`.  
- Relational operators: `<`, `>`, `<=`, `>=`.  
- Real-life scenarios:
  - Validating user input.
  - Checking login credentials.
  - Conditional rendering in web pages.

---

### 10️⃣ Logical Operators — Quick Notes

    Main Operators

    && → Logical AND (dono true → true)

    || → Logical OR (koi ek true → true)

    ! → Logical NOT (value ka ulta kar deta hai)

    Truth Table

    AND (&&): true && true → true, else false

    OR (||): false || true → true, else false

    NOT (!): !true → false, !false → true

    Real-life Uses

    ✅ Login check (username and password)

    ✅ Access control (Admin or Premium)

    ✅ Input validation / form checks

    ⚡ Memory Tip

    AND = All conditions must pass

    OR = Only one condition needed

    NOT = Invert the result

---

## 🔹 Examples

### Example 1: Logical AND
```javascript
let age = 25;
let hasLicense = true;

if (age > 18 && hasLicense) {
  console.log("You can drive.");
} else {
  console.log("You cannot drive.");
}

---

# 📚 Why This Repo Exists  

I am learning JavaScript step by step. By uploading my daily practice:
- I can track my progress.
- Others can see real-world examples of learning from scratch.
- It builds a public portfolio showing my consistency.

---

## 🚀 Next Steps  

Future topics I plan to add:
- Functions & Scope
- Objects & Prototypes
- DOM Manipulation
- Events
- ES6+ Features
- Async JavaScript (Promises, async/await)
- And more…

---