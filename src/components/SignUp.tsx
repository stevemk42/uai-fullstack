import { Component, createSignal } from "solid-js";
import { supabase } from "./supabaseClient";

const SignUp: Component = (props) => {
    const [email, setEmail] = createSignal("")
    const [password, setPassword] = createSignal("")

    function handleEmail(event:Event) {
        if (event.target instanceof HTMLInputElement) {
            setEmail(event.target.value)
        }
    }
    function handlePass(event:Event) {
        if (event.target instanceof HTMLInputElement) {
            setPassword(event.target.value)
        }
    }

    async function handleSignIn(event:Event) {
        event.preventDefault()

        try {
            const { error } = await supabase.auth.signUp({
                email: email(),
                password: password()
            })
            if (error) throw error;
        }catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Inscription</h1>
            <form onSubmit={handleSignIn}>
                <label>Email</label>
                <input type="email" value={email()} onInput={handleEmail} />
                <label>Mot de passe</label>
                <input type="password" value={password()} onInput={handlePass} />
            <button type="submit">Go</button>
            </form>
        </div>
    )
}

export default SignUp;