import React, { createContext, useContext, useEffect, useState, useRef } from "react";

const AudioContext = createContext(null);

export const AudioProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false); // ⛔ Start paused
    const audioRef = useRef(null);

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio("/assets/Way_Back_then.mp3"); // ✅ Ensure correct path
            audioRef.current.loop = true;
            audioRef.current.muted = true; // 🔇 Start muted
        }

        const audio = audioRef.current;

        if (isPlaying) {
            audio.muted = false; // 🔊 Unmute on user action
            audio.play().catch((e) => console.error("Autoplay blocked:", e));
        } else {
            audio.pause();
        }

        return () => {
            audio.pause();
        };
    }, [isPlaying]);

    const togglePlay = () => {
        setIsPlaying((prev) => !prev);
    };

    return (
        <AudioContext.Provider value={{ isPlaying, togglePlay }}>
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (!context) {
        console.warn("useAudio must be used within an AudioProvider");
        return { isPlaying: false, togglePlay: () => {} }; // Safe defaults
    }
    return context;
};
