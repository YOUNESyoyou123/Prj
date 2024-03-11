import React from "react";
import NavBare from "../Component/NavBare";
import Image1 from "./image/1.png"
import Image2 from "./image/2.png"
import Image3 from "./image/3.png"
import Image4 from "./image/4.png"
import Image5 from "./image/5.png"
import Image6 from "./image/6.png"
import SFooter from "../Component/footer";



function Categorie() { 
    return <>
    <NavBare/>

    <div className=" max-sm:grid-rows-6 max-sm:px-3  max-sm:h-[800px] max-sm:py-20  max-sm:grid-cols-2   min-[540px]:grid-cols-2 min-[540px]:grid-rows-3  min-[540px]:h-[520px] min-[540px]:pl-16  min-[540px]:py-10  main grid  lg:grid-cols-5  lg:grid-rows-2 lg:h-[480px] lg:pl-20 lg:pt-10  grid-cols-5  pl-20  grid-rows-2 h-[480px] bg-[#EBEBEB] pt-10 z-10  " >
    <div  className="max-sm:row-start-1 max-sm:col-span-2 max-sm:h-[180px]          max-sm:col-start-2   min-[540px]:col-start-2 min-[540px]:row-start-1  min-[540px]:h-[120px]                                                   lg:grid-rows-1 lg:h-[180px] lg:col-span-1 lg:col-start-2   lg:w-48 lg:flex lg:flex-col lg:items-center lg:justify-center  lg:row-start-1    col-span-1 col-start-3 w-48  h-[180px] flex flex-col items-center justify-center	 bg-white  rounded-3xl border-2   text-gray-900 ring-3 ring-inset ring-gray-300  drop-shadow-md hover:-translate-y-2 hover:border-[#B80000] ease-in-out duration-300  hover:drop-shadow-2xl  " ><img src={Image2} alt="" className="w-[80px]   h-14   "  />  <h5 className=" text-[#B80000] text-center mt-2 text-xl  ">Math</h5> </div>
    <div  className="max-sm:row-start-1 max-sm:col-span-2 max-sm:h-[180px]          max-sm:col-start-1   min-[540px]:col-start-1 min-[540px]:row-start-1  min-[540px]:h-[120px]                                                   lg:grid-rows-1 lg:h-[180px] lg:col-span-1 lg:col-start-3  lg:w-48 lg:flex lg:flex-col lg:items-center lg:justify-center  lg:row-start-1   col-span-1 col-start-2 w-48  h-[180px] flex flex-col items-center justify-center	 bg-white  rounded-3xl border-2   text-gray-900 ring-3 ring-inset ring-gray-300  drop-shadow-md hover:-translate-y-2 hover:border-[#B80000] ease-in-out duration-300  hover:drop-shadow-2xl    "><img src={Image1} alt="" className="w-[80px]  h-14     " />  <h5 className=" text-[#B80000] text-center mt-2 text-xl  " >Informatique</h5> </div>
    <div  className="max-sm:row-start-3 max-sm:col-span-2 max-sm:h-[180px]          max-sm:col-start-1   min-[540px]:col-start-1 min-[540px]:row-start-2  min-[540px]:h-[120px]                                                   lg:grid-rows-1 lg:h-[180px] lg:col-span-1 lg:col-start-4  lg:w-48 lg:flex lg:flex-col lg:items-center lg:justify-center  lg:row-start-1   col-span-1 col-start-4 w-48  h-[180px] flex flex-col items-center justify-center	 bg-white  rounded-3xl border-2   text-gray-900 ring-3 ring-inset ring-gray-300  drop-shadow-md hover:-translate-y-2 hover:border-[#B80000] ease-in-out duration-300  hover:drop-shadow-2xl  " ><img src={Image4} alt="" className="w-[80px]   h-14   "  />  <h5 className=" text-[#B80000] text-center mt-2 text-xl  ">Chimic</h5> </div>
    <div  className="max-sm:row-start-3 max-sm:col-span-2 max-sm:h-[180px]          max-sm:col-start-2   min-[540px]:col-start-2 min-[540px]:row-start-2  min-[540px]:h-[120px]                                                   lg:grid-rows-2 lg:h-[180px] lg:col-span-1 lg:col-start-2  lg:w-48 lg:flex lg:flex-col lg:items-center lg:justify-center  lg:row-start-2   col-span-1 col-start-2 w-48  h-[180px] flex flex-col items-center justify-center	 bg-white  rounded-3xl border-2   text-gray-900 ring-3 ring-inset ring-gray-300  drop-shadow-md hover:-translate-y-2 hover:border-[#B80000] ease-in-out duration-300  hover:drop-shadow-2xl  " ><img src={Image3} alt="" className="w-[80px]   h-14   "  />  <h5 className=" text-[#B80000] text-center mt-2 text-xl  ">Phisique</h5> </div>
    <div  className="max-sm:row-start-5 max-sm:col-span-2 max-sm:h-[180px]          max-sm:col-start-1   min-[540px]:col-start-1 min-[540px]:row-start-3  min-[540px]:h-[120px]                                                   lg:grid-rows-2 lg:h-[180px] lg:col-span-1 lg:col-start-3  lg:w-48 lg:flex lg:flex-col lg:items-center lg:justify-center  lg:row-start-2   col-span-1 col-start-3 w-48  h-[180px] flex flex-col items-center justify-center	 bg-white  rounded-3xl border-2   text-gray-900 ring-3 ring-inset ring-gray-300  drop-shadow-md hover:-translate-y-2 hover:border-[#B80000] ease-in-out duration-300  hover:drop-shadow-2xl   " ><img src={Image5} alt="" className="w-[80px]   h-14   "  />  <h5 className=" text-[#B80000] text-center mt-2 text-xl  ">Math&Info</h5> </div>
    <div  className="max-sm:row-start-5 max-sm:col-span-2 max-sm:h-[180px]          max-sm:col-start-2   min-[540px]:col-start-2 min-[540px]:row-start-3  min-[540px]:h-[120px]                                                   lg:grid-rows-2 lg:h-[180px] lg:col-span-1 lg:col-start-4  lg:w-48 lg:flex lg:flex-col lg:items-center lg:justify-center  lg:row-start-2   col-span-1 col-start-4 w-48  h-[180px] flex flex-col items-center justify-center	 bg-white  rounded-3xl border-2   text-gray-900 ring-3 ring-inset ring-gray-300  drop-shadow-md hover:-translate-y-2 hover:border-[#B80000] ease-in-out duration-300  hover:drop-shadow-2xl   " ><img src={Image6} alt="" className="w-[80px]   h-14   "  />  <h5 className=" text-[#B80000] text-center mt-2 text-xl  ">Phisique&chimique</h5> </div>
    </div>
    <SFooter/>
    </>
}

export default Categorie;