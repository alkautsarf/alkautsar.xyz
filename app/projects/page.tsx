import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Eye } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from my bootcamp and some are on my own.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/whalert`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <time dateTime={new Date("2023-04-11").toISOString()}>
                      {new Intl.DateTimeFormat(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }).format(new Date("2023-04-11"))}
                    </time>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      500 ?? 0
                    )}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Whalert
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  A web based app that can track crypto wallet transaction in real time, useful for listening to mempool transaction in real time and whale tracking.
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            <Card>
              <Link href={`/projects/impromptu`}>
                <article className="p-4 md:p-8">
                  <div className="flex justify-between gap-2 items-center">
                    <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
					<time dateTime={new Date("2023-06-09").toISOString()}>
                      {new Intl.DateTimeFormat(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }).format(new Date("2023-06-09"))}
                    </time>
                    </span>
                    <span className="text-zinc-500 text-xs  flex items-center gap-1">
                      <Eye className="w-4 h-4" />{" "}
                      {Intl.NumberFormat("en-US", {
                        notation: "compact",
                      }).format(500)}
                    </span>
                  </div>
                  <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    Impromptu
                  </h2>
                  <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
				  An AI-powered travel app that offers personalized and seamless travel experiences, including destination selection, activity recommendations, accommodations, pricing transparency, and a chat room for planning discussions.
                  </p>
                </article>
              </Link>
            </Card>
            <Card>
              <Link href={`/projects/kkn`}>
                <article className="p-4 md:p-8">
                  <div className="flex justify-between gap-2 items-center">
                    <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                      <span>SOON</span>
                    </span>
                    <span className="text-zinc-500 text-xs  flex items-center gap-1">
                      <Eye className="w-4 h-4" />{" "}
                      {Intl.NumberFormat("en-US", {
                        notation: "compact",
                      }).format(500)}
                    </span>
                  </div>
                  <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					  Kopi Kaya Nusantara
                  </h2>
                  <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    A web for Coffee House that produce and export origin Sumatra Aceh Gayo Arabica Specialty.
                  </p>
                </article>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
