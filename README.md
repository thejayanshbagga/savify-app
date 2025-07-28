# Savify App

A mobile-first fintech app built using React Native and Expo, designed to help users automate savings, manage shared expenses, and track financial goals with clarity and ease.

---

## Features

- Savings Growth Calculator – Visualize long-term savings based on inputs like interest rate and contribution frequency.
- Savify Save – Automatically save and track your goals.
- Savify Split – Handle shared expenses and remind friends.
- Savify Score – Gamified financial progress tracking.
- Onboard/Log In/Sign Up – Seamless user flow with a clean UI.
- Google Sign-In Authentication – Secure and fast login using Google accounts.
- Expandable FAQ Section – Answers key user questions directly on the home screen.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/savify-app.git
cd savify-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Google OAuth Client ID
To enable Google Sign-In, follow these steps:
1. Go to Google Cloud Console.
2. Create OAuth 2.0 Client IDs for your app:
   - Web client ID (for development in Expo Go).
   - Android and/or iOS client IDs (for standalone apps).
3. Add authorized redirect URIs:
   - For Expo Go, use: https://auth.expo.io/@YOUR_EXPO_USERNAME/YOUR_PROJECT_SLUG
4. Replace the CLIENT_ID constant in screens/LoginScreen.js with your Web client ID.

### 4. Start the Expo development server

```bash
npx expo start or npx expo start -c
```

Then, scan the QR code using the Expo Go app on your iOS or Android device.


## 📁 Folder Structure

```
├── assets/              # Images and app icons
├── screens/             # React Native screens (Home, Login, Signup, Calculator)
├── App.js               # Main app component
├── app.json             # Expo configuration
├── package.json         # Project dependencies
```



## 🛠 Development Notes

- Ensure Expo CLI is installed globally:

  ```bash
  npm install -g expo-cli
  ```

- For clean bundling, clear the cache:

  ```bash
  npx expo start --clear
  ```
