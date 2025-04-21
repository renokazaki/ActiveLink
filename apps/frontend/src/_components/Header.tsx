import Link from "next/link";

export default function Header() {
  const navigation = [
    { name: "My Page", href: "/" },
    { name: "Friends", href: "/friends" },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8  bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="flex justify-between items-center h-12">
        <div className="flex">
          <nav className="ml-2 text-lg font-medium flex space-x-8 ">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                //   className={cn(
                //     "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                //     pathname === item.href
                //       ? "border-indigo-500 text-blue-500"
                //       : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                //   )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {/* {user && (
              <span className="text-sm text-white">
                {user.username || user.fullName || "User"}
              </span>
            )} */}
          {/* <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton>ログインしてください</SignInButton>
            </SignedOut> */}
        </div>
      </div>
    </div>
  );
}
