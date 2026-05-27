import { useEffect, useRef, useState } from 'preact/hooks'
import { EventItem } from './EventItem'
import { events } from '../data/event'

const latestEvent = events[0]

export function LatestEvent() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  if (!latestEvent) {
    return null
  }

  return (
    <section
      id="latest-event"
      ref={sectionRef}
      className="border-t border-border bg-card py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-light uppercase tracking-[0.25em] text-muted-foreground">
          Event
        </p>
        <h2 className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-3xl">
          最新イベント
        </h2>

        <div
          className={`mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <EventItem event={latestEvent} />
        </div>
      </div>
    </section>
  )
}
