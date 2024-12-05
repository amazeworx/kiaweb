import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={`min-h-screen bg-gray-100`}>
      {/* Your homepage content here */}
      <h1 className="text-3xl font-bold underline font-geist-sans">
        Hello world!
      </h1>
      <p>Add your company profile content here.</p>
    </main>
  );
}
