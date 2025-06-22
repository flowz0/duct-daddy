interface HeaderProps {
  children: React.ReactNode;
  subtitle?: string;
}

export default function Header({ children, subtitle }: HeaderProps) {
  return (
    <header className="pt-20 px-6 max-w-7xl mx-auto">
      <div className="py-20">
        <h1 className="text-4xl font-semibold text-center sm:text-5xl">
          {children}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-lg mx-auto text-center">{subtitle}</p>
        ) : ""}
      </div>
    </header>
  );
}