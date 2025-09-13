import { ReactNode } from "react";

// assets
import ReactQueryLogo from "@/assets/skills/api/react-query-logo.png";


const ApiContent = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center items-baseline gap-5 flex-wrap">
        <ItemContainer
          title="React Query"
          icon={<img src={ReactQueryLogo} width={40} />}
        />
      </div>
  
    </div>
  );
};

export default ApiContent;

const ItemContainer = ({ title, icon }: { title: string; icon: ReactNode }) => (
  <div className="flex flex-col gap-0.5 justify-center items-center">
    <div>{icon}</div>
    <p className="text-sm font-bold">{title}</p>
  </div>
);
