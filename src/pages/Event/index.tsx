import { EventItem } from '../../components/EventItem'
import { events } from '../../data/event'

export function Event() {
  return (
    <main className="pt-24 min-h-screen">
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <p className="text-xs font-light uppercase tracking-[0.25em] text-muted-foreground">
          Event
        </p>
        <h1 className="mt-4 font-serif text-2xl font-medium tracking-wide text-foreground md:text-4xl">
          イベント
        </h1>
        <p className="mt-8 max-w-2xl text-sm font-light leading-relaxed text-muted-foreground">
          情況出版が主催・共催するイベントの情報です。
        </p>

        <div className="mt-16 space-y-24 border-t border-border pt-12 md:space-y-32">
          {events.map((event) => (
            <EventItem key={event.id} event={event} />
          ))}
        </div>
      </section>
    </main>
  )
}
