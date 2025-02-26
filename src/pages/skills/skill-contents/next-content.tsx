import { ReactNode } from "react";
// assets
import ServerShape from "../../../assets/common/server.svg?react";
import Spinner from "../../../components/spinner";

// utils
import Xarrow, { Xwrapper } from "react-xarrows";

// components

const NextContent = () => {
  return (
    <Xwrapper>
      <div className="flex gap-14">
        <ServerBox />
        <Page />
      </div>

      <Line start="server" end="page" />
    </Xwrapper>
  );
};

export default NextContent;

const ServerBox = () => (
  <div>
    <ServerShape id="server" width={50} height={50} />
  </div>
);

const Page = () => (
  <PageSection id="page" className="w-full h-40 flex gap-2">
    <PageSection className="w-1/3 h-full border-2 rounded-sm flex flex-col gap-2">
      <Spinner />
      <div className="w-full h-full bg-white rounded-sm" />
      <div className="w-full h-full bg-white rounded-sm" />
      <div className="w-full h-full bg-white rounded-sm" />
    </PageSection>
    <PageSection className="w-2/3 h-full border-2 rounded-sm flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <div className="w-full h-1 bg-white" />
        <div className="w-full h-1 bg-white" />
        <div className="w-full h-1 bg-white" />
        <div className="w-full h-1 bg-white" />
      </div>
      <div className="flex justify-center">
        <Spinner />
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-full h-1 bg-white" />
        <div className="w-full h-1 bg-white" />
      </div>
    </PageSection>
  </PageSection>
);

const PageSection = ({
  className,
  children,
  id,
}: {
  className: string;
  id?: string;
  children?: ReactNode;
}) => {
  return (
    <div id={id} className={`border-2 rounded-lg p-2 ${className}`}>
      {children}
    </div>
  );
};

const Line = ({ start, end }: { start: string; end: string }) => {
  return (
    <Xarrow
      start={start}
      end={end}
      color={"#fff"}
      // showHead={false}
      strokeWidth={2}
      startAnchor="right"
      endAnchor="left"
      path="smooth"
    />
  );
};
