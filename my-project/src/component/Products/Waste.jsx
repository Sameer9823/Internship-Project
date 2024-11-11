import React from 'react';

const WasteManagement = () => {
  const wasteData = [
    {
      title: 'Solid Waste Management',
      description: 'Solid waste management focuses on the collection, treatment, and disposal of solid waste materials in an environmentally friendly manner. This approach emphasizes recycling, waste reduction, and sustainable disposal methods to reduce landfill impact and promote eco-friendly practices.',
      imgSrc: 'https://www.conserve-energy-future.com/wp-content/uploads/2016/02/solid-waste-landfill-garbage.jpg',
    },
    {
      title: 'Waste Water Management',
      description: 'Waste water management involves treating, reusing, and recycling wastewater to protect public health and the environment. By employing advanced treatment systems, waste water is processed to remove contaminants, ensuring it is safe for reuse in industrial and agricultural applications or to be returned to natural water bodies.',
      imgSrc: 'https://th.bing.com/th/id/OIP.R7eXLHy5vvLpzIN9PfgTKAHaFj?w=215&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
      title: 'Bio-medical Waste Management',
      description: 'Bio-medical waste management ensures the safe and hygienic disposal of waste generated from hospitals, clinics, and healthcare facilities. Proper handling, treatment, and disposal methods help prevent the spread of infections, protect healthcare workers, and maintain community health standards.',
      imgSrc: 'https://th.bing.com/th/id/OIP.qYAyvZauMhm2JRDE9qVIXAHaEL?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
      title: 'E-Waste Management (Under Construction)',
      description: 'E-waste management focuses on the responsible disposal and recycling of electronic waste, including outdated computers, phones, and appliances. By properly recycling e-waste, valuable materials can be recovered, and harmful components are prevented from polluting the environment.',
      imgSrc: 'https://th.bing.com/th/id/OIP.xirwYh-WwlgVxqA2K_QQNAHaEK?w=309&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
  ];

  return (
    <div className="p-10 bg-gray-100 pt-[6rem]">
      <h2 className="text-4xl font-semibold text-center text-[#003366] mb-12">Waste Management Solutions</h2>
      <div className="space-y-10">
        {wasteData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 ${
              index % 2 === 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image Section with Reduced Width */}
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-full h-72 lg:w-1/3 object-cover" // Adjusted height and width
            />
            {/* Text Section with Expanded Width and Increased Description Area */}
            <div className="p-8 lg:w-2/3">
              <h3 className="text-2xl font-bold text-[#003366] mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WasteManagement;
