import { AnnouncementBar } from "@/components/site/announcement-bar";
import { Nav } from "@/components/site/nav";
import { IBM_Plex_Mono } from "next/font/google";

const plexMono = IBM_Plex_Mono({
  variable: "--font-diatype-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function HomeGroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`shiv-home ${plexMono.variable} relative flex flex-col overflow-x-clip bg-[#f6f3f1] font-[family-name:var(--font-diatype-mono)] text-[#242424] antialiased selection:bg-[#2b59d1]/20 selection:text-[#242424]`}
    >
      <AnnouncementBar />
      <Nav />
      {children}
    </div>
  );
}
