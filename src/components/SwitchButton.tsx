import { useState } from "react"
import { motion } from "framer-motion"

interface SwitchButtonProps {
  onToggle: (isChecked: boolean) => void
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ onToggle }) => {
  const [isChecked, setIsChecked] = useState(false)

  const toggleSwitch = () => {
    const newState = !isChecked
    setIsChecked(newState)
    onToggle(newState)
  }

  return (
    <motion.label
      className="switch relative flex items-center justify-center w-[150px] h-[195px] bg-black rounded-[5px] p-5"
      style={{
        boxShadow: `
          0 0 10px 2px rgba(0, 0, 0, 0.2),
          0 0 1px 2px black,
          inset 0 2px 2px -2px white,
          inset 0 0 2px 15px #47434c,
          inset 0 0 2px 22px black
        `,
        perspective: '700px',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={toggleSwitch}
        className="hidden"
      />
      <motion.div
        className="button relative w-full h-full cursor-pointer"
        style={{
          transformOrigin: 'center center -20px',
          transformStyle: 'preserve-3d',
          background: 'linear-gradient(#4d030f 0%, #3d0209 30%, #3d0209 70%, #4d030f 100%)',
          backgroundRepeat: 'no-repeat',
        }}
        animate={{
          rotateX: isChecked ? 25 : -25,
          z: isChecked ? 20 : 0,
          boxShadow: isChecked ? '0 -10px 20px #ff1818' : 'none',
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Light Effect */}
        <motion.div
          className="absolute inset-0 light"
          animate={{
            opacity: isChecked ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundImage: 'radial-gradient(#ff6b6b, #ff1818 40%, transparent 70%)',
          }}
        />

        {/* Dots */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(transparent 30%, rgba(61, 2, 9, 0.7) 70%)",
            backgroundSize: "10px 10px",
          }}
        />

        {/* Characters */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(white, white) 50% 20% / 5% 20%,
              radial-gradient(circle, transparent 50%, white 52%, white 70%, transparent 72%) 50% 80% / 33% 25%
            `,
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Shine */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: isChecked ? 1 : 0.3,
          }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundImage: `
              linear-gradient(white, transparent 3%) 50% 50% / 97% 97%,
              linear-gradient(rgba(255, 255, 255, 0.5), transparent 50%, transparent 80%, rgba(255, 255, 255, 0.5)) 50% 50% / 97% 97%
            `,
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Shadow */}
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: isChecked ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundImage: "linear-gradient(transparent 70%, rgba(0, 0, 0, 0.8))",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Top and Bottom Edges */}
        <div
          className="absolute top-0 left-0 right-0 h-[50px]"
          style={{
            background: 'linear-gradient(rgba(255, 255, 255, 0.8) 10%, rgba(255, 255, 255, 0.3) 30%, #3d0209 75%, #2d0207) 50% 50% / 97% 97%, #4d030f',
            backgroundRepeat: 'no-repeat',
            transform: 'rotateX(-90deg)',
            transformOrigin: 'top',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[50px]"
          style={{
            background: 'linear-gradient(#3d0209, #2d0207)',
            transformOrigin: 'top',
          }}
          animate={{
            transform: isChecked
              ? 'translateY(50px) rotateX(-90deg)'
              : 'translateY(50px) rotateX(-90deg)',
            boxShadow: isChecked
              ? '0 50px 8px 0px black, 0 80px 20px 0px rgba(0, 0, 0, 0.5)'
              : 'none',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <style jsx>{`
        .light {
          animation: light-off 1s;
        }
        .button:checked + div .light {
          animation: flicker 0.2s infinite 0.3s;
        }
        @keyframes light-off {
          0% { opacity: 1; }
          80% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes flicker {
          0% { opacity: 1; }
          80% { opacity: 0.8; }
          100% { opacity: 1; }
        }
      `}</style>
    </motion.label>
  )
}

export default SwitchButton

