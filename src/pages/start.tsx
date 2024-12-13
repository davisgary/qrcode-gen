import * as React from 'react';
import Layout from '../components/layout';
import QRCode from 'qrcode.react';

const StartPage: React.FC = () => {
  const [url, setUrl] = React.useState('');
  const [qrValue, setQrValue] = React.useState('');
  const [qrSize, setQrSize] = React.useState(500);
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

  React.useEffect(() => {
    const updateQrSize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setQrSize(600);
      } else if (width >= 768) {
        setQrSize(550);
      } else {
        setQrSize(300);
      }
    };

    updateQrSize();
    window.addEventListener('resize', updateQrSize);

    return () => window.removeEventListener('resize', updateQrSize);
  }, []);

  return (
    <Layout>
      <div className="sm:max-w-xl md:max-w-3xl mx-auto my-12 sm:px-10 md:px-16 px-3 pt-6 pb-3 rounded-3xl shadow-[0_0_6px_rgba(255,255,255,0.4)]">
        <h1 className="text-5xl font-bold text-center text-white tracking-tighter">Get Started</h1>
        <p className="text-lg text-center mt-3 text-white">Generate a QR Code for your URL in seconds</p>
        <div className="my-8 text-center">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter Your URL Here"
            className="w-full px-4 py-2 leading-relaxed border border-gray-300 rounded-3xl focus:outline-none"
          />
          <button
            onClick={generateQRCode}
            className="w-full p-2 mt-5 text-white font-medium leading-relaxed border border-transparent bg-transparent rounded-3xl shadow-[0_0_4px_rgba(255,255,255,0.4)]"
          >
            Generate QR Code
          </button>
        </div>
        {qrValue && (
          <div className="flex flex-col justify-center items-center py-5 bg-white rounded-3xl" ref={qrRef}>
            <QRCode value={qrValue} size={qrSize} />
            <button
              onClick={saveQRCode}
              className="mt-4 px-4 py-2 text-green-500 font-medium leading-relaxed border border-green-500 rounded-3xl shadow-[0_0_4px_rgba(34,197,94,0.4)]"
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