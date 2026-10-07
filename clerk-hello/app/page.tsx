import { Show } from '@clerk/nextjs'

export default function Home() {
  return (
    <main style={{ textAlign: 'center', marginTop: 100 }}>
      <h1>🎯 Work Hard, Logout Harder</h1>
      <Show when="signed-out">
        <p>👀 Stranger detected! Please sign in before touching company data.</p>
      </Show>
      <Show when="signed-in">
        <p>✅ Authentication successful. The system has decided to trust you today.</p>
      </Show>
    </main>
  )
}