import type { SimpleIcon } from "simple-icons";

interface SimpleIconProps {
  icon: SimpleIcon;
  size?: number;
  className?: string;
}

export function SimpleIcon({
  icon,
  size = 24,
  className = "",
}: SimpleIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
}
