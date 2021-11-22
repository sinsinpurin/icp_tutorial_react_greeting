import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as custom_greeting_idl, canisterId as custom_greeting_id } from 'dfx-generated/custom_greeting';

const agent = new HttpAgent();
const custom_greeting = Actor.createActor(custom_greeting_idl, { agent, canisterId: custom_greeting_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await custom_greeting.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
