// import Image from "next/image";
// import UpComingEvents from "./UpComingEvents";
// import axios from "axios";
// async function fetchEvents() {
//     try {
//       const res = await axios.get('http://localhost:3000/api/proxy?endpoint=/api/all-event');
  
//       // Cek jika respons sukses
//       if (res.status !== 200) throw new Error('Failed to fetch events');
      
//       return res.data;
//     } catch (error) {
//       console.error("Error fetching events:", error);
//       throw new Error("Failed to fetch events");
//     }
//   }

export default async function Event(
) {
    // const events = await fetchEvents();
    // const eventsData = events
    
  return (
    <section className=" relative   md:flex-wrap md:grid md:grid-cols-2  xl:grid-cols-3  justify-center w-full ">
         {/* <UpComingEvents countdownDate={new Date(eventsData?.dateEvent)} titleEvent={eventsData?.titleEvent} dateEvent={eventsData?.dateTitle} /> */}
      <div className=" relative w-full h-[400px] xl:h-full  ">
        {/* <Image src={eventsData?.eventImage?.url ?? '/assets/event.jpg'}  alt="event" fill /> */}
      </div>
   
      <div className=" p-4 md:p-10 xl:p-5  text-white  col-span-2 xl:col-span-1  w-full md:h-full">
        <div className="  border-2 rounded-lg px-3 flex flex-col gap-y-3 mx-auto">
        <div className="text-center font-serif text-3xl">
            <h1>Jadwal Ibadah</h1>
        </div>
        <div className="w-full border-b  flex justify-between items-center ">
            <div className="w-[30%] text-xs">
                Sunday
            </div>
            <div className="w-[60%]  text-xs text-end ">
                <p>Sunday Service I : 06:00 AM</p>
                <p>Sunday Service II : 10:00 AM</p>
                <p>Sunday Service III : 17:00 PM</p>
            </div>

        </div>
        <div className="w-full border-b  flex justify-between items-center ">
            <div className="w-[30%] text-xs">
                Monday
            </div>
            <div className="w-[60%]  text-xs text-end ">
                <p>Ibadah Raya I</p>
                <p>06:00 AM , 10:00 AM, 17:00 PM</p> 
                
            </div>

        </div>
        <div className="w-full border-b   flex justify-between items-center ">
            <div className="w-[30%] text-xs">
                Tuesday
            </div>
            <div className="w-[60%]  text-xs text-end ">
                <p>Ibadah Raya I</p>
                <p>06:00 AM , 10:00 AM, 17:00 PM</p> 
                
            </div>

        </div>
        <div className="w-full border-b   flex justify-between items-center ">
            <div className="w-[30%] text-xs">
                Wednesday
            </div>
            <div className="w-[60%]  text-xs text-end ">
                <p>Ibadah Raya I</p>
                <p>06:00 AM , 10:00 AM, 17:00 PM</p> 
                
            </div>

        </div>
        <div className="w-full border-b   flex justify-between items-center ">
            <div className="w-[30%] text-xs">
                Thursday
            </div>
            <div className="w-[60%]  text-xs text-end ">
                <p>Ibadah Raya I</p>
                <p>06:00 AM , 10:00 AM, 17:00 PM</p> 
                
            </div>

        </div>
        <div className="w-full border-b   flex justify-between items-center ">
            <div className="w-[30%] text-xs">
                Friday
            </div>
            <div className="w-[60%]  text-xs text-end ">
                <p>Ibadah Raya I</p>
                <p>06:00 AM , 10:00 AM, 17:00 PM</p> 
                
            </div>

        </div>
        <div className="w-full   flex justify-between items-center ">
            <div className="w-[30%] text-xs">
                Saturday
            </div>
            <div className="w-[60%]  text-xs text-end ">
                <p>Ibadah Raya I</p>
                <p>06:00 AM , 10:00 AM, 17:00 PM</p> 
                
            </div>

        </div>
        </div>
   

      </div>
    </section>
  );
}

