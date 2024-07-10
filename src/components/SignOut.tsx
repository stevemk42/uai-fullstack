import { Component } from "solid-js";
import { supabase } from "./supabaseClient";

const SignOut: Component = (props) => {
    async function handleClick(event: Event) {
        event.preventDefault()

        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error
        } catch(error) {
            console.log(error)
        }
    }
    return <button onClick={handleClick}>Déconnexion</button>
}

export default SignOut;