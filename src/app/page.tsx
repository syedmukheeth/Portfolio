import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { Cta } from "@/components/home/cta";
import { GitHubActivity } from "@/components/home/github-activity";
import { Header } from "@/components/home/header";
import { Projects } from "@/components/home/projects";
import { TechStack } from "@/components/home/tech-stack";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Contact />
      <Projects />
      <TechStack />
      <GitHubActivity />
      <Cta />
    </>
  );
}
