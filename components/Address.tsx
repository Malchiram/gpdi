import React from "react";
// import MapsComponent from "./MapsComponent";
import Image from "next/image";
// const MapsComponent = dynamic(() => import("./MapsComponent"), { ssr: false });
import FacebookAnimation from "@/libs/lotties/facebook.json";
import InstagramAnimation from "@/libs/lotties/instagram.json";
import WhatsappAnimation from "@/libs/lotties/whatsapp.json";
import Link from "next/link";
import Lottie from "lottie-react";
// import dynamic from "next/dynamic";
function Address() {
  return (
    <div className="p-5  flex flex-col  xs:border-none border-b-2 ">
      <div className="text-center mb-3 font-bebas_neue font-semibold text-4xl tracking-widest">
        <p>ADDRESS</p>
      </div>
        <div className="aspect-[16/9] w-full max-w-[60rem] relative border-4 my-3 mx-auto  rounded-md md:p-5 bg-gradient-to-b from-red-500 to-purple-500  ">
          {/* <MapsComponent /> */}
        </div>
        <div className="  w-full   lg:max-w-[60rem] xl:w-full mx-auto    ">
          <div className=" flex xl:h-full  ">
            <div className="relative aspect-square  w-[25%] max-w-[10rem] max-h-[10rem]   xl:w-[15%] lg:w-[30%]    ">
              <Image
                src={"/assets/logoGPdI.jpeg"}
                fill
                alt="shekinah"
                className=""
              />
            </div>
            <div className="flex justify-between w-full   px-0 ">
              <div className="w-[80%] xl:gap-y-3 xl:ms-4 items-center justify-center flex flex-col ps-1">
                <h1 className="font-Playfair_Display tracking-widest  xs:text-2xl sm:text-3xl md:text-4xl xl:text-3xl font-semibold">
                  GPdI Shekinah
                </h1>
                <p className="font-sans text-xs sm:text-sm md:text-base lg:text-base   ">
                  Graha harapan Blok E 13/2{" "}
                </p>
                <p className="font-sans text-xs sm:text-sm md:text-base lg:text-base   ">
                  Mustika Jaya , Kota Bekasi
                </p>
                <p className="font-sans  text-xs sm:text-sm md:text-base lg:text-base   ">
                  17158
                </p>
              </div>
              <div className="flex flex-col items-end justify-between w-[20%]  md:gap-2   xl:px-1">
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=100069837764636"
                  }
                  className="relative  w-[70%] xs:w-[30%]  md:w-[25%] sm:w-[35%] xl:w-[35%]"
                >
                  <Lottie
                    animationData={FacebookAnimation}
                    loop
                    autoPlay
                    size={30}
                  />
                </Link>
                <Link
                  href={"https://www.instagram.com/gpdi.shekinah/"}
                  className="relative w-[70%] xs:w-[30%] md:w-[25%] sm:w-[35%] xl:w-[35%] border rounded bg-white"
                >
                  <Lottie
                    animationData={InstagramAnimation}
                    height={30}
                    width={30}
                  />
                </Link>
                <Link
                  href={"https://wa.me/6281316145742"}
                  className="relative w-[70%] xs:w-[30%] md:w-[25%] sm:w-[35%] xl:w-[35%] border rounded bg-white"
                >
                  <Lottie
                    animationData={WhatsappAnimation}
                    height={30}
                    width={30}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Address;
