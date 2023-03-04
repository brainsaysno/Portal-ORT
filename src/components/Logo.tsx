import Image, { type StaticImageData } from "next/image";
import SVGLogoPrimary from "@assets/logoPrimary.svg";
import SVGLogoTimber from "@assets/logoTimber.svg";

export default function Logo({
  primary = false,
  ...props
}: {
  primary?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [_: string]: any;
}) {
  return (
    <Image
      src={(primary ? SVGLogoPrimary : SVGLogoTimber) as StaticImageData}
      alt="Portal ORT Logo"
      {...props}
    />
  );
}
