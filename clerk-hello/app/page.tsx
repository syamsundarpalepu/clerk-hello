import { Show } from '@clerk/nextjs'

export default function Home() {
  return (
    <main style={{ textAlign: 'center', marginTop: 100 }}>
      <h1>🚀 Making Bugs Since Day One</h1>
      <Show when="signed-out">
        <p>🎉 Sign In or Signup Please! If everything works, I built it. If something breaks, Claude built it. 😂</p>
      </Show>
      <Show when="signed-in">
        <p>😎 Just a friendly warning: This application was created using Claude.
Please don't misuse it, break it, click random buttons, or do anything suspicious...
because I have absolutely no idea how to fix it. 🤣
If something goes wrong, I need to go back to Claude and ask, "Bro, what happened?" 😭</p>
      </Show>
    </main>
  )
}