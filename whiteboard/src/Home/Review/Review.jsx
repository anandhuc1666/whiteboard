import React from "react";
import aiimg1 from "../../assets/aiimg1.png";
import aiimg2 from "../../assets/aiimg2.png";
import aiimg3 from "../../assets/aiimg3.png";
import aiimg4 from "../../assets/aiimg4.png";

function Review() {
  return (
    <div className="w-full h-[70vh] mt-3 flex items-center justify-center flex-col gap-4">
      <div className="w-full pl-16 font-medium font-Inter text-4xl">
        <p>Reviews</p>
      </div>
      <div className="w-full h-[50vh] bg-[#5F48D5] flex items-center justify-evenly px-5">
        <div className="w-[380px] h-[45vh] bg-[#F8F8F8] rounded-2xl flex flex-col justify-evenly">
          <div className="w-full px-5">
            <p className="text-justify font-Inter">
              The teacher explains everything in a clear and easy-to-understand
              manner. The videos are informative and really helpful for learning
              at your own pace. Great teaching style!
            </p>
          </div>
          <div className="w-full px-10">
            <div
              className="w-[55px] h-[55px] rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${aiimg1})` }}
            ></div>
          </div>
        </div>
        <div className="w-[550px] h-[45vh] bg-[#F8F8F8] rounded-2xl flex flex-col justify-evenly">
          <div className="w-full px-5">
            <div className="text-justify font-Inter">
              <p>
                Teaching online has been an amazing experience for me. I love
                connecting with students through my videos and helping them
                understand concepts in a fun and easy way. Seeing them improve
                and gain confidence makes all the effort worthwhile!
              </p>
            </div>
          </div>
          <div className="w-full px-10 flex">
            <div
              className="w-[55px] h-[55px] rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${aiimg1})` }}
            ></div>
            <div
              className="w-[55px] h-[55px] rounded-full bg-cover bg-center absolute ml-10"
              style={{ backgroundImage: `url(${aiimg2})` }}
            ></div>
          </div>
        </div>
        <div className="w-[380px] h-[45vh] bg-[#F8F8F8] rounded-2xl flex flex-col justify-evenly">
          <div className="w-full px-5">
            <p className="text-justify font-Inter">
              I always try to teach in a way that feels personal and supportive,
              even through the screen. My goal is to make each student feel
              confident and motivated to keep learning. It’s amazing to see how
              online learning can bring people together and make education
              accessible to everyone.
            </p>
          </div>
          <div className="w-full px-10 flex">
            <div
              className="w-[55px] h-[55px] rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${aiimg4})` }}
            ></div>
          </div>
        </div>
        <div className="w-[380px] h-[45vh] bg-[#F8F8F8] rounded-2xl flex flex-col justify-evenly">
          <div className="w-full px-5">
            <p className="text-justify font-Inter">
              Creating these online classes has given me the chance to reach
              learners beyond the classroom. My approach is to explain concepts
              step by step, using real-life examples to make learning more
              meaningful. I truly believe that with the right guidance and
              mindset, anyone can learn and achieve their goals.
            </p>
          </div>
                    <div className="w-full px-10 flex">
            <div
              className="w-[55px] h-[55px] rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${aiimg3})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
//bg-cover bg-center rounded-xl shadow-lg/20"
//   style={{ backgroundImage: `url(${pic1study})` }}
