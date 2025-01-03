import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={cn("mx-auto w-full max-w-[90rem] px-4", className)}>
      {children}
    </div>
  );
}
