import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Manny's Blog</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog Page</Link>
      </nav>
    </div>
  );
}
