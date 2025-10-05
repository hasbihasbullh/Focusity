"use client";
import { useState, useEffect } from "react";
import { RefreshCcw, Pencil } from "lucide-react";
import { CgMiniPlayer } from "react-icons/cg";
import TaskModal, { Task } from "./TaskModal";
import ResetTimerModal from "./ResetTimerModal";

const parseTimeToSeconds = (timeStr: string): number => {
  const [minutes] = timeStr.split(":").map(Number);
  return minutes * 60;
};

const formatSecondsToTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

const showNotification = (mode: string) => {
  const title = `${mode} selesai!`;
  const body = mode === "Focus" ? "Take a break and continue productivity." : mode === "Short Break" ? "Back to focus for the next session." : "The long break is over. Ready for another round?";

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

export default function TimerSection() {
  const [currentMode, setCurrentMode] = useState("Focus");
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // State untuk task management
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  // State untuk reset timer modal
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const timerConfig = {
    Focus: "25:00",
    "Short Break": "05:00",
    "Long Break": "15:00",
  };

  // Get selected task text untuk ditampilkan
  const selectedTaskText = tasks.find((task) => task.id === selectedTask)?.text;

  useEffect(() => {
    const initialTime = parseTimeToSeconds(timerConfig[currentMode as keyof typeof timerConfig]);
    setTimeRemaining(initialTime);
    setIsRunning(false);
  }, [currentMode]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && isRunning) {
      setIsRunning(false);
      showNotification(currentMode);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeRemaining, currentMode]);

  const handleModeSelect = (mode: string) => {
    setCurrentMode(mode);
  };

  // Fungsi reset yang lama diubah untuk membuka modal
  const handleResetClick = () => {
    setIsResetModalOpen(true);
  };

  // Fungsi reset current segment (hanya segment saat ini)
  const handleResetCurrentSegment = () => {
    const initialTime = parseTimeToSeconds(timerConfig[currentMode as keyof typeof timerConfig]);
    setTimeRemaining(initialTime);
    setIsRunning(false);
    setIsResetModalOpen(false);
  };

  // Fungsi reset full session (kembali ke mode Focus)
  const handleResetFullSession = () => {
    setCurrentMode("Focus");
    const initialTime = parseTimeToSeconds(timerConfig.Focus);
    setTimeRemaining(initialTime);
    setIsRunning(false);
    setIsResetModalOpen(false);
  };

  // Task management functions
  const handleAddTask = (taskText: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text: taskText,
      completed: false,
      createdAt: new Date(),
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
    if (selectedTask === taskId) {
      setSelectedTask(null);
    }
  };

  const handleToggleTask = (taskId: string) => {
    setTasks((prev) => prev.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
  };

  const currentTimer = formatSecondsToTime(timeRemaining);

  return (
    <>
      <div className="flex-1 flex items-center justify-center py-8">
        <div className="w-full max-w-md px-4 sm:px-0 text-center">
          {/* Question Text Area */}
          <div className="mb-4 sm:mb-6">
            <button onClick={() => setIsTaskModalOpen(true)} className="group w-full cursor-pointer">
              <div className="flex items-center justify-center gap-2">
                <h3 className="text-lg sm:text-2xl font-semibold text-zinc-700 group-hover:text-zinc-900 transition duration-200">{selectedTaskText || "What do you want to focus on?"}</h3>
                <Pencil className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-700 group-hover:text-zinc-900 transition duration-200" strokeWidth={3} />
              </div>
            </button>
          </div>

          {/* Mode Selection */}
          <div className="flex bg-zinc-100 rounded-lg sm:rounded-xl p-1 mb-4 sm:mb-8">
            {["Focus", "Short Break", "Long Break"].map((mode) => (
              <button
                key={mode}
                onClick={() => handleModeSelect(mode)}
                className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base font-semibold rounded-md sm:rounded-lg transition duration-200 ${
                  currentMode === mode ? "bg-white text-zinc-800 shadow-sm" : "text-zinc-600 hover:text-zinc-800 hover:bg-zinc-200"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          {/* Timer Display */}
          <div className="mb-4 sm:mb-8">
            <div className="text-7xl sm:text-8xl md:text-9xl font-bold text-zinc-800">{currentTimer}</div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Start/Pause Button */}
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="w-full sm:flex-1 max-w-xs bg-white border-2 border-zinc-300 text-zinc-700 text-base sm:text-lg font-semibold py-3 sm:py-4 px-6 rounded-xl hover:bg-zinc-50 transition duration-200"
            >
              {isRunning ? "Pause" : "Start"}
            </button>

            {/* Ikon Tambahan */}
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              {/* Reload/Reset Icon - Sekarang membuka modal */}
              <button onClick={handleResetClick} className="text-zinc-500 hover:text-zinc-700 transition duration-200 p-2 sm:p-3 rounded-lg hover:bg-zinc-100" title="Reset Timer">
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

      {/* Task Modal */}
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

      {/* Reset Timer Modal */}
      <ResetTimerModal isOpen={isResetModalOpen} onClose={() => setIsResetModalOpen(false)} onResetCurrentSegment={handleResetCurrentSegment} onResetFullSession={handleResetFullSession} currentMode={currentMode} />
    </>
  );
}
