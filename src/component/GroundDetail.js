import { useLocation} from 'react-router-dom';

const GroundDetail = () => {
  const location = useLocation();
  const ground = location.state?.ground;

  return (
    <div>
      {ground ? (
        <>
          <h1>{ground.name}</h1>
          <p>{ground.details}</p>
          <img src={ground.image} alt={ground.name} />
          <button className="w-full py-2 bg-[#0AA70A] text-white font-semibold rounded-lg hover:bg-[#3b9c48] focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200">
                  Book Now
          </button>
        </>
      ) : (
        <p>Loading ground details...</p>
      )}
    </div>
  );
};

export default GroundDetail