import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDiv = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];

  useGSAP(function () {
    gsap.to(imageDiv.current, {
      scrollTrigger: {
        trigger: imageDiv.current,
        markers: true,
        start: "top 34.5%",
        end: "top -95%",
        pin: true,
        scrub: true, // smooth scrubbing  with 1s easing

        onUpdate: (element) => {
          const imageIndex = Math.floor(
            element.progress * (imageArray.length - 1),
          );

          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });
  //return
  return (
    <div>
      <div className="section1">
        <div>
          <div
            ref={imageDiv}
            className="absolute h-[10h] w-[15vw] overflow-hidden rounded-4xl left-[30vw] top-30 bg-red-500"
          >
            <img
              ref={imageRef}
              className="h-full w-full object-cover"
              src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            />
          </div>
          <div className="relative font-[font2] ">
            <div className="pt-[55vh]">
              <h1 className="text-[20vw]  text-center uppercase leading-[18vw]">
                Soixan7e <br />
                Douze
              </h1>
            </div>
            <div className="pl-[40%] mt-20">
              <p className="text-5xl">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Notre curiosité
                nourrit notre créativité. On reste humbles et on dit non aux
                gros egos, même le vôtre. Une marque est vivante. Elle a des
                valeurs, une personnalité, une histoire. Si on oublie ça, on
                peut faire de bons chiffres à court terme, mais on la tue à long
                terme. C’est pour ça qu’on s’engage à donner de la perspective,
                pour bâtir des marques influentes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
