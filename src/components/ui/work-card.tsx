import { Button } from "@/components/ui/index.ts";

type WorkCard = {
  image?: string;
  alt?: string;
  iconList?: React.ElementType[];
  liveUrl?: string;
};

const WorkCard = ({ image, alt, iconList, liveUrl }: WorkCard) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {image && (
        <img
          src={image}
          className={"w-full h-full"}
          alt={alt ?? "Tech stack image"}
        />
      )}
      {iconList && (
        <div className="absolute flex w-fit p-4 items-center justify-between bottom-2.5 left-2">
          <div className={"flex h-9 items-center justify-between gap-1.5"}>
            {iconList.map((Icon, index: number) => (
              <Icon
                key={index}
                className="h-8 w-8 dark:bg-stone-700 bg-stone-300 rounded-full p-1.5 "
              />
            ))}
          </div>
        </div>
      )}
      {liveUrl && (
        <div
          className={
            "absolute flex w-full p-4 items-center justify-end bottom-2.5 right-2"
          }
        >
          <Button variant={"secondary"}>
            <a href={liveUrl}>Live Demo</a>
          </Button>
        </div>
      )}
    </div>
  );
};
export default WorkCard;
