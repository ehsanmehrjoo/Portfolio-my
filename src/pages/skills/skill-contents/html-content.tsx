import { motion } from "framer-motion";
import { ElemRed, ElemWhite } from "../../../components/editor-elemnts";

const HTMLContetnt = () => {
  return (
    <div className="text-3xl">
      <div>
        <ElemWhite>{"<"}</ElemWhite>
        <ElemRed>div</ElemRed>
        <ElemWhite>{">"}</ElemWhite>
      </div>
      <div className="ml-5"> 
        {"<h1>Hello World</h1>".split("").map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el === "<" ? (
              <ElemWhite>{el}</ElemWhite>
            ) : el === "h" ? (
              <ElemRed>{el}</ElemRed>
            ) : el === "1" ? (
              <ElemRed>{el}</ElemRed>
            ) : el === ">" ? (
              <ElemWhite>{el}</ElemWhite>
            ) : el === "/" ? (
              <ElemWhite>{el}</ElemWhite>
            ) : (
              <ElemWhite>{el}</ElemWhite>
            )}
          </motion.span>
        ))}
      </div>
      <div>
        <ElemWhite>{"<"}</ElemWhite>
        <ElemWhite>/</ElemWhite>
        <ElemRed>div</ElemRed>
        <ElemWhite>{">"}</ElemWhite>
      </div>
    </div>
  );
};

export default HTMLContetnt;
