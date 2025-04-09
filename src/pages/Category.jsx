// import { useParams } from 'react-router-dom';
// import ProductCard from '../components/ProductCard';

// function Category() {
//   const { catName } = useParams();
//   // Dummy data for the category; later fetch from backend
//   const products = [
//     { id: 1, name: `${catName} Product 1`, price: 30, image: 'https://via.placeholder.com/150', deliveryTime: 8 },
//     { id: 2, name: `${catName} Product 2`, price: 40, image: 'https://via.placeholder.com/150', deliveryTime: 8 },
//     { id: 3, name: `${catName} Product 3`, price: 50, image: 'https://via.placeholder.com/150', deliveryTime: 8 },
//   ];

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">{catName}</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {products.map(product => (
//           <ProductCard
//             key={product.id}
//             name={product.name}
//             price={product.price}
//             image={product.image}
//             deliveryTime={product.deliveryTime}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Category;



import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Category() {
  const { catName } = useParams();
  // Dummy data for the category; later fetch from backend
  const products = [
    { id: 1, name: `${catName} Product 1`, price: 30, image: 'https://via.placeholder.com/150', deliveryTime: 8 },
    { id: 2, name: `${catName} Product 2`, price: 40, image: 'https://via.placeholder.com/150', deliveryTime: 8 },
    { id: 3, name: `${catName} Product 3`, price: 50, image: 'https://via.placeholder.com/150', deliveryTime: 8 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{catName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            deliveryTime={product.deliveryTime}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;