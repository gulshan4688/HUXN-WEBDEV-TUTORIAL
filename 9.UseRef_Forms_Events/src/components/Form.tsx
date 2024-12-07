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
       // telling the type of handleSibmit that it is of FormEvent type and its gonna fire on  HTML Input Element 
    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        //The ! tells TypeScript that the value being accessed is not null or undefined, even if the type definition suggests it might be. Essentially, it is a way of asserting that the developer is confident the value is not null or undefined at that point in the code.
        // const nameValue=name.current!.value;
        const emailValue=email.current!.value;
        const passwordValue=password.current!.value;

        setSubmitted({
            name:name.current!.value,
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