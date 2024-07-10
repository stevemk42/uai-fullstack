import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, createEffect, createSignal } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import { supabase } from "./components/supabaseClient";
import { AuthSession } from "@supabase/supabase-js";
import Auth from "./components/Auth";
import { session } from "./components/supabaseSession";

export default function App() { 
  
  return (
    <Router
      root={props => (
        <>
          <Nav />
          {!session() ? <Auth /> : <Suspense>{props.children}</Suspense>}
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
