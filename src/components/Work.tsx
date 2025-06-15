import { ScrollFloat, StickyScroll } from "@/components";
import { workContent } from "@/lib/constants";

const Work = () => {
  return (
    <section
      className="bg-white dark:bg-zinc-950 flex items-center justify-center py-20 px-4"
      id="work"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-stone-800 dark:text-white">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Work
          </ScrollFloat>
        </div>
        <div className="w-full py-3">
          <StickyScroll content={workContent} />
        </div>
      </div>
    </section>
  );
};
export default Work;
