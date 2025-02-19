interface HoverableCTAProps {
  children: React.ReactNode;
}

export const HoverableCTA = ({ children }: HoverableCTAProps) => {
  return <div className="hover:scale-110 transition-all duration-300">{children}</div>;
};
