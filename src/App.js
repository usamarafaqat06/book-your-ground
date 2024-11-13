import { useState } from 'react';
import './App.css';
import Banner from './component/Banner';
import Header from './component/Header';


function App() {

  const [searchCities, setSearchCities] = useState(''); 
  const cityData = [
    {
      name: 'Luxury sports ground of Johar Town',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7aIo7Nb_aY-Ju1Chb--BlLmehmZCgsxT9w&s'
    },
    {
      name: 'Comfortable Sport Complexes of DHA',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWssaLKmJ_BHcp9W1ibc81aehsyBG4dsBfw&s'
    },
    {
      name: 'Leisure Sports Clubs of Cantt',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWfp34VNu3cAvyFmFiUH2vYXD1rOY6IMAZpA&s'
    }
  ];


  const aboutUs = [
    {
      heading: 'How it works',
      detail: 'Sign up and explore sports venues and opponent teams in your city',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--KQxnmsMcBpwuY_KMTyVFok2E0GbLPV2-w&s'
    },
    {
      heading: 'LIST YOUR SPORTS FACILITY',
      detail: 'ign up as facility Manager, promote your sports venue. It’s Easy its free',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MJ-qXeHaGsXtuPMrA8rdDFZ981W_hbuA2Q&s'
    }
  ];


//new code 
  const filteredData = cityData.filter(item =>
    item.name.toLowerCase().includes(searchCities.toLowerCase())
  )



  return (
    <>
    <Header/>
    <Banner/>
      <div class="container mx-auto w-full max-w-[1920px] bg-[#f1f3f9] text-center py-6">
        <div className='flex justify-between mb-6 px-10 flex-wrap'>
          <h1 class="text-3xl font-bold flex-grow text-center ml-[200px] mb-4">
            Find Your Play
          </h1>

          <input
            type="text"
            placeholder="Search by city"
            value={searchCities}
            onChange={(e) => setSearchCities(e.target.value)}
            className="w-full max-w-[200px]  p-2 mb-6 border border-[#0AA70A] rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

        </div>


        <p>Find sports facilities in diverse areas of Lahore, Pakistan.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8"> 
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index} className="max-w-[600px] max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={item.image} alt={item.name} className="max-w-[480px] w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{item.name}</h2>
                <button className="w-full py-2 bg-[#0AA70A] text-white font-semibold rounded-lg hover:bg-[#3b9c48] focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200">
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

      <div class="container mx-auto w-full max-w-[1920px]  text-center py-6">
        <h3 className='text-3xl font-bold mb-4'>
          Know Us
        </h3>
        <div className="flex justify-items-center flex-wrap gap-6 text-center">
          {aboutUs.map((item, index) => (
            <div key={index} className="max-w-[600px]  mx-auto  overflow-hidden">
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.heading}
                  className="h-48 object-cover rounded-md"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{item.heading}</h2>
                <p className=" font-semibold text-gray-800 mb-4">{item.detail}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;