import React from 'react';
import { FileText } from 'lucide-react';


const PDFOpener = () => {
  const openPDF = () => {
    // Replace 'path_to_your_pdf.pdf' with the actual path to your PDF file
    window.open('./drone.pdf', '_blank');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Drone Guidelines PDF Viewer</h2>
      <p className="mb-4 text-gray-700">
        Explore the latest guidelines for drone operations. Our comprehensive PDF 
        provides essential information for both beginners and experienced pilots.
      </p>
      
      <button
        onClick={openPDF}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
      >
     
        <FileText className="mr-2" />
        Open Drone Guidelines PDF
      </button>
    
      <p className="mt-4 text-sm text-gray-500">
        Click the button above to open the PDF in a new tab. Make sure you have a PDF viewer installed on your device.
      </p>
    </div>
  );
};

export default PDFOpener;