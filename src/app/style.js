const styles = {
  text_gradient: "bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400",
}

const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: delayChildren, // this will set a delay before the children start animating
      staggerChildren: staggerChildren // this will set the time inbetween children animation
    }
  }
})


const slideIn = (direction, type, duration) => {
  return {
    hidden: {
      opacity:0,
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    visible: {
      opacity:1,
      x: 0,
      y: 0,
      transition: {
        type: type,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export {staggerContainer,fadeIn,slideIn}

export default styles