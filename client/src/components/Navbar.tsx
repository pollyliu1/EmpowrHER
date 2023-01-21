import React from "react";

import SignInButton2 from "./SignInButton2";
import SignOutButton2 from "./SignOutButton2";

function Navbar({ user }) {
  return (
    <nav className="bg-gradient-to-r from-violet-200 to-violet-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a
                href="#"
                className="flex item-center py-6 px-3 text-gray-700 hover:text-gray-600"
              >
                <span className="font-extrabold text-grey-800 text-3xl">
                  Empowr{" "}
                </span>{" "}
                <span className="font-extrabold text-3xl text-violet-500">
                  {" "}
                  HER
                </span>
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-12">
            <div>
              <a href="#" className="hover:text-gray-600">Home</a>
            </div>
            <div>
              <a href="#" className="hover:text-gray-600">About Us</a>
            </div>
            <div>
              <a href="#" className="hover:text-gray-600">Testimonials</a>
            </div>
            <div>
              <a href="#" className="hover:text-gray-600">Team</a>
            </div>
            <div>{user ? <SignOutButton2 /> : <SignInButton2 />}</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
