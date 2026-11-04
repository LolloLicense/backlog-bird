import type { Platform } from "../types/game";
import {
  TfiGame,
  TfiTablet,
  TfiHeadphoneAlt,
  TfiAndroid,
  TfiDrupal,
} from "react-icons/tfi";
import { RiRobotFill } from "react-icons/ri";

export const getPlatformIcon = (platform: Platform, className?: string) => {
  switch (platform.toLowerCase()) {
    case "pc":
      return <TfiHeadphoneAlt className={className} />;
    case "switch":
      return <TfiAndroid className={className} />;
    case "playstation 5":
      return <TfiGame className={className} />;
    case "xbox":
      return <TfiDrupal className={className} />;
    case "game boy":
      return <TfiTablet className={className} />;
    case "other":
      return <RiRobotFill className={className} />;
    default:
      return <TfiGame className={className} />;
  }
};
