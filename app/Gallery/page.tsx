
'use client'
import PageGallery from "@/components/PageGallery";
export interface GalleryImage {
  category: string;
  images: Img[];
}

interface Img {
  url: string;
}

 function Page() {
 
  return (
    <div className=" w-full   ">
      <div className="flex   flex-col p-4 gap-4 ">
        <div className="flex justify-center ">
          <h1 className="text-3xl xl:text-4xl text-center font-bold">
            Gallery
          </h1>
        </div>
       <PageGallery/>
      </div>
    </div>
  );
}
export default Page;

