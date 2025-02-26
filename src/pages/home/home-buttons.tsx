import { MENU_ITEMS } from "@/components/menu-items/contants";

// components
import ButtonType1 from "../../components/button-type1";

const HomeButtons = () => {

  const menuItems = [...MENU_ITEMS]
  menuItems.shift();

  return (
    <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
      <a target="_blank" download={true} href="/ehsan mehrjo cv.pdf">
        <ButtonType1>Download CV</ButtonType1>
      </a>
      <DividerLine />
      {menuItems.map((item) => (
        <ButtonType1 key={item.id} to={item.to}>
          {item.title}
        </ButtonType1>
      ))}
    </div>
  );
};

export default HomeButtons;

const DividerLine = () => (
  <div className="w-[2px] rounded-lg bg-primary mx-2 hidden sm:block"></div>
);
