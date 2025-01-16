
// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { PiArrowBendDownRightLight } from "react-icons/pi"
// import SwitchButton from "./SwitchButton"

// const HallOfFame = () => {
//   const [isGradientVisible, setIsGradientVisible] = useState(false)

//   const handleToggle = (isChecked: boolean) => {
//     setIsGradientVisible(isChecked)
//   }

//   return (
//     <div
//       className="relative w-full h-[100vh] xl:h-[200vh] bg-cover bg-center overflow-hidden"
//       style={{
//         backgroundImage: `url('/assets/bg.png')`,
//       }}
//     >
//       <motion.div
//         className="absolute inset-0 bg-black pointer-events-none"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isGradientVisible ? 0.8 : 0 }}
//         transition={{ duration: 0.5 }}
//       />

//       <div
//         className="absolute py-20 w-full text-center text-lg md:text-2xl xl:text-4xl font-bold text-white comical"
//         style={{ textShadow: "7px 7px 3px rgba(0, 0, 0, 0.7)" }}
//       >
//         HALL OF FAME
//       </div>

//       <div className="absolute top-80 w-full flex justify-around">
//         <motion.div 
//           className="w-64 h-80"
//           whileHover={{ rotate: -6 }}
//           transition={{ type: "spring", stiffness: 300, damping: 10 }}
//         >
//           <img
//             src="/assets/frame.png"
//             alt="Frame 1"
//             className="w-full h-full"
//           />
//         </motion.div>
//         <motion.div 
//           className="w-64 h-80"
//           initial={{ rotate: 3 }}
//           whileHover={{ rotate: 12 }}
//           transition={{ type: "spring", stiffness: 300, damping: 10 }}
//         >
//           <img
//             src="/assets/frame 2.png"
//             alt="Frame 2"
//             className="w-full h-full"
//           />
//         </motion.div>
//         <motion.div 
//           className="w-64 h-80"
//           initial={{ rotate: -6 }}
//           whileHover={{ rotate: 12 }}
//           transition={{ type: "spring", stiffness: 300, damping: 10 }}
//         >
//           <img
//             src="/assets/frame 3.png"
//             alt="Frame 3"
//             className="w-full h-full"
//           />
//         </motion.div>
//       </div>

//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center gap-7">
//         <motion.p 
//           className="text-white text-4xl font-semibold flex flex-col justify-center items-center"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//         >
//           Turn off
//           <PiArrowBendDownRightLight size={70}/>
//         </motion.p>
//         <SwitchButton onToggle={handleToggle} />
//       </div>

//       <motion.div 
//         className="absolute bottom-20 w-full px-5"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.7 }}
//       >
//         <div className="text-center text-3xl font-bold text-white mb-5">
//           THE OLD MAN'S PLAN
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white text-sm">
//           <motion.div 
//             className="space-y-2"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 400, damping: 10 }}
//           >
//             <h3 className="font-bold">1. Transaction Contributions:</h3>
//             <p>
//               Grumpy Old Man Coin (GOMC) isn't just another meme coin—it's a
//               rebellion.
//             </p>
//           </motion.div>
//           <motion.div 
//             className="space-y-2"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 400, damping: 10 }}
//           >
//             <h3 className="font-bold">2. Transaction Contributions:</h3>
//             <p>
//               Grumpy Old Man Coin (GOMC) isn't just another meme coin—it's a
//               rebellion.
//             </p>
//           </motion.div>
//           <motion.div 
//             className="space-y-2"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 400, damping: 10 }}
//           >
//             <h3 className="font-bold">3. Transaction Contributions:</h3>
//             <p>
//               Grumpy Old Man Coin (GOMC) isn't just another meme coin—it's a
//               rebellion.
//             </p>
//           </motion.div>
//           <motion.div 
//             className="space-y-2"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 400, damping: 10 }}
//           >
//             <h3 className="font-bold">4. Transaction Contributions:</h3>
//             <p>
//               Grumpy Old Man Coin (GOMC) isn't just another meme coin—it's a
//               rebellion.
//             </p>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   )
// }

// export default HallOfFame

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PiArrowBendDownRightLight } from "react-icons/pi"
import SwitchButton from "./SwitchButton"

const HallOfFame = () => {
  const [isGradientVisible, setIsGradientVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleToggle = (isChecked: boolean) => {
    setIsGradientVisible(isChecked)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    if (isGradientVisible) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isGradientVisible])

  return (
    <div
      className="relative w-full h-[100vh] xl:h-[200vh] bg-cover bg-center overflow-hidden"
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
            background: `radial-gradient(circle 150px at ${mousePosition.x+400}px ${mousePosition.y+500}px, rgba(255,255,255,0.3), transparent 80%)`,
          }}
        />
      )}

      <div
        className="absolute py-20 w-full text-center text-lg md:text-2xl xl:text-4xl font-bold text-white comical"
        style={{ textShadow: "7px 7px 3px rgba(0, 0, 0, 0.7)" }}
      >
        HALL OF FAME
      </div>

      <div className="absolute top-80 w-full flex justify-around">
        <motion.div 
          className="w-64 h-80"
          whileHover={{ rotate: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <img
            src="/assets/frame.png"
            alt="Frame 1"
            className="w-full h-full"
          />
        </motion.div>
        <motion.div 
          className="w-64 h-80"
          initial={{ rotate: 3 }}
          whileHover={{ rotate: 12 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <img
            src="/assets/frame 2.png"
            alt="Frame 2"
            className="w-full h-full"
          />
        </motion.div>
        <motion.div 
          className="w-64 h-80"
          initial={{ rotate: -6 }}
          whileHover={{ rotate: 12 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <img
            src="/assets/frame 3.png"
            alt="Frame 3"
            className="w-full h-full"
          />
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center gap-7">
        <motion.p 
          className="text-white text-4xl font-semibold flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Turn off
          <PiArrowBendDownRightLight size={70}/>
        </motion.p>
        <SwitchButton onToggle={handleToggle} />
      </div>

 
    </div>
  )
}

export default HallOfFame

