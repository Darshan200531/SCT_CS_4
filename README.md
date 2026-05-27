# Keyboard Event Logger Website

A modern browser-based keyboard event logger built using HTML, CSS, and JavaScript.
This project records keyboard events only inside the webpage input area and stores logs securely in the browser's local storage.

---

## Features

* Modern glassmorphism UI
* Real-time keyboard event logging
* Local browser storage support
* Download logs as TXT file
* Clear stored logs
* Responsive design
* Prevents default browser shortcut actions
* Works completely inside the browser

---

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Browser LocalStorage API

---

## How It Works

1. User types inside the textarea.
2. JavaScript captures keyboard events using `keydown`.
3. Key data is stored in browser local storage.
4. Logs are displayed in real time on the webpage.
5. Logs can be downloaded as a `.txt` file.

---

## Project Structure

```bash
project-folder/
│
├── keylogger.html
├── keylogger.css
├── keylogger.js
└── README.md

```

---

## Installation & Usage

### Step 1

Download or clone the project.

### Step 2

Open the project folder.

### Step 3

Run the `keylogger.html` file in any browser.

Recommended browsers:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox

---

## Browser Storage

The application uses browser local storage to save logs locally on your system.

Stored data remains available until:

* Logs are cleared manually
* Browser storage is cleared

---

## Safety Note

This project only captures keyboard input typed inside the webpage textarea.

It does NOT:

* Monitor the entire system
* Access other applications
* Capture passwords outside the webpage
* Run in the background

This project is intended for educational purposes and JavaScript event handling practice only.

---

## Future Improvements

* Dark/Light mode toggle
* Export logs as PDF
* Search and filter logs
* Keyboard analytics dashboard
* User authentication

---

## Author

Developed by Darshan BR
