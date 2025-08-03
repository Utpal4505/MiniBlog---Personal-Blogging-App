import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header className="p-4 shadow-xl border-b-[#3c4044] backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex justify-between items-center">
            {/* left side */}
            <div className="flex gap-3 items-center">
              <span className="text-[25px]">📝</span>
              <span className="text-[22px] font-bold">MiniBlog</span>
            </div>

            {/* Right-side */}
            <div>
              <ul className="flex list-none space-x-2 items-center">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? `px-4 py-2 border text-[#f0f0f0]
                    border-[#f0f0f033] bg-[#f0f0f01a] font-medium rounded-lg text-sm`
                          : `px-4 py-2 text-[#f0f0f0cc] hover:bg-[#2f333780] hover:text-[#FAFAFA] font-medium rounded-lg text-sm`
                      } } `
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? `px-4 py-2 border text-[#f0f0f0]
                    border-[#f0f0f033] bg-[#f0f0f01a] font-medium rounded-lg text-sm`
                          : `px-4 py-2 text-[#f0f0f0cc] hover:bg-[#2f333780] hover:text-[#FAFAFA] font-medium rounded-lg text-sm`
                      } } `
                    }
                  >
                    Blogs
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/add-blogs"
                    className={() => `px-4 py-2 text-[#f0f0f0] border
        border-[#f0f0f033] bg-[#f0f0f033] font-medium rounded-lg text-sm hover:bg-[#f0f0f04d] transition-all duration-200`}
                  >
                    Add Blog
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
