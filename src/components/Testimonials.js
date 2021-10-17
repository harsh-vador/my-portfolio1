import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-3 myname">
          Resume
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          To describe myself,I am sympathetic,organized and hardworking;ready to
          take up any challenge and a team player with excellent communication
          skills.
        </p>
      </div>
      <span className="flex justify-center mb-1">
        To view my resume, click on the button below
      </span>
      <div className="flex justify-center">
        <a
          href="https://drive.google.com/file/d/1mJ702AbAu-NqqeJdV_NMfwXvnUMh1Bgd/view?usp=sharing"
          className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
