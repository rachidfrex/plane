import React from "react";
import airplaints from "../assets/images/arplantwindows.png";
function Support() {
  return (
    <div className="flex flex-col gap-4 mt-14  font-sofia justify-center items-center w-full  ">
      <div className="flex flex-col gap-4  justify-center items-center  ">
        <span className="tracking-[7px] text-xl  font-bold">Travel Suport</span>
        <h1 className="flex text-5xl text-center text-bold justify-center items-center w-full">
          Plane your travel with confidence
        </h1>
        <p className="text-center text-gray-500  text-sm">
          find help with your booking and travel plans, and see what to expect
          along your journey.
        </p>
      </div>
      <div className="flex justify-center items-center ">
      <div className="flex flex-col gap-4 ">
        <div className="flex justify-center items-start gap-2  flex-col ">
          <span className=" font-bold flex justify-center items-center text-center px-4 py-1 bg-blue-700 text-white rounded-full">
            01
          </span>
          <h2 className="text-2xl font-bold   flex   items-center ">
            Booking and travel planning
          </h2>
          <p className="text-gray-500 flex items-start ">
            Find help with your booking and travel plans, and see what to expect<br />
            along your journey.
          </p>
        </div>
        <div className="flex justify-center items-start gap-3  flex-col ">
          <span className=" font-bold flex justify-center items-center text-center px-4 py-1 bg-rose-400 text-white rounded-full">
            02
          </span>
          <h2 className="text-2xl font-bold   flex   items-center ">
            Multi-risk travel insurance
          </h2>
          <p className="text-gray-500 flex items-start ">
            Find help with your booking and travel plans, and see what to expect
          </p>
        </div>
        <div className="flex justify-center items-start gap-3  flex-col ">
          <span className=" font-bold flex justify-center items-center text-center px-4 py-1 bg-orange-300 text-white rounded-full">
            03
          </span>
          <h2 className="text-2xl font-bold  flex   items-center ">
            Travel requirements by destination
          </h2>
          <p className="text-gray-500 flex items-start ">
            Find help with your booking and travel plans, and see what to expect
          </p>
        </div>
      </div>
      {/* image  */}
      <div className="flex justify-center items-center">
          <img
            className="h-[500px] w-[500px] "
            src={airplaints}
            alt="airplaint"
          />
          </div>
      </div>
    </div>
  );
}

export default Support;
