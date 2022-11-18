import React from "react";

const Footer = () => {
  return (
    <div className="w-full space-y-20 bg-gray-900 py-10 text-white px-4 sm:px-0">
      <div className="mx-auto max-w-7xl space-y-20">
        <div className="flex sm:items-center sm:justify-between w-full flex-col sm:flex-row justify-start items-start">
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Property Guides</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2">
            <p>Subscribe to our newsletter</p>
            <div className="flex flex-row">
              <input type="text" placeholder="Subscribe" className="py-2 px-4 text-gray-700 focus:outline-none" />
              <button type="submit" className="py-2 px-4 bg-red-500 text-white">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500">We will never send you any spams!</p>
          </div>
        </div>

        <div className="flex items-center justify-start w-full">&copy; Realtor Search, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
