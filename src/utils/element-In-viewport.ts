/* eslint-disable @typescript-eslint/no-explicit-any */
export const elementInViewport = (id: string) => {
  let el: any = document.getElementById(id);
  let top = el?.offsetTop;
  let left = el?.offsetLeft;
  const width = el?.offsetWidth;
  const height = el?.offsetHeight;

  while (el?.offsetParent) {
    el = el?.offsetParent;
    top += el?.offsetTop;
    left += el?.offsetLeft;
  }

  return (
    top < window.pageYOffset + window.innerHeight &&
    left < window.pageXOffset + window.innerWidth &&
    top + height > window.pageYOffset &&
    left + width > window.pageXOffset
  );
};
