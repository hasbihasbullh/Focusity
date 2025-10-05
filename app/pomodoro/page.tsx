import Top from "@/common/sections/pomodoro/Top";
import TimerSection from "@/common/sections/pomodoro/TimerSection";
import Bottom from "@/common/sections/pomodoro/Bottom";
import BackgroundProvider from "@/common/components/BackgroundProvider";

export default function Pomodoro() {
  return (
    <BackgroundProvider>
      <div className="p-4 sm:p-6 flex flex-col min-h-screen overflow-hidden">
        <Top />
        <TimerSection />
        <Bottom />
      </div>
    </BackgroundProvider>
  );
}
