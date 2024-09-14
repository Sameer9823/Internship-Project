import React from 'react';
import kisanDroneImage from '../../assets/fund1.png'; // Make sure to replace with the correct image path
import kisanDroneImage1 from '../../assets/fund2.png'; // Make sure to replace with the correct image path
import PDFOpener from '../pdf/Pdf';

const GovernmentSchemePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      {/* Header Section */}
      <header className="text-center mb-8">
       
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Government Scheme: Funds for Kisan Drones
        </h1>
        <p className="text-sm text-gray-600">Posted On: 21 MAR 2023 6:14PM by PIB Delhi</p>
      </header>

      {/* Image Section */}
      <section className="text-center mb-8 flex justify-center lg:px-[8rem] px-0">
        <img 
          src={kisanDroneImage} 
          alt="Funds for Kisan Drones"
          className="mx-[8rem] rounded-lg shadow-lg"
        />
      </section>

      {/* Content Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Financial Assistance Provisions under SMAM:
        </h2>
        
        <p className="text-gray-700 mb-4">
          <strong>(i) Financial assistance:</strong> 100% of the cost of drone up to a maximum of Rs. 10 lakhs per drone is provided for purchase of drones for their demonstration by institutes under ICAR, KVKs, SAUs, and other agricultural institutions.
        </p>
        
        <p className="text-gray-700 mb-4">
          <strong>(ii) Rental Basis:</strong> Financial assistance of 40% of the basic cost of drone is provided for purchase of drones by CHCs and Hi-tech hubs to make drones available on a rental basis for farmers.
        </p>
        
        <p className="text-gray-700 mb-4">
          <strong>(iii) Individual Ownership:</strong> For individual farmers, financial assistance of 50% is provided up to Rs. 5 lakhs per drone. This includes marginal and small farmers, and other designated groups.
        </p>

        <p className="text-gray-700 mb-4">
          A total fund of Rs. 129.17 crores has been sanctioned so far, including Rs. 52.50 crores for ICAR’s purchase of 300 drones for field demonstrations. 
        </p>
      </section>

      {/* Footer Section */}
     
      <section className="text-center mb-8 mt-8 lg:px-[8rem] px-0">
        <img 
          src={kisanDroneImage1} 
          alt="Funds for Kisan Drones"
          className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
        />
      </section>
      <footer className="text-center mt-8">
        <p className="text-gray-500 text-sm">
          This information was given by the Union Minister of Agriculture and Farmers Welfare in a written reply in Lok Sabha.
        </p>
      </footer>
      <PDFOpener/>
    </div>
  );
};

export default GovernmentSchemePage;
