import React from "react";
import LoginImg from "../assets/images/booooook.png";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Importing Link from react-router-dom
import NavBare from "../Component/NavBare";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";






function Login() {
  return (
    <>
    <NavBare />
    
      <div className="login h-4/5 grid grid-cols-11 gap-10 mt-2">
        <div className="ml-11 col-span-5 m-auto m-y-0 inline-block">
          <p className="mt-1 text-2xl text-left translate-y-12 font-semibold">
            Explorez notre vaste collection de livres et empruntez-les en ligne en quelques clics. Du savoir classique aux dernières recherches, trouvez tout ce dont vous avez besoin pour exceller dans vos études. Rejoignez-nous pour enrichir votre esprit et élargir vos horizons.
          </p>
          <img src={LoginImg} className="size-[420px] translate-y-[40px] -translate-x-24" alt="Logo-image" />
        </div>
        <div className="entre rounded-md mt-10 shadow-xl ring-gray-300 col-span-5 p-6 border-t-0 border-l-2 border-r-2 border-b-2">
          <div className="translate-y-11">
            <p className="text-4xl font-semibold w-4/5 text-center mt-4 m-auto">Bienvenue à La Bibliothèque <span className="text-[#B80000] justify-center">De La Faculté Des Sciences</span></p>
            <form action="" className="grid grid-rows-4">
              <input type="email" placeholder="User name:" className="w-96 h-12 m-auto rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl" />
              <input type="password" id="password" name="password" placeholder="Password:" className="w-96 h-12 m-auto rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl" />
              <button type="submit" className="text-white h-12 my-4 w-32 m-auto h bg-[#B80000] rounded-md">Login</button>
            </form>
          </div>
          <div className="liens flex justify-center">
          
          <FaFacebook  className=" mx-1 text-[#B80000] size-[40px] "/>
          <FaTwitter className=" mx-1 text-[#B80000] size-[40px]" />
          <MdEmail className="text-[#B80000] size-[40px] mx-1 " />
          <FaInstagram className="text-[#B80000] size-[40px] mx-1 " />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;