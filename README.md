# 🦇 Bat-Password Generator

> “It's not who I am underneath, but the password I generate that defines me.”
> — Probably Batman, if he used this app.

Welcome to the **Bat-Password Generator**, the mobile app that turns your phone into a digital Batcave of security. With one tap, you generate strong, dark, and secret-ready passwords — or at least something strong enough to protect your streaming account from your cousin.

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-0.79.6-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Expo-53.0.22-000020?logo=expo&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vibe-Gotham%20City-1a1a1a" />
</p>

---

## 🌃 What is this?

This is a password generator with the face of the Dark Knight. It creates random **10-character** passwords using uppercase letters, lowercase letters, and special symbols. All inside a dark, stylish interface 100% inspired by the Batman universe.

Perfect for:
- People who forget their own passwords (so, everyone).
- People who want to look like a hacker without actually being one.
- Batman fans who also care about cybersecurity.

---

## 🛠️ Tech Stack

- **React Native** — because even Batman needs cross-platform apps.
- **Expo** — so you don't waste time setting up native tooling.
- **TypeScript** — keeping the code as secure as the Wayne Vault.
- **Expo Clipboard** — copy your password with one tap, no need to memorize `!@#$%&*`.

---

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/batman-password-generator.git
cd batman-password-generator
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the project:

```bash
npx expo start
```

4. Scan the QR Code with **Expo Go** on your phone, or run it on an emulator.

---

## 🎮 How to Use

1. Open the app.
2. Hit the bat button. 🦇
3. A strong password magically appears.
4. Copy it to your clipboard.
5. Save it in a password manager. **Not on a post-it note.**

---

## 📁 Project Structure

```
.
├── App.tsx
├── src/
│   ├── components/
│   │   ├── BatButton/        # Triggers password generation
│   │   ├── BatLogo/          # The bat symbol
│   │   └── BatTextInput/     # Displays the generated password
│   ├── screens/
│   │   └── Home/             # Main screen
│   └── services/
│       └── passwordService.ts # Password generation logic
└── assets/                   # Images and visual resources
```

---

## 🦇 Why "Bat-Password"?

Because weak passwords are for the Joker. Ours are for people who take security seriously — but don't take themselves too seriously.

---

## 📦 Roadmap (future ideas)

- [ ] Choose password length
- [ ] Set complexity level
- [ ] History of generated passwords
- [ ] Light mode for the traitors who prefer light themes

---

## 🤝 Contributing

Feel free to open issues, suggest improvements, or send pull requests. All help is welcome in the fight against weak passwords.

---

<p align="center">
  Built with 🦇 and a little organized chaos.
</p>
