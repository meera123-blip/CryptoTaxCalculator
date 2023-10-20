import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white shadow-lg p-4">
      <div className="hidden lg:flex justify-between items-center">
        <div>
          <img src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg" alt="logo" className="h-8" />
        </div>
        <div className='flex items-center justify-around'>
          <div>
            <ul className='flex space-x-4'>
              <li>Features</li>
              <li>Exchanges</li>
              <li>How it Works?</li>
              <li>Blog</li>
              <li className="pr-4">About us</li>
            </ul>
          </div>
          <div>
            <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded">Sign in</button>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="flex justify-between items-center">
          <div>
            <img src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg" alt="logo" className="h-8" />
          </div>
          <div>
            <button onClick={toggleMenu} className="block lg:hidden">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="flex flex-col bg-white shadow-lg p-4 mt-4">
            <div className="py-2">Features</div>
            <div className="py-2">Exchanges</div>
            <div className="py-2">How it Works?</div>
            <div className="py-2">Blog</div>
            <div className="py-2">
              <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded">Sign in</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
