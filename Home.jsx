import React, { useRef } from "react";
import NavBare from "./NavBare";
import Search from "./SearchBare";
import Slide from "./Slide";
import HomeBg from "../assets/images/chris-lawton-zvKx6ixUhWQ-unsplash.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import DownAroow from "../assets/images/down-arrow-svgrepo-com.svg";
import { useEffect } from "react";
import { useState } from "react";
import Events from "./BooksData(test)/EventsData";
import EventsSection from "./BooksData(test)/EventsSection";
import serachLogo from "../assets/images/search-svgrepo-com.svg";


 

function Home(props) {

  // define parrallaxref to  set which page do we need to go
  const parallaxRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const width = window.innerWidth;
  console.log(width);
  const goToSecondPage = () => {
    if (width <= 430) {
      parallaxRef.current.scrollTo(2);
     
    } else {
      parallaxRef.current.scrollTo(0.8);
    }
  };
  // temporarly array   of the events  for the test
  const result = Events.map((element, index) => {
    return <EventsSection key={element.id} item={element} />;
  });
  console.log(result);

  // Map in the event array to display it //

  return (  


    <Parallax pages={1.518} ref={parallaxRef}>
      <ParallaxLayer offset={0} speed={0} factor={1 / 2}>
      <NavBare/>
      
        <div className=" overscroll-y-none">
          <div>
            <div className="flex items-center justify-center mt-4">
              <h1 className="text-2xl ls leading-xl mt-2 font">
                Bienvenue à La Bibliothèque <br />
                <span className="text-red-700">De La Faculté Des Sciences</span>
              </h1>
            </div>
            <Search />
          </div>
          <div className="mt-5">
            <h1 className="text-center text-[20px] font-semibold pb-2">
              Livres tendances
            </h1>
            <Slide />
            <div className="flex items-center justify-center mt-5 py-2">
              <button className="py-2 text-center text-white mt-2 px-5 rounded-md bg-red-700 flex justify-center item-center ">
                Voir Plus
              </button>
            </div>
            <div className="flex justify-center items-center py-2">
              <button className=" text-center flex justify-center item-center pb-2 sm:mt-4 ">
                {" "}
                <img
                  src={DownAroow}
                  alt=""
                  width={30}
                  className=" animate-bounce"
                  onClick={goToSecondPage}
                />
              </button>
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.9} speed={1}>
        <div className="overscroll-y-none">
          <div className="sm:flex sm:justify-center sm:items-center   h-full sm:mt-24 ">
            <div className="sm:flex sm:flex-row  flex-col ">
              <div className="relative pb-2">
                <div className="absolute flex-col text-white sm:w-1/2 px-4 ml-20 rounded-xl sm:mt-14   mt-10 shadow-xl opacity-70 inline-flex w-auto sm:py-10 ">
                  <p className="text-4xl font-semibold">About us</p>
                  <p className="pb-2 tracking-wide py-3 ">
                    Explorez notre incroyable collection de livres qui regorge
                    de trésors littéraires et de connaissances variées, et
                    empruntez-les en ligne en seulement quelques clics. Que vous
                    soyez passionné par les classiques intemporels ou curieux
                    des dernières avancées en recherche, notre bibliothèque
                    virtuelle a tout ce qu'il vous faut pour exceller dans vos
                    études et élargir vos horizons intellectuels. Rejoignez-nous
                    dès maintenant pour enrichir votre esprit, découvrir de
                    nouveaux horizons et nourrir votre soif de savoir. Que
                    l'aventure de la connaissance commence dès aujourd'hui!
                  </p>
                </div>
                <img
                  src={HomeBg}
                  className="sm:bg-cover relative sm:opacity-100 sm:h-lvh  w-screen	brightness-50  bg-cover h-[600px]   "
                  alt="Background"
                />
                <div className="w-[600px] p-2 rounded-xl border-1 ml-2  text-gray-300 shadow-sm ring-3 ring-inset ring-gray-300 bg-[#9a96965b] absolute  -translate-y-[600px]" ><span className="text-gray-100 text-2xl">About us </span><br /> Explorez notre incroyable collection de livres qui regorge
de trésors littéraires et de connaissances variées, et
empruntez-les en ligne en seulement quelques clics. Que vous
soyez passionné par les classiques intemporels ou curieux
des dernières avancées en recherche, notre bibliothèque
virtuelle a tout ce qu'il vous faut pour exceller dans vos
études et élargir vos horizons intellectuels. Rejoignez-nous
dès maintenant pour enrichir votre esprit, découvrir de
nouveaux horizons et nourrir votre soif de savoir. Que
l'aventure de la connaissance commence dès aujourd'hui!</div>
<div className="w-[600px] p-2 rounded-xl border-1 ml-2  text-gray-300 shadow-sm ring-3 ring-inset ring-gray-300 bg-[#9a96965b] absolute  translate-x-[600px] -translate-y-[400px]" ><span className="text-gray-100 text-2xl">Library news</span><br />we have more than +1000 books <br/>                          Explore 1000+ books in Computer Science, Chemistry,
                          and Mathematics. Dive into coding, chemical reactions,
                          and equations. Join us for endless learning
                          opportunities! <br /> <span className="ali">read more</span>
</div>
<div className="w-[600px] p-2 rounded-xl border-1 ml-2  text-gray-300 shadow-sm ring-3 ring-inset ring-gray-300 bg-[#9a96965b] absolute  -translate-y-[260px]" ><span className="text-gray-100 text-2xl">About us </span><br /> Explorez notre incroyable collection de livres qui regorge
de trésors littéraires et de connaissances variées, et
empruntez-les en ligne en seulement quelques clics. Que vous
soyez passionné par les classiques intemporels ou curieux
des dernières avancées en recherche, notre bibliothèque
virtuelle a tout ce qu'il vous faut pour exceller dans vos
études et élargir vos horizons intellectuels. Rejoignez-nous
dès maintenant pour enrichir votre esprit, découvrir de
nouveaux horizons et nourrir votre soif de savoir. Que
l'aventure de la connaissance commence dès aujourd'hui!</div>




              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

export default Home;
