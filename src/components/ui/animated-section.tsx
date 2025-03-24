"use client";

import { HTMLMotionProps, motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = HTMLMotionProps<"div"> & {
  variants?: Variants;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number | "some" | "all";
};

export const AnimatedSection = ({
  children,
  variants,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.3,
  ...props
}: AnimatedSectionProps) => {
  // Default variants if not provided
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants || defaultVariants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

type AnimatedTextProps = HTMLMotionProps<"p"> & {
  delay?: number;
  once?: boolean;
  amount?: number | "some" | "all";
};

export const AnimatedText = ({
  children,
  className,
  delay = 0,
  once = true,
  amount = 0.5,
  ...props
}: AnimatedTextProps) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay,
          duration: 0.4,
          ease: "easeOut",
        }
      }}
      viewport={{ once, amount }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.p>
  );
};

type AnimatedHeadingProps = HTMLMotionProps<"h2"> & {
  delay?: number;
  once?: boolean;
  amount?: number | "some" | "all";
};

export const AnimatedHeading = ({
  children,
  className,
  delay = 0,
  once = true,
  amount = 0.5,
  ...props
}: AnimatedHeadingProps) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 15 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay,
          duration: 0.5,
          ease: "easeOut",
        }
      }}
      viewport={{ once, amount }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.h2>
  );
};

type AnimatedStaggerContainerProps = HTMLMotionProps<"div"> & {
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
  amount?: number | "some" | "all";
};

export const AnimatedStaggerContainer = ({
  children,
  className,
  delay = 0,
  staggerDelay = 0.1,
  once = true,
  amount = 0.3,
  ...props
}: AnimatedStaggerContainerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay,
          }
        }
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

type AnimatedStaggerItemProps = HTMLMotionProps<"div">;

export const AnimatedStaggerItem = ({
  children,
  className,
  ...props
}: AnimatedStaggerItemProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          }
        }
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
