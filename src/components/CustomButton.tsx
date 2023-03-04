import Link from "next/link";
import { type PropsWithChildren } from "react";
import { type UrlObject } from "url";

const CustomButton = ({
  leftText,
  children,
  // rightText,
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
      className={`min-w-100 group flex rounded-md bg-white py-4 text-charcoal drop-shadow-xl ${hover ? "hover:bg-hover" : ""
        } ${principal ? "text-active" : ""}`}
    >
      {leftText && (
        <span
          className={`border-r-4 border-gray-100 px-4 text-charcoal ${hover ? "group-hover:border-gray-300" : ""
            } ${principal ? "text-active" : ""}`}
        >
          {leftText}
        </span>
      )}
      <span className="px-5 text-left">{children}</span>
      {/* {rightText && ( */}
      {/*   <span */}
      {/*     className={`border-l-4 px-4 ${hover ? "group-hover:border-orange-400" : "" */}
      {/*       } ${principal ? "border-orange-400" : ""}`} */}
      {/*   > */}
      {/*     {rightText} */}
      {/*   </span> */}
      {/* )} */}
    </div>
  </Link>
);

export default CustomButton;
