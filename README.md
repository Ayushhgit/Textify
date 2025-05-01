

# **Textify** 🎤➡️📜➡️🌐

[![React](https://img.shields.io/badge/React-18.2.0-whitesmoke?style=flat&logo=react&logoColor=white&logoSize=auto&labelColor=blue)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.x-blue?style=flat&logo=tailwindcss&logoColor=blue&logoSize=auto&labelColor=black)](https://tailwindcss.com/)
[![Xenova](https://img.shields.io/badge/Xenova-whisper--tiny.en-purple?style=flat&logoSize=auto&labelColor=white)](https://www.npmjs.com/package/@xenova/transformers)
[![Xenova](https://img.shields.io/badge/Xenova-nllb--200--distilled--600M-wheat?style=flat&logoSize=auto&labelColor=white)](https://www.npmjs.com/package/@xenova/transformers)

Deployed: [Textify](https://ayushhgit.github.io/Textify)

## Audio Transcription and Translation App

### Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Usage](#usage)
   - [Recording Audio](#recording-audio)
   - [Uploading Audio Files](#uploading-audio-files)
   - [Transcription](#transcription)
   - [Translation](#translation)
4. [Technologies Used](#technologies-used)
5. [Machine Learning Model Details](#machine-learning-model-details)
   - [Transcription Model](#transcription-model)
   - [Translation Model](#translation-model)
6. [Contributing](#contributing)
7. [License](#license)

---

## **Introduction**

**Textify** is a powerful web application built with **React.js** that leverages machine learning models for audio transcription and translation. It provides an intuitive and seamless user experience for recording, transcribing, and translating audio content. Ideal for content creators, journalists, and anyone in need of transcription and translation services.

---

## **Features**

- **Direct Audio Recording**: Record audio directly within the app with a built-in microphone.
- **Audio File Upload**: Upload audio files for transcription and translation.
- **Transcription**: Transcribe your audio into text using advanced machine learning models.
- **Translation**: Translate the transcribed text to multiple languages.
- **User-friendly Interface**: Easy-to-navigate interface for seamless experience.
- **Multi-language Support**: Supports transcription and translation in a variety of languages.

---

## **Usage**

### **Recording Audio**

1. Open the app and navigate to the homepage.
2. Click on the **Record** button to start recording your audio.
3. Click the **Stop** button to end the recording.
4. The recorded audio will be automatically ready for transcription.

### **Uploading Audio Files**

1. Click on the **Upload** button.
2. Select an audio file (MP3, WAV) from your device.
3. Once uploaded, the audio will be processed for transcription.

### **Transcription**

1. After recording or uploading your audio, click the **Transcribe** button.
2. The app will process your audio and display the transcribed text.

### **Translation**

1. Navigate to the **Translation** tab.
2. Select the language you wish to translate the transcribed text to from the dropdown menu.
3. Click the **Translate** button, and the text will be translated to the selected language.

---

## **Technologies Used**

- **React.js**: The front-end framework used for building the application.
- **TailwindCSS**: Utility-first CSS framework for styling the app.
- **Web Workers**: Used for running transcription and translation tasks in the background to avoid blocking the main UI thread.
- **Machine Learning Models**:
  - **Transcription Model**: Uses the [`Xenova/whisper-tiny.en`](https://www.npmjs.com/package/@xenova/transformers) model from the `@xenova/transformers` library for speech-to-text.
  - **Translation Model**: Uses the [`Xenova/nllb-200-distilled-600M`](https://www.npmjs.com/package/@xenova/transformers) model from `@xenova/transformers` to translate text between languages.
- **@xenova/transformers**: A library providing powerful transformer models for transcription and translation tasks.

---

## **Machine Learning Model Details**

### **Transcription Model**

- **Task**: Automatic Speech Recognition (ASR)
- **Model**: `Xenova/whisper-tiny.en`
- **Features**:
  - Optimized for English-language transcription.
  - Supports chunk-based processing for long audio files.
  - Generates timestamps alongside transcribed text for easy navigation.

### **Translation Model**

- **Task**: Translation
- **Model**: `Xenova/nllb-200-distilled-600M`
- **Features**:
  - Multilingual translation capability.
  - Built on the NLLB (No Language Left Behind) architecture.
  - The distilled model provides enhanced performance with reduced model size.

Both models are integrated into the app using **Web Workers** to ensure non-blocking, efficient processing, enhancing user experience during transcription and translation.

---

## **Contributing**

We welcome contributions to Free-Scribe! To contribute:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push your branch: `git push origin feature/your-feature-name`
5. Open a pull request with a detailed description of your changes.

Please ensure all code is well-documented and thoroughly tested before submitting.

---

## **License**

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE.md) file for further details.

---

Feel free to clone, fork, or contribute to the project! 🎉

---