import * as React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-white text-center text-sm font-medium p-4">
      © {new Date().getFullYear()} QR Code Generator
    </footer>
  );
};

export default Footer;
