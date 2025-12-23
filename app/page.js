import Link from "next/link";
import Header from './components/header.js';


export default function Home() {
  console.log('executing by mohsin');
  
  return (
    <main>
      <Header/>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about"> About us </Link></p>
      <p><Link href="/blog"> Blog </Link></p>
    </main>
  );
}
