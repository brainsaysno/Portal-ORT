import Image, { type StaticImageData } from "next/image";
import SVGLogo from "@assets/logo.svg";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={SVGLogo as StaticImageData}
      alt="Portal ORT Logo"
      className={className}
    />
  );
}
