import { GlassIcons, ScrollFloat } from "@/components";
import { techStack } from "@/lib/constants";

const TechStack = () => {
  return (
    <section className="bg-white dark:bg-zinc-950 flex items-center justify-center py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-stone-800 dark:text-white">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Tech Stack
          </ScrollFloat>
        </div>
        <div className="min-h-[600px] relative pl-2">
          <GlassIcons items={techStack} className="custom-class" />
        </div>
      </div>
    </section>
  );
};
export default TechStack;
