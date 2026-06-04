import { ViewTransition } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition
      name="page-content"
      share="auto"
      enter="auto"
      default="none"
    >
      <main className="flex-1 w-full flex flex-col pt-16">
        {children}
      </main>
    </ViewTransition>
  );
}
