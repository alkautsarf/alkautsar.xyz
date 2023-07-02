import { notFound } from "next/navigation";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";

export default function PostPage() {
  const project = {
    url: "https://whalert.xyz",
    title: "whalert",
    description:
      "A web based app that can track crypto wallet transaction in real time, useful for listening to mempool transaction in real time and whale tracking.",
    repository: "alkautsarf/whalert",
    slug: "whalert",
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
            src="/whalert.png"
            alt="test.png"
            className="rounded-md border border-zinc-200"
          />
          <img
            src="/whalert2.png"
            alt="test.png"
            className="rounded-md border border-zinc-200"
          />
          <img
            src="/whalert1.png"
            alt="test.png"
            className="rounded-md border border-zinc-200"
          />
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {" "}
          Introducing "Whalert" – the web-based app that tracks crypto wallet
          transactions in real-time. Stay informed about the crypto market with
          ease, listen to mempool transactions, and track whales effortlessly.
          <br />
          <br />
          Key Features of Whalert: 
          <br />
          <br />
          1. Real-Time Transaction Tracking: Monitor
          crypto wallet transactions as they happen. Get instant updates on the
          latest market movements. 
          <br />
          <br />
          2. Mempool Transaction Listening: Stay informed
          about pending transactions, transaction fees, and network congestion
          in real-time. 
          <br />
          <br />
          3. Whale Tracking: Identify large-scale transactions, whale
          wallets, and potential market manipulations. 
          <br />
          <br />
          4. User-Friendly Interface:
          Enjoy a simple and intuitive interface to navigate and explore
          transaction details. 
          <br />
          <br />
          5. Timely Notifications: Set up personalized alerts
          to receive instant updates on critical transactions. 
          <br />
          <br />
          Experience the
          power of Whalert – the app that keeps you in the loop with real-time
          crypto wallet transaction tracking. Stay on top of the game and make
          informed decisions.
          <br />
          <br />
          <span className="text-bold italic">
            Note: This app is currently running on the Goerli testnet.
          </span>
        </p>
      </article>
    </div>
  );
}
