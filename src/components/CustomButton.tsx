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
}: PropsWithChildren<{
  leftText?: string | number;
  rightText?: string | number;
  principal?: boolean;
  href: string | UrlObject;
  className?: string;
}>) => (
  <Link href={href}>
    <div
      className={`w-100 group my-2 border-2 border-black py-5 hover:bg-orange-200 ${principal ? "bg-orange-300" : "bg-white"
        } ${className}`}
    >
      {leftText && (
        <span
          className={`border-r-4 px-4 group-hover:border-orange-300 ${principal ? "border-orange-400" : ""
            }`}
        >
          {leftText}
        </span>
      )}
      <span className="px-4">{children}</span>
      {rightText && (
        <span
          className={`border-l-4 px-4 group-hover:border-orange-300 ${principal ? "border-orange-400" : ""
            }`}
        >
          {rightText}
        </span>
      )}
    </div>
  </Link>
);

export default CustomButton;
