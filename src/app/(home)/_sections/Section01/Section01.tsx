import {
  CampIcon,
  FireIcon,
  LogoIcon,
  MoonIcon,
  TreeIcon,
} from "@/assets/icons";
import { SectionArea } from "../../_components/SectionArea";

export const Section01 = () => {
  return (
    <SectionArea>
      <div className="flex items-center justify-center min-h-screen">
        <LogoIcon className="drop-shadow-glow" />
        <div className="flex items-center justify-center">
          <MoonIcon className=" drop-shadow-glow w-[50px] h-[70px]" />
          <CampIcon className=" drop-shadow-glow w-[65px] h-[65px]" />
          <FireIcon className=" drop-shadow-glow w-[50px] h-[50px]" />
          <TreeIcon className=" drop-shadow-glow w-[50px] h-[50px]" />
        </div>
      </div>
    </SectionArea>
  );
};
