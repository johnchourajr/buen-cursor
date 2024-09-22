import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const SvgFavicon = (props: Props) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={32} height={32} rx={5.64706} fill="black" />
  </svg>
);

export { SvgFavicon };
