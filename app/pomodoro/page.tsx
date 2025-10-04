import Top from "@/common/sections/pomodoro/Top";
import TimerSection from "@/common/sections/pomodoro/TimerSection";
import Bottom from "@/common/sections/pomodoro/Bottom";

export default function Pomodoro() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 flex flex-col">
      <Top />
      <TimerSection />
      <Bottom />
    </div>
  );
}