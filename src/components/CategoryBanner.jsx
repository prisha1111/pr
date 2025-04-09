import { Link } from 'react-router-dom';

function CategoryBanner({ title, subtitle }) {
  return (
    <div className="relative bg-green-500 text-white p-6 rounded-lg mb-6 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left z-10">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mt-2 text-lg">{subtitle}</p>
          <Link to={`/category/${title.toLowerCase().replace(/,|&/g, '')}`}>
            <button className="mt-4 bg-white text-green-500 px-4 py-2 rounded hover:bg-gray-200">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="absolute top-2 right-2 bg-white text-green-500 px-2 py-1 rounded text-sm z-10">
          Category
        </div>
      </div>
    </div>
  );
}

export default CategoryBanner;