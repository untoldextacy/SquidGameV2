# Squid Game Mini-Games

This is a **React-based mini-game project** inspired by *Squid Game*. It features multiple games, background music, and a dynamic UI using **Tailwind CSS** and **Framer Motion**.

## 🚀 Features
- 🎮 **Mini-Games**: Includes Tic-Tac-Toe and Rock-Paper-Scissors Minus One.
- 🎵 **Background Music**: Togglable audio with autoplay handling.
- 🎨 **Styled with Tailwind CSS**: Modern and responsive UI.
- 🔄 **Animations with Framer Motion**: Smooth transitions and effects.
- 🛠 **Built with Vite**: Fast development environment.

## 🏗 Project Setup

### 1️⃣ Install Dependencies
```sh
npm install
```

### 2️⃣ Run the Development Server
```sh
npm run dev
```

### 3️⃣ Build for Production
```sh
npm run build
```

## 📂 File Structure
```
my-project/
│-- public/
│   ├── assets/
│   │   ├── Way_Back_then.mp3  # Background music
│   │   ├── Seong_Gi-hun.jpg   # Player image
│   │   ├── frontman.jpg       # Antagonist image
│-- src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation bar with music toggle
│   │   ├── TicTacToe.jsx      # Tic-Tac-Toe game logic
│   │   ├── RockPaperScissors.jsx # RPS game logic
│   ├── context/
│   │   ├── AudioProvider.jsx  # Background music logic
│   ├── App.jsx                # Main application routing
│   ├── main.jsx               # ReactDOM entry point
│-- index.html
│-- package.json
│-- README.md
```

## 🔊 Audio Handling
- **AudioProvider.jsx** handles background music.
- Uses React Context API for global state.
- `useAudio()` provides a toggle function.
- Ensure the music file is correctly placed in `public/assets/`.

## 🛠 Troubleshooting
- **No Audio?**
  - Check if `AudioProvider` wraps `<App />` in `main.jsx`.
  - Ensure the audio path is correct (`public/assets/Way_Back_then.mp3`).
  - Some browsers block autoplay—try interacting with the page first.

- **Blank Screen after Build?**
  - Run `npm run build` again.
  - Make sure `BrowserRouter` is used instead of `HashRouter`.
  - Check if assets load properly in the `dist/` folder.

## 💡 Future Enhancements
- Add more Squid Game-inspired challenges.
- Improve animations with Framer Motion.
- Implement a leaderboard using Firebase.

---
Built with ❤️ using React, Tailwind, and Vite! 🚀

