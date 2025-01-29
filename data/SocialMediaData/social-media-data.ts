import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import ISocialMediaData from "./types";

export const socialMediaData: ISocialMediaData[] = [
  { name: "Instagram", icon: faInstagram, url: "https://www.instagram.com/" },
  { name: "LinkedIn", icon: faLinkedinIn, url: "https://www.linkedin.com/" },
  { name: "Facebook", icon: faFacebookF, url: "https://www.facebook.com/" },
  { name: "YouTube", icon: faYoutube, url: "https://www.youtube.com/" },
];
