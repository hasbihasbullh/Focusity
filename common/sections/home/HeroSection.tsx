"use client";

import { useState, useEffect, useCallback } from "react";
import { RotateCcw, Play, Pause, Coffee, Brain, Award } from "lucide-react";

type Phase = "focus" | "shortBreak" | "longBreak";

export default function HeroSection() {
  const [time, setTime] = useState(1500);
  const [isActive, setIsActive] = useState(false);
  const [sessions, setSessions] = useState(0);
  const [currentPhase, setCurrentPhase] = useState<Phase>("focus");

  const phases: Record<Phase, { duration: number; label: string; color: string; bgColor: string }> = {
    focus: { duration: 1500, label: "Focus Time", color: "from-emerald-400 to-teal-500", bgColor: "bg-emerald-100 dark:bg-zinc-800" },
    shortBreak: { duration: 300, label: "Short Break", color: "from-blue-400 to-indigo-500", bgColor: "bg-blue-100 dark:bg-zinc-800" },
    longBreak: { duration: 900, label: "Long Break", color: "from-purple-400 to-pink-500", bgColor: "bg-purple-100 dark:bg-zinc-800" },
  };

  const formatTime = useCallback((seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }, []);

  const progress = ((phases[currentPhase].duration - time) / phases[currentPhase].duration) * 100;

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0 && isActive) {
      setIsActive(false);
      if (currentPhase === "focus") {
        setSessions((prev) => prev + 1);
        const nextPhase = sessions > 0 && (sessions + 1) % 4 === 0 ? "longBreak" : "shortBreak";
        setCurrentPhase(nextPhase as Phase);
        setTime(phases[nextPhase as Phase].duration);
      }
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time, currentPhase, sessions]);

  const handleStartPause = () => setIsActive(!isActive);

  const handleReset = () => {
    setIsActive(false);
    setTime(phases[currentPhase].duration);
  };

  const switchPhase = (phase: Phase) => {
    setCurrentPhase(phase);
    setTime(phases[phase].duration);
    setIsActive(false);
  };

  const TimerIcon = isActive ? Pause : Play;
  const currentPhaseData = phases[currentPhase];

  return (
    <section className="min-h-screen relative overflow-hidden" id="home">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #000 2px, #1f2937 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-8rem)]">
          <div className="order-2 lg:order-1 space-y-8 sm:space-y-10 lg:space-y-12 max-w-2xl mx-auto lg:max-w-none lg:mx-0">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-zinc-200 dark:bg-zinc-700 rounded-full text-sm font-medium text-zinc-600 dark:text-zinc-200">
                  <div className={`w-2 h-2 rounded-full ${isActive ? "bg-green-400 animate-pulse" : "bg-zinc-400 dark:bg-zinc-500"}`}></div>
                  <span className="text-xs sm:text-sm">
                    Session {sessions + 1} • {currentPhaseData.label}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-zinc-900 dark:text-zinc-100 leading-tight">
                  Simple
                  <br />
                  <span className="font-extrabold bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">Productivity</span>
                </h1>

                <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                  Experience the Pomodoro Technique purely. No distractions, just focus. Boost productivity with smart timers, task management, analytics, notes, sounds, and themes.
                </p>
              </div>
            </div>

            <div className="hidden sm:block space-y-6">
              <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 text-center lg:text-left">How it works</h3>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center text-sm font-semibold text-emerald-600 dark:text-emerald-300 mt-1 flex-shrink-0">1</div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-zinc-800 dark:text-zinc-200">Focus for 25 minutes</h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">Work on a single task with complete concentration</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-blue-300 mt-1 flex-shrink-0">2</div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-zinc-800 dark:text-zinc-200">Take a 5-minute break</h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">Step away from your work and recharge</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-sm font-semibold text-purple-600 dark:text-purple-300 mt-1 flex-shrink-0">3</div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-zinc-800 dark:text-zinc-200">Longer break every 4 sessions</h4>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">Enjoy a well-deserved 15-minute break</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl space-y-6 sm:space-y-8">
              <div className="flex bg-zinc-300 dark:bg-zinc-700 rounded-2xl p-1">
                {Object.entries(phases).map(([phase, data]) => (
                  <button
                    key={phase}
                    onClick={() => switchPhase(phase as Phase)}
                    className={`flex-1 px-2 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                      currentPhase === phase ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm" : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      {phase === "focus" ? (
                        <Brain className="w-3 h-3 sm:w-4 sm:h-4 mx-auto mb-1" />
                      ) : phase === "shortBreak" ? (
                        <Coffee className="w-3 h-3 sm:w-4 sm:h-4 mx-auto mb-1" />
                      ) : (
                        <Award className="w-3 h-3 sm:w-4 sm:h-4 mx-auto mb-1" />
                      )}
                      <div className="text-xs leading-tight">
                        {data.label.split(" ")[0]}
                        <br className="sm:hidden" />
                        <span className="hidden sm:inline"> </span>
                        {data.label.split(" ")[1]}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] mx-auto">
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] mx-auto">
                    <canvas
                      ref={(canvas) => {
                        if (canvas) {
                          const ctx = canvas.getContext("2d");
                          if (ctx) {
                            const size = (canvas.width = canvas.height = canvas.clientWidth);
                            const radius = size * 0.45;
                            const center = size / 2;

                            // Clear canvas
                            ctx.clearRect(0, 0, size, size);

                            // Static ring
                            ctx.beginPath();
                            ctx.arc(center, center, radius, 0, 2 * Math.PI);
                            ctx.strokeStyle = document.documentElement.classList.contains("dark") ? "#71717A" : "#71717A";
                            ctx.lineWidth = 4;
                            ctx.stroke();

                            // Progress ring
                            ctx.beginPath();
                            const startAngle = -Math.PI / 2;
                            const endAngle = startAngle + (2 * Math.PI * progress) / 100;
                            const gradient = ctx.createLinearGradient(0, 0, size, 0);
                            if (currentPhase === "focus") {
                              gradient.addColorStop(0, "#22d3ee");
                              gradient.addColorStop(1, "#4ade80");
                            } else if (currentPhase === "shortBreak") {
                              gradient.addColorStop(0, "#60a5fa");
                              gradient.addColorStop(1, "#3b82f6");
                            } else {
                              gradient.addColorStop(0, "#c084fc");
                              gradient.addColorStop(1, "#f472b6");
                            }
                            ctx.arc(center, center, radius, startAngle, endAngle);
                            ctx.strokeStyle = gradient;
                            ctx.lineWidth = 4;
                            ctx.lineCap = "round";
                            ctx.stroke();
                          }
                        }
                      }}
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                      <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-wider mb-2 sm:mb-4">{formatTime(time)}</div>
                      <div className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium ${currentPhaseData.bgColor} text-center`}>
                        <span className={`bg-gradient-to-r ${currentPhaseData.color} bg-clip-text text-transparent`}>{isActive ? `${currentPhaseData.label} Active` : `Ready for ${currentPhaseData.label}`}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-3 sm:gap-4">
                <button
                  onClick={handleStartPause}
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r ${currentPhaseData.color} text-white dark:text-zinc-100 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center`}
                  aria-label={isActive ? "Pause timer" : "Start timer"}
                >
                  <TimerIcon size={20} className="sm:w-6 sm:h-6" />
                </button>

                <button
                  onClick={handleReset}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-zinc-50 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-600 hover:scale-105 transition-all duration-200 flex items-center justify-center"
                  aria-label="Reset timer"
                >
                  <RotateCcw size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
