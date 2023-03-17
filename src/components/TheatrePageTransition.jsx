import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from './Container'

const TheatrePageTransition = ({
  smaller = false,
  className = '',
  ...props
}) => {
  const [scale, setScale] = useState(0)
  const transition = {
    duration: 1,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  }
  const variants = {
    left: {
      x: -223,
      transition,
    },
    right: {
      x: 223,
      transition,
    },
    form: {
      scale: 1,
      transition,
      zIndex: scale > 0.95 ? 20 : 0,
    },
  }

  return (
    <Container
      smaller={smaller}
      className={className}
      {...props}
    >
      <motion.div
        initial={{ x: -79 }}
        variants={variants}
        animate="left"
        className="absolute z-10 flex items-center drop-shadow-2xl"
      >
        <div className="h-32 w-10 bg-green-400 shadow-lg drop-shadow-2xl"></div>
        <div className="h-48 w-10 bg-yellow-400 shadow-lg drop-shadow-2xl"></div>
        <div className="h-64 w-10 bg-orange-400 shadow-lg drop-shadow-2xl"></div>
        <div className="h-80 w-10 bg-red-400 shadow-lg drop-shadow-2xl"></div>
      </motion.div>
      <motion.div
        initial={{ scale: 0.3 }}
        variants={variants}
        animate="form"
        onUpdate={(latest) => setScale(latest.scale)}
        className="flex h-96 w-72 flex-col justify-center gap-4 bg-blue-400 px-4 drop-shadow-2xl"
      >
        {[...Array(6).keys()].map((i) => (
          <div
            key={i}
            className="mx-auto h-8 w-64 rounded bg-blue-300"
          ></div>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 79 }}
        variants={variants}
        animate="right"
        className="absolute flex items-center drop-shadow-2xl"
      >
        <div className="z-30 h-80 w-10 bg-red-400 shadow-lg drop-shadow-2xl"></div>
        <div className="z-20 h-64 w-10 bg-yellow-400 shadow-lg drop-shadow-2xl"></div>
        <div className="z-10 h-48 w-10 bg-orange-400 shadow-lg drop-shadow-2xl"></div>
        <div className="h-32 w-10 bg-green-400 shadow-lg drop-shadow-2xl"></div>
      </motion.div>
    </Container>
  )
}

export default TheatrePageTransition
