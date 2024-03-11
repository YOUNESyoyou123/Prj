import React from "react";
import LoginImg from "../assets/images/booooook.png";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Importing Link from react-router-dom
import NavBare from "../Component/NavBare";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";






function Login() {
  return (
    <>
    <NavBare />
    
      <div className="login h-4/5 grid grid-cols-11 gap-10 mt-2  md:grid-cols-1 md:grid-rows-2 max-sm:grid-cols-1 max-sm:grid-rows-2   ">
        <div className="rounded-md  shadow-xl ring-gray-300  p-6 border-t-0 border-l-2 border-r-2 border-b-2 ml-11 col-span-5 m-auto m-y-0 inline-block md:row-start-2  md:w-3/4 md:m-auto max-sm:w-3/4 max-sm:m-auto max-sm:row-start-2  ">
          <p className="mt-1 text-2xl text-left translate-y-12 font-semibold md:w-[600px] md:m-auto  max-sm:text-1xl ">
            Explorez notre vaste collection de livres et empruntez-les en ligne en quelques clics. Du savoir classique aux dernières recherches, trouvez tout ce dont vous avez besoin pour exceller dans vos études. Rejoignez-nous pour enrichir votre esprit et élargir vos horizons.
          </p>
          <img src={LoginImg} className="size-[339px] translate-y-[10px] -translate-x-24 md:size-[500px] md:m-auto md:translate-y-[px]  max-sm:m-auto  " alt="Logo-image " />
        </div>
        <div className="entre rounded-md md:mt-10 shadow-xl ring-gray-300 col-span-5 p-6 border-t-0 border-l-2 border-r-2 border-b-2 md:w-3/4 md:m-auto  ">
          <div className="translate-y-11">
            <p className="text-4xl font-semibold w-4/5 text-center mb-8 m-auto max-sm:text-2xl">Bienvenue à La Bibliothèque <span className="text-[#B80000] justify-center">De La Faculté Des Sciences</span></p>
            <form action="" className="grid grid-rows-4">
              <input type="email" placeholder="User name:" className="w-96 h-12  m-auto  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl" />
              <input type="password" id="password" name="password" placeholder="Password:" className="w-96 h-12 m-auto rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl" />
              <button type="submit" className="text-white h-12 my-4 w-32 m-auto h bg-[#B80000] rounded-md  hover:bg-white hover:text-black mb-4 hover:border-red-500 hover:border-solid hover:rounded-lg ease-linear hover:ring-1  hover:text-[20px] duration-300   ">Login</button>
              <div className="liens flex justify-center">
          
<div className="liens flex justify-center">
  <FaFacebook className="mx-1 text-[#B80000] text-[40px] hover:text-[45px] transform  hover:text-black  hover:-translate-y-2   ease-in-out duration-300" />
  <FaTwitter className="mx-1 text-[#B80000] text-[40px] hover:text-[45px]  hover:text-black  hover:-translate-y-2   ease-in-out duration-300" />
  <MdEmail className="text-[#B80000] text-[40px] mx-1 hover:text-[45px]  hover:text-black  hover:-translate-y-2   ease-in-out duration-300" />
  <FaInstagram className="text-[#B80000] text-[40px] mx-1 hover:text-[px]  hover:text-black  hover:-translate-y-2   ease-in-out duration-300" />
</div>


          </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;