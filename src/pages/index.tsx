import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-3xl">Nextjs Husky Tailwindcss Template</h1>
    </main>
  );
}
