import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const viewport = {
  once: true,
  amount: 0.22,
  margin: "0px 0px -10% 0px",
};

export const revealTransition = {
  duration: 0.7,
  ease,
};

export const revealChild = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: revealTransition },
};

export const Reveal = ({
  as = "div",
  children,
  className,
  delay = 0,
  duration,
  y = 10,
  scale,
  ...props
}) => {
  const reduceMotion = useReducedMotion();
  const Tag = as;
  const MotionTag = motion[as];

  if (reduceMotion || !MotionTag) {
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, ...(scale ? { scale } : {}) }}
      whileInView={{ opacity: 1, y: 0, ...(scale ? { scale: 1 } : {}) }}
      viewport={viewport}
      transition={{ ...revealTransition, duration: duration ?? revealTransition.duration, delay }}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

export const Stagger = ({
  as = "div",
  children,
  className,
  delay = 0,
  stagger = 0.075,
  ...props
}) => {
  const reduceMotion = useReducedMotion();
  const Tag = as;
  const MotionTag = motion[as];

  if (reduceMotion || !MotionTag) {
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

export const AnimatedSection = ({ children, className, ...props }) => (
  <Stagger as="section" className={className} stagger={0.08} {...props}>
    {children}
  </Stagger>
);

export const AnimatedRow = ({ as = "li", children, className, ...props }) => {
  const reduceMotion = useReducedMotion();
  const Tag = as;
  const MotionTag = motion[as];

  if (reduceMotion || !MotionTag) {
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      variants={revealChild}
      transition={revealTransition}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

export const MotionRule = ({ className, direction = "x", delay = 0 }) => {
  const reduceMotion = useReducedMotion();
  const origin = direction === "y" ? { transformOrigin: "top" } : { transformOrigin: "left" };
  const initial = direction === "y" ? { scaleY: 0 } : { scaleX: 0 };
  const animate = direction === "y" ? { scaleY: 1 } : { scaleX: 1 };

  if (reduceMotion) {
    return <div className={className} aria-hidden="true" />;
  }

  return (
    <motion.div
      className={className}
      aria-hidden="true"
      style={origin}
      initial={initial}
      whileInView={animate}
      viewport={viewport}
      transition={{ duration: 0.65, ease, delay }}
    />
  );
};
