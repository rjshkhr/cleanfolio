import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './Reveal.css'

const Reveal = ({ as: Tag, className, delay, children }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || !('IntersectionObserver' in window)) {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

Reveal.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  delay: PropTypes.number,
  children: PropTypes.node.isRequired,
}

Reveal.defaultProps = {
  as: 'div',
  className: '',
  delay: 0,
}

export default Reveal
