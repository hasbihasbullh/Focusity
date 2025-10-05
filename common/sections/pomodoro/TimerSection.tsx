"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { RefreshCcw, Pencil } from "lucide-react";
import { CgMiniPlayer } from "react-icons/cg";
import TaskModal, { Task } from "./TaskModal";
import ResetTimerModal from "./ResetTimerModal";
import { useFullscreen } from "@/hooks/useFullscreen";

const parseTimeToSeconds = (timeStr: string): number => {
  const [minutes] = timeStr.split(":").map(Number);
  return minutes * 60;
};

const formatSecondsToTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

type Mode = "Focus" | "Short Break" | "Long Break";

const TIMER_CONFIG: Record<Mode, string> = {
  Focus: "25:00",
  "Short Break": "05:00",
  "Long Break": "15:00",
};

interface TimerState {
  currentMode: Mode;
  timeRemaining: number;
  isRunning: boolean;
}

const useTimer = (initialMode: Mode) => {
  const [timerState, setTimerState] = useState<TimerState>({
    currentMode: initialMode,
    timeRemaining: parseTimeToSeconds(TIMER_CONFIG[initialMode]),
    isRunning: false,
  });

  const actions = useMemo(() => ({
    start: () => setTimerState((prev) => ({ ...prev, isRunning: true })),
    pause: () => setTimerState((prev) => ({ ...prev, isRunning: false })),
    setMode: (mode: Mode) =>
      setTimerState({
        currentMode: mode,
        timeRemaining: parseTimeToSeconds(TIMER_CONFIG[mode]),
        isRunning: false,
      }),
    reset: (mode?: Mode) => {
      const targetMode = (mode || timerState.currentMode) as Mode;
      setTimerState({
        currentMode: targetMode,
        timeRemaining: parseTimeToSeconds(TIMER_CONFIG[targetMode]),
        isRunning: false,
      });
    },
    tick: () =>
      setTimerState((prev) => ({
        ...prev,
        timeRemaining: Math.max(0, prev.timeRemaining - 1),
      })),
  }), [timerState.currentMode]);

  return { timerState, actions, timerConfig: TIMER_CONFIG };
};

const showNotification = (mode: string) => {
  const title = `${mode} selesai!`;
  const body = mode === "Focus" 
    ? "Take a break and continue productivity." 
    : mode === "Short Break" 
      ? "Back to focus for the next session." 
      : "The long break is over. Ready for another round?";

  if ("Notification" in window) {
    if (Notification.permission === "granted") {
      new Notification(title, { body, icon: "/favicon.ico" });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, { body, icon: "/favicon.ico" });
        } else {
          alert(`${title}\n${body}`);
        }
      });
    } else {
      alert(`${title}\n${body}`);
    }
  } else {
    alert(`${title}\n${body}`);
  }
};

const getNextMode = (currentMode: Mode): Mode => {
  const modes: Mode[] = [
    "Focus",
    "Short Break",
    "Focus",
    "Short Break",
    "Focus",
    "Long Break",
  ];
  const currentIndex = modes.indexOf(currentMode);
  return modes[(currentIndex + 1) % modes.length];
};

