"use client";
import { useState } from "react";
import { X, Plus, Trash2 } from "lucide-react";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  tasks: Task[];
  onAddTask: (taskText: string) => void;
  onDeleteTask: (taskId: string) => void;
  onToggleTask: (taskId: string) => void;
  selectedTask: string | null;
  onSelectTask: (taskId: string | null) => void;
}

export default function TaskModal({
  isOpen,
  onClose,
  tasks,
  onAddTask,
  onDeleteTask,
  onToggleTask,
  selectedTask,
  onSelectTask
}: TaskModalProps) {
  const [newTaskText, setNewTaskText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskText.trim()) {
      onAddTask(newTaskText.trim());
      setNewTaskText("");
    }
  };

  const handleSelectTask = (taskId: string) => {
    if (selectedTask === taskId) {
      onSelectTask(null);
    } else {
      onSelectTask(taskId);
    }
    onClose(); // Tutup modal setelah memilih task
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      {/* Modal Container dengan glass effect */}
      <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl w-full max-w-md max-h-[80vh] flex flex-col border border-white border-opacity-20 shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 border-opacity-30">
          <h2 className="text-xl font-bold text-gray-800">Task List</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition duration-200 p-2 rounded-lg hover:bg-white hover:bg-opacity-50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Task List */}
        <div className="flex-1 overflow-y-auto p-6">
          {tasks.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              <p>No tasks yet. Add your first task!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className={`flex items-center gap-3 p-3 rounded-lg border-2 transition duration-200 cursor-pointer ${
                    selectedTask === task.id
                      ? "border-blue-500 bg-blue-50 bg-opacity-70"
                      : "border-gray-200 border-opacity-50 hover:border-gray-300 hover:border-opacity-70"
                  } ${
                    task.completed ? "opacity-60" : ""
                  } backdrop-blur-sm`}
                  onClick={() => handleSelectTask(task.id)}
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleTask(task.id)}
                    onClick={(e) => e.stopPropagation()}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span
                    className={`flex-1 text-sm ${
                      task.completed ? "line-through text-gray-500" : "text-gray-800"
                    }`}
                  >
                    {task.text}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteTask(task.id);
                    }}
                    className="text-gray-400 hover:text-red-500 transition duration-200 p-1 rounded hover:bg-white hover:bg-opacity-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add Task Form */}
        <div className="p-6 border-t border-gray-200 border-opacity-30">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 px-3 py-2 border border-gray-300 border-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white bg-opacity-70 backdrop-blur-sm"
            />
            <button
              type="submit"
              disabled={!newTaskText.trim()}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:bg-opacity-50 disabled:cursor-not-allowed transition duration-200 backdrop-blur-sm"
            >
              <Plus className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}