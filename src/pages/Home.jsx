// import { Link } from 'react-router-dom';
// import ProductCard from '../components/ProductCard';
// import CategoryBanner from '../components/CategoryBanner';
// import Promotile from '../components/PromoTile';
// import TopBanner from '../components/TopBanner';
// import amulDude from '../assets/amulmilk.jpg';
// import CategoryTile from '../components/CategoryTile';
// import amulMastiDahi from '../assets/amul-masti-dahi.jpg';
// import FreshMilk from '../assets/FreshGoldFullCreamMilk.png';
// import pet from '../assets/pet.jpg';
// import pharmacy from '../assets/pharmacy.jpg';
// import diaper from '../assets/diaper.jpg';
// import paan_corner_products from '../assets/paan-corner_products.avif';
// import Dairy_products from '../assets/Dairy_products.avif';
// import fruits_vegetables from '../assets/fruits_vegetables.avif'
// import colddrinks from '../assets/colddrinks.avif'
// import Snacks from '../assets/Snacks.avif'
// import Breakfast from '../assets/Breakfast.avif'
// import Sweettooth from '../assets/Sweettooth.avif'
// import Bakery from '../assets/Bakery.avif'
// import TeaCoffee from '../assets/TeaCoffee.avif'
// import AttaDal from '../assets/AttaDal.avif'
// import MasalaOil from '../assets/MasalaOil.avif'
// import Sauces from '../assets/Sauces.avif'
// import Chicken from '../assets/Chicken.avif'
// import Organic from '../assets/Organic.avif'
// import BabyCare from '../assets/BabyCare.avif'
// import PharmaWell from '../assets/PharmaWell.avif'
// import Cleaning from '../assets/Cleaning.avif'
// import HomeOffice from '../assets/HomeOffice.avif'
// import PersonalCare from '../assets/PersonalCare.avif'
// import PetCare from '../assets/PetCare.avif'


// function Home() {
//   const categories = [
//     {
//       name: 'Dairy, Bread & Eggs',
//       subtitle: 'Your daily essentials delivered fast!',
//       products: [
//         { id: 1, name: 'Amul Taaza Toned Milk', price: 28, image: amulDude, deliveryTime: 8 },
//         { id: 2, name: 'Amul Masti Pouch Curd', price: 35, image: amulMastiDahi, deliveryTime: 8 },
//         { id: 3, name: 'Fresh Gold Full Cream Milk', price: 67, image: FreshMilk, deliveryTime: 8 },
//       ],
//     },
//     {
//       name: 'Rolling Paper & Tobacco',
//       subtitle: 'Explore our premium selection!',
//       products: [
//         { id: 4, name: 'Perfect Rolled Cones', price: 45, image: 'https://via.placeholder.com/150', deliveryTime: 8 },
//         { id: 5, name: 'Ultimate Rolling Paper', price: 90, image: 'https://via.placeholder.com/150', deliveryTime: 8 },
//         { id: 6, name: 'Burning Desire Pink Cone', price: 120, image: 'https://via.placeholder.com/150', deliveryTime: 8 },
//       ],
//     },
//     {
//       name: 'Paan Corner',
//       subtitle: 'Your favourite paan shop is now online',
//       products: [
//         { id: 7, name: 'Paan Product 1', price: 50, image: 'https://via.placeholder.com/150', deliveryTime: 8 },
//         { id: 8, name: 'Paan Product 2', price: 60, image: 'https://via.placeholder.com/150', deliveryTime: 8 },
//         { id: 9, name: 'Paan Product 3', price: 70, image: 'https://via.placeholder.com/150', deliveryTime: 8 },
//       ],
//     },
//   ];

//   const categoryTiles = [
//     { title: 'Paan Corner', imageUrl: paan_corner_products },
//     { title: 'Dairy, Bread & Eggs', imageUrl: Dairy_products },
//     { title: 'Fruits & Vegetables', imageUrl: fruits_vegetables },
//     { title: 'Cold Drinks & Juices', imageUrl: colddrinks },
//     { title: 'Snacks & Munchies', imageUrl: Snacks },
//     { title: 'Breakfast & Instant Food', imageUrl: Breakfast },
//     { title: 'Sweet Tooth', imageUrl: Sweettooth },
//     { title: 'Bakery & Biscuits', imageUrl: Bakery },
//     { title: 'Tea, Coffee & Health Drink', imageUrl: TeaCoffee },
//     { title: 'Atta, Rice & Dal', imageUrl: AttaDal },
//     { title: 'Masala, Oil & More', imageUrl: MasalaOil},
//     { title: 'Sauces & Spreads', imageUrl: Sauces },
//     { title: 'Chicken, Meat & Fish', imageUrl: Chicken },
//     { title: 'Organic & Healthy Living', imageUrl: Organic },
//     { title: 'Baby Care', imageUrl: BabyCare},
//     { title: 'Pharma & Wellness', imageUrl: PharmaWell },
//     { title: 'Cleaning Essentials', imageUrl: Cleaning },
//     { title: 'Home & Office', imageUrl: HomeOffice },
//     { title: 'Personal Care', imageUrl: PersonalCare },
//     { title: 'Pet Care', imageUrl: PetCare },
//   ];

