import React from "react";

const Footer = () => {
  return (
    // <div className="min-w-full mx-auto h-[254px] bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)] text-white">
    //   <div className="flex justify-center pt-[50px]">
    //     <img
    //       src="https://s3-alpha-sig.figma.com/img/2581/2af8/db91dcaf60f9a4416058e0ad877cc03e?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o4ikoEjsgvLge1CkDYexTsV3dGFyie6rQr0LzGoicUYS1pHkl7AAuzm-qSZ639nlD1oV3Gv-ycKIHA4C5MpgNDUGpXPD45oF9McoUEXg51t1yirtPJrzRYAJldPLCEk3ui2YEgChNCI2ZfiOVD1apU2cnmsbmbyE1jEH1RBNJCiscQvBD5eIj4~dk8EM2QuicvvsTGcBdHsaT1PKyLeo7CMsGomwjxyKZpktLWyqez5nIMN9Fqv0PkU5VxoUOumWMM0JJdPhgAxw2fwTbEckFjhrD4uPXPAuZixU4U1I4xH8iYNm4KlIUVjVgm-iZ8~F3HAzBABA559xdLDwL~fWRg__"
    //       className="w-[244px] h-[28px] cursor-pointer"
    //       alt="logo"
    //     />
    //   </div>
    //   <ul className="sm:flex flex-wrap justify-center gap-[120px] mt-[52px]">
    //     <li>Feature</li>
    //     <li>Pricing</li>
    //     <li>Listings</li>
    //   </ul>
    //   <div className="relative flex justify-center top-[55px]  border-t">
    //     <p className="relative top-[11px]">
    //       &copy; 2023 Sponsor-List.Vercel.App
    //     </p>
    //   </div>
    // </div>

    <div className="min-w-full mx-auto sm:w-full h-[254px] bg-[linear-gradient(103deg,_#3B338B_-73.19%,_#D460A3_177.21%)] text-white">
      <div className="flex justify-center pt-4 sm:pt-8">
        <img
          src="https://s3-alpha-sig.figma.com/img/2581/2af8/db91dcaf60f9a4416058e0ad877cc03e?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o4ikoEjsgvLge1CkDYexTsV3dGFyie6rQr0LzGoicUYS1pHkl7AAuzm-qSZ639nlD1oV3Gv-ycKIHA4C5MpgNDUGpXPD45oF9McoUEXg51t1yirtPJrzRYAJldPLCEk3ui2YEgChNCI2ZfiOVD1apU2cnmsbmbyE1jEH1RBNJCiscQvBD5eIj4~dk8EM2QuicvvsTGcBdHsaT1PKyLeo7CMsGomwjxyKZpktLWyqez5nIMN9Fqv0PkU5VxoUOumWMM0JJdPhgAxw2fwTbEckFjhrD4uPXPAuZixU4U1I4xH8iYNm4KlIUVjVgm-iZ8~F3HAzBABA559xdLDwL~fWRg__"
          className="w-[244px] h-[28px] cursor-pointer"
          alt="logo"
        />
      </div>
      <ul className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8 mt-4 sm:mt-8">
        <li className="mb-2 sm:mb-0">Feature</li>
        <li className="mb-2 sm:mb-0">Pricing</li>
        <li className="mb-2 sm:mb-0">Listings</li>
      </ul>
      <div className="relative flex justify-center top-[110px] sm:top-[55px] border-t border-white mt-4 sm:mt-8">
        <p className="relative top-[11px] text-xs sm:text-base">
          &copy; 2023 Sponsor-List.Vercel.App
        </p>
      </div>
    </div>
  );
};

export default Footer;
