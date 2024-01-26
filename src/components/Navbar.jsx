import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex-wrap sm:flex justify-between items-center w-full py-4">
      <div className="flex-wrap sm:flex gap-10">
        <img
          src="https://s3-alpha-sig.figma.com/img/2581/2af8/db91dcaf60f9a4416058e0ad877cc03e?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o4ikoEjsgvLge1CkDYexTsV3dGFyie6rQr0LzGoicUYS1pHkl7AAuzm-qSZ639nlD1oV3Gv-ycKIHA4C5MpgNDUGpXPD45oF9McoUEXg51t1yirtPJrzRYAJldPLCEk3ui2YEgChNCI2ZfiOVD1apU2cnmsbmbyE1jEH1RBNJCiscQvBD5eIj4~dk8EM2QuicvvsTGcBdHsaT1PKyLeo7CMsGomwjxyKZpktLWyqez5nIMN9Fqv0PkU5VxoUOumWMM0JJdPhgAxw2fwTbEckFjhrD4uPXPAuZixU4U1I4xH8iYNm4KlIUVjVgm-iZ8~F3HAzBABA559xdLDwL~fWRg__"
          className="w-[244px] h-[28px] cursor-pointer"
          alt="logo"
        />
        <ul className="flex gap-8">
          <Link to="/" className="cursor-pointer">Feature</Link>
          <Link to="/pricing" className="cursor-pointer">Pricing</Link>
          <Link to="/listings" className="cursor-pointer">Listings</Link>
        </ul>
      </div>
      <div>
        <button className="bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)] px-3 py-1 text-white rounded-md">
          Dashboard
        </button>
      </div>
    </div>
  );
};

export default Navbar;
