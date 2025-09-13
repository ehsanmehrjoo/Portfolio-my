import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ErrorComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center gap-6 h-[calc(100vh-100px)] ">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-primary w-fit">Something went wrong!</p>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
