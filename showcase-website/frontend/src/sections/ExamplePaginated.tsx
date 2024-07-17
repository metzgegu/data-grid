import { DataGrid } from "data-grid";
import { useState } from "react";
import { useUsersData } from "../hooks/useUsersData";

export const ExamplePaginated: React.FC = () => {
    const schema = [
        { displayName: 'Name', field: 'name' },
        { displayName: 'Birth Date', field: 'birhdate' },
        { displayName: 'Email', field: 'email' },
        { displayName: 'Address', field: 'address' },
        { displayName: 'Phone', field: 'phone' },
    ]
    
    const [currentPage, setCurrentPage] = useState(1)
    const [limit, setLimit] = useState(10)

    const { users, pageCount } = useUsersData({ page: currentPage, limit })


    return (
       <section>
            <h2>Paginated data-grid</h2>
            <p>
                This is a example with a paginated data-grid component.
            </p>

            <div style={{ height: '500px' }}>
                <DataGrid
                    schema={schema}
                    data={users}
                    onRowClick={(row) => console.log(row)}
                    paginationOptions={{
                        page: currentPage,
                        pageSize: limit,
                        total: pageCount,
                        onPageChanged: (page) => setCurrentPage(page),
                        onLimitChanged: (newLimit) => { setLimit(newLimit); setCurrentPage(1) },
                        limitOptions: [10, 20, 50]
                    }}
                />
            </div>
       </section>
    )
}