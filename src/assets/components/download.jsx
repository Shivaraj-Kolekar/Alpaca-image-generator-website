import React from 'react';
import html2canvas from 'html2canvas';

const DownloadImage = () => {
  const captureAndDownload = async () => {
    try {
      const element = document.getElementById("image-container");
      if (!element) {
        console.error("Image container not found");
        return;
      }

      const canvas = await html2canvas(element, { 
        useCORS: true,
        scale: 2, // Increase this for higher resolution
        logging: true, // For debugging
        backgroundColor: null // For transparent background
      });

      const image = canvas.toDataURL('image/png');
      
      const link = document.createElement('a');
      link.href = image;
      link.download = 'alpaca.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error capturing or downloading image:", error);
    }
  };

  return (
    <div>
      <button className="bg-slate-800 mt-4  w-40 p-4 text-white font-semibold shadow-black drop-shadow-md rounded-md" onClick={captureAndDownload}>Download Image</button>
    </div>
  );
};

export default DownloadImage;