
import React, { useState } from 'react';
import ValentineCard from './components/ValentineCard';
import Celebration from './components/Celebration';
import FloatingHearts from './components/FloatingHearts';
import SocialMediaLinks from './components/SocialMediaLinks';

const App: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden transition-all duration-1000">
      <FloatingHearts count={20} />
      
      {!isAccepted ? (
        <ValentineCard onAccept={handleAccept} />
      ) : (
        <Celebration />
      )}
      
      {/* Decorative footer */}
      <div className="absolute bottom-6 text-pink-400 text-m opacity-50 animate-pulse">
        Made with ♥ just for <b>Sahida</b>
      </div>
      <div className="absolute bottom-6 right-6">
        <SocialMediaLinks />
      </div>
    </div>
  );
};

export default App;
