 
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Howl } from 'howler'
import { FiVolume2, FiVolumeX } from 'react-icons/fi'

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [sound, setSound] = useState<Howl | null>(null)

  useEffect(() => { 
    const backgroundSound = new Howl({
      src: ['/assets/BGM.mp3'], 
      volume: 0.5,
      loop: true,
      autoplay: true, 
      mute: false,   
    })

    setSound(backgroundSound)
    backgroundSound.play()
 
    return () => {
      backgroundSound.stop()
    }
  }, [])

  const toggleAudio = () => {
    if (!sound) return
    if (isPlaying) {
      sound.pause()
    } else {
      sound.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <header
        className="relative bg-cover bg-center h-[80vh] lg:h-[100vh] overflow-hidden"
        style={{ backgroundImage: "url('/assets/hero.png')" }}
      >
        {/* Audio Toggle Icon */}
        <div className="absolute top-28 left-5 z-20">
          <button
            onClick={toggleAudio}
            className="text-white bg-black/50 p-3 rounded-full hover:bg-black/70"
          >
            {isPlaying ? <FiVolume2 size={24} /> : <FiVolumeX size={24} />}
          </button>
        </div>

        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white jumbojim -top-32 md:-top-44 lg:top-10 xl:top-20 2xl:top-0  2xl:left-24">
          <motion.img
            src="/assets/Grumpy Old man coin.png"
            alt="Grumpy Grandpa Coin"
            className="h-20 lg:h-32 xl:h-52 2xl:h-56 mb-4 md:mb-8 2xl:mb-20"
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.3
            }}
          />

          <motion.p
            className="hidden md:block max-w-4xl lg:max-w-2xl 2xl:max-w-4xl text-lg font-bold text-[#EEE9E8] uppercase"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Welcome to the Grumpy Grandpa Alliance, the crankiest force in the
            meme coin universe! Forged in the fires of frustration and fueled by
            unfiltered sarcasm, Grumpy Grandpa Coin is here to grumble its way
            to the top and outwit the competition. Our community, known as the
            Grump Squad, is a rowdy bunch of crypto rebels ready to take over
            the meme coin landscape one grumble at a time!
          </motion.p>
        </div>

        <motion.div
          className="absolute bottom-2 right-2 h-[300px] xl:h-[500px] 2xl:h-[600px]"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50, damping: 20, delay: 0.8 }}
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
      </header>
    </>
  )
}
