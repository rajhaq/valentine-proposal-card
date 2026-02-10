
import React from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const SocialMediaLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <a 
        href="https://www.instagram.com/lifewithzubaer/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
      >
        <FaInstagram size={24} />
      </a>
      <a 
        href="https://www.linkedin.com/in/zubaerhaque/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
      >
        <FaLinkedinIn size={24} />
      </a>
      <a 
        href="https://github.com/rajhaq/valentine-proposal-card" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
      >
        <FaGithub size={24} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
