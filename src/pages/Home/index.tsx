import { Hero } from '../../components/Hero'
import { LatestEvent } from '../../components/LatestEvent'
import { Latest } from '../../components/Latest'

export function Home() {
  return (
    <>
      <main>
        <Hero />
        <LatestEvent />
        <Latest />
      </main>
    </>
  )
}
