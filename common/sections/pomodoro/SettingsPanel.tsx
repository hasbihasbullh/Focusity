"use client";
import { useState } from "react";
import { X, Settings2, Bell, Palette, Timer, Volume2, VolumeX } from "lucide-react";
import { BACKGROUNDS, type BackgroundId } from "@/hooks/useBackground";

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  currentBackground: BackgroundId;
  onBackgroundChange: (background: BackgroundId) => void;
}

type SettingsCategory = "general" | "appearance" | "notifications" | "timer";

interface SettingsState {
  // General
  autoStartBreaks: boolean;
  autoStartPomodoros: boolean;

  // Appearance
  selectedBackground: BackgroundId;

  // Notifications
  desktopNotifications: boolean;
  soundEnabled: boolean;
  soundVolume: number;

  // Timer
  focusDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
}

const BACKGROUND_PREVIEWS = [
  {
    id: "default" as BackgroundId,
    name: "Default",
    preview: "bg-black",
  },
  {
    id: "aura-twilight" as BackgroundId,
    name: "Aura Twilight",
    preview: "bg-gradient-to-br from-purple-500 via-pink-500 to-red-500",
  },
  {
    id: "peach-aura" as BackgroundId,
    name: "Peach Aura Heart",
    preview: "bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-200",
  },
  {
    id: "light-pink" as BackgroundId,
    name: "Light Pink Heart",
    preview: "bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300",
  },
  {
    id: "fiero" as BackgroundId,
    name: "Fiero",
    preview: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-500",
  },
  {
    id: "lava-lamp" as BackgroundId,
    name: "Lava Lamp",
    preview: "bg-gradient-to-br from-purple-600 via-pink-600 to-red-600",
  },
  {
    id: "ocean" as BackgroundId,
    name: "Ocean Blue",
    preview: "bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500",
  },
  {
    id: "forest" as BackgroundId,
    name: "Emerald Forest",
    preview: "bg-gradient-to-br from-green-400 via-green-500 to-emerald-600",
  },
  {
    id: "sunset" as BackgroundId,
    name: "Golden Sunset",
    preview: "bg-gradient-to-br from-orange-300 via-red-400 to-purple-500",
  },
  {
    id: "midnight" as BackgroundId,
    name: "Midnight Sky",
    preview: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
  },
] as const;

