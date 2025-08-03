import React from "react";

function NavBar() {
  return (
    <>
      <header className="p-4 shadow-xl border-b-[#3c4044]">
        <div className="max-w-[1100px] mx-auto">
          <div class="flex justify-between items-center">
            {/* left side */}
            <div className="flex gap-3 items-center">
              <span class="text-[25px]">📝</span>
              <span class="text-[22px] font-bold">MiniBlog</span>
            </div>

            {/* Right-side */}
            <div class="flex list-none space-x-1 items-center">
              <li
                class="px-4 py-2 text-[#f0f0f0] border
        border-[#f0f0f033] bg-[#f0f0f01a] font-medium rounded-lg text-sm"
              >
                Home
              </li>
              <li className="px-4 py-2 text-[#f0f0f0cc] transition-all duration-200 hover:bg-[#2f333780] hover:text-[#FAFAFA] font-medium rounded-lg text-sm">
                Blogs
              </li>
              <li
                className="px-4 py-2 text-[#f0f0f0] border
        border-[#f0f0f033] bg-[#f0f0f033] font-medium rounded-lg text-sm hover:bg-[#f0f0f04d] transition-all duration-200"
              >
                Add Blog
              </li>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
