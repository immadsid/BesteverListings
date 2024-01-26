import React from "react";

const Card = () => {
  const cardData = [
    "https://s3-alpha-sig.figma.com/img/2253/4233/33b7fa63498dd48d3d9ec239d9972465?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YlEZWfbl1iR6oqh1S77~wKoQzN76FG~VrOVgRd2GhqHLLasgdzR~EIoCPT2-DYnrOiNEUllaaR~RCnHd-Z5~JD2XVGQKyvjF-5bBEZNJXMu4ApBmWp95BmCNVu~LQSQXi83M-KIWzGd0krDjW88V~aCl~~FRcSmltK5KnIkwrd0z1Bx03geEKIKU4rFWr0JEoxa00Z1XfQ0zUSueVp1vFD~6VluRC9udn91mvlvzfCJa9d3S88JRG2cDF9P2k5Ud-Fuzmbh-RpOwdsL2En~t4zXZihY5q3xughn6aS6n6ElpX2dgt3To0p~vF~SuKrTd1zfmUAz0Zndy12D6UBh~sg__",
    "https://s3-alpha-sig.figma.com/img/72b1/9f76/b3f423d5eaf8515f3475dad4b0476b6e?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J5svaSZnkQfqmJKF4jYM5TbrQ4Fp6psNMAy~1Vm1iwmBP-A-bZm6QaAacOHEcGIVTD2CSVgwmDUXIAS1VqbzqrE4~lVA2hGq~FeUkrmCs5lMIR4~L7lj9nrGSz6dpfVQY4YuSHNZoPvivGogryfBt-02aBwcf7~olNpbNVUFy-u-SLMczmU2bH2Va4S8tVrj6LhWjku1iRF43IsZyZK--O8gK2HG7b4BwF3GbBA-9gkoQFP8UHaxqZd5mg1e4-zULKXXQdzSi3Nqw0kz8NJi-65pSV1NNMvZ8GhZ~vRoM4L4EMGK2U~gUupuwKRjChwvfGDRST6s9GF~-a~HI9QYWw__",
    "https://s3-alpha-sig.figma.com/img/818b/dccb/30a2c7050ab9d3b08cfb4fb1805ec530?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZXsFzCATNmWE9qTU-VZiyxwB-Wcj1TWXH3PpstUQcbJgsZ5fx8fj27pL0Z1DvYCDkfGpkI6YaZWyGSAqAOe2renMuWjmhp5QopzAz7smUjyF1Nn4HO8fvQTD1irLXvWsxw1G0jiTqQH~Ombnm6EgjSkLSaOYpTuTzcXCM3vVhmQbDKHV4Xa-s8ClbLj4CY03mTRApEdjkmaSOKA7S-v6VDuv4PkozvkIE-E-4faCXeUKv5y9xjDS15FeB29bVMbs3Ued7WW4OaSQQ-pbjNfjXMF96vRACnv1C4NXP5AFJ3bZfLkmtzCRDAXNl5Ms0F-aYiCFtcggk07kPXnd0IC7EQ__",
    "https://s3-alpha-sig.figma.com/img/70c9/aff6/24e7fd06701015ccdfb5ae6440a0219d?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H~6IIgIuivfHmlPMZcEf3mlhbjypkdmf13pMW-s~2IOVvsaDvoeB9o8Jf2WL8-lPauWCWeoco5iVxeoUzDLZhTtMK9csBbOIW7ltbLbZym0egFBXaISoa0R9Z~Lf5LnbooBC8Isu-VJ~eTEL-BbHFCUqvHKPOBshucTL7nmpsJM2kXRbwf8FWvcVXZ3nxQsWODVIBtbNvbbsRxvMU-Q5PKt6jqpbXbnDPKMFaonljqV5ZVTB9vn72MNXusWoZi85tRFFfBpPqGHeBAVS89osrM51bp1jRmq~d~N9FHJkZZL5Xc~X6mRqh9CqknNEOtJjiVjePLalPlR5aAKp0UnzDw__",
    "https://s3-alpha-sig.figma.com/img/72b1/9f76/b3f423d5eaf8515f3475dad4b0476b6e?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J5svaSZnkQfqmJKF4jYM5TbrQ4Fp6psNMAy~1Vm1iwmBP-A-bZm6QaAacOHEcGIVTD2CSVgwmDUXIAS1VqbzqrE4~lVA2hGq~FeUkrmCs5lMIR4~L7lj9nrGSz6dpfVQY4YuSHNZoPvivGogryfBt-02aBwcf7~olNpbNVUFy-u-SLMczmU2bH2Va4S8tVrj6LhWjku1iRF43IsZyZK--O8gK2HG7b4BwF3GbBA-9gkoQFP8UHaxqZd5mg1e4-zULKXXQdzSi3Nqw0kz8NJi-65pSV1NNMvZ8GhZ~vRoM4L4EMGK2U~gUupuwKRjChwvfGDRST6s9GF~-a~HI9QYWw__",
    "https://s3-alpha-sig.figma.com/img/635c/4035/b29dbd933b87cf179e20d5cfc82b35ea?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dvRfHX8lPxNasflVsbMp7pGUFWSg2jwipZzpzet0ZtTRwQefKpzQIfOIkw-ccsgl5HKGiGq6jTirxYgo8kud2XVMKwf5KpgIeY-9g9X9Ac4xvgx4tuvE-EFxnce~~zVzAvpNRo9JH5IAs7OGOMp-nLxk5JlTXc3RglWrGZ3dT3E~YAXjATsa02o5Z6-QhxTBLzJYqLMRtvGXO6d1KzfDRGWflgtPqAY~4c~hnaLvRx3CKR8XwbXRdpU19DnH-Hcdf7xW5~67bfyboXdxFvaihaKfzzRIZgHQPUz0JZB9fJlgtmhFOZE3F6JtqgXYaqn1oaQ-rNyzbXQ1jEt1juvNHw__",
  ];
  return (
    <div className="mt-10 grid sm:grid-cols-2 grid-cols-1 w-full justify-center gap-4">
      {cardData.map((card) => (
        <div
          key={card}
          className="max-w-[390px] max-h-[620px] text-gray-600 rounded-[18px] bg-gray-100 flex-shrink-0 p-4"
        >
          <img
            src={card}
            alt="cover"
            className="rounded-[18px] w-[363px] h-[255px] object-cover aspect-square"
          />
          {/* <ImageBar /> */}
          <div className="mt-8">
            <div>
              <div className="flex justify-between mb-3 text-black font-semibold">
                <p>Target IRR:</p>
                <p>5%</p>
              </div>
              <div className="flex justify-between mb-3 text-black font-semibold">
                <p>Estimated Hold Period:</p>
                <p>3years</p>
              </div>
            </div>
            <div className="text-gray-700 mb-4">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate reprehenderit nemo a porro quis. Error reprehenderit
                atque molestiae culpa tenetur dolores molestias dicta eaque,
                officia architecto
              </p>
            </div>
            <div className="text-gray-700 mb-4 text-sm">
              <p>December 27, 2023</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
