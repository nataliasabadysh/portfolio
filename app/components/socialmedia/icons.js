import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export const list = [
  {
    icon: FaGithub,
    name: "GitHub",
    href: "https://github.com/nataliasabadysh",
  },
  {
    icon: FaXTwitter,
    name: "Twitter",
    href: "https://twitter.com/NSabadysh",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    href: "https://www.instagram.com/natalia.developer/",
  },
  {
    icon: CiLinkedin,
    name: "Linkedin",
    href: "https://www.linkedin.com/in/natalia-sabadysh/",
  },
];

export function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}
