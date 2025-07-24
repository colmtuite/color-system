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
          className={pathname === '/' ? 'active' : ''}
          aria-current={pathname === '/' ? 'page' : undefined}
        >
          Home
        </Link>
        <Link 
          href="/accessibility" 
          className={pathname === '/accessibility' ? 'active' : ''}
          aria-current={pathname === '/accessibility' ? 'page' : undefined}
        >
          Accessibility
        </Link>
        <Link 
          href="/text" 
          className={pathname === '/text' ? 'active' : ''}
          aria-current={pathname === '/text' ? 'page' : undefined}
        >
          Text
        </Link>
      </nav>
    </aside>
  );
} 