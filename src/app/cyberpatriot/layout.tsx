interface LayoutProps {
  children: React.ReactNode;
}

export default function Page({ children }: LayoutProps) {
  return <div>{children}</div>;
}
