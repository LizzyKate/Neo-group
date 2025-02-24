import React from "react";

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer
      className={`${
        darkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-600"
      } py-8 relative z-10`}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="mb-4">
          © {new Date().getFullYear()} Leon. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:text-purple-500 transition">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-purple-500 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-purple-500 transition">
            Responsible Gaming
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
