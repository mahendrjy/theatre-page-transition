import { motion } from 'framer-motion'

const Container = ({
  children,
  bgColor = 'bg-blue-100',
  smaller,
  className,
}) => {
  return (
    <motion.div
      initial={{ scale: smaller ? 0.5 : 1 }}
      className={`relative mx-auto flex h-96 w-full items-center justify-center ${bgColor} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Container
