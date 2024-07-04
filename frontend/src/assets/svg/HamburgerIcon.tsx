const HamburgerIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 24,
  color = "#000",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="2" rx="1" fill={color} />
    <rect y="8" width="24" height="2" rx="1" fill={color} />
    <rect y="16" width="24" height="2" rx="1" fill={color} />
  </svg>
);

export default HamburgerIcon;
