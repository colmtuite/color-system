'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <nav>
        <Link 
          href="/" 
          aria-current={pathname === '/' ? 'page' : undefined}
        >
          Scales
        </Link>
        <Link 
          href="/text" 
          aria-current={pathname === '/text' ? 'page' : undefined}
        >
          Text
        </Link>
        <Link 
          href="/button" 
          aria-current={pathname === '/button' ? 'page' : undefined}
        >
          Button
        </Link>
        <Link 
          href="/accessibility" 
          aria-current={pathname === '/accessibility' ? 'page' : undefined}
        >
          Accessibility
        </Link>
      </nav>
    </aside>
  );
} 