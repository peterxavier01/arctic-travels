import Nike from "./assets/nike.svg";
import ApplePay from "./assets/apple-pay.svg";
import SilverStar from "./assets/silver-star.svg";
import Intrax from "./assets/intrax.svg";
import MasterCard from "./assets/mastercard.svg";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import Person from "./assets/user.svg";
import SlideOne from "./assets/slide.jpg";
import SlideTwo from "./assets/slide2.jpg";
import SlideThree from "./assets/slide3.jpg";
import ResortOne from "./assets/resort.png";
import ResortTwo from "./assets/resort2.png";
import ResortThree from "./assets/resort3.png";
import ResortFour from "./assets/resort4.png";
import Facebook from "./assets/facebook.svg";
import Twitter from "./assets/twitter.svg";
import Instagram from "./assets/instagram.svg";

export const travelDetails = [
  {
    icon: <FiMapPin className="w-6 h-6" />,
    bgColor: "#ECF3FE",
    iconColor: "#3E86F5",
    title: "location",
    details: "iceland",
  },
  {
    icon: <img src={Person} alt="person" className="w-6 h-6" />,
    bgColor: "#EBFFF8",
    iconColor: "#00C07B",
    title: "persons",
    details: "4 persons",
  },
  {
    icon: <AiOutlineCalendar className="w-6 h-6" />,
    bgColor: "#FFF0F2",
    iconColor: "#CC0024",
    title: "check in",
    details: "12 january 2022",
  },
  {
    icon: <AiOutlineCalendar className="w-6 h-6" />,
    bgColor: "#F8F7F7",
    iconColor: "#1A0004",
    title: "check out",
    details: "18 january 2022",
  },
];

export const logos = [
  { logo: Nike },
  { logo: ApplePay },
  { logo: SilverStar },
  { logo: Intrax },
  { logo: MasterCard },
];

export const regions = [
  {
    src: SlideOne,
    id: Math.random(),
    title: "Mountain Resort",
    body: "This is a place you would love to enjoy natural phenoms anywhere in the world",
  },
  {
    src: SlideTwo,
    id: Math.random(),
    title: "Fuji Mountain",
    body: "This is a place you would love to enjoy natural phenoms anywhere in the world",
  },
  {
    src: SlideThree,
    id: Math.random(),
    title: "Freezing WinterLake",
    body: "This is a place you would love to enjoy natural phenoms anywhere in the world",
  },
];

export const resorts = [
  {
    src: ResortOne,
    id: Math.random(),
    title: "Winter landscape Chalet",
    body: "Cambodia",
  },
  {
    src: ResortTwo,
    id: Math.random(),
    title: "Winter landscape Chalet",
    body: "Cambodia",
  },
  {
    src: ResortThree,
    id: Math.random(),
    title: "Winter landscape Chalet",
    body: "Cambodia",
  },
  {
    src: ResortFour,
    id: Math.random(),
    title: "Winter landscape Chalet",
    body: "Cambodia",
  },
];

export const footerLinks = [
  {
    title: "Company",
    linkOne: "About",
    linkTwo: "Careers",
    linkThree: "Mobile",
  },
  {
    title: "Contact",
    linkOne: "FAQ",
    linkTwo: "Press",
    linkThree: "Affiliates",
  },
  {
    title: "More",
    linkOne: "Airlines",
    linkTwo: "Airfees",
    linkThree: "Lowfare Tips",
  },
];

export const socialLinks = [
  { src: Facebook },
  { src: Instagram },
  { src: Twitter },
];
