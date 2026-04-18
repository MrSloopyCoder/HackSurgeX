Here’s your **clean, structured, GitHub-ready README.md** (no messy escapes, proper hierarchy, readable formatting). I preserved your content exactly—just organized it properly 👇

---

# 🌾 SITA AI - Smart Imaging and Tactical Advisory

A comprehensive soil analysis and agricultural advisory platform for Indian farmers, combining Machine Learning, satellite imagery, weather data, and government standards to provide actionable farming guidance. 

---

## 🌟 Features

### 🚀 Core Capabilities

* **ML-Powered Soil Classification**: Analyze soil images with 93%+ accuracy
* **9 Integrated Data Sources**: Real-time data from multiple agricultural APIs
* **Comprehensive Advisory Reports**: Detailed farming guidance in 13 Indian languages
* **Multi-Language Support**: Hindi, Kannada, Tamil, Telugu, Marathi, and more
* **Voice Assistant**: Sarvam AI-powered voice interaction
* **Wake Word Detection**: Hands-free activation with "Porcupine" or "Computer"
* **Offline Support**: PWA with service worker for offline access

---

### 📡 Data Sources

1. **ML Model** – Soil type classification via ngrok
2. **OpenCage Geocoder** – Location identification
3. **SoilGrids (ISRIC)** – Global soil properties
4. **WeatherAPI** – Current weather + 7-day forecast
5. **Planet.com** – Satellite imagery and NDVI
6. **ISRO Bhuvan** – Indian satellite soil moisture data
7. **Soil Health Card** – Government of India standards
8. **FAO** – Global agricultural best practices
9. **Crop Health Service** – NDVI-based health monitoring

---

### 🌱 Advisory System

* **Soil Analysis**: Type, texture, fertility, pH, organic matter
* **Nutrient Status**: N, P, K deficiency detection
* **Fertilizer Recommendations**: NPK ratios, dosage (kg/ha), schedule
* **Crop Recommendations**: Top 5 suitable crops with reasoning
* **Irrigation Advice**: Timing, frequency, method, water requirements
* **Risk Assessment**: Drought, nutrient deficiency, pH imbalance
* **Climate-Smart Practices**: 6 sustainable farming methods

---

## 🚀 Quick Start

### 📋 Prerequisites

* Node.js 18+ and npm
* Git

---

### ⚙️ Installation

#### 1. Clone the repository

```bash
git clone https://github.com/MrSloopyCoder/HackSurgeX.git
cd HackSurgeX
```

#### 2. Install dependencies

```bash
# Frontend
npm install

# Backend
cd server
npm install
cd ..
```

#### 3. Configure environment variables

```bash
cp .env.example .env
```

Add your API keys:

* OPENCAGE_API_KEY
* WEATHER_API_KEY
* PLANET_API_KEY
* CROP_HEALTH_API_KEY
* SOIL_CLASSIFY_API_URL
* VITE_SARVAM_API_KEY

---

#### 4. Run the project

```bash
# Terminal 1
npm run dev

# Terminal 2
npm run server
```

#### 5. Open in browser

```
http://localhost:5173
```

---

## 📁 Project Structure

```
SITA AI/
├── src/
│   ├── components/
│   │   ├── HomeScreen.jsx
│   │   ├── UploadScreen.jsx
│   │   ├── ResultScreen.jsx
│   │   ├── AdvisoryReport.jsx
│   │   └── VoiceAssistant.jsx
│   ├── services/
│   │   ├── soilService.js
│   │   └── sarvamVoiceService.js
│   └── styles/
│
├── server/
│   ├── services/
│   ├── utils/
│   ├── index.js
│   └── soilAnalyzer.js
│
├── public/
├── .env.example
└── package.json
```

---

## 🔑 API Keys Setup

### Required APIs

* OpenCage Geocoder
* WeatherAPI
* Planet.com
* Crop Health API
* ML Model (ngrok)
* Sarvam AI
* Porcupine Wake Word (optional)

### Optional APIs

* SoilGrids
* ISRO Bhuvan
* Soil Health Card
* FAO

---

## 📊 Data Flow

```
User uploads soil image
        ↓
ML Model → Soil Type
        ↓
GPS Extraction
        ↓
9 Parallel API Calls
        ↓
Advisory Report Generated
        ↓
Displayed with Voice Support
```

---

## 🌍 Supported Languages

English, Hindi, Kannada, Tamil, Telugu, Marathi, Bengali, Gujarati, Punjabi, Malayalam, Odia, Assamese, Urdu

---

## 📱 Progressive Web App

* Installable
* Offline support
* Responsive
* Fast performance

---

## 🧪 Testing

```bash
cd server

node test-services.js
node test-indian-services.js
node test-complete-analysis.js
```

---

## 📖 Documentation

* AGRICULTURAL_ADVISORY_SYSTEM.md
* INDIAN_GOV_FAO_INTEGRATION.md
* COMPLETE_INTEGRATION_SUMMARY.md
* API_KEYS_GUIDE.md
* SETUP.md

---

## 🎯 Use Cases

### 👨‍🌾 Farmers

* Upload soil image
* Get soil classification
* Receive fertilizer recommendations
* Get crop suggestions
* Irrigation guidance

### 🧑‍🔬 Extension Officers

* Provide data-driven insights
* Generate reports
* Track soil health

### 🔬 Researchers

* Analyze agricultural patterns
* Study crop suitability

---

## 🔒 Security & Privacy

* API keys in environment variables
* No user data stored
* Server-side image processing
* HTTPS recommended
* No tracking by default

---

## 🚧 Roadmap

### Phase 1 (Current)

✅ ML classification
✅ 9 data integrations
✅ Advisory system
✅ Multi-language
✅ Voice assistant

### Phase 2 (Planned)

* Historical tracking
* PDF reports
* Market price integration
* Crop insurance
* Community features

### Phase 3 (Future)

* Mobile app
* Offline ML
* Blockchain
* IoT sensors
* Drone imagery

---

## 🤝 Contributing

```bash
git checkout -b feature/AmazingFeature
git commit -m "Add AmazingFeature"
git push origin feature/AmazingFeature
```

Then open a Pull Request

---

## 📄 License

MIT License

---

## 👥 Authors

**SITA AI Team**

---

## 🙏 Acknowledgments

* ISRO
* Ministry of Agriculture, Govt of India
* FAO
* ISRIC
* Sarvam AI
* OpenCage, WeatherAPI, Planet

---

## 📞 Support

Email: SITA [AI@agricultural-ai.com](mailto:AI@agricultural-ai.com)
Or open an issue

---

## ⭐ Star the Repo

If you found this useful, drop a star ⭐

---

**Built with ❤️ for Indian Farmers**
*Empowering agriculture through AI and data science*

---

If you want next level polish (like badges, screenshots, demo GIF, pitch-ready README for judges 👀), tell me—I’ll upgrade this to a **hackathon-winning README**.
