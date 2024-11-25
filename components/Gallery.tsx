import { images } from "@/libs/image";
import EmblaCarousel from "./Swiper";
import Link from "next/link";
function Gallery() {
  return (
      <div className=" xl:border-r-slate-600 py-3  p-0 md:h-full xl:border-r-2 md:p-4 flex flex-col items-center">
        <p className="text-center mb-3 font-bebas_neue font-semibold text-4xl tracking-widest">
          Gallery
        </p>
        <EmblaCarousel imagesType={images} />
        <div className="bg-gradient-to-br from-red-400 to-pink-400 py-2 px-4 mt-4 rounded-full hover:cursor-pointer hover:scale-105 ">
          <Link href={'/Gallery'}>Show More</Link>
        </div>
      </div>
     
  );
}

export default Gallery;
