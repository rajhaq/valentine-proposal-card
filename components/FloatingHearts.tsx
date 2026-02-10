
import React from 'react';

interface FloatingHeartsProps {
  count: number;
}

const FloatingHearts: React.FC<FloatingHeartsProps> = ({ count }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.floor(Math.random() * 20) + 10;
        const left = Math.floor(Math.random() * 100);
        const duration = Math.floor(Math.random() * 10) + 10;
        const delay = Math.floor(Math.random() * 10);
        
        return (
          <div
            key={i}
            className="absolute bottom-[-10%] text-red-300 opacity-20 animate-float"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              animation: `float ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
            }}
          >
            ❤️
          </div>
        );
      })}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-120vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
            animation: float 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingHearts;
