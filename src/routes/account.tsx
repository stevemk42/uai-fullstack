import { A } from "@solidjs/router";
import { AuthSession } from "@supabase/supabase-js";
import { createSignal, onMount } from "solid-js";
import Account from "~/components/Account";
import Counter from "~/components/Counter";
import { supabase } from "~/components/supabaseClient";
import { session } from "~/components/supabaseSession";

export default function About() {
    
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <Account session={session()!} />
      <p class="my-4">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {" - "}
        <span>About Page</span>
      </p>
    </main>
  );
}
