import { ReactNode } from "react";

const Container = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <div
      className="flex justify-center h-full xl:container py-10 px-5"
    >
      {children}
    </div>
  );
};

export default Container;
