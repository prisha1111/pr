// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Category from './pages/Category';
// import Cart from './pages/Cart';
// import ForgotPassword from './pages/ForgotPassword';


// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/login" element={<Login />} /> {/* Changed 'Login' to lowercase for consistency */}
//             <Route path="/" element={<Home />} />
//             <Route path="/category/:catName" element={<Category />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/register" element={<Register />} /> {/* Added register route */}
//             <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Add this route */}
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// --------------------


// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Category from './pages/Category';
import Cart from './pages/Cart';
import ForgotPassword from './pages/ForgotPassword';
import { CartProvider } from './CartContext.jsx'; // Ensure the extension is .jsx
// import ProductCard from './ProductCard';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/category/:catName" element={<Category />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
