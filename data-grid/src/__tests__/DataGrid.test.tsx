import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import { DataGrid } from "../DataGrid";
import { Row, Schema } from "../types/types";

describe("DataGrid", () => {
  it("should render", () => {
    const schema = [
      { displayName: "First Name", field: "firstName" },
      { displayName: "Last Name", field: "lastName" },
      { displayName: "Age", field: "age" },
    ];

    const data = [
      { firstName: "John", lastName: "Doe", age: 30 },
      { firstName: "Jane", lastName: "Doe", age: 25 },
    ];

    const onRowClick = jest.fn();
    const onSort = jest.fn();
    const onCellContentUpdate = jest.fn();
    const onRowDelete = jest.fn();

    const { container } = render(
      <DataGrid
        schema={schema}
        data={data}
        onRowClick={onRowClick}
        onSort={onSort}
        onCellContentUpdate={onCellContentUpdate}
        onRowDelete={onRowDelete}
      />,
    );

    expect(container).toBeInTheDocument();
  });

  describe("when data is not provided", () => {
    it("should render a loading message", () => {
      const schema = [
        { displayName: "First Name", field: "firstName" },
        { displayName: "Last Name", field: "lastName" },
        { displayName: "Age", field: "age" },
      ];

      const { getByText } = render(
        <DataGrid schema={schema} data={null as unknown as Row[]} />,
      );

      expect(getByText("Loading ...")).toBeInTheDocument();
    });
  });

  describe("when schema is not provided", () => {
    it("should render a error message", () => {
      const data = [
        { firstName: "John", lastName: "Doe", age: 30 },
        { firstName: "Jane", lastName: "Doe", age: 25 },
      ];

      const { getByText } = render(
        <DataGrid schema={null as unknown as Schema} data={data} />,
      );

      expect(getByText("No schema provided")).toBeInTheDocument();
    });
  });

  describe("when paginationOptions is provided", () => {
    const schema = [
      { displayName: "First Name", field: "firstName" },
      { displayName: "Last Name", field: "lastName" },
      { displayName: "Age", field: "age" },
    ];

    const data = [
      { firstName: "John", lastName: "Doe", age: 30 },
      { firstName: "Jane", lastName: "Doe", age: 25 },
    ];

    const paginationOptions = {
      page: 1,
      pageSize: 10,
      total: 100,
      onPageChanged: jest.fn(),
      onLimitChanged: jest.fn(),
      limitOptions: [10, 20, 50],
    };

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should render the pagination component", () => {
      const { container } = render(
        <DataGrid
          schema={schema}
          data={data}
          paginationOptions={paginationOptions}
        />,
      );

      expect(
        container.querySelector(".pagination__controls"),
      ).toBeInTheDocument();
      expect(
        container.querySelector(".pagination__position--active"),
      ).toBeInTheDocument();
    });

    it("should call onPageChanged when clicking on the »» button", () => {
      const { getByText } = render(
        <DataGrid
          schema={schema}
          data={data}
          paginationOptions={paginationOptions}
        />,
      );

      getByText("»»").click();
      expect(paginationOptions.onPageChanged).toHaveBeenCalledWith(
        paginationOptions.total,
      );
    });

    it("should call onPageChanged when clicking on the » button", () => {
      const { getByText } = render(
        <DataGrid
          schema={schema}
          data={data}
          paginationOptions={paginationOptions}
        />,
      );

      getByText("»").click();
      expect(paginationOptions.onPageChanged).toHaveBeenCalledWith(
        paginationOptions.page + 1,
      );
    });

    it("should call onPageChanged when clicking on the « button", () => {
      const { getByText } = render(
        <DataGrid
          schema={schema}
          data={data}
          paginationOptions={{
            ...paginationOptions,
            page: 20,
          }}
        />,
      );

      getByText("«").click();
      expect(paginationOptions.onPageChanged).toHaveBeenCalledWith(19);
    });

    it("should call onPageChanged when clicking on the «« button", () => {
      const { getByText } = render(
        <DataGrid
          schema={schema}
          data={data}
          paginationOptions={{
            ...paginationOptions,
            page: 20,
          }}
        />,
      );

      getByText("««").click();
      expect(paginationOptions.onPageChanged).toHaveBeenCalledWith(1);
    });

    it("should call onPageChanged when clicking on a page number", () => {
      const { getByText } = render(
        <DataGrid
          schema={schema}
          data={data}
          paginationOptions={paginationOptions}
        />,
      );

      getByText("3").click();
      expect(paginationOptions.onPageChanged).toHaveBeenCalledWith(3);
    });
  });
});
