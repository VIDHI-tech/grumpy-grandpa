
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { RiInstagramFill } from "react-icons/ri"
import { FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa"
import { useEffect } from 'react'

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const socialIconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  }

  return (
    <>
      <BlackScreenOverlay />
      <footer
        ref={ref}
        style={{ backgroundImage: "url('/assets/footerbg.png')" }}
        className="bg-cover bg-center h-screen relative text-white overflow-hidden"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="container mx-auto flex flex-col items-center justify-center"
        >
          <motion.h1
            variants={itemVariants}
            className="uppercase comical text-center text-xl lg:text-4xl 2xl:text-5xl pt-36 flex flex-col gap-y-7 xl:gap-y-16"
            style={{ textShadow: "7px 7px 3px rgb(124, 124, 124, 124)" }}
          >
            <motion.span variants={itemVariants}>Grumpy</motion.span>
            <motion.span variants={itemVariants}>Grandpa coin</motion.span>
          </motion.h1>
          <span className="hidden bg-black h-20 w-20"/>
          <motion.section
            variants={containerVariants}
            className="absolute bottom-10 2xl:bottom-16 flex items-center lg:items-end flex-col-reverse lg:flex-row"
          >
            <motion.span variants={itemVariants} className="text-white text-4xl md:text-7xl lg:text-5xl flex gap-x-10 lg:pb-10">
              <motion.span variants={socialIconVariants} whileHover={{ scale: 1.2 }}><RiInstagramFill/></motion.span>
              <motion.span variants={socialIconVariants} whileHover={{ scale: 1.2 }}><FaTwitter/></motion.span>
              <motion.span variants={socialIconVariants} whileHover={{ scale: 1.2 }}><FaYoutube/></motion.span>
              <motion.span variants={socialIconVariants} whileHover={{ scale: 1.2 }}><FaTelegram/></motion.span>
            </motion.span>
            <motion.span
              variants={itemVariants}
              className="flex md:w-[500px] lg:w-[400px] xl:w-[500px] 2xl:w-[700px]"
            >
              <motion.img
                src="/assets/footer.png"
                alt=""
                className="w-full h-full object-cover"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              />
            </motion.span>
            <motion.span variants={itemVariants} className="lg:pb-10 text-center lg:text-start">
              <motion.p variants={itemVariants} className="uppercase text-xl xl:text-2xl">For any queries,</motion.p>
              <motion.p variants={itemVariants} className="text-lg gap-y-2">
                <motion.a
                  href="mailto:info@Grumpygrandpacoin.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  info@Grumpygrandpacoin.com
                </motion.a>
              </motion.p>
            </motion.span>
            <span className="hidden bg-black h-20 w-20"/>
          </motion.section>
        </motion.div>
      </footer>
    </>
  )
}

export default Footer





export const BlackScreenOverlay = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: [1, 0, 1, 0],
        transition: { duration: 1, times: [0, 0.3, 0.6, 1] },
      })
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1 }}
      animate={controls}
      className="fixed inset-0 bg-black z-50 pointer-events-none"
    />
  )
}


