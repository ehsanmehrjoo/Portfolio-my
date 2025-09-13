import Container from "@/components/container";
import MenuItems from "@/components/menu-items";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <Container>
      <div className="flex flex-col w-full sm:gap-5">
        {location.pathname !== "/" && <MenuItems />}
        {children}
      </div>
    </Container>
  );
};

export default MainLayout;
