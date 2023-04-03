import React, { useEffect } from "react";
import image1 from "../../asset/Banner/image19.jpg";
import image2 from "../../asset/Home/image12.jpg";
import image3 from "../../asset/Banner/image17.jpg";
import image4 from "../../asset/Home/image14.jpg";
import image5 from "../../asset/Home/image15.jpg";
import { GiCommercialAirplane } from "react-icons/gi";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import InstaLive from "../InstaLive/InstaLive";

function HomeCourse() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();
  const animation6 = useAnimation();
  const animation7 = useAnimation();
  const animation8 = useAnimation();
  const animation9 = useAnimation();
  const animation10 = useAnimation();
  useEffect(() => {
    if (inView) {
      animation1.start({
        x: 0,
        transition: {
          duration: 0.5,
        },
      });
    }
    animation2.start({
      y: 0,
      transition: {
        duration: 0.5,
      },
    });
    animation3.start({
      x: 0,
      transition: {
        duration: 0.5,
      },
    });
    animation4.start({
      x: 0,
      transition: {
        duration: 0.5,
      },
    });
    animation5.start({
      x: 0,
      transition: {
        duration: 0.5,
      },
    });
    animation6.start({
      y: 0,
      transition: {
        duration: 0.5,
      },
    });
    animation7.start({
      y: 0,
      transition: {
        duration: 0.5,
      },
    });
    animation8.start({
      y: 0,
      transition: {
        duration: 0.5,
      },
    });
    animation9.start({
      y: 0,
      transition: {
        duration: 0.5,
      },
    });
    animation10.start({
      y: 0,
      transition: {
        duration: 0.5,
      },
    });
    if (!inView) {
      animation1.start({
        x: 120,
      });
      animation2.start({
        y: 120,
      });
      animation3.start({
        x: -120,
      });
      animation4.start({
        x: 120,
      });
      animation5.start({
        x: -120,
      });
      animation6.start({
        y: 120,
      });
      animation7.start({
        y: 120,
      });
      animation8.start({
        y: 120,
      });
      animation9.start({
        y: 120,
      });
      animation10.start({
        y: 120,
      });
    }
  }, [inView, animation1, animation2, animation3, animation4, animation5,animation6,animation7,animation8,animation9,animation10]);

  const data = [
    {
      image: (
        <img src={image1} alt="" className="h-[330px] w-[400px] object-cover" />
      ),
      title: "Passenger Ground Services",
      content: (
        <div className="flex flex-col gap-[5px]">
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Introduction to Airport & Airline Ground Operations</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Managing Passenger Interactions</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Check in</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Boarding Procedures and Close out</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Dangerous Goods Regulations</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Aviation Security Requirements</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Enhanced Passenger Facilitation</span>
          </div>
        </div>
      ),
    },
    {
      image: (
        <img src={image2} alt="" className="h-[330px] w-[400px] object-cover" />
      ),
      title: "Personality Development & Communication",
      content: (
        <div className="flex flex-col gap-[5px]">
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Focused Guidance on Persona Management</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Basic Communicative English</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Presentation & Communication Skills</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Personality Development</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Grooming Skills</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Interview skills and Mock Interview sessions</span>
          </div>
        </div>
      ),
    },
    {
      image: (
        <img src={image3} alt="" className="h-[330px] w-[400px] object-cover" />
      ),
      title: "Professional Ethics and Code of Conduct",
      content: (
        <div className="flex flex-col gap-[5px]">
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Relate a Code of Ethics to the Appropriate Profession</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Ethical Dilemma</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Ethical decision making</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Redressal of grievances</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Conflicts of Interest</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Importance of Employee Relations</span>
          </div>
        </div>
      ),
    },
    {
      image: (
        <img src={image4} alt="" className="h-[330px] w-[400px] object-cover" />
      ),
      title: "Organizational Behaviour",
      content: (
        <div className="flex flex-col gap-[5px]">
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>
              Understanding or studying organizational behavior promotes high
              output, minimal absenteeism, and maximum turnover
            </span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Dynamics of People and Organizations</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Managing Demographic and Cultural Diversity</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Understanding People at Work</span>
          </div>
        </div>
      ),
    },
    {
      image: (
        <img src={image5} alt="" className="h-[330px] w-[400px] object-cover" />
      ),
      title: "Customer Service",
      content: (
        <div className="flex flex-col gap-[5px]">
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Modern Perspectives on Consumer Behaviour</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Customer Perception</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Learning Consumer Involvement</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Customer Attitude</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span>
              <GiCommercialAirplane />
            </span>
            <span>Communication and Consumer Behaviour</span>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-[10px] pt-[50px] md:pt-0 ">
      <div className="flex flex-col text-center">
        <h className="text-[#0f52ba] font-mont font-bold">Our Courses</h>
        <h className="text-[35px] md:text-[45px] font-mont text-[#001742] font-bold">
          Great Courses & Class
        </h>
        <p className="font-mont font-bold text-[14px]">
          We offer Diploma course in Airport Customer Service
        </p>
      </div>
      <div
        className="grid gap-[10px] px-[10px] md:grid-cols-2 lg:grid-cols-3 "
        ref={ref}
      >
        {data.map((datas, index) => (
          <>
            <motion.div
              className="relative h-[600px] hidden lg:flex flex-col items-center"
              animate={
                index === 0
                  ? animation1
                  : index === 1
                  ? animation2
                  : index === 2
                  ? animation3
                  : index === 3
                  ? animation4
                  : index === 4
                  ? animation5
                  : ""
              }
            >
              <span className="">{datas.image}</span>
              <motion.div className="bg-[white] shadow-md py-[20px]  flex flex-col gap-[10px] max-w-[350px] absolute top-60 text-center">
                <h className="font-mont font-bold text-[20px] text-[#001742]">
                  {datas.title}
                </h>
                <span className="text-[15px] font-open px-[5px] text-left">
                  {datas.content}
                </span>
              </motion.div>
            </motion.div>
            <motion.div
              animate={
                index === 0
                  ? animation6
                  : index === 1
                  ? animation7
                  : index === 2
                  ? animation8
                  : index === 3
                  ? animation9
                  : index === 4
                  ? animation10
                  : ""
              }
              className="relative h-[600px] flex flex-col lg:hidden items-center"
            >
              <span className="">{datas.image}</span>
              <motion.div className="bg-[white] shadow-md py-[20px]  flex flex-col gap-[10px] max-w-[350px] absolute top-60 text-center">
                <h className="font-mont font-bold text-[20px] text-[#001742]">
                  {datas.title}
                </h>
                <span className="text-[15px] font-open px-[5px] text-left">
                  {datas.content}
                </span>
              </motion.div>
            </motion.div>
          </>
        ))}
        <div>
          <InstaLive/>
        </div>
      </div>
    </div>
  );
}

export default HomeCourse;
