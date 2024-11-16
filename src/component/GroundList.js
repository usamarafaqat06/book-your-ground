import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GroundList = ({ cityData }) => {
  const [searchCities, setSearchCities] = useState('');
  const navigate = useNavigate();

  const filteredData = cityData.filter(item =>
    item.name.toLowerCase().includes(searchCities.toLowerCase())
  );

  return (
    <div className="container mx-auto w-full max-w-[1920px] bg-primary text-center py-6">
      <div className='flex justify-between mb-6 px-10 flex-wrap'>
        <h1 className="text-3xl font-bold flex-grow text-center ml-[200px] mb-4">
          Find Your Play
        </h1>

        <input
          type="text"
          placeholder="Search by city"
          value={searchCities}
          onChange={(e) => setSearchCities(e.target.value)}
          className="w-full max-w-[200px] p-2 mb-2 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:primary"
        />
      </div>

      <p classname="text-3xl font-bold flex-grow text-center">Find sports facilities in diverse areas of Lahore, Pakistan.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {filteredData.length > 0 ? (
          filteredData.map(item => (
            <div key={item.id} className="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold  text-gray-800 mb-4 ">{item.name}</h2>
                <button
                  className="w-full py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-green-primary transition duration-200"
                  onClick={() => navigate(`/groundDetail/${item.id}`, { state: { ground: item } })}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-xl font-semibold">
            No results found
          </div>
        )}
      </div>
    </div>
  );
};

export default GroundList;
