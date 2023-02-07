import Link from "next/link";
import { PropsWithChildren } from "react";
import { UrlObject } from "url";

const CustomButton = ({
  leftText,
  children,
  rightText,
  principal = false,
  href,
}: PropsWithChildren<{
  leftText?: string | number;
  rightText?: string | number;
  principal?: boolean;
  href: string | UrlObject;
}>) => (
  <Link href={href}>
    <div
      className={`w-100 my-2 border-2 border-black py-5 ${principal ? "bg-orange-300" : "bg-white"
        }`}
    >
      {leftText && (
        <span
          className={`border-r-4 px-4 ${principal ? "border-orange-400" : ""}`}
        >
          {leftText}
        </span>
      )}
      <span className="px-4">{children}</span>
      {rightText && (
        <span
          className={`border-l-4 px-4 ${principal ? "border-orange-400" : ""}`}
        >
          {rightText}
        </span>
      )}
    </div>
  </Link>
);

export default CustomButton;
