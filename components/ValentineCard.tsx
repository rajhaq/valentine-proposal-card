import React, { useEffect, useRef, useState } from "react";

interface ValentineCardProps {
  onAccept: () => void;
}

const ValentineCard: React.FC<ValentineCardProps> = ({ onAccept }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const noBtnRef = useRef<HTMLButtonElement>(null);
  const yesBtnContainerRef = useRef<HTMLDivElement>(null); // New ref for Yes button's container
  const [leftActivated, setLeftActivated] = useState(false);

  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (cardRef.current && yesBtnContainerRef.current && noBtnRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const noBtnRect = noBtnRef.current.getBoundingClientRect();

      // Get the actual rendered position of the "Yes" button
      const yesButtonElement =
        yesBtnContainerRef.current.querySelector("button");
      if (!yesButtonElement) return; // Should not happen
      const yesButtonRect = yesButtonElement.getBoundingClientRect();

      const buttonGap = 24; // gap-6

      // Initial X for the No button's left edge
      // Position its left edge after the right edge of the Yes button, plus the gap
      let initialX = yesButtonRect.right - cardRect.left + buttonGap;

      // Calculate initial Y position for No button
      // Vertically center it with the Yes button
      let initialY =
        yesButtonRect.top -
        cardRect.top +
        yesButtonRect.height / 2 -
        noBtnRect.height / 2;

      // Clamp initial position within card boundaries
      const padding = 18; // Use the same padding as in moveNoButton
      const minX = padding;
      const minY = padding;
      const maxX = cardRect.width - noBtnRect.width - padding;
      const maxY = cardRect.height - noBtnRect.height - padding;

      initialX = Math.max(minX, Math.min(maxX, initialX));
      initialY = Math.max(minY, Math.min(maxY, initialY));

      setPos({ x: initialX, y: initialY });
    }
  }, []); // Empty dependency array means this runs once on mount

  const moveNoButton = (e: React.MouseEvent | React.TouchEvent) => {
    if (!leftActivated) setLeftActivated(true);

    const card = cardRef.current;
    const btn = noBtnRef.current;
    if (!card || !btn) return;

    const cardRect = card.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const padding = 18;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    const cursorX = clientX - cardRect.left;
    const cursorY = clientY - cardRect.top;

    let x = 0;
    let y = 0;
    let tries = 0;

    do {
      x =
        Math.random() * (cardRect.width - btnRect.width - padding * 2) +
        padding;
      y =
        Math.random() * (cardRect.height - btnRect.height - padding * 2) +
        padding;
      tries++;
    } while (
      Math.hypot(
        x + btnRect.width / 2 - cursorX,
        y + btnRect.height / 2 - cursorY,
      ) < 110 &&
      tries < 15
    );

    setPos({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className="relative bg-white p-5 rounded-2xl shadow-lg
                 border border-pink-100 w-full max-w-lg
                 mx-auto text-center"
    >
      <img
        src="../media/zubaer-sahida.png"
        alt="Valentine"
        className="w-full object-cover rounded-xl mb-5 select-none"
      />

      <h1 className="text-2xl font-semibold text-red-600 mb-6">
        Will you be my Valentine?
      </h1>
      <div
        ref={yesBtnContainerRef}
        className="flex justify-center gap-6 items-center min-h-[48px]"
      >
        <button
          onClick={onAccept}
          className="w-32 h-12 bg-pink-700 text-white rounded-full
               text-sm font-semibold
               hover:scale-105 active:scale-95 transition
               -translate-x-16"
        >
          Yes ❤️
        </button>
      </div>

      {/* NO button, now direct child of cardRef, absolutely positioned relative to cardRef */}
      <button
        ref={noBtnRef}
        onMouseEnter={moveNoButton}
        onTouchStart={(e) => {
          e.preventDefault();
          moveNoButton(e);
        }}
        style={{
          position: "absolute",
          // ✅ left only activates on first hover/touch
          left: leftActivated ? (pos ? pos.x : "50%") : undefined,
          top: pos ? pos.y : "50%",
          transform: pos ? "none" : "translate(-50%, -50%)",
          transition: "all 0.3s ease",
        }}
        className="w-32 h-12 bg-gray-100 text-gray-500 rounded-full
             text-sm border border-gray-200 select-none"
      >
        No
      </button>
    </div>
  );
};

export default ValentineCard;
