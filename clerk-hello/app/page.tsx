import { Show } from '@clerk/nextjs'

export default function Home() {
  return (
    <main style={{ textAlign: 'center', marginTop: 100 }}>
      <h1>Hello World 👋</h1>
      <Show when="signed-out">
        <p>You are signed out. Click Sign In or Sign Up at the top right.</p>
      </Show>
      <Show when="signed-in">
        <p>You are signed in. Authentication is working! 🎉</p>
      </Show>
    </main>
  )
}