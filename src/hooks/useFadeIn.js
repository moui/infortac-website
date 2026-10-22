import { useEffect, useRef } from 'react'

/**
 * Custom hook that adds a fade-in animation when elements scroll into view.
 * Returns a ref to attach to the element you want to animate.
 */
export function useFadeIn() {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element || !('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0 }
    )

    element.classList.add('will-animate')
    observer.observe(element)

    return () => {
      observer.disconnect()
      element.classList.remove('will-animate')
    }
  }, [])

  return ref
}
