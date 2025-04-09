import { Link } from 'react-router-dom';
import paanCornerBanner from '../assets/paan-corner-banner.jpg';

function TopBanner() {
  return (
    <div
      className="relative bg-cover bg-center text-white rounded-lg mb-8 overflow-hidden"
      style={{ backgroundImage: `url(${paanCornerBanner})`, height: '200px' }}
    >
      <div className="relative z-10 h-full w-full">
        <Link to="/category/paan-corner">
          <button
            className="absolute bg-white text-green-500 py-2 px-10 rounded hover:bg-gray-200 shadow-md text-sm font-semibold text-center"
            style={{
              bottom: '10px',
              left: '50px',
              minWidth: '120px', 
              minHeight:'40px',
            }}
          >
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TopBanner;
