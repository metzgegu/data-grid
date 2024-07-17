import { useEffect, useState } from "react"

export const useUsersData = ({ page, limit }: { page?: number, limit?: number }) => {
    const [users, setUsers] = useState<{
        name: string,
        birhdate: number,
        email: string,
        address: string,
        phone: string
    }[]>([])
    const [pageCount, setPageCount] = useState(0)
    
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(`http://localhost:3001/users${page && limit ? `?page=${page}&limit=${limit}`: ''}`)
            const responseObject = await response.json()

            if (page && limit) {
                setUsers(responseObject.users)
                setPageCount(responseObject.pageCount)
                return
            }

            setUsers(responseObject)
        }
    
        fetchUsers()
    }, [page, limit])
    
    return { users, pageCount }
}