import React, { useEffect, useState } from 'react'

type UserListType = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

const UserList = () => {
    const [data, setData] = useState<UserListType[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.log("error occured", error);
            }
        }
        fetchData();
    }, [])
    
    return (
        <div>
            {data.length>0 ? (
                data.map((user)=>(
                    <div key={user.id}>
                        <p>ID:{user.id}</p>
                        <p>Name:{user.name}</p>
                        <p>UserName:{user.username}</p>
                        <p>Email:{user.email}</p>
                        <p>mobile:{user.phone}</p>
                    </div>
                ))
            ) :( <h2>Loading...</h2> )}
        </div>
    )
}

export default UserList