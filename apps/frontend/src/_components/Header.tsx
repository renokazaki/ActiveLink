"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Home, Users } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  //use clientの設定していて、他コンポーネントに影響があるなら、pathの取得とボーダーはやめる
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Friends", href: "/friends", icon: Users },
  ];

  return (
    <div className="w-full sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="flex justify-between items-center h-12">
        <div className="flex">
          <nav className="text-lg font-medium flex space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-2 py-1 ${
                    isActive
                      ? "border-b-2 border-blue-500 text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <Icon className="mr-1 w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>ログインしてください</SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
