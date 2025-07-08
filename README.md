# 💱 Advanced Currency Converter



> **Real-time global currency conversion with modern UI, historical charts, and exchange rate analysis.**

---

## 🌟 Overview

**Advanced Currency Converter** is a full-stack web application that allows users to:

- 🔁 Convert between major global currencies in real-time
- 📊 View 30-day historical trends via interactive charts
- 📈 See live exchange rate changes and comparison tables
- 💡 Explore clean UI with animated effects and mobile responsiveness

Built with **Flask**, **Tailwind CSS**, **JavaScript**, and **Chart.js**, the project simulates real API behavior and is ready for integration with actual exchange rate APIs like `exchangerate-api.com`.

---

## 🎥 Demo & Screenshots

| Demo Video                               | GIF Preview |
| ---------------------------------------- | ----------- |
| [▶️ Watch Here](assets/appdemovideo.mp4) |             |

---

## 🛠️ Technologies Used

| Category         | Tech Stack                                                                 |
| ---------------- | -------------------------------------------------------------------------- |
| Backend          | Flask (Python)                                                             |
| Frontend         | HTML5, Tailwind CSS, JavaScript, Chart.js                                  |
| Charting         | Chart.js                                                                   |
| Styling          | TailwindCSS, Custom Glassmorphism, Animated Gradient, Pulse + Flip effects |
| Deployment Ready | Easily hostable on Replit, PythonAnywhere, or Render                       |

---

## 🔧 Features

### 🔁 Currency Converter

- Convert any amount between supported currencies (USD, EUR, GBP, INR, JPY, AUD, CAD, CNY)
- Live rate display with result preview card
- Dynamic exchange rate calculation using mock backend data (can be upgraded to real APIs)

### 📊 Historical Chart Viewer

- See exchange trends over last 30 days
- Interactive line chart using **Chart.js**
- Pick date to simulate historical rate retrieval

### 📋 Live Rates Table

- Lists major currency rates compared to USD
- Simulated 24-hour percentage change (with emoji flags)

### 🧊 Stunning UI/UX

- Glassmorphism card design
- Animated background gradients
- Flip + pulse interactions
- Responsive layout for desktop + mobile

---

## 📂 Project Structure

```
AdvancedCurrencyConverter
├── assets
│   ├── appdemo.gif
│   ├── appdemovideo.mp4
│   └── apphomeinterface.png
├── static
│   └── script.js         # Handles all frontend logic and API calls
├── templates
│   └── index.html        # Main user interface with Tailwind CSS
└── app.py                # Flask backend with API endpoints for conversion, rates, history
```

---

## 🔌 Flask Endpoints

| Route         | Description                          |
| ------------- | ------------------------------------ |
| `/`           | Homepage with UI                     |
| `/convert`    | Convert from one currency to another |
| `/latest`     | Get latest simulated exchange rates  |
| `/historical` | Retrieve mock historical rate data   |

---

## 🔄 Future Enhancements

- 🌐 Integrate real-time exchange APIs like `exchangerate-api.com`
- 🌍 Add more currency support with flags and info cards
- 💹 Save user search history and graph preferences
- 📱 Convert to Progressive Web App (PWA) for offline use

---

## 🚀 Getting Started

1. **Clone the Repo**

```bash
git clone https://github.com/YOUR_USERNAME/AdvancedCurrencyConverter.git
cd AdvancedCurrencyConverter
```

2. **Install Flask**

```bash
pip install flask
```

3. **Run the App**

```bash
python app.py
```

4. **Visit** [http://localhost:5000](http://localhost:5000) in your browser

---

## 👨‍💻 Author

**Aayush Kadam** — Final Year AI & ML Student | Explorer of Tech-Human Future

> "I build emotionally expressive AI, smart assistants, and interactive tools to merge code with creativity."

[LinkedIn](https://www.linkedin.com/in/aayush-kadam-a3454a2b8) · [GitHub](https://github.com/Aayushinit)

---

## ⭐️ Show Your Support

If you found this helpful, please ⭐ the repo to help others discover it!

---

## 📜 License

This project is under the [MIT License](LICENSE)

> Assets (GIFs, videos, screenshots) belong to the creator and are intended for showcasing this specific app.

