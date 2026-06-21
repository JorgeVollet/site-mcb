import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

// Leque de fotos com entrada "bounce" elástica + empurra as irmãs no hover.
// Adaptado do React Bits (BounceCards) para JS/Vite, com estilos embutidos.
export default function BounceCards({
  className = '',
  images = [],
  containerWidth = 420,
  containerHeight = 420,
  cardSize = 200,
  pushOffset = 220,
  animationDelay = 0.4,
  animationStagger = 0.07,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = [
    'rotate(10deg) translate(-170px)',
    'rotate(5deg) translate(-85px)',
    'rotate(-3deg)',
    'rotate(-10deg) translate(85px)',
    'rotate(2deg) translate(170px)',
  ],
  enableHover = true,
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.bc-card',
        { scale: 0 },
        {
          scale: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay,
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [animationStagger, easeType, animationDelay])

  const getNoRotationTransform = (transformStr) => {
    const hasRotate = /rotate\([^)]*\)/.test(transformStr)
    if (hasRotate) return transformStr.replace(/rotate\([^)]*\)/, 'rotate(0deg)')
    if (transformStr === 'none') return 'rotate(0deg)'
    return `${transformStr} rotate(0deg)`
  }

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/
    const match = baseTransform.match(translateRegex)
    if (match) {
      const newX = parseFloat(match[1]) + offsetX
      return baseTransform.replace(translateRegex, `translate(${newX}px)`)
    }
    return baseTransform === 'none'
      ? `translate(${offsetX}px)`
      : `${baseTransform} translate(${offsetX}px)`
  }

  const pushSiblings = (hoveredIdx) => {
    if (!enableHover || !containerRef.current) return
    const q = gsap.utils.selector(containerRef)
    images.forEach((_, i) => {
      const target = q(`.bc-card-${i}`)
      gsap.killTweensOf(target)
      const baseTransform = transformStyles[i] || 'none'
      if (i === hoveredIdx) {
        gsap.to(target, {
          transform: getNoRotationTransform(baseTransform),
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto',
        })
      } else {
        const offsetX = i < hoveredIdx ? -pushOffset : pushOffset
        const distance = Math.abs(hoveredIdx - i)
        gsap.to(target, {
          transform: getPushedTransform(baseTransform, offsetX),
          duration: 0.4,
          ease: 'back.out(1.4)',
          delay: distance * 0.05,
          overwrite: 'auto',
        })
      }
    })
  }

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current) return
    const q = gsap.utils.selector(containerRef)
    images.forEach((_, i) => {
      const target = q(`.bc-card-${i}`)
      gsap.killTweensOf(target)
      gsap.to(target, {
        transform: transformStyles[i] || 'none',
        duration: 0.4,
        ease: 'back.out(1.4)',
        overwrite: 'auto',
      })
    })
  }

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: containerWidth, height: containerHeight }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`bc-card bc-card-${idx} absolute aspect-square overflow-hidden rounded-[25px] border-[6px] border-white shadow-card`}
          style={{ width: cardSize, transform: transformStyles[idx] ?? 'none' }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <img
            src={src.src}
            alt={src.alt || `Projeto ${idx + 1}`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}
