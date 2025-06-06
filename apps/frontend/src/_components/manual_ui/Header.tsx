'use client';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Home, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';
import GuestLogin from '../../app/(Auth)/GuestLogin';

export default function Header() {
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Friends', href: '/friends', icon: Users },
  ];

  return (
    <div className="w-full sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="flex justify-between items-center h-12">
        <div className="flex">
          {/* 認証済みユーザー: ナビゲーションを表示 */}
          <SignedIn>
            <nav className="text-lg font-medium flex space-x-4">
              {navigation.map(item => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center px-4 py-1 ${
                      isActive
                        ? 'border-b-2 border-blue-500 text-blue-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Icon className="mr-2 w-5 h-5" />
                    <span className="hidden sm:inline-block">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </SignedIn>

          {/* 未認証ユーザー: アプリ名のみ表示 */}
          <SignedOut>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent px-4 py-1">
              ActiveLink
            </div>
          </SignedOut>
        </div>

        <div className="flex items-center gap-4 mr-4">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <GuestLogin />
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
