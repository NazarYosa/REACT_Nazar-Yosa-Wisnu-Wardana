import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <header class="bg-white dark:bg-gray-900 border-b-2 drop-shadow top-0 left-0 fixed w-full">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div class="flex items-center lg:col-span-5">
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
              Nazar.
            </h1>
          </div>

          <nav class="flex items-center justify-end lg:col-span-7">
            <ul class="flex space-x-6">
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:text-gray-700"
                onClick={() => navigate('/')}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:text-gray-700"
                  onClick={() => navigate("/about")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:text-gray-700"
                onClick={() => navigate('/contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavBar;
