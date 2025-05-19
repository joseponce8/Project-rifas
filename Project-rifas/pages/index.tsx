import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: 40, textAlign: 'center' }}>
      <h1>Welcome to Project Rifas!</h1>
      <p>Try your luck and buy a lottery ticket.</p>
      <Link href="/form">
        <button style={{ fontSize: 18, padding: '10px 20px', marginTop: 20 }}>Buy Ticket</button>
      </Link>
    </main>
  );
} 