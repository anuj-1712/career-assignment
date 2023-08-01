import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export default function Slider() {
  const reviews = [
    {
      name: "Akash",
      position: "Frontend Developer",
      company: "Paytm",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ipsam perspiciatis, fugiat, dolore vitae eligendi nemo at in obcaecati consectetur quas ratione! Delectus minus officia adipisci optio, quo nostrum? Sunt error voluptatem ipsam, sapiente dolorum quos ex fugit ducimus autem amet similique dolores iusto accusamus? Modi dolor tempora vitae laborum expedita nemo esse nostrum, nihil ipsum!",
      imageUrl:
        "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "Srishti",
      position: "Product Manager",
      company: "Intuit",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fuga voluptatem ducimus reiciendis esse dolorum dolores explicabo molestias, in doloribus? Placeat laborum laboriosam, labore odio distinctio quae a alias aliquam accusamus, temporibus consequuntur aperiam voluptatem et sapiente animi quidem vel.",
      imageUrl:
        "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "Mohit",
      position: "Business Associate",
      company: "Cred",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, dolorem eveniet reprehenderit a voluptatibus unde dolore deserunt vel natus laboriosam quam quia similique vitae saepe quo incidunt sapiente numquam nesciunt eos inventore. Quod soluta libero nisi maiores illo in voluptatibus omnis, reiciendis at voluptas nesciunt dolorum quas asperiores porro itaque eligendi molestias quis dicta vitae odio?",
      imageUrl:
        "https://images.pexels.com/photos/2182974/pexels-photo-2182974.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex !== reviews.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === reviews.length - 1) {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(2);
    }
  };
  return (
    <div className="my-32 px-8">
      <h3 className="text-2xl md:text-4xl font-serif text-blue-500 font-bold text-center">
        Feedbacks from our Users
      </h3>
      <div className="flex md:flex-row flex-col gap-8 items-center justify-center my-8">
        <IconContext.Provider value={{ className: "arrow" }}>
          <button
            className="bg-blue-700 h-[60px] w-[60px] rounded-[50%] hidden md:block"
            onClick={prevSlide}
          >
            <AiOutlineArrowLeft />
          </button>
        </IconContext.Provider>
        <div className="flex md:w-10/12 w-full max-w-[1000px] shadow-lg shadow-slate-400 min-h-[400px] rounded-md overflow-hidden">
          {reviews.map((element, index) => {
            return (
              <div
                key={index}
                style={{
                  display: index === slideIndex ? "flex" : "none",
                  backgroundImage: `url(${element.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundColor: "#0b0757",
                  backgroundBlendMode: "multiply",
                  backgroundRepeat: "no-repeat",
                }}
                className="flex-col p-6"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-xl text-white">
                      {element.name}
                    </p>
                    <p className="font-semibold text-white mt-1 mb-4">
                      {element.position} at {element.company}
                    </p>
                  </div>
                  <IconContext.Provider value={{ className: "profile-icon" }}>
                    <CgProfile />
                  </IconContext.Provider>
                </div>
                <p className="text-white">"{element.review}"</p>
              </div>
            );
          })}
        </div>

        <div className="flex gap-8 md:hidden">
          <IconContext.Provider value={{ className: "arrow" }}>
            <button
              className="bg-blue-700 h-[60px] w-[60px] rounded-[50%]"
              onClick={prevSlide}
            >
              <AiOutlineArrowLeft />
            </button>
            <button
              className="bg-blue-700 h-[60px] w-[60px] rounded-[50%]"
              onClick={nextSlide}
            >
              <AiOutlineArrowRight />
            </button>
          </IconContext.Provider>
        </div>

        <IconContext.Provider value={{ className: "arrow" }}>
          <button
            className="bg-blue-700 h-[60px] w-[60px] rounded-[50%] hidden md:block"
            onClick={nextSlide}
          >
            <AiOutlineArrowRight />
          </button>
        </IconContext.Provider>
      </div>
    </div>
  );
}
