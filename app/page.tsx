import PageTransition from "@/components/page-transition";
import Index from "@/components/home";

export default function Home() {
  return (
    <PageTransition>
      <main className="w-full">
       <Index />
      </main>
    </PageTransition>
  );
}
