import { ChangeEvent, FormEvent, useState } from "react"

interface ContactFormType {
    name: string;
    email: string;
}

const ContactForm = () => {

    const [formData, setFormData] = useState<ContactFormType>({
        name: '',
        email: '',
    })
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // extracting name and value from input tag 
        const { name, value } = e.target;
        // if name="mani" then formdata.name="mani" and if name="email" then formdata.email="email"
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("form Submitted", formData);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Name
                    <input type="text" placeholder="enter Your Name" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <label >Email
                    <input type="text" placeholder="enter Your Name" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default ContactForm