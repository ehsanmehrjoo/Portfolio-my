import { ReactNode } from "react";

// components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// assets
import ReactIcon from "@/assets/skills/react.svg?react";
import HTMLIcon from "@/assets/skills/html.svg?react";
import CSSIcon from "@/assets/skills/css.svg?react";
import ReduxIcon from "@/assets/skills/redux.svg?react";
import TailwindIcon from "@/assets/skills/ui_lib/Tailwind.svg?react";
import NextjsIcon from "@/assets/skills/ui_lib/next.svg?react";
const ITEMS = [
  {
    id: 0,
    name: "HTML",
    icon: <HTMLIcon />,
  },
  {
    id: 1,
    name: "CSS",
    icon: <CSSIcon />,
  },
  {
    id: 2,
    icon: <ReactIcon />,
    name: "React",
  },
  {
    id: 3,
    icon: <NextjsIcon />,
    name: "Next.js",
  },
  {
    id: 4,
    icon: <ReduxIcon />,
    name: "Redux",
  },
  {
    id: 5,
    icon: <TailwindIcon />,
    name: "Tailwindcss",
  }
];

const SkillItems = () => {
  return (
    <div className="flex md:flex-col gap-1 md:justify-between h-full md:ml-2 mt-4 md:mt-0 items-center md:items-start ">
      {ITEMS.map((item) => (
        <SkillItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default SkillItems;

const SkillItem = ({ icon, name }: { icon: ReactNode; name: string }) => {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger className="w-5 md:w-4">
          <div>{icon}</div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-slate-900 font-bold">{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
