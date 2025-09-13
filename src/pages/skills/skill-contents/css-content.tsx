// components
import { ElemWhite, ElemYellow } from "../../../components/editor-elemnts";

const CssContent = () => {
  return (
    <div className="text-xl">
      <div>
        <ElemYellow>.container {"{"}</ElemYellow>
      </div>
      <div className="ml-5">
        <ElemWhite>
          display: <ElemYellow>flex</ElemYellow> ;
        </ElemWhite>
      </div>
      <div className="ml-5">
        <ElemWhite>
        justify-content: <ElemYellow>center</ElemYellow> ;
        </ElemWhite>
      </div>
      <div className="ml-5">
        <ElemWhite>
        align-items: <ElemYellow>center</ElemYellow> ;
        </ElemWhite>
      </div>
      <div>
        <ElemYellow>{"}"}</ElemYellow>
      </div>
    </div>
  );
};

export default CssContent;
