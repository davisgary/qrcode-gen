import * as React from 'react';
import Layout from '../components/layout';
import QRCode from 'qrcode.react';

const StartPage: React.FC = () => {
  const [url, setUrl] = React.useState('');
  const [qrValue, setQrValue] = React.useState('');
  const qrRef = React.useRef<HTMLDivElement>(null);

  const generateQRCode = () => {
    setQrValue(url);
  };

  const saveQRCode = () => {
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector('canvas');
      if (canvas) {
        const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        let link = document.createElement('a');
        link.download = 'qr-code.png';
        link.href = image;
        link.click();
      }
    }
  };

  return (
    <Layout>
      <div className="container mx-auto my-8">
        <h1 className="text-5xl font-bold text-center">Get Started</h1>
        <p className="text-lg text-center mt-4">Generate a QR Code for your URL in seconds</p>

        <div className="my-8 text-center">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL here"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          />
          <button
            onClick={generateQRCode}
            className="ml-4 px-6 py-2 text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            Generate QR Code
          </button>
        </div>

        {qrValue && (
          <div className="flex flex-col justify-center items-center" ref={qrRef}>
            <QRCode value={qrValue} size={556} />
            <button
              onClick={saveQRCode}
              className="mt-4 px-4 py-2 text-white bg-green-500 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Save QR Code
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default StartPage;