export default function TimerSection() {
  const isFullscreen = useFullscreen();
  const { timerState, actions, timerConfig } = useTimer("Focus" as Mode);
  const { currentMode, timeRemaining, isRunning } = timerState;

  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  useEffect(() => {
    if (!isRunning || timeRemaining <= 0) return;

    let animationFrameId: number;
    let lastTimestamp: number;

    const updateTimer = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      
      const elapsed = Math.floor((timestamp - lastTimestamp) / 1000);
      
      if (elapsed >= 1) {
        actions.tick();
        lastTimestamp = timestamp;
      }
      
      if (timeRemaining > 0 && isRunning) {
        animationFrameId = requestAnimationFrame(updateTimer);
      }
    };

    animationFrameId = requestAnimationFrame(updateTimer);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isRunning, timeRemaining, actions]);

  useEffect(() => {
    if (timeRemaining === 0 && isRunning) {
      actions.pause();
      showNotification(currentMode);
      
      setTimeout(() => {
        const nextMode = getNextMode(currentMode);
        actions.setMode(nextMode);
        actions.start();
      }, 2000);
    }
  }, [timeRemaining, isRunning, currentMode, actions]);

  const handleAddTask = useCallback((taskText: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text: taskText,
      completed: false,
      createdAt: new Date(),
    };
    setTasks(prev => [newTask, ...prev]);
  }, []);

  const handleDeleteTask = useCallback((taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
    if (selectedTask === taskId) {
      setSelectedTask(null);
    }
  }, [selectedTask]);

  const handleToggleTask = useCallback((taskId: string) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  }, []);

  const handleResetCurrentSegment = useCallback(() => {
    actions.reset();
    setIsResetModalOpen(false);
  }, [actions]);

  const handleResetFullSession = useCallback(() => {
    actions.reset("Focus");
    setIsResetModalOpen(false);
  }, [actions]);

  const currentTimer = formatSecondsToTime(timeRemaining);
  const selectedTaskText = tasks.find(task => task.id === selectedTask)?.text;

  return (
    <>
      <div className="flex-1 flex items-center justify-center py-8">
        <div className="w-full max-w-md px-4 sm:px-0 text-center">
          {/* Question Text Area*/}
          <div className="mb-4 sm:mb-6">
            <button 
              onClick={() => setIsTaskModalOpen(true)} 
              className="group w-full cursor-pointer"
            >
              <div className="flex items-center justify-center gap-2">
                <h3 className="text-lg sm:text-2xl font-semibold text-zinc-700 group-hover:text-zinc-900 transition duration-200">
                  {selectedTaskText || "What do you want to focus on?"}
                </h3>
                <Pencil 
                  className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-700 group-hover:text-zinc-900 transition duration-200" 
                  strokeWidth={3} 
                />
              </div>
            </button>
          </div>

          {/* Mode Selection*/}
          <div className="flex bg-zinc-100 rounded-lg sm:rounded-xl p-1 mb-4 sm:mb-8">
            {(Object.keys(timerConfig) as Mode[]).map((mode) => (
              <button
                key={mode}
                onClick={() => actions.setMode(mode)}
                className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base font-semibold rounded-md sm:rounded-lg transition duration-200 ${
                  currentMode === mode 
                    ? "bg-white text-zinc-800 shadow-sm" 
                    : "text-zinc-600 hover:text-zinc-800 hover:bg-zinc-200"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          {/* Timer Display*/}
          <div className="mb-4 sm:mb-8">
            <div className={`
              font-bold text-zinc-800 leading-none tracking-tighter
              ${isFullscreen 
                ? 'text-[20vh]' 
                : 'text-7xl sm:text-8xl md:text-9xl'
              }
            `}>
              {currentTimer}
            </div>
          </div>

          {/* Action Buttons*/}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Start/Pause Button */}
            <button
              onClick={() => isRunning ? actions.pause() : actions.start()}
              className="w-full sm:flex-1 max-w-xs bg-white border-2 border-zinc-300 text-zinc-700 text-base sm:text-lg font-semibold py-3 sm:py-4 px-6 rounded-xl hover:bg-zinc-50 transition duration-200"
            >
              {isRunning ? "Pause" : "Start"}
            </button>

            {/* Utility Icons */}
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              {/* Reset Icon */}
              <button 
                onClick={() => setIsResetModalOpen(true)} 
                className="text-zinc-500 hover:text-zinc-700 transition duration-200 p-2 sm:p-3 rounded-lg hover:bg-zinc-100"
                title="Reset Timer"
              >
                <RefreshCcw className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Miniplayer Icon */}
              <button className="text-zinc-500 hover:text-zinc-700 transition duration-200 p-2 sm:p-3 rounded-lg hover:bg-zinc-100">
                <CgMiniPlayer className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Task Modal*/}
      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
        tasks={tasks}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
        selectedTask={selectedTask}
        onSelectTask={setSelectedTask}
      />

      {/* Reset Timer Modal*/}
      <ResetTimerModal 
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onResetCurrentSegment={handleResetCurrentSegment}
        onResetFullSession={handleResetFullSession}
        currentMode={currentMode}
      />
    </>
  );
}