export const Usage = () => {
    return (
        <><p>
            To use the data grid component, you can import it and pass the schema
            and data as props:
        </p><pre>
                <code>{`
            import { DataGrid } from "data-grid";

            const schema = [
              { displayName: "Name", field: "name", sortable: true },
              { displayName: "Birth Date", field: "birthdate", sortable: true },
              { displayName: "Email", field: "email", sortable: true },
              { displayName: "Address", field: "address", sortable: true },
              { displayName: "Phone", field: "phone", sortable: true },
            ];

            const data = [
              {
                id: 1,
                name: "John Doe",
                birthdate: "01/01/1990",
                email: "john@doe.do",
                address: "123 Main St",
                phone: "555-555-5555",
              },
              ...
            ];

            <DataGrid schema={schema} data={data} />
          `}</code>
            </pre></>
    )
};