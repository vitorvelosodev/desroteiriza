import autoAnimate from "@formkit/auto-animate";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default function ErrorMessage({ children, className }: Props) {
  const parent = useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <p
      ref={parent}
      className={cn(
        "z-0 text-start text-xs font-semibold text-red-200",
        {
          "pt-2": children,
        },
        className,
      )}
    >
      {children}
    </p>
  );
}
