import { useState } from 'preact/hooks'
import { useLocation } from 'preact-iso'
import { Menu, X } from 'lucide-preact'
import { stripBasePath, withBasePath } from '../lib/basePath'

const navItems = [
  { label: 'バックナンバー', href: '/backnumber' },
  { label: 'イベント', href: '/event' },
  { label: '書籍', href: '/books' },
  { label: '会社案内', href: '/company' },
  { label: '映像', href: '/videos' },
  { label: 'お問い合わせ', href: 'https://docs.google.com/forms/d/e/1FAIpQLScnSldFZIH3CQFRrETxLqL1SKdGTPCQGTuEurYTDAKxGRypIA/viewform' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { path } = useLocation()
  const currentPath = stripBasePath(path)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <a href={withBasePath('/')} className="font-serif text-xl font-bold tracking-widest text-foreground">
            情況出版
          </a>
          <p className="text-xs font-light uppercase tracking-[0.3em] text-muted-foreground">
            変革のための総合誌
          </p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="メインナビゲーション">
            {navItems.map((item) => (
            <a
              key={item.href}
              href={withBasePath(item.href)}
              className={`text-sm font-light tracking-wide transition-colors hover:text-foreground ${
                currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href + '/'))
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          className="border-t border-border bg-background px-6 py-6 md:hidden"
          aria-label="モバイルナビゲーション"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={withBasePath(item.href)}
              className={`text-sm font-light tracking-wide transition-colors hover:text-foreground ${
                currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href + '/'))
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
