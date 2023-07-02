import { notFound } from "next/navigation";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";


export default function PostPage() {
  const project = {
    // url: "https://alkautsar.xyz/projects/impromtu",
    title: "impromptu",
    description:
      "An AI-powered travel app that offers personalized and seamless travel experiences, including destination selection, activity recommendations, accommodations, pricing transparency, and a chat room for planning discussions.",
    // repository: "alkautsarf/whalert",
    slug: "impromptu",
  };

  if (!project) {
    notFound();
  }

  const views = 500 ?? 0;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={views} />
      <ReportView slug={project.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        <img
            src="/impromptu.png"
            alt="test.png"
            className="rounded-md border border-zinc-200"
          />
          <img
            src="/impromptu1.png"
            alt="test.png"
            className="rounded-md border border-zinc-200"
          />
          <img
            src="/impromptu2.png"
            alt="test.png"
            className="rounded-md border border-zinc-200"
          />
          <img
            src="/impromptu3.png"
            alt="test.png"
            className="rounded-md border border-zinc-200"
          />
          <img
            src="/impromptu4.png"
            alt="test.png"
            className="rounded-md border border-zinc-200"
          />
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {" "}
          Introducing "Impromptu" – the AI-powered travel app that elevates your
          travel experiences to new heights. Discover personalized
          recommendations, explore exciting activities, find the perfect
          accommodations, and connect with fellow travelers in a dedicated chat
          room for seamless planning discussions.
          <br />
          <br />
          Key Features of Impromptu:
          <br />
          <br />
          1. Personalized Recommendations: Let Impromptu be your trusted travel
          companion. With advanced AI algorithms, it curates personalized
          recommendations based on your preferences, ensuring every trip is
          tailored to your unique travel style.
          <br />
          <br />
          2. Activity Exploration: Unlock a world of possibilities with
          Impromptu's curated list of activities and attractions. Discover
          hidden gems, must-visit landmarks, and off-the-beaten-path experiences
          that will leave you with unforgettable memories.
          <br />
          <br />
          3. Accommodation Finder: Find your home away from home effortlessly.
          Impromptu offers a wide range of accommodation options, allowing you
          to choose the perfect place to stay that suits your preferences and
          budget.
          <br />
          <br />
          4. Seamless Planning Discussions: Connect with fellow travelers in
          Impromptu's chat room. Discuss itineraries, share travel tips, and
          exchange recommendations to enhance your trip planning process.
          <br />
          <br />
          Impromptu empowers you to create memorable travel experiences that
          align with your interests and desires. Let the app take care of the
          details while you focus on enjoying your journey. Experience the
          future of travel planning with Impromptu – your gateway to
          unforgettable adventures. Download the app now and embark on a world
          of discovery.
          <br />
          <br />
          <span className="text-bold italic">Note: This app is under maintenance and not available online</span>
        </p>
      </article>
    </div>
  );
}
