import { ReactNode } from "react";

type SkillProps = {
  title: string;
  children: ReactNode;
};

const Skill = ({ title, children }: SkillProps) => {
  return (
    <>
      <p>{title}</p>
      <div className="mt-3">{children}</div>
    </>
  );
};

export default Skill;
