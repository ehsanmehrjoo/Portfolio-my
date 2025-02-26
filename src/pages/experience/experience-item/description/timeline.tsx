import SkillItems from "./skill-items";

const TimeLine = () => {
  return (
    <div className="flex w-full md:w-fit justify-between flex-row md:flex-col gap-2 items-center">
      <Circle value="2024" />
      <div className="w-full h-[1px] md:w-[1px] md:h-full bg-primary relative">
        <SkillItems />
      </div>
      <Circle value="now" />
    </div>
  );
};

const Circle = ({ value }: { value: string }) => (
  <div className="w-fit h-fit">
    <div className="border-2 rounded-[50%] text-xs w-11 h-11 flex justify-center items-center">
      {value}
    </div>
  </div>
);

export default TimeLine;