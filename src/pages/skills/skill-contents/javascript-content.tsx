import {
  ElemBlue,
  ElemGreen,
  ElemMethod,
  ElemMethod2,
  ElemPupule,
  ElemVarYellow,
  ElemWhite,
  ElemYellow,
} from "../../../components/editor-elemnts";

const JavascriptContent = () => {
  return (
    <div>
      <div>
        <ElemVarYellow>element</ElemVarYellow>
        <ElemWhite>.</ElemWhite>
        <ElemMethod>addEventListener</ElemMethod>
        <ElemYellow>(</ElemYellow> <ElemGreen>"click"</ElemGreen>{" "}
        <ElemWhite>,</ElemWhite> <ElemMethod>handler</ElemMethod>{" "}
        <ElemYellow>)</ElemYellow> <ElemWhite>;</ElemWhite>
      </div>
      <div className="mt-3">
        <div>
          <ElemPupule>const</ElemPupule> <ElemVarYellow>req</ElemVarYellow>{" "}
          <ElemBlue>=</ElemBlue> <ElemMethod2>fetch</ElemMethod2>
          <ElemYellow>( </ElemYellow>
          <ElemGreen>""</ElemGreen>
          <ElemWhite> , </ElemWhite> <ElemPupule>{"{ }"}</ElemPupule>{" "}
          <ElemYellow>)</ElemYellow>
        </div>
        <div>
          <ElemPupule>const</ElemPupule> <ElemVarYellow>res</ElemVarYellow>{" "}
          <ElemBlue>=</ElemBlue> <ElemVarYellow>JSON</ElemVarYellow>
          <ElemWhite>.</ElemWhite>
          <ElemMethod>parse</ElemMethod>
          <ElemYellow>(</ElemYellow>
          <ElemVarYellow>req</ElemVarYellow>
          <ElemYellow>)</ElemYellow>
        </div>
      </div>
    </div>
  );
};

export default JavascriptContent;
