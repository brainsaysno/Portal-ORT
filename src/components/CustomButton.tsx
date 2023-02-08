import Link from "next/link";
import { type PropsWithChildren } from "react";
import { type UrlObject } from "url";

const CustomButton = ({
  leftText,
  children,
  rightText,
  principal = false,
  href,
  className = "",
  hover = false,
}: PropsWithChildren<{
  leftText?: string | number;
  rightText?: string | number;
  principal?: boolean;
  hover?: boolean;
  href: string | UrlObject;
  className?: string;
}>) => (
  <Link href={href} className={className}>
    <div
      className={`min-w-100 group flex rounded border-2 border-black py-4 ${hover ? "hover:bg-orange-300" : ""
        } ${principal ? "bg-orange-300" : "bg-white"} ${className}`}
    >
      {leftText && (
        <span
          className={`border-r-4 px-4 ${hover ? "group-hover:border-orange-400" : ""
            } ${principal ? "border-orange-400" : ""}`}
        >
          {leftText}
        </span>
      )}
      <span className="px-5 text-left">{children}</span>
      {rightText && (
        <span
          className={`border-l-4 px-4 ${hover ? "group-hover:border-orange-400" : ""
            } ${principal ? "border-orange-400" : ""}`}
        >
          {rightText}
        </span>
      )}
    </div>
  </Link>
);

export default CustomButton;