export default function SettingsPanel({ isOpen, onClose, currentBackground, onBackgroundChange }: SettingsPanelProps) {
  const [activeCategory, setActiveCategory] = useState<SettingsCategory>("general");
  const [settings, setSettings] = useState<SettingsState>({
    // General
    autoStartBreaks: true,
    autoStartPomodoros: false,

    // Appearance
    selectedBackground: currentBackground,

    // Notifications
    desktopNotifications: true,
    soundEnabled: true,
    soundVolume: 80,

    // Timer
    focusDuration: 25,
    shortBreakDuration: 5,
    longBreakDuration: 15,
  });

  // Update local state when currentBackground prop changes
  useState(() => {
    setSettings((prev) => ({ ...prev, selectedBackground: currentBackground }));
  });

  if (!isOpen) return null;

  const categories: { id: SettingsCategory; label: string; icon: React.ReactNode }[] = [
    {
      id: "general",
      label: "General",
      icon: <Settings2 className="w-4 h-4" />,
    },
    {
      id: "appearance",
      label: "Appearance",
      icon: <Palette className="w-4 h-4" />,
    },
    // {
    //   id: "notifications",
    //   label: "Notifications",
    //   icon: <Bell className="w-4 h-4" />,
    // },
    // {
    //   id: "timer",
    //   label: "Timer",
    //   icon: <Timer className="w-4 h-4" />,
    // },
  ];

  const handleSettingChange = <K extends keyof SettingsState>(key: K, value: SettingsState[K]) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));

    // Jika background berubah, trigger callback
    if (key === "selectedBackground") {
      onBackgroundChange(value as BackgroundId);
    }
  };

  const handleBackgroundSelect = (backgroundId: BackgroundId) => {
    handleSettingChange("selectedBackground", backgroundId);
  };

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      {/* <div className="setting-group">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Behavior</h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Auto Start Breaks</label>
              <p className="text-xs text-gray-500">Automatically start break timers</p>
            </div>
            <button
              onClick={() => handleSettingChange("autoStartBreaks", !settings.autoStartBreaks)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.autoStartBreaks ? "bg-blue-500" : "bg-gray-300"}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.autoStartBreaks ? "translate-x-6" : "translate-x-1"}`} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Auto Start Pomodoros</label>
              <p className="text-xs text-gray-500">Automatically start next focus timer</p>
            </div>
            <button
              onClick={() => handleSettingChange("autoStartPomodoros", !settings.autoStartPomodoros)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.autoStartPomodoros ? "bg-blue-500" : "bg-gray-300"}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.autoStartPomodoros ? "translate-x-6" : "translate-x-1"}`} />
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div className="setting-group">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Background Theme</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {BACKGROUND_PREVIEWS.map((bg) => (
            <button
              key={bg.id}
              onClick={() => handleBackgroundSelect(bg.id)}
              className={`group relative aspect-video rounded-lg overflow-hidden border-2 transition duration-200 ${
                settings.selectedBackground === bg.id ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-200 border-opacity-50 hover:border-blue-300"
              }`}
            >
              <div className={`absolute inset-0 ${bg.preview}`}></div>
              <div className={`absolute inset-0 group-hover:bg-opacity-10 transition duration-200 ${settings.selectedBackground === bg.id ? "bg-opacity-5" : ""}`}></div>
              <span className={`absolute bottom-2 left-2 right-2 text-xs font-medium text-white text-center`}>{bg.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="setting-group">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Desktop Notifications</h3>

        <div className="flex items-center justify-between">
          <div>
            <label className="text-sm font-medium text-gray-700">Enable Notifications</label>
            <p className="text-xs text-gray-500">Show browser notifications when timer completes</p>
          </div>
          <button
            onClick={() => handleSettingChange("desktopNotifications", !settings.desktopNotifications)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.desktopNotifications ? "bg-blue-500" : "bg-gray-300"}`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.desktopNotifications ? "translate-x-6" : "translate-x-1"}`} />
          </button>
        </div>
      </div>

      <div className="setting-group">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Sound</h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Enable Sound</label>
              <p className="text-xs text-gray-500">Play sound when timer completes</p>
            </div>
            <button
              onClick={() => handleSettingChange("soundEnabled", !settings.soundEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.soundEnabled ? "bg-blue-500" : "bg-gray-300"}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.soundEnabled ? "translate-x-6" : "translate-x-1"}`} />
            </button>
          </div>

          {settings.soundEnabled && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Volume</label>
                <span className="text-sm text-gray-600">{settings.soundVolume}%</span>
              </div>
              <div className="flex items-center gap-3">
                <VolumeX className="w-4 h-4 text-gray-400" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={settings.soundVolume}
                  onChange={(e) => handleSettingChange("soundVolume", parseInt(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <Volume2 className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderTimerSettings = () => (
    <div className="space-y-6">
      <div className="setting-group">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Timer Durations (minutes)</h3>

        <div className="space-y-4">
          {(
            [
              { key: "focusDuration" as const, label: "Focus Time", min: 5, max: 60 },
              { key: "shortBreakDuration" as const, label: "Short Break", min: 1, max: 15 },
              { key: "longBreakDuration" as const, label: "Long Break", min: 5, max: 30 },
            ] as const
          ).map((timer) => (
            <div key={timer.key} className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">{timer.label}</label>
                <span className="text-sm font-semibold text-blue-600">{settings[timer.key]} min</span>
              </div>
              <input
                type="range"
                min={timer.min}
                max={timer.max}
                value={settings[timer.key] as number}
                onChange={(e) => handleSettingChange(timer.key, parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>{timer.min}</span>
                <span>{timer.max}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeCategory) {
      case "general":
        return renderGeneralSettings();
      case "appearance":
        return renderAppearanceSettings();
      case "notifications":
        return renderNotificationSettings();
      case "timer":
        return renderTimerSettings();
      default:
        return renderGeneralSettings();
    }
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay Transparan Blur */}
      <div className="absolute inset-0 bg-opacity-90 backdrop-blur-lg" onClick={onClose} />

      {/* Panel Container dengan Glass Effect */}
      <div className="relative h-full flex justify-end">
        <div className="w-full max-w-4xl h-full flex flex-col animate-in slide-in-from-right duration-300">
          {/* Main Panel dengan Background Transparan Blur */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar - Categories dengan Glass Effect */}
            <div className="w-64 border-r border-white border-opacity-20 bg-white bg-opacity-70 backdrop-blur-lg p-4">
              <nav className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-3 w-full px-4 py-3 text-left rounded-lg transition-all backdrop-blur-sm ${
                      activeCategory === category.id ? "bg-white bg-opacity-80 text-blue-600 shadow-sm border border-white border-opacity-30" : "text-gray-700 hover:text-gray-900 hover:bg-white hover:bg-opacity-50"
                    }`}
                  >
                    {category.icon}
                    <span className="font-medium">{category.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex-1 overflow-y-auto bg-white bg-opacity-70 backdrop-blur-lg">
              <div className="p-6 max-w-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white border-opacity-30">
                  <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
                  <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition duration-200 p-2 rounded-lg hover:bg-white hover:bg-opacity-50 backdrop-blur-sm">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Settings Content */}
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
