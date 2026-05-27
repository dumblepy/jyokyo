import { LocationProvider, Router, Route, hydrate, prerender as ssr } from 'preact-iso'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Backnumber } from './pages/Backnumber'
import { Books } from './pages/Books'
import { Company } from './pages/Company'
import { Videos } from './pages/Videos'
import { Event } from './pages/Event'
import { NotFound } from './pages/_404'
import { getBasePathPrefix } from './lib/basePath'
import './style.css'

function getPrefixedRoute(basePathPrefix: string, path: string) {
  if (!basePathPrefix) {
    return path
  }

  return path === '/' ? basePathPrefix : `${basePathPrefix}${path}`
}

export function App() {
  const basePathPrefix = getBasePathPrefix()
  const hasBasePathPrefix = basePathPrefix.length > 0

  return (
    <LocationProvider scope={basePathPrefix || undefined}>
      <Header />
      <Router>
        <Route path="/" component={Home} />
        {hasBasePathPrefix ? <Route path={getPrefixedRoute(basePathPrefix, '/')} component={Home} /> : null}
        <Route path="/backnumber/:period?" component={Backnumber} />
        {hasBasePathPrefix ? (
          <Route path={getPrefixedRoute(basePathPrefix, '/backnumber/:period?')} component={Backnumber} />
        ) : null}
        <Route path="/books" component={Books} />
        {hasBasePathPrefix ? <Route path={getPrefixedRoute(basePathPrefix, '/books')} component={Books} /> : null}
        <Route path="/company" component={Company} />
        {hasBasePathPrefix ? (
          <Route path={getPrefixedRoute(basePathPrefix, '/company')} component={Company} />
        ) : null}
        <Route path="/videos" component={Videos} />
        {hasBasePathPrefix ? <Route path={getPrefixedRoute(basePathPrefix, '/videos')} component={Videos} /> : null}
        <Route path="/event" component={Event} />
        {hasBasePathPrefix ? <Route path={getPrefixedRoute(basePathPrefix, '/event')} component={Event} /> : null}
        <Route default component={NotFound} />
      </Router>
      <Footer />
    </LocationProvider>
  )
}

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app')!)
}

export async function prerender(data: Record<string, unknown>) {
  return await ssr(<App {...data} />)
}
