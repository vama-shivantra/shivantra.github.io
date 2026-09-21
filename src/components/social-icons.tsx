import { basePath } from "@/lib/basePath";

function icon(name: string) {
  return function SocialIcon({ className }: { className?: string }) {
    return <img src={`${basePath}/assets/images/${name}.svg`} alt={name} className={className} />;
  };
}

export const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  LinkedIn: icon("linkedin"),
  Instagram: icon("instagram"),
  Threads: icon("threads"),
  X: icon("x"),
  Facebook: icon("facebook"),
  GitHub: icon("github"),
};
