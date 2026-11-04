import type { Platform } from "../types/game";
import {
  TfiGame,
  TfiTablet,
  TfiHeadphoneAlt,
  TfiAndroid,
  TfiDrupal,
} from "react-icons/tfi";
import { RiRobotFill } from "react-icons/ri";

export const getPlatformIcon = (platform: Platform) => {
  switch (platform.toLocaleLowerCase()) {
    case "pc":
      return TfiHeadphoneAlt;
    case "switch":
      return TfiAndroid;
    case "playstation 5":
      return TfiGame;
    case "xbox":
      return TfiDrupal;
    case "game boy":
      return TfiTablet;
    case "other":
      return RiRobotFill;
    default:
      return TfiGame;
  }
};
