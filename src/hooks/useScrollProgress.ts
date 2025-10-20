import { useRef } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';

interface ParallaxScrollOptions {
  offset?: [string, string];
  transformRange?: [number, number];
}

export const useParallaxScroll = (
  options: ParallaxScrollOptions = {}
): {
  ref: React.RefObject<HTMLElement>;
  translateY: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
} => {
  const { offset = ['start end', 'end start'], transformRange = [150, -150] } =
    options;

  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], transformRange);

  return { ref, translateY, scrollYProgress };
};
