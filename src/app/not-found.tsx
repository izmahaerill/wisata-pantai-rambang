import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <p>404 - Not Found</p>
      <p>The page you are looking for does not exist.</p>
      <p>
        You can go back to the <Link href="/">Home</Link>.
      </p>
    </div>
  );
}
