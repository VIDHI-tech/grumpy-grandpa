
import { motion } from 'framer-motion'

export default function Home() {


  return (
    <>
      <header
        className="relative bg-cover sm:bg-center h-screen overflow-hidden"
        style={{ backgroundImage: "url('/assets/hero.png')" }}
      >
        <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white jumbojim -top-32 md:-top-44 lg:top-10 xl:top-20 2xl:top-0  2xl:left-24">
          <motion.img
            src="/assets/Grumpy Old man coin.png"
            alt="Grumpy Grandpa Coin"
            className="h-20 lg:h-32 xl:h-52 2xl:h-56 mb-4 md:mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.3
            }}
          />

          <motion.p
            className="hidden md:block max-w-4xl lg:max-w-2xl text-lg font-bold text-[#EEE9E8] uppercase"
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
          className="absolute bottom-0 right-2 h-[300px] xl:h-[500px] 2xl:h-[600px]"
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

