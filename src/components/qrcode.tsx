import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [qrValue, setQrValue] = useState('');

  const generateQRCode = () => {
    setQrValue(inputText);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {qrValue && <QRCode value={qrValue} />}
    </div>
  );
};

export default QRCodeGenerator;
