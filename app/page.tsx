import Post from "./components/Post";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white/90">
        Hello and Welcome👋
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Toye</span>
        </span>
        <Post />
      </p>
    </main>
  );
}
