import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-primary"
        >
          <img src="/logo.png" alt="Logo" className="h-8 w-auto"/>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {/* <Link
            href="/#features"
            className="text-sm font-medium hover:text-primary/80 transition-colors"
          >
            Benefits
          </Link> */}
          <Link
            href="/products"
            className="text-sm font-medium hover:text-primary/80 transition-colors"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-primary/80 transition-colors"
          >
            About us
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary/80 transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/products"
            className="hidden md:inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Shop Now
          </Link>
          <button className="md:hidden p-2">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
