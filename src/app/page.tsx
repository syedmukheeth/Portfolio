import { About } from "@/components/home/about";
import { Activity } from "@/components/home/activity";
import { Closing } from "@/components/home/closing";
import { Experience } from "@/components/home/experience";
import { Hero } from "@/components/home/hero";
import { Stack } from "@/components/home/stack";
import { Work } from "@/components/home/work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Stack />
      <Activity />
      <Closing />
    </>
  );
}
