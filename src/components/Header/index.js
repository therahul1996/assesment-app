import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#cfcfcf] shadow-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to={"/"} className="-m-1.5 p-1.5">
            <span className="font-cursive">The news app</span>
          </Link>
        </div>

        <div className="flex lg:flex-1 gap-5 lg:justify-end">
          <Link
            to={"/"}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Article<span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            to={"/news-feed"}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            News App <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
