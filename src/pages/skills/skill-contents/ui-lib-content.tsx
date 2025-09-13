import { ReactNode } from "react";

// assets
import TailwindLogo from "../../../assets/skills/ui_lib/Tailwind.svg";
import MUILogo from "../../../assets/skills/ui_lib/MUI.svg";

import BootstrapLogo from "../../../assets/skills/ui_lib/Bootstrap.svg";

const UiLibContent = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-8 justify-center items-baseline">
        <ItemContainer
          icon={<img src={TailwindLogo} width={40} />}
          title="Tailwind"
        />
        <ItemContainer icon={<img src={MUILogo} width={40} />} title="MUI" />
      </div>
      <div className="flex gap-8 justify-center items-baseline">
        
        <ItemContainer icon={<img src={BootstrapLogo} width={40} />} title="No good" />
      </div>
    </div>
  );
};

export default UiLibContent;

const ItemContainer = ({ title, icon }: { title: string; icon: ReactNode }) => (
  <div className="flex flex-col gap-0.5 justify-center items-center">
    <div>{icon}</div>
    <p className="text-sm font-bold">{title}</p>
  </div>
);
