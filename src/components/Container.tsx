import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={cn("m-auto max-w-[90rem] px-4 lg:px-10", className)}>
      {children}
    </div>
  );
}
