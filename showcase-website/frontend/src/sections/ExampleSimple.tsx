import { DataGrid } from "data-grid";
import { useState } from "react";
import { useUsersData } from "../hooks/useUsersData";

export const ExampleSimple: React.FC = () => {
    const schema = [
        { displayName: 'Name', field: 'name' },
        { displayName: 'Birth Date', field: 'birhdate' },
        { displayName: 'Email', field: 'email' },
        { displayName: 'Address', field: 'address' },
        { displayName: 'Phone', field: 'phone' },
    ]

    const { users } = useUsersData({})


    return (
       <section>
            <h2>Basic usage of data-grid</h2>
            <p>
                This is a simple example with a basic usage of the data-grid component.
            </p>

            <div style={{ height: '500px' }}>
                <DataGrid
                    schema={schema}
                    data={users}
                    onRowClick={(row) => console.log(row)}
                />
            </div>
       </section>
    )
}