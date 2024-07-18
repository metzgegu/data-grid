# Data-grid library

Data-grid is a customizable and extensible data grid component that can be used to display data in a tabular format.

## Features

- Sorting
- Pagination
- Infinite scroll
- Editable cells
- Deletable Rows
- Custom row actions on click

## Installation

To install the data grid component, you can run the following command:

```
yarn add data-grid
```

Or if you are using npm, you can run the following command instead:

```
npm install data-grid
```

## Usage

To use the data grid component, you can import it and pass the schema and data as props:

```
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
```

## Props

| Prop                  | Type     | Description                                                                                                                                                                                         |
| --------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| schema                | Array    | An array of objects that define the columns of the data grid.                                                                                                                                       |
| data                  | Array    | An array of objects that define the rows of the data grid.                                                                                                                                          |
| onSort                | Function | A function that is called when a column is sorted. It receives the field and direction as arguments.                                                                                                |
| onRowClick            | Function | A function that is called when a row is clicked. It receives the row object as an argument.                                                                                                         |
| onCellContentUpdate   | Function | A function that is called when a cell content is updated. It receives the row object as an argument.                                                                                                |
| onRowDelete           | Function | A function that is called when a row is deleted. It receives the row object as an argument.                                                                                                         |
| infiniteScrollOptions | Object   | An object that defines the infinite scroll options of the data grid. (`onScrollEnd`: Function)                                                                                                      |
| paginationOptions     | Object   | An object that defines the pagination options of the data grid. (`page`: number, `pageSize`: number, `total`: number, `onPageChanged`: Function, `onLimitChanged`: Function, `limitOptions`: Array) |
