import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PiArrowBendDownRightLight } from "react-icons/pi";
import SwitchButton from "./SwitchButton";
import tvButton from "../../public/assets/tv button.png";
import tvImage from "../../public/assets/TVbase.png";
import newImage from "../../public/assets/tv.gif";

const HallOfFame = () => {
  const [isGradientVisible, setIsGradientVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [buttonRotation, setButtonRotation] = useState(0);
  const [isAlternateImage, setIsAlternateImage] = useState(false); // State for image toggle


  const handleButtonClick = () => {
    setButtonRotation((prevRotation) => prevRotation + 90);
    setIsAlternateImage((prev) => !prev); // Toggle image
  };

  const handleToggle = (isChecked) => {
    setIsGradientVisible(isChecked);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isGradientVisible) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isGradientVisible]);

  const plan = [
    {
      id: 1,
      title: "Transaction Contributions:",
      description:
        "Grumpy Old Man Coin (GOMC) isn’t just another meme coin—it’s a rebellion, Grumpy Old Man Coin (GOMC) isn’t just another meme coin—it’s a rebellion, Grumpy Old Man Coin (GOMC) isn’t just another meme coin—it’s a rebellion,",
    },
    {
      id: 2,
      title: "Staking Requirement:",
      description:
        "Grumpy Old Man Coin (GOMC) isn’t just another meme coin—it’s a rebellion, Grumpy Old Man Coin (GOMC) isn’t just another meme coin—it’s a rebellion, Grumpy Old Man Coin (GOMC) isn’t just another meme coin—it’s a rebellion,",
    },
    {
      id: 3,
      title: "Early Unstaking Fee:",
      description:
        "Grumpy Old Man Coin (GOMC) isn’t just another meme coin—it’s a rebellion, Grumpy Old Man Coin (GOMC) isn’t just another meme coin—it’s a rebellion, Grumpy Old Man Coin (GOMC) isn’t just another meme coin—it’s a rebellion,",
    },
    {
      id: 4,
      title: "Reward Distribution:",
      description:
        "Grumpy Old Man Coin (GOMC) isn’t just another meme coin—it’s a rebellion, Grumpy Old Man Coin (GOMC) isn’t just another meme coin—it’s a rebellion, Grumpy Old Man Coin (GOMC) isn’t just another meme coin—it’s a rebellion,",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isGradientVisible) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isGradientVisible]);

  return (
    <>
    <div
      className="relative w-full h-[120vh] md:h-[150vh] xl:h-[200vh] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('/assets/bg.png')`,
      }}
    >
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isGradientVisible ? 0.7 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {isGradientVisible && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle 150px at ${
              mousePosition.x + 100
            }px ${
              mousePosition.y + 500
            }px, rgba(255,255,255,0.3), transparent 80%)`,
          }}
        />
      )}

      <div
        className="absolute py-20 w-full text-center text-lg md:text-2xl xl:text-4xl font-bold text-white comical"
        style={{ textShadow: "7px 7px 3px rgba(0, 0, 0, 0.7)" }}
      >
        HALL OF FAME
      </div>

      <div className="absolute top-36 md:top-64 lg:top-40 xl:top-80 w-full flex justify-around">
        <motion.div
          className="w-24 h-36 md:w-32 md:h-48 lg:h-40 xl:w-64 xl:h-80"
          whileHover={{ rotate: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <img
            src="/assets/frame 3.png"
            alt="Frame 1"
            className="w-full h-full"
          />
        </motion.div>
        <motion.div
          className="w-24 h-36 md:w-32 md:h-48 lg:h-40 xl:w-64 xl:h-80"
          initial={{ rotate: 3 }}
          whileHover={{ rotate: 12 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <img
            src="/assets/frame.png"
            alt="Frame 2"
            className="w-full h-full"
          />
        </motion.div>
        <motion.div
          className="w-24 h-36 md:w-32 md:h-48 lg:h-40 xl:w-64 xl:h-80"
          initial={{ rotate: -6 }}
          whileHover={{ rotate: 12 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <img
            src="/assets/frame 2.png"
            alt="Frame 3"
            className="w-full h-full"
          />
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center gap-7 -ml-14">
        <motion.p
          className="text-white text-lg xl:text-4xl font-semibold flex flex-col justify-center items-center jumbojim"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Turn off
          <PiArrowBendDownRightLight size={70} />
        </motion.p>
        <SwitchButton onToggle={handleToggle} />
      </div>

      {/* TV Section with Transaction Contributions */}
      <div className="absolute bottom-20 w-full hidden xl:block">
        <motion.h2
          className="text-center text-4xl font-bold text-white my-4 2xl:mb-8 comical"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ textShadow: "7px 7px 3px rgba(0, 0, 0, 0.9)" }}
        >
          THE OLD MAN'S PLAN
        </motion.h2>

        {/* TV Image */}
 
        {/* Transaction Contributions */}
        <div className="absolute inset-0 flex items-center justify-center text-white px-5 xl:pt-24">
          <div className="relative w-full h-full">
            {/* Top Left */}
            <motion.div
              className="absolute top-0 left-0 w-1/3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3
                className="text-xs font-normal 2xl:text-sm 2xl:font-bold mb-2 comical"
                style={{ textShadow: "3px 4px 3px rgba(0, 0, 0, 0.9)" }}
              >
                1. Transaction Contributions:
              </h3>
              <p className="text-base 2xl:text-lg jumbojim">
                Grumpy Old Man Coin (GOMC) isn’t just another meme coin—it’s a
                rebellion, Grumpy Old Man Coin (GOMC) isn’t just another meme
                coin—it’s a rebellion, Grumpy Old Man Coin (GOMC) isn’t just
                another meme coin—it’s a rebellion,
              </p>
            </motion.div>

            {/* Top Right */}
            <motion.div
              className="absolute top-0 right-0 w-1/3 text-right"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3
                className="text-xs font-normal 2xl:text-sm 2xl:font-bold mb-2 comical"
                style={{ textShadow: "3px 4px 3px rgba(0, 0, 0, 0.9)" }}
              >
                2. Transaction Contributions:
              </h3>
              <p className="text-base 2xl:text-lg jumbojim">
                Grumpy Old Man Coin (GOMC) isn’t just another meme coin—it’s a
                rebellion, Grumpy Old Man Coin (GOMC) isn’t just another meme
                coin—it’s a rebellion, Grumpy Old Man Coin (GOMC) isn’t just
                another meme coin—it’s a rebellion,
              </p>
            </motion.div>

            {/* Bottom Left */}
            <motion.div
              className="absolute bottom-0 left-0 w-1/3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3
                className="text-xs font-normal 2xl:text-sm 2xl:font-bold mb-2 comical"
                style={{ textShadow: "3px 4px 3px rgba(0, 0, 0, 0.9)" }}
              >
                3. Transaction Contributions:
              </h3>
              <p className="text-base 2xl:text-lg jumbojim">
                Grumpy Old Man Coin (GOMC) isn’t just another meme coin—it’s a
                rebellion, Grumpy Old Man Coin (GOMC) isn’t just another meme
                coin—it’s a rebellion, Grumpy Old Man Coin (GOMC) isn’t just
                another meme coin—it’s a rebellion,
              </p>
            </motion.div>

            {/* Bottom Right */}
            <motion.div
              className="absolute bottom-0 right-0 w-1/3 text-right"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3
                className="text-xs font-normal 2xl:text-sm 2xl:font-bold mb-2 comical"
                style={{ textShadow: "3px 4px 3px rgba(0, 0, 0, 0.9)" }}
              >
                4. Transaction Contributions:
              </h3>
              <p className="text-base 2xl:text-lg jumbojim">
                Grumpy Old Man Coin (GOMC) isn’t just another meme coin—it’s a
                rebellion, Grumpy Old Man Coin (GOMC) isn’t just another meme
                coin—it’s a rebellion, Grumpy Old Man Coin (GOMC) isn’t just
                another meme coin—it’s a rebellion,
              </p>
            </motion.div>
          </div>
        </div>
        {/* </div> */}
        <motion.div
          className="w-full h-[450px] relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <img
            src={isAlternateImage ? newImage : tvImage}  
            alt="Vintage TV"
            className="w-full h-full object-contain"
            onClick={handleButtonClick}
          />
   
        </motion.div>
      </div>
      
        <motion.div
          className="w-full bottom-0 h-[300px] md:h-[450px] lg:h-[350px] xl:h-[450px] xl:hidden absolute"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <img
            src={isAlternateImage ? newImage : tvImage}  
            alt="Vintage TV"
            className="w-full h-full object-contain"
            onClick={handleButtonClick}
          />
 
        </motion.div>

    </div>
    <div className="lg:hidden bg-[#14093E] text-white py-6 text-center">
    <motion.h2
          className="text-center xl:text-4xl font-bold text-white my-6 2xl:mb-8 comical"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ textShadow: "7px 7px 3px rgba(0, 0, 0, 0.9)" }}
        >
          THE OLD MAN'S PLAN
        </motion.h2>
        <div className="space-y-6 w-full">
          {plan.map((item) => (
            <div key={item.id} className="pb-6">
              <p className="mb-2 jumbojim text-xl">
                {item.id} . {item.title}
              </p>
              <p className="px-6">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HallOfFame;
