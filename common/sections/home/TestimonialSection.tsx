import { Button, Avatar, AvatarFallback } from "@/common/components/ui/";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    company: "TechCorp",
    testimonial: "Focusity telah meningkatkan produktivitas saya secara signifikan. Pengatur waktu Pomodoro dan daftar tugas terintegrasi setiap hari.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sophia Lee",
    designation: "Data Analyst",
    company: "InsightTech",
    testimonial: "Manajemen tugas dan pelacakan waktu Focusity telah menghemat separuh waktu kerja saya. Analitiknya membantu mengoptimalkan alur kerja saya.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "UX Designer",
    company: "DesignPro",
    testimonial: "Focusity menyederhanakan sprint desain saya. Integrasi daftar tugas dan pengatur waktu membuat proyek kompleks terasa mudah dikelola.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Marketing Specialist",
    company: "BrandBoost",
    testimonial: "Sejak menggunakan Focusity, perencanaan kampanye tim kami menjadi lebih efisien. Fitur Pomodoro meningkatkan fokus kami.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Daniel Martinez",
    designation: "Full-Stack Developer",
    company: "CodeCrafters",
    testimonial: "Focusity mengubah cara saya bekerja saat coding. Fitur prioritas tugas dan pengatur waktu menjaga produktivitas saya.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Jane Smith",
    designation: "Product Manager",
    company: "InnovateX",
    testimonial: "Antarmuka Focusity yang rapi dan daftar tugasnya membuat pengelolaan roadmap produk menjadi mudah. Pengatur waktu Pomodoro sangat membantu.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

export const TestimonialSection = () => (
  <section className="min-h-screen flex justify-center items-center py-20 px-6 lg:px-12 w-full bg-zinc-200 dark:bg-zinc-900" id="testimonials">
    <div className="h-full w-full">
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-light text-zinc-900 dark:text-zinc-100 mb-6">Empowering Productivity</h2>
        <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 max-w-3xl mx-auto">Discover how Focusity’s have helped users conquer procrastination and boost efficiency</p>
      </div>
      <div className="relative">
        <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-gradient-to-r from-zinc-200 dark:from-zinc-900 to-transparent" />
        <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-gradient-to-l from-zinc-200 dark:from-zinc-900 to-transparent" />
        <Marquee pauseOnHover speed={50}>
          <TestimonialList />
        </Marquee>
        <Marquee pauseOnHover direction="right" speed={50}>
          <TestimonialList />
        </Marquee>
      </div>
    </div>
  </section>
);

const TestimonialList = () =>
  testimonials.map((testimonial) => (
    <div key={testimonial.id} className="min-w-96 max-w-sm bg-accent rounded-xl p-6 mx-2 my-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.designation}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" target="_blank">
            <FaXTwitter className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
    </div>
  ));