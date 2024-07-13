import { useEffect, useState } from "react"

export const useUsersData = () => {
    const [users, setUsers] = useState<{
        name: string,
        birhdate: number,
        email: string,
        address: string,
        phone: string
    }[]>([])
    
    useEffect(() => {
        const fetchUsers = async () => {
        const response = await fetch('http://localhost:3001/users')
            setUsers(await response.json())
        }
    
        fetchUsers()
    }, [])
    
    return users
}