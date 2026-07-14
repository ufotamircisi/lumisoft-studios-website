export default function TurkishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div lang="tr" className="flex min-h-full flex-1 flex-col">
      {children}
    </div>
  );
}
