import React from 'react';
import { Star, ChevronDown } from 'lucide-react';
import img from '../../assets/drone.png';

function Products() {
  return (
    <div className="pt-[7rem] py-3 bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">Products and Accessories</h1>
        <p className="mt-2 text-lg text-gray-600">
          Discover the best products tailored just for you.
        </p>
      </div>

      <section className="overflow-hidden mt-12">
        <div className="mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center lg:w-full">
            <div className="w-full lg:w-[900px] lg:pr-10">
              <img
                alt="Product Image"
                className="h-72 w-full rounded-lg object-cover lg:h-[28rem] shadow-lg"
                src={img}
              />
            </div>
            <div className="mt-10 w-full lg:mt-0 lg:w-[500px] lg:pl-10">
              <h2 className="text-sm font-bold tracking-widest text-indigo-600 uppercase">Agribot</h2>
              <h1 className="my-4 text-3xl font-extrabold text-gray-900">Agribot A6</h1>
             
              <p className="leading-relaxed text-gray-700">
              Agribot A6 is an advanced agriculture drone designed to revolutionize farming practices by offering precision, efficiency, and cost-effectiveness. This high-performance drone is equipped with state-of-the-art features tailored specifically for modern agricultural needs, helping farmers maximize their crop yield and minimize manual labor.
              </p>
              <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
               
               
              </div>
              
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
