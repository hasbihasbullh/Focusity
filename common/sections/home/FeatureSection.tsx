import React from "react";
import { Badge, Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/common/components/ui";
import { Zap, Timer, ListChecks, ChartNoAxesColumn, NotepadText, Volume2, Palette } from "lucide-react";

export const FeatureSection = () => {
  return (
    <section className="relative overflow-hidden py-20 px-6 lg:px-12 w-full" id="features">
      <div className="absolute inset-0 bg-gradient-to-bl from-zinc-200 to-zinc-50 dark:from-zinc-900 dark:to-zinc-800">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #000 2px, #1f2937 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
      <div className="relative z-10 text-center mb-16">
        <Badge className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-zinc-300 dark:bg-zinc-700 rounded-full text-sm font-medium text-zinc-600 dark:text-zinc-200 mb-6">
          <Zap className="w-4 h-4" />
          Key Features
        </Badge>
        <h2 className="text-4xl sm:text-5xl font-light text-zinc-900 dark:text-zinc-100 mb-6">All You Need to Work Efficiently</h2>
        <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto">Designed for professionals who need simple, effective tools</p>
      </div>
      <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="group relative bg-zinc-100 dark:bg-zinc-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-zinc-300 dark:border-zinc-700">
          <CardHeader>
            <div className="bg-gradient-to-r from-blue-400 to-indigo-500 h-16 w-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-zinc-300 dark:border-zinc-600">
              <Timer className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-medium text-zinc-900 dark:text-zinc-100">Smart Timer</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-zinc-500 dark:text-zinc-400 leading-relaxed">Set custom work and break times with smart alerts and automatic progression</CardDescription>
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-100/5 dark:from-zinc-700/5 to-zinc-200/5 dark:to-zinc-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </CardContent>
        </Card>
        <Card className="group relative bg-zinc-100 dark:bg-zinc-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-zinc-300 dark:border-zinc-700">
          <CardHeader>
            <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-16 w-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-zinc-300 dark:border-zinc-600">
              <ListChecks className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-medium text-zinc-900 dark:text-zinc-100">Task Management</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-zinc-500 dark:text-zinc-400 leading-relaxed">Manage tasks with easy-to-use lists, priorities, and progress tracking</CardDescription>
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-100/5 dark:from-zinc-700/5 to-zinc-200/5 dark:to-zinc-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </CardContent>
        </Card>
        <Card className="group relative bg-zinc-100 dark:bg-zinc-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-zinc-300 dark:border-zinc-700">
          <CardHeader>
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-16 w-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-zinc-300 dark:border-zinc-600">
              <ChartNoAxesColumn className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-medium text-zinc-900 dark:text-zinc-100">Analytics Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-zinc-500 dark:text-zinc-400 leading-relaxed">Track your productivity with clear charts and detailed reports</CardDescription>
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-100/5 dark:from-zinc-700/5 to-zinc-200/5 dark:to-zinc-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </CardContent>
        </Card>
        <Card className="group relative bg-zinc-100 dark:bg-zinc-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-zinc-300 dark:border-zinc-700">
          <CardHeader>
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 h-16 w-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-zinc-300 dark:border-zinc-600">
              <NotepadText className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-medium text-zinc-900 dark:text-zinc-100">Note Taking</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-zinc-500 dark:text-zinc-400 leading-relaxed">Quickly jot down ideas with a simple, built-in note-taking tool</CardDescription>
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-100/5 dark:from-zinc-700/5 to-zinc-200/5 dark:to-zinc-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </CardContent>
        </Card>
        <Card className="group relative bg-zinc-100 dark:bg-zinc-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-zinc-300 dark:border-zinc-700">
          <CardHeader>
            <div className="bg-gradient-to-r from-pink-400 to-rose-500 h-16 w-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-zinc-300 dark:border-zinc-600">
              <Volume2 className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-medium text-zinc-900 dark:text-zinc-100">Focus Sounds</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-zinc-500 dark:text-zinc-400 leading-relaxed">Listen to calming ambient sounds, nature tracks, or focus music</CardDescription>
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-100/5 dark:from-zinc-700/5 to-zinc-200/5 dark:to-zinc-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </CardContent>
        </Card>
        <Card className="group relative bg-zinc-100 dark:bg-zinc-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-zinc-300 dark:border-zinc-700">
          <CardHeader>
            <div className="bg-gradient-to-r from-violet-400 to-purple-500 h-16 w-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-zinc-300 dark:border-zinc-600">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-medium text-zinc-900 dark:text-zinc-100">Custom Themes</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-zinc-500 dark:text-zinc-400 leading-relaxed">Customize your workspace with attractive themes and layouts</CardDescription>
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-100/5 dark:from-zinc-700/5 to-zinc-200/5 dark:to-zinc-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};