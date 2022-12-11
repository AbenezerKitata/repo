import { HiSquaresPlus } from "react-icons/hi2";
import {
  MdOutlineSignalCellularAlt,
  MdOutlineDesignServices,
} from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import { BiGlassesAlt, BiCodeAlt, BiCustomize } from "react-icons/bi";
import { BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { GiSwordBrandish } from "react-icons/gi";
import { FaVrCardboard } from "react-icons/fa";
import { DiGoogleAnalytics } from "react-icons/di";
import { RiLockPasswordFill, RiSoundcloudFill } from "react-icons/ri";
import { IconType } from "react-icons";

export const clients = [
  {
    id: 1,
    label: "Ozak Gyo",
    logo: "/client/ozak-gyo.png",
    href: "",
  },
  {
    id: 2,
    label: "Paratoner Mimarlık",
    logo: "/client/paratoner-mim.png",
    href: "/",
  },
  {
    id: 3,
    label: "Adört Mimarlık",
    logo: "/client/adort-mim.jpg",
    href: "/",
  },
  {
    id: 4,
    label: "Studio13 Architects",
    logo: "/client/s13-mim.png",
    href: "/",
  },
  {
    id: 4,
    label: "Paye Studio",
    logo: "/client/paye-mim.png",
    href: "/",
  },
];
export const soclialLinks = [
  {
    id: 1,
    label: "Twitter",
    href: "/",
    icon: BsTwitter,
  },
  {
    id: 2,
    label: "Instagram",
    href: "/",
    icon: BsInstagram,
  },
  {
    id: 3,
    label: "Linkedin",
    href: "/",
    icon: BsLinkedin,
  },
];
export const links = [
  {
    id: 1,
    label: "Features",
    href: "#features",
  },
  {
    id: 2,
    label: "Projects",
    href: "#projects",
  },
  {
    id: 3,
    label: "Pricing",
    href: "#price",
  },
  {
    id: 4,
    label: "Contact",
    href: "#contact",
  },
];
export const keyFeatures = [
  {
    id: 1,
    title: "Easy Folder Structure",
    icon: BiCodeAlt,
  },
  {
    id: 2,
    title: "VR & Mobile Compatible",
    icon: FaVrCardboard,
  },
  {
    id: 3,
    title: "Data Analytics",
    icon: DiGoogleAnalytics,
  },
  {
    id: 4,
    title: "Private Password Protection",
    icon: RiLockPasswordFill,
  },

  {
    id: 5,
    title: "Customizable Hotspots & Info Tags",
    icon: BiCustomize,
  },

  {
    id: 6,
    title: "Cloud Based Server",
    icon: RiSoundcloudFill,
  },

  {
    id: 7,
    title: "Brandization",
    icon: GiSwordBrandish,
  },
  {
    id: 7,
    title: "24/7 Customer Service",
    icon: MdOutlineDesignServices,
  },
];
export interface featuresKeyType {
  id: number;
  title: string;
  icon: IconType;
}

export interface featuresOneType {
  id: number;
  side: boolean;
  title: string;
  color: string;
  subtitle: string;
  data: featuresData[];
}
[];
export interface featuresData {
  id: number;
  title: string;
  icon: any;
}
export const featuresOne = {
  id: 1,
  side: true,
  title: "Virtual Reality in few seconds",
  color: "",
  subtitle:
    "Quickly generate palettes from one color, local style or selection.",
  data: [
    {
      id: 1,
      title:
        "5 palette types: Tint & Shades, Tints, Shades, Tones, Opacities and Gradient",
      icon: HiSquaresPlus,
    },
    {
      id: 2,
      title: "Powerful color stop editor for unlimited customisation",
      icon: MdOutlineSignalCellularAlt,
    },
    {
      id: 3,
      title:
        "Curve selector: a new way to generate the perfect palette for your needs",
      icon: FaNetworkWired,
    },
    {
      id: 4,
      title: "Automatic contrast calculation/correction",
      icon: BiGlassesAlt,
    },
  ],
};

export const featuresTwo = {
  id: 1,
  side: false,
  title: "Unlimited customisation",
  subtitle: "Unslash your creativity",
  data: [
    {
      id: 1,
      title: "8 color modes: RGB, HSL, HSV, HSI, LAB, OKLAB, LCH, CMYK",
      icon: HiSquaresPlus,
    },
    {
      id: 2,
      title:
        "Color padding: reduce the color range by cutting off a fraction of the gradient on both",
      icon: MdOutlineSignalCellularAlt,
    },
    {
      id: 3,
      title: "Name palette colors in 3 diffents ways",
      icon: FaNetworkWired,
    },
    {
      id: 4,
      title: "Correct lightness and saturation",
      icon: BiGlassesAlt,
    },
  ],
};
export const featuresThree = {
  id: 1,
  side: true,
  title: "One tool to manage all your palettes",
  subtitle: "The best way to organize color systems.",
  data: [
    {
      id: 1,
      title: "Synchronize your palettes with local styles",
      icon: HiSquaresPlus,
    },
    {
      id: 2,
      title: "Save palettes and reuse them across all your projects",
      icon: MdOutlineSignalCellularAlt,
    },
    {
      id: 3,
      title: "Instantly add colors guide to your document",
      icon: FaNetworkWired,
    },
    {
      id: 4,
      title: "Export palettes for most popular frameworks and formats",
      icon: BiGlassesAlt,
    },
  ],
};
export const price = [
  {
    id: 1,
    title: "Free",
    subtitle: "The quickest and easiest way to try virtual tour software.",
    price: "0",
    time: "/montly",
    services: [
      "20 Virtual Tour",
      "VR Editor",
      "Uploading Virtual Tour",
      " Analytics Dashboard",
      "Limited Support",
    ],
  },

  {
    id: 3,
    title: "Professional",
    subtitle: "The quickest and easiest way to try virtual tour software.",
    price: "30",
    time: "/montly",
    services: [
      "200 Virtual Tour",
      "VR Editor",
      "Uploading Virtual Tour",
      " Analytics Dashboard",
      "Limited Support",
    ],
  },
  {
    id: 4,
    title: "Enterprise",
    subtitle: "The quickest and easiest way to try virtual tour software.",
    price: "",
    time: "custom",
    services: [
      "Unlimited",
      "VR Editor",
      "Uploading Virtual Tour",
      " Analytics Dashboard",
      "Limited Support",
    ],
  },
];
/* GITHUB_ID=83092ecb62b30366339f
GITHUB_SECRET=1ef1fd35bb9301d7202ebcdfdbb5e099b9909b9c
GOOGLE_CLIENT_SECRET=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
GOOGLE_CLIENT_ID=764283430244-80q83abhrdes8ls74cejnq02nrqdcpd9.apps.googleusercontent.com
DATABASE_URL='mysql://piefclkhnnlpn0lrmuuz:pscale_pw_xnDCHht5HSVc2WYSPuHBNCspfbegxwELtjAUtf3IKg9@eu-central.connect.psdb.cloud/vr-mustakil?sslaccept=strict'
 */
