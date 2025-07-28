export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 border-b text-xl font-semibold">Blindbook</header>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
