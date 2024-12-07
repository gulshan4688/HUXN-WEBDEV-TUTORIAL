import { ChangeEvent, FormEvent, useState } from "react"
// create an interface
interface ContactFormType {
    name: string;
    email: string;
}

const ContactForm = () => {
                                // only used a type contact form type 
    const [formData, setFormData] = useState<ContactFormType>({
        name: '',
        email: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // extracting name and value from input tag 
        const { name, value } = e.target;
        // if name="mani" then formdata.name="mani" and if name="email" then formdata.email="email"
        setFormData((prevState) => ({ ...prevState, [name]: value }));
        // name kya hai name to uska value set krdo formData.name joki mani hai to mani uska value ho gaya 
        // name kya hai email to uska value set krdo formData.email joki mani@gmail.com hai to mani@gmail.com uska value ho gaya 
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("form Submitted", formData);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* ------------------------------------------------ */}
                <label >Name 
                    <input type="text" placeholder="enter Your Name" name="name" value={formData.name} onChange={handleChange} />
                </label>
                {/* ------------------------------------------------- */}
                <label >Email
                    <input type="text" placeholder="enter Your Name" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default ContactForm