import { ImagesEvent, useAllGallery, useAllGalleryCategory } from "@/libs/api/Event";
import Image from "next/image";
import { useMemo, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const PageGallery = () : JSX.Element => {
const [selectedCategory, setSelectedCategory] = useState("all");

const {dataEvents} = useAllGallery(true)
const {dataEventsCategory} = useAllGalleryCategory(true,selectedCategory)
const [dropDown, setDropDown] = useState(false);
    const dataImage = useMemo(() => {
        if(selectedCategory === 'all') {
            return dataEvents?.flatMap((e) => e.images)
        } else {
            return dataEventsCategory?.map((e) => e.images)[0]
        }
    },[selectedCategory,dataEvents,dataEventsCategory]) 

const handleCategoryChange = (category:string) : void => {
    setSelectedCategory(category)
}

  return (
    <div className="flex overflow-hidden w-full lg:gap-2 pb-3 lg:pb-0  flex-col lg:flex-row    rounded-md lg:rounded-none ">
      <div className={` lg:hidden mb-2 rounded-lg ${dropDown ? 'rounded-b-none' :''}  bg-gradient-to-tr from-green-400 font-black text-slate-800 w-[40%] md:w-[20%]  to-slate-500 relative`}>
        <div
          onClick={() => {
            setDropDown(!dropDown)
          }}
          className="flex  items-center w-full p-2 justify-between"
        >
          <h1 className="ms-3 capitalize">{selectedCategory} </h1>
          <IoMdArrowDropdown size={25} />
        </div>

        <div
       
          className={`absolute top-10  z-20 rounded-br-md overflow-hidden bg-gradient-to-tr from-green-400  to-slate-500 w-full  flex flex-col justify-center items-center ${
            dropDown ? "block" : "hidden"
          }`}
        >
            <div onClick={() => {
                    handleCategoryChange('all');
                    setDropDown(false)
                  }}  className="border-b pb-1 w-full border-black text-center">
                    All
                </div>
            {dataEvents?.map((e,i) => (
                <div onClick={() => {
                    handleCategoryChange(e.category);
                    setDropDown(false)
                  }}  key={i} className="border-b pb-1 w-full border-black text-center">
                    {e.category}
                </div>
            ) )}
          
        </div>
      </div>
      <div className="w-[15%] hidden lg:flex flex-col rounded-s-md gap-2  ">
        <div
          onClick={() => {
            handleCategoryChange("all");
          }}
          className={`w-full rounded-md bg-gradient-to-tr from-green-400 to-slate-500 py-3 cursor-pointer ${selectedCategory === 'all' ? '' : 'grayscale'} `}
        >
          <h1 className=" font-merriweather  text-lg text-black font-semibold tracking-wider   text-center  ">
            ALL
          </h1>
        </div>
        {dataEvents?.map((e, i) => (
            <div
              key={i}
              onClick={() => {
                handleCategoryChange(e.category);
              }}
              className={`w-full rounded-md bg-gradient-to-tr from-green-400 to-slate-500 py-3  ${selectedCategory === e.category ? '' : 'grayscale'}`}
            >
              <h1 className=" font-merriweather  text-lg text-black font-semibold tracking-wider   text-center  ">
                {e.category}
              </h1>
            </div>
          ))}
      </div>
      <div className="min-h-[450px] xl:min-h-[750px] w-full">
      <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 lg:p-5  bg-slate-700 border-4 p-3 border-green-400  border-opacity-30 gap-4 lg:justify-center lg:w-full lg:border-2   lg:rounded-md ">
        {(dataImage as ImagesEvent[])?.map((e, i) => (
          <div
            className="p-2  w-full   border  bg-gradient-to-br from-slate-500 to-gray-500      border-white"
            key={i}
          >
            <div className="relative w-[100%] rounded-md overflow-hidden max-w-[400px] lg:w-[100%]  lg:h-[12rem] aspect-square">
              <Image src={e.url} alt={e.url} fill />
            </div>
          </div>
        ))}
      </div>
      </div>
     
    </div>
  );
}

export default PageGallery
