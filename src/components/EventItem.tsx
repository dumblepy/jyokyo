import type { EventItem as EventItemType } from '../data/event'
import { withBasePath } from '../lib/basePath'

interface EventItemProps {
  event: EventItemType
}

export function EventItem({ event }: EventItemProps) {
  return (
    <article className="grid gap-12 md:grid-cols-[320px_1fr] md:gap-16 lg:gap-20">
      <div className="flex flex-col gap-6">
        <div className="aspect-[3/4] w-full max-w-[280px] overflow-hidden md:max-w-none">
          <img
            src={withBasePath(event.flyerImage)}
            alt={event.flyerAlt}
            className="h-full w-full object-contain"
          />
        </div>
        <a
          href={event.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-foreground px-6 py-3 text-center text-sm font-light tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          チケットを購入
        </a>
      </div>

      <div className="flex flex-col gap-8">
        <div>
          <h2 className="font-serif text-xl font-medium text-foreground md:text-2xl">
            {event.title}
          </h2>
          <dl className="mt-6 space-y-4">
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                開催日
              </dt>
              <dd className="mt-1 text-sm font-light text-foreground">{event.date}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                時間
              </dt>
              <dd className="mt-1 text-sm font-light text-foreground">{event.time}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                会場
              </dt>
              <dd className="mt-1 text-sm font-light text-foreground">
                {event.venue}
                {event.venueAddress ? (
                  <>
                    <br />
                    <span className="text-muted-foreground">{event.venueAddress}</span>
                  </>
                ) : null}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                チケット
              </dt>
              <dd className="mt-1 text-sm font-light text-foreground">{event.ticketPrice}</dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  )
}
