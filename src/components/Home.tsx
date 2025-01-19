import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [sound, setSound] = useState<Howl | null>(null);

  useEffect(() => {
    const backgroundSound = new Howl({
      src: ["/assets/BGM.mp3"],
      volume: 0.5,
      loop: true,
      autoplay: true,
      mute: false,
    });

    setSound(backgroundSound);
    backgroundSound.play();

    return () => {
      backgroundSound.stop();
    };
  }, []);

  const toggleAudio = () => {
    if (!sound) return;
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div
        className="relative bg-cover bg-left h-[80vh] lg:h-[100vh] overflow-hidden px-8 md:px-16"
        // style={{ backgroundImage: "url('/assets/hero.png')" }}
      >
        <div className="absolute bg-cover bg-left-bottom w-[130%] bg-[url('/assets/hero.png')] h-full -ml-[90px]" />
        {/* Audio Toggle Icon */}
        <div className="absolute top-28 left-5 z-20">
          <button
            onClick={toggleAudio}
            className="text-white bg-black/50 p-3 rounded-full hover:bg-black/70"
          >
            {isPlaying ? <FiVolume2 size={24} /> : <FiVolumeX size={24} />}
          </button>
        </div>

        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white jumbojim -top-32 md:-top-36 xl:-top-32 2xl:-top-44 2xl:left-24">
          <div className="flex flex-col gap-10 md:gap-20 mt-20 lg:mt-64">
            <div className="flex flex-col gap-5 md:gap-10">
              <p className="comic-subheading-text">Introducing</p>
              <p className="comic-heading-text">
                <span className="text-[#f31c0e]">Wealthy</span>{" "}
                <span className="text-[#8ec04b]">Walter</span>
              </p>
            </div>
            <p className="text-white comic-paragraph-text max-w-3xl">
              Welcome to the Grumpy Grandpa Alliance, the crankiest force in the
              meme coin universe! Forged in the fires of frustration and fueled
              by unfiltered sarcasm, Grumpy Grandpa Coin is here to grumble its
              way to the top and outwit the competition. Our community, known as
              the Grump Squad, is a rowdy bunch of crypto rebels ready to take
              over the meme coin landscape one grumble at a time!
            </p>
          </div>
        </div>

        <motion.div
          className="absolute bottom-2 right-2 h-[300px] xl:h-[500px] 2xl:h-[600px]"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            delay: 0.8,
          }}
        >
          <motion.img
            src="/assets/grandpa.png"
            alt="Grumpy Grandpa"
            className="h-full object-contain"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </>
  );
}
