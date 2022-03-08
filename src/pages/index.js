import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1>Index page</h1>
      <p>This is the home page</p>
      <p>Updating Home to test CI</p>
      <p>Another update</p>
      <Link href="/about">About</Link>
    </section>
  );
}
