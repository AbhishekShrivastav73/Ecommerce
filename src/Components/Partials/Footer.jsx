import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold tracking-tight">ele<span>.</span>mart</h2>
            <p className="mt-2 text-gray-400">Your one-stop shop for all things fashion.</p>
          </div>
          <div className="flex  md:flex-row gap-8">
            <div>
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="mt-2">
                <li><a href="#" className="text-gray-400 hover:text-gray-200">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="mt-2">
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="mt-2">
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gray-200">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://twitter.com/AbhiShr91419505" className="text-gray-400 hover:text-gray-200">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.48 4.48 0 001.95-2.48 8.97 8.97 0 01-2.83 1.09 4.48 4.48 0 00-7.7 4.08A12.71 12.71 0 013.15 5.3 4.48 4.48 0 002.9 8.6c0 1.55.79 2.92 2 3.72a4.47 4.47 0 01-2.04-.56v.06a4.48 4.48 0 003.6 4.39c-.33.09-.68.13-1.03.13-.25 0-.5-.02-.74-.07a4.48 4.48 0 004.19 3.12 8.97 8.97 0 01-5.54 1.91c-.36 0-.71-.02-1.07-.07A12.71 12.71 0 007.29 21c8.25 0 12.77-6.84 12.77-12.77 0-.19 0-.37-.01-.56A9.07 9.07 0 0024 4.59a8.97 8.97 0 01-2.54.7z" />
            </svg>
          </a>
          
          <a href="https://github.com/AbhishekShrivastav73/AbhishekShrivastav73/tree/main" className="text-gray-400 hover:text-gray-200">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 4.633 3.156 8.507 7.463 9.727.546.1.742-.237.742-.528v-2.083c-3.036.662-3.676-1.46-3.676-1.46-.498-1.266-1.215-1.603-1.215-1.603-.994-.68.075-.667.075-.667 1.1.08 1.677 1.13 1.677 1.13.976 1.674 2.562 1.191 3.187.911.1-.706.383-1.192.698-1.466-2.422-.276-4.967-1.211-4.967-5.396 0-1.192.427-2.168 1.127-2.933-.113-.276-.489-1.39.108-2.897 0 0 .918-.294 3.003 1.126a10.481 10.481 0 015.467 0c2.085-1.42 3.003-1.126 3.003-1.126.597 1.507.222 2.621.108 2.897.7.765 1.127 1.741 1.127 2.933 0 4.194-2.548 5.118-4.973 5.387.394.342.747 1.016.747 2.048v3.044c0 .292.196.629.748.527A9.992 9.992 0 0024 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; 2024 E-Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
