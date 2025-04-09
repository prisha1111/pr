function Footer() {
    return (
      <footer className="bg-gray-100 p-4 mt-auto">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-4 gap-4 text-sm text-gray-600">
            <div>
              <h4 className="font-bold">Useful Links</h4>
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Lead</li>
                <li>Value</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Privacy</h4>
              <ul>
                <li>Terms</li>
                <li>FAQs</li>
                <li>Security</li>
                <li>Mobile</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Partner</h4>
              <ul>
                <li>Franchise</li>
                <li>Seller</li>
                <li>Warehouse</li>
                <li>Deliver</li>
                <li>Resources</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Categories see all</h4>
              <ul>
                <li>Vegetables & Fruits</li>
                <li>Cold Drinks & Juices</li>
                <li>Bakery & Biscuits</li>
                <li>Dairy & Breakfast</li>
                <li>Munchies</li>
                <li>Tea, Coffee & Health Drinks</li>
                <li>Atta, Rice & Dal</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-xs">© Blink Commerce Private Limited, 2016-2025</p>
          <div className="flex justify-center space-x-4 mt-2">
            <button>Download App</button>
            <img src="https://via.placeholder.com/30" alt="App Store" />
            <img src="https://via.placeholder.com/30" alt="Google Play" />
            <img src="https://via.placeholder.com/30" alt="Facebook" />
            <img src="https://via.placeholder.com/30" alt="Twitter" />
            <img src="https://via.placeholder.com/30" alt="Instagram" />
            <img src="https://via.placeholder.com/30" alt="LinkedIn" />
          </div>
          <p className="mt-2 text-xs">Disclaimer text...</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;