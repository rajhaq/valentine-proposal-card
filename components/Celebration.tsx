import React, { useEffect, useState } from "react";

interface CelebrationProps {
  onClose?: () => void; // optional button action
}

const Celebration: React.FC<CelebrationProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`relative z-20 w-full max-w-lg mx-auto text-center
      transition-all duration-700 transform
      ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
    >
      <div
        className="relative bg-white p-5 rounded-2xl shadow-lg
                   border border-pink-100 w-full overflow-hidden"
      >
        {/* small corner hearts (same vibe, not oversized) */}
        <div className="absolute top-4 right-4 text-2xl animate-bounce">💖</div>
        <div className="absolute bottom-4 left-4 text-2xl animate-bounce [animation-delay:0.4s]">
          💝
        </div>

        {/* same image proportions as ValentineCard */}
        <img
          src="./media/forever.png"
          alt="Celebration"
          className="w-full object-cover rounded-xl mb-5 select-none"
        />

        {/* match heading size with ValentineCard's h1 */}
        <h2 className="text-xl font-semibold text-red-600 mb-3">
          Yay! Forever Yours! ❤️
        </h2>

        {/* match body text sizing */}
        <p className="text-base text-pink-700 font-medium mb-5 leading-relaxed">
          I'm the luckiest person in the world!
          <br />
          We will be forever Valentine. 🌹
        </p>

        {/* tags resized to match card scale */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <span className="inline-block px-5 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold border border-pink-200">
            Infinite Love
          </span>
          <span className="inline-block px-5 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold border border-red-200">
            Perfect Match
          </span>
          <span className="inline-block px-5 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-semibold border border-rose-200">
            Together Forever
          </span>
        </div>

        {/* button styled like your Yes button */}
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="w-32 h-12 bg-pink-700 text-white rounded-full
                       text-sm font-semibold
                       hover:scale-105 active:scale-95 transition"
          >
            {onClose ? "Ok ❤️" : "Yay ❤️"}
          </button>
        </div>
      </div>

      {/* subtle background hearts (kept light) */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 3}s`,
              opacity: 0.25,
              fontSize: `${14 + Math.random() * 14}px`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </div>
  );
};

export default Celebration;