//   const promotiles = [
//     {
//       title: 'Pharmacy at your doorstep!',
//       subtitle: 'Cough syrups, pain relief sprays & more',
//       imageUrl: pharmacy,
//       buttonText: 'Order Now',
//       onClick: () => alert('Pharmacy ordered!'),
//     },
//     {
//       title: 'Pet Care supplies in minutes',
//       subtitle: 'Food, treats, toys & more',
//       imageUrl: pet,
//       buttonText: 'Order Now',
//       onClick: () => alert('Pet Care ordered!'),
//     },
//     {
//       title: 'No time for a diaper run?',
//       subtitle: 'Get baby care essentials in minutes',
//       imageUrl: diaper,
//       buttonText: 'Order Now',
//       onClick: () => alert('Baby Care ordered!'),
//     },
//   ];


//   // const addProduct = (categoryIndex, newProduct) => {
//   //   const updated = [...categories];
//   //   updated[categoryIndex].products.push({ ...newProduct, id: Date.now() });
//   //   setCategories(updated);
//   // };

//   // const deleteProduct = (categoryIndex, productId) => {
//   //   const updated = [...categories];
//   //   updated[categoryIndex].products = updated[categoryIndex].products.filter(
//   //     (product) => product.id !== productId
//   //   );
//   //   setCategories(updated);
//   // };

//   return (
//     <div className="container mx-auto p-4">
//       {/* Top Paan Corner Banner */}
//       <TopBanner />

//       {/* Promotional Tiles Section (Moved above categoryTiles) */}
//       <div className="mb-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {promotiles.map((tile, index) => (
//             <Promotile
//               key={index}
//               title={tile.title}
//               subtitle={tile.subtitle}
//               imageUrl={tile.imageUrl}
//               buttonText={tile.buttonText}
//               onClick={tile.onClick}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Category Tiles Row */}
//       <div className="mb-8">
//         <div className="flex flex-wrap gap-4 items-center">
//           {categoryTiles.map((tile, index) => (
//             <CategoryTile key={index} title={tile.title} imageUrl={tile.imageUrl} />
//           ))}
//           <Link to="/categories">
//             <button className="text-green-500 hover:underline">see all</button>
//           </Link>
//         </div>
//       </div>

//       {/* Category Sections */}
//       {categories.map((category, index) => (
//         <div key={index} className="mb-8">
//           <CategoryBanner
//             title={category.name}
//             subtitle={category.subtitle}
//           />
//           <h2 className="text-2xl font-bold mb-4 sr-only">{category.name}</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {category.products.map(product => (
//               <ProductCard
//                 key={product.id}
//                 name={product.name}
//                 price={product.price}
//                 image={product.image}
//                 deliveryTime={product.deliveryTime}
//               />
//             ))}
//             <Link to={`/category/${category.name.toLowerCase().replace(/,|&/g, '')}`}>
//               <button className="text-green-500 hover:underline">see all</button>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home;

import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import CategoryBanner from '../components/CategoryBanner';
import Promotile from '../components/PromoTile';
import TopBanner from '../components/TopBanner';
import amulDude from '../assets/amulmilk.jpg';
import CategoryTile from '../components/CategoryTile';
import amulMastiDahi from '../assets/amul-masti-dahi.jpg';
import FreshMilk from '../assets/FreshGoldFullCreamMilk.png';
import pet from '../assets/pet.jpg';
import pharmacy from '../assets/pharmacy.jpg';
import diaper from '../assets/diaper.jpg';
import paan_corner_products from '../assets/paan-corner_products.avif';
import Dairy_products from '../assets/Dairy_products.avif';
import fruits_vegetables from '../assets/fruits_vegetables.avif';
import colddrinks from '../assets/colddrinks.avif';
import Snacks from '../assets/Snacks.avif';
import Breakfast from '../assets/Breakfast.avif';
import Sweettooth from '../assets/Sweettooth.avif';
import Bakery from '../assets/Bakery.avif';
import TeaCoffee from '../assets/TeaCoffee.avif';
import AttaDal from '../assets/AttaDal.avif';
import MasalaOil from '../assets/MasalaOil.avif';
import Sauces from '../assets/Sauces.avif';
import Chicken from '../assets/Chicken.avif';
import Organic from '../assets/Organic.avif';
import BabyCare from '../assets/BabyCare.avif';
import PharmaWell from '../assets/PharmaWell.avif';
import Cleaning from '../assets/Cleaning.avif';
import HomeOffice from '../assets/HomeOffice.avif';
import PersonalCare from '../assets/PersonalCare.avif';
import PetCare from '../assets/PetCare.avif';

