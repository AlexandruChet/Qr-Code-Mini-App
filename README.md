````markdown
# 🔳 QR Code Generator (Node.js)

A simple **Node.js CLI app** that generates QR codes directly in your **terminal** and saves them as an image file (`qr.png`).  
Built using the [`qrcode`](https://www.npmjs.com/package/qrcode) library and Node’s built-in [`readline`](https://nodejs.org/api/readline.html) module.  

---

## ✨ Features
- 📲 Generate QR codes from any **text or URL**  
- 🖥️ View QR codes directly in your **terminal**  
- 💾 Save QR codes as **PNG files**  
- 🧹 Clean and beginner-friendly code  
- ⚡ Uses **async/await** for smooth flow  

---

## 📦 Installation

1. Install dependencies:

   ```bash
   npm install qrcode
   ```

2. Run the app:

   ```bash
   node index.js
   ```

---

## 💻 Code Overview

```javascript
import QRCode from "qrcode";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
```

👉 This creates a **CLI interface** where the user can input commands.

---

### 🔹 Ask if user wants to generate QR

```javascript
rl.question("Generate a QR code? (y/n): ", (answer) => {
    if (answer === "y" || answer === "Y") {
        // continue with QR generation
    } else {
        console.log("OK");
        rl.close();
    }
});
```

---

### 🔹 Generate QR Code

```javascript
const qr = await QRCode.toString(text, {
    type: "terminal",
    small: true,
});
console.log(qr);
```

This prints the QR code **directly in the terminal**.

---

### 🔹 Save QR Code as Image

```javascript
await QRCode.toFile("qr.png", text);
console.log("QR code saved as qr.png");
```

Your QR code is saved as a PNG file in the project folder.

---

## 🖼 Example Terminal Output

```
$ node index.js
Generate a QR code? (y/n): y
Enter the text/URL for the QR code: https://example.com

███████████████████████████████████
████ ▄▄▄▄▄ █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
████ █   █ █ ▄█▀▄ █ ▄▄▀▄▀▄█ ▄▄█ █
████ █▄▄▄█ █ ▀▄█ ▀▄█ ▀▀▄▀▄▀█▄▀▄ █
████▄▄▄▄▄▄▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█
...

QR code saved as qr.png
```

✅ You can scan the QR code **directly from the terminal** or from the `qr.png` file.

---

## 📂 Project Structure

```
📦 qrcode-generator
 ┣ 📜 index.js   # main program
 ┣ 📜 package.json
 ┗ 📜 qr.png     # generated QR code
```

---

## 🔧 Possible Improvements

* Allow choosing **output file name**.
* Support different **image formats** (SVG, JPG).
* Add **colors** to terminal QR codes.
* Add a **history log** of generated QR codes.

---

## ⚡ Example Use Cases

* 🔗 Share website links instantly.
* 📱 Generate QR codes for WiFi passwords.
* 🏷️ Add QR codes to documents or presentations.
* 🧾 Encode payment links or crypto wallet addresses.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## ❤️ Contribute

Feel free to fork this repo, open issues, and submit pull requests.
Every contribution is welcome!

---

## 🚀 Final Words

With this project, you can generate QR codes instantly in **Node.js**.
It’s simple, fast, and extendable — a great **mini CLI project** for beginners.

```
