import { useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const GroundDetail = () => {
  const location = useLocation();
  const ground = location.state?.ground;
 const navigate = useNavigate()
 return (
  <div className="flex justify-center px-4 md:px-8 py-8 bg-gray-50">
    <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-10 w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
      {ground ? (
        <>
          <img
            src={ground.image}
            alt={ground.name}
            className="w-full md:w-1/2 h-auto object-cover mx-[20px]"
          />
          <div className="md:w-1/2 p-6 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{ground.name}</h1>
            <p className="text-gray-600 leading-relaxed">{ground.details}</p>
            <button
              className="w-full py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
              onClick={() => navigate(`/contact`)}
            >
              Book Now
            </button>
          </div>
        </>
      ) : (
        <p className="text-center w-full py-10 text-gray-500">Loading ground details...</p>
      )}
    </div>
  </div>
);


};

export default GroundDetail