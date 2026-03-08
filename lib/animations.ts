// Framer Motion Animation Variants

export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

export const fadeIn = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

export const staggerItem = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

// Hover animations for interactive elements
export const cardHover = {
  scale: 1.02,
  transition: { 
    duration: 0.3, 
    ease: [0.16, 1, 0.3, 1] 
  }
};

export const buttonHover = {
  scale: 1.02,
  transition: { 
    duration: 0.2, 
    ease: "easeOut" 
  }
};

export const buttonTap = {
  scale: 0.98
};

// Slide animations for mobile menu
export const slideInRight = {
  hidden: { 
    x: "100%",
    opacity: 0
  },
  visible: { 
    x: 0,
    opacity: 1,
    transition: { 
      duration: 0.3, 
      ease: [0.16, 1, 0.3, 1] 
    }
  },
  exit: { 
    x: "100%",
    opacity: 0,
    transition: { 
      duration: 0.2, 
      ease: "easeIn" 
    }
  }
};

// Navbar animations
export const navbarVariants = {
  hidden: { 
    y: -100,
    opacity: 0
  },
  visible: { 
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

// Hero text animation
export const heroTextVariants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

// Viewport settings for scroll-triggered animations
export const viewportSettings = {
  once: true,
  amount: 0.2,
  margin: "-50px"
};

export const viewportSettingsEager = {
  once: true,
  amount: 0.1,
  margin: "-20px"
};

// Number counter animation
export const countUp = (end: number, duration: number = 2) => ({
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: { 
      duration: 0.5 
    }
  }
});

// Pulse animation for CTA buttons
export const pulseGlow = {
  initial: { 
    boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)" 
  },
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(59, 130, 246, 0.4)",
      "0 0 0 10px rgba(59, 130, 246, 0)",
      "0 0 0 0 rgba(59, 130, 246, 0)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Image reveal animation
export const imageReveal = {
  hidden: { 
    opacity: 0, 
    scale: 1.1,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};
