// components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

// assets
import Login from "@/assets/botlyzer/Login.png";
import DashboardDark from "@/assets/botlyzer/Dashboard-Dark.png"
import DashboardLeight from "@/assets/botlyzer/DashboardLeight.png"
import DashboardLeightT from "@/assets/botlyzer/Screenshot (419).png"
import Allbookings from "@/assets/botlyzer/All-bookings.png"
import clientHome from "@/assets/botlyzer/client-web.png"
import clientCabin from "@/assets/botlyzer/client-cabin.png"
import clientAbout from "@/assets/botlyzer/client-about.png"
import clientLogin from "@/assets/botlyzer/client-login.png"
const Images = () => {
  return (
    <div className="p-10">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          <ImageItem src={clientHome} />
          <ImageItem src={clientCabin} />
          <ImageItem src={clientAbout} />
          <ImageItem src={clientLogin} />
          <ImageItem src={DashboardDark} />
          <ImageItem src={DashboardLeight} />
          <ImageItem src={DashboardLeightT} />
          <ImageItem src={Allbookings} />
          <ImageItem src={Login} />

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Images;

const ImageItem = ({ src }: { src: string }) => {
  return (
    <Dialog>
      <CarouselItem className="md:basis-1/2">
        <DialogTrigger>
          <img src={src} alt="screenshot" className="cursor-pointer" />
        </DialogTrigger>
      </CarouselItem>

      <DialogContent>
        <img src={src} alt="screenshot" className="max-h-full max-w-full" />
      </DialogContent>
    </Dialog>
  );
};
