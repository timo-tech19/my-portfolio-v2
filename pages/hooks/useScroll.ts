import { AnimationControls, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function useScroll(threshold = 0.2) {
  const { ref, inView } = useInView({ threshold })
  const animation = useAnimation()

  if (inView) {
    animation.start('show')
  } else {
    animation.start('hide')
  }

  const scroll: [
    (node?: Element | null | undefined) => void,
    AnimationControls
  ] = [ref, animation]

  return scroll
}
