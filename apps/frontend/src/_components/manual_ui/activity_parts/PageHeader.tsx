export function PageHeader({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <h1 className="text-4xl font-bold tracking-tight ">
          {children}のページ
        </h1>
      </div>
    </div>
  );
}
