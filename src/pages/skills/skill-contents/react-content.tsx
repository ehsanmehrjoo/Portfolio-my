import Xarrow, { Xwrapper } from "react-xarrows";

const ReactContent = () => {
  return (
    <Xwrapper>
      <div className="flex flex-col gap-6">
        <div className="flex justify-center items-center">
          <Box id="1" title="App" />
          <Line start="1" end="2" />
          <Line start="1" end="3" />
        </div>
        <div className="flex justify-center items-center gap-4">
          <Box id="2" title="Parent" />
          <Box id="3" title="Parent" />
          <Line start="2" end="4" />
          <Line start="3" end="5" />
          <Line start="3" end="6" />
        </div>
        <div className="flex justify-center items-center gap-4">
          <Box id="4" title="Child" />
          <Box id="5" title="Child" />
          <Box id="6" title="Child" />
        </div>
      </div>
    </Xwrapper>
  );
};

export default ReactContent;

const Box = ({ id, title }: { id: string; title?: string }) => {
  return (
    <>
      <div
        id={id}
        className="w-16 h-8 border-2 border-sky-300 rounded-sm flex justify-center items-center"
      >
        <p className="text-xs">{title}</p>
      </div>
    </>
  );
};

const Line = ({ start, end }: { start: string; end: string }) => {
  return (
    <Xarrow
      start={start}
      end={end}
      color={"rgb(125 211 252)"}
      showHead={false}
      strokeWidth={2}
      startAnchor="bottom"
      endAnchor="top"
      path="grid"
    />
  );
};
