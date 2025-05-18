// icons
import { GitHubLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import VitestIcon from "@/assets/skills/vitest.svg?react";

// components
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import i18n from "@/i18n";

type ProjectCardProps = {
  image: string;
  title: string;
  text: string;
  liveLink: string;
  gitHubLink: string;
  skills?: ReactNode[];
  haveTest?: string;
};

const ProjectCard = ({
  text,
  image,
  gitHubLink,
  liveLink,
  title,
  skills,
  haveTest,
}: ProjectCardProps) => {
  const isFarsi = i18n.language === "fa";

  return (
    <div className="flex flex-col md:flex-row gap-4 border-2 border-primary/50 rounded-3xl p-4">
      {/* تصویر - همیشه چپ‌چین باقی می‌ماند */}
      <div className="border-2 border-primary/50 sm:p-3 overflow-hidden rounded-xl w-full md:w-[40%] h-auto flex justify-center items-center">
        <Dialog>
          <DialogTrigger>
            <img src={image} alt={title} className="rounded-md" />
          </DialogTrigger>
          <DialogContent>
            <img src={image} alt={title} />
          </DialogContent>
        </Dialog>
      </div>

      {/* محتوای متنی - در حالت فارسی راست‌چین */}
      <div
        className={`w-full md:w-[60%] flex flex-col gap-4 justify-between items-start ${
          isFarsi ? "text-right" : "text-left"
        }`}
        dir={isFarsi ? "rtl" : "ltr"}
      >
        <div className="space-y-2">
          <p className="text-xl font-semibold">{title}</p>
          <p className="text-primary/90 font-semibold">
            {text?.split(" ").map((i, idx) => {
              if (i?.includes(".com")) {
                return (
                  <a
                    key={idx}
                    href={`https://${i}`}
                    className="text-blue-500 hover:text-blue-600 hover:underline"
                    target="_blank"
                  >
                    {i}{" "}
                  </a>
                );
              } else {
                return `${i} `;
              }
            })}
          </p>
        </div>

        {skills && (
          <div className="flex items-center gap-2 flex-wrap">
            {skills.map((skill, index) => (
              <div key={index} className="w-6">
                {skill}
              </div>
            ))}
          </div>
        )}

        {haveTest && (
          <div className="flex items-center gap-2">
            <VitestIcon className="w-7 h-7" />
            <p className="text-primary/90 font-semibold text-sm">
              {isFarsi ? (
                <>
                  برای منطق لایک پست با Vitest تست واحد نوشتم. برای دیدن کد تست‌ها{" "}
                  <a
                    href={haveTest}
                    target="_blank"
                    className="text-blue-500 hover:text-blue-600 hover:underline"
                  >
                    اینجا
                  </a>{" "}
                  کلیک کن.
                </>
              ) : (
                <>
                  I wrote unit tests with vitest for like post logic, click{" "}
                  <a
                    href={haveTest}
                    target="_blank"
                    className="text-blue-500 hover:text-blue-600 hover:underline"
                  >
                    here
                  </a>{" "}
                  to see the tests code
                </>
              )}
            </p>
          </div>
        )}

        <div className={`flex items-start gap-6 ${isFarsi ? "flex-row-reverse" : ""}`}>
          <a href={liveLink} target="_blank">
            <Button
              variant="link"
              className={`px-0 flex items-center gap-1.5 text-primary/70 hover:text-primary/90 ${
                isFarsi ? "flex-row-reverse" : ""
              }`}
            >
              {isFarsi ? "مشاهده وب‌سایت" : "Visit Website"} <ExternalLinkIcon />
            </Button>
          </a>
          <a href={gitHubLink} target="_blank">
            <Button
              variant="link"
              className={`px-0 flex items-center gap-1.5 text-primary/70 hover:text-primary/90 ${
                isFarsi ? "flex-row-reverse" : ""
              }`}
            >
              {isFarsi ? "مشاهده در گیت‌هاب" : "See on GitHub"} <GitHubLogoIcon />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
