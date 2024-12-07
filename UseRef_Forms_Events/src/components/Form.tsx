import { FormEvent, useRef, useState } from "react"

const Form = () => {
// defining type 
    type formType = {
        name: string;
        email: string;
        password: string;
    }
// defining useState
    const [submitted, setSubmitted] = useState<formType>({
        name: '',
        email: '',
        password: '',
    })
// defining ref
    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        const nameValue=name.current!.value;
        const emailValue=email.current!.value;
        const passwordValue=password.current!.value;

        setSubmitted({
            name:nameValue,
            email:emailValue,
            password:passwordValue
        })
    }

    return (
        <form onSubmit={handleSubmit} >
            <input type="name" placeholder="enter your name" ref={name} />
            <input type="email" placeholder="enter your email" ref={email} />
            <input type="password" placeholder="enter your password" ref={password} />
            <button type="submit" >Submit</button>
            <section>
                <h2>Name:{submitted.name}</h2>
                <h2>email:{submitted.email}</h2>
                <h2>password:{submitted.password}</h2>
            </section>
        </form>
    )
}

export default Form