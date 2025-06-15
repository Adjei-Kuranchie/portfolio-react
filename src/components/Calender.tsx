import { Timeline } from "@/components";
import { calenderData } from "@/lib/constants";

function TimelineDemo() {
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={calenderData} />
    </div>
  );
}

export default TimelineDemo;
