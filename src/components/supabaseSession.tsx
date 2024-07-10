import { createEffect, createSignal } from "solid-js"
import { supabase } from "./supabaseClient"
import { AuthSession } from "@supabase/supabase-js"

export const [session, setSession] = createSignal<AuthSession | null>(null)

  createEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  })