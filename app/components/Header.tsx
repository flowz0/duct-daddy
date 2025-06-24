interface HeaderProps {
  children: React.ReactNode;
  subtitle?: string;
  gradientBg?: boolean;
}

export default function Header({ children, subtitle, gradientBg }: HeaderProps) {
  return (
    <header className={`${gradientBg ? "bg-gradient-to-b from-[#0080DB] to-[hsl(195,100%,43%)] text-[#E6E6E6]" : "text-[#333333]"} pt-20`}>
      <div className="px-6 py-20 max-w-7xl mx-auto">
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