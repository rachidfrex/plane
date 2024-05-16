import React from "react";
import man from "../assets/images/man.png";
function Exp() {
  return (
    <div className=" mx-5 flex flex-col  justify-center  py-14 items-center">
      <div className="flex flex-col md:flex-row  gap-10  font-sofia  max-w-[1100px] justify-center items-start w-full  ">
      <div className=" hidden h-[500px] w-[700px]  md:flex justify-center items-center bg-transparent ">
          <img
            className=" w-[60%] md:h-fit  md:w-full  "
            src={man}
            alt="airplaint"
          />
          </div>
        <div className="flex flex-col justify-center items-start w-full">
        <h1 className="flex text-5xl text-start font-bold justify-center items-center ">
            Unaccompanied Minors Lounge
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-5">
            <div className="">
                <h3
                className="text-2xl  w-full flex justify-between gap-4 items-center "
                >
                    Help through the airport
                </h3>
                <p
                className="text-gray-500 text-sm  flex justify-between gap-4 items-center "
                >
                    We'll help your child through the airport when you can't be there , from check-in to boarding and arrival.
                </p>
            </div>
            <div className="">
                <h3
                className="text-2xl  w-full flex justify-between gap-4 items-center "
                >
                    In-flight assistance
                </h3>
                <p
                className="text-gray-500 text-sm  flex justify-between gap-4 items-center "
                >
                    We'll make sure your child is comfortable and safe on board , with regular check-ins from our cabin crew.
                </p>
                </div>
            <div className="">
                <h3
                className="text-2xl  w-full flex justify-between gap-4 items-center "
                >
                    Arrival support
                </h3>
                <p
                className="text-gray-500 text-sm  flex justify-between gap-4 items-center "
                >
                    We'll help your child when they arrive at their destination and make sure they're met by someone they know.
                </p>
                </div>
            <div className="">
                <h3
                className="text-2xl  w-full flex justify-between gap-4 items-center "
                >
                    Lounge access
                </h3>
                <p
                className="text-gray-500 text-sm  flex justify-between gap-4 items-center "
                >
                    Your child can relax in our lounge before their flight departs , with snacks and entertainment provided , and we'll keep you updated on their journey.
                </p>
                </div>

            
        </div>
        </div>
      </div>
    </div>
  );
}

export default Exp;
