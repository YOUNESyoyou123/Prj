import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";


function SFooter() { 
return <>

<div className="max-sm:h-14  max-md:h-18 flex item-center p-5 justify-between bg-white h-22 shadow-xl w-[100%] absolute bottom-0  " >
    <div className="max-sm:pl-1 max-md:pl-2 flex items-center pl-5 ">
    <FaPhoneVolume className="max-sm:text-[18px] max-md:text-[20px]  text-[35px] hover:text-[#B80000]  hover:-translate-y-2   ease-in-out duration-300" />
    <div className="max-sm:text-[18px] max-md:text-[20px] max-md:pl-2  text-2xl pl-4 hover:text-[#B80000]  hover:-translate-y-2   ease-in-out duration-300 ">Aide</div> </div>
    
    
    
    <div className="flex items-center p item-center ">
    <FaRegCopyright className="max-sm:pl-1 max-md:pl-2 text-2xl  hover:text-[#B80000]  hover:-translate-y-2   ease-in-out duration-300 " />   
    <p className="max-sm:pl-1 max-sm:text-[10px]  max-md:pl-2  pl-4">All Copyrights Reserved</p> 
    </div>

    <div className=" flex items-center pr-5 ">
    <FaFacebook  className="max-sm:size-[20px] max-md:size-[25px]  mx-1 text-[#B80000] size-[35px]   hover:text-black  hover:-translate-y-2   ease-in-out duration-300   "/>
    <FaTwitter className="max-sm:size-[20px]  max-md:size-[25px] mx-1 text-[#B80000] size-[35px]     hover:text-black  hover:-translate-y-2   ease-in-out duration-300  "/>
    <MdEmail className="max-sm:size-[20px]  max-md:size-[25px] text-[#B80000] size-[35px] mx-1        hover:text-black  hover:-translate-y-2   ease-in-out duration-300  "/>
    <FaInstagram className="max-sm:size-[20px]  max-md:size-[25px] text-[#B80000] size-[35px] mx-1    hover:text-black  hover:-translate-y-2   ease-in-out duration-300  "/>
    </div>


</div>
</>



}
export default SFooter ;