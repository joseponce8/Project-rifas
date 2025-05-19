import { useState } from 'react';

export default function FormPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });
    const data = await res.json();
    if (res.ok) {
      setMessage(`Your ticket number is: ${data.ticket.number}`);
    } else {
      setMessage(data.error || 'Something went wrong.');
    }
  }

  return (
    <main style={{ padding: 40, textAlign: 'center' }}>
      <h1>Buy a Lottery Ticket</h1>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', marginTop: 20 }}>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            style={{ fontSize: 16, padding: 8, marginBottom: 10, width: 250 }}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ fontSize: 16, padding: 8, marginBottom: 10, width: 250 }}
          />
        </div>
        <button type="submit" style={{ fontSize: 18, padding: '10px 20px' }}>Get Ticket</button>
      </form>
      {message && <p style={{ marginTop: 20 }}>{message}</p>}
    </main>
  );
} 