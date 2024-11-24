import React, { useState } from 'react'

const Profile = () => {
    const [profile, setProfile] = useState({
        name: "",
        age: ""
    });
    const handleChange = (e) => {
        // destructoring method
        // const{name,value}=e.target
        // Normal method
        const name=e.target.name;
        const value=e.target.value;

        // Instead of accessing them individually (e.g., e.target.name and e.target.value), destructuring lets us extract them in a single line.

        setProfile((prevProfile)=>({...prevProfile, [name]:value}));
         // here prevProfile is just an shallow copy to store the value into the object
         //   qki object me store krne ke liye ek zariya chahiye
    }
    return (
        <section>
            <div>
                <label>Name:
                    <input type="text" name='name' value={profile.name} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label >Age:
                    <input type="text" name='age' value={profile.age} onChange={handleChange} />
                </label>
            </div>
            <h2>Profile Information</h2>
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
        </section>
    )
}

export default Profile