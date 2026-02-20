import { useEffect, useRef } from 'react'

/**
 * Custom hook that adds a fade-in animation when elements scroll into view.
 * Returns a ref to attach to the element you want to animate.
 */
export function useFadeIn() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}