function Home() {
  const categories = [
    {
      name: 'Dairy, Bread & Eggs',
      subtitle: 'Your daily essentials delivered fast!',
      products: [
        { id: 1, name: 'Amul Taaza Toned Milk', price: 28, image: amulDude, deliveryTime: 8 },
        { id: 2, name: 'Amul Masti Pouch Curd', price: 35, image: amulMastiDahi, deliveryTime: 8 },
        { id: 3, name: 'Fresh Gold Full Cream Milk', price: 67, image: FreshMilk, deliveryTime: 8 },
      ],
    },
    {
      name: 'Rolling Paper & Tobacco',
      subtitle: 'Explore our premium selection!',
      products: [
        { id: 4, name: 'Perfect Rolled Cones', price: 45, image: 'https://via.placeholder.com/150', deliveryTime: 8 },
        { id: 5, name: 'Ultimate Rolling Paper', price: 90, image: 'https://via.placeholder.com/150', deliveryTime: 8 },
        { id: 6, name: 'Burning Desire Pink Cone', price: 120, image: 'https://via.placeholder.com/150', deliveryTime: 8 },
      ],
    },
    {
      name: 'Paan Corner',
      subtitle: 'Your favourite paan shop is now online',
      products: [
        { id: 7, name: 'Paan Product 1', price: 50, image: 'https://via.placeholder.com/150', deliveryTime: 8 },
        { id: 8, name: 'Paan Product 2', price: 60, image: 'https://via.placeholder.com/150', deliveryTime: 8 },
        { id: 9, name: 'Paan Product 3', price: 70, image: 'https://via.placeholder.com/150', deliveryTime: 8 },
      ],
    },
  ];

  const categoryTiles = [
    { title: 'Paan Corner', imageUrl: paan_corner_products },
    { title: 'Dairy, Bread & Eggs', imageUrl: Dairy_products },
    { title: 'Fruits & Vegetables', imageUrl: fruits_vegetables },
    { title: 'Cold Drinks & Juices', imageUrl: colddrinks },
    { title: 'Snacks & Munchies', imageUrl: Snacks },
    { title: 'Breakfast & Instant Food', imageUrl: Breakfast },
    { title: 'Sweet Tooth', imageUrl: Sweettooth },
    { title: 'Bakery & Biscuits', imageUrl: Bakery },
    { title: 'Tea, Coffee & Health Drink', imageUrl: TeaCoffee },
    { title: 'Atta, Rice & Dal', imageUrl: AttaDal },
    { title: 'Masala, Oil & More', imageUrl: MasalaOil },
    { title: 'Sauces & Spreads', imageUrl: Sauces },
    { title: 'Chicken, Meat & Fish', imageUrl: Chicken },
    { title: 'Organic & Healthy Living', imageUrl: Organic },
    { title: 'Baby Care', imageUrl: BabyCare },
    { title: 'Pharma & Wellness', imageUrl: PharmaWell },
    { title: 'Cleaning Essentials', imageUrl: Cleaning },
    { title: 'Home & Office', imageUrl: HomeOffice },
    { title: 'Personal Care', imageUrl: PersonalCare },
    { title: 'Pet Care', imageUrl: PetCare },
  ];

  const promotiles = [
    {
      title: 'Pharmacy at your doorstep!',
      subtitle: 'Cough syrups, pain relief sprays & more',
      imageUrl: pharmacy,
      buttonText: 'Order Now',
      onClick: () => alert('Pharmacy ordered!'),
    },
    {
      title: 'Pet Care supplies in minutes',
      subtitle: 'Food, treats, toys & more',
      imageUrl: pet,
      buttonText: 'Order Now',
      onClick: () => alert('Pet Care ordered!'),
    },
    {
      title: 'No time for a diaper run?',
      subtitle: 'Get baby care essentials in minutes',
      imageUrl: diaper,
      buttonText: 'Order Now',
      onClick: () => alert('Baby Care ordered!'),
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Top Paan Corner Banner */}
      <TopBanner />

      {/* Promotional Tiles Section */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promotiles.map((tile, index) => (
            <Promotile
              key={index}
              title={tile.title}
              subtitle={tile.subtitle}
              imageUrl={tile.imageUrl}
              buttonText={tile.buttonText}
              onClick={tile.onClick}
            />
          ))}
        </div>
      </div>

      {/* Category Tiles Row */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4 items-center">
          {categoryTiles.map((tile, index) => (
            <CategoryTile key={index} title={tile.title} imageUrl={tile.imageUrl} />
          ))}
          <Link to="/categories">
            <button className="text-green-500 hover:underline">see all</button>
          </Link>
        </div>
      </div>

      {/* Category Sections */}
      {categories.map((category, index) => (
        <div key={index} className="mb-8">
          <CategoryBanner
            title={category.name}
            subtitle={category.subtitle}
          />
          <h2 className="text-2xl font-bold mb-4 sr-only">{category.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {category.products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                deliveryTime={product.deliveryTime}
              />
            ))}
            <Link to={`/category/${category.name.toLowerCase().replace(/,|&/g, '')}`}>
              <button className="text-green-500 hover:underline">see all</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;