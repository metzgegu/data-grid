export const Props = () => {
  return (
    <table className="props__table">
      <thead>
        <tr>
          <th className="props__cell">Prop</th>
          <th className="props__cell">Type</th>
          <th className="props__cell">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="props__cell">schema</td>
          <td className="props__cell">Array</td>
          <td className="props__cell">
            An array of objects that define the columns of the data grid.
          </td>
        </tr>
        <tr>
          <td className="props__cell">data</td>
          <td className="props__cell">Array</td>
          <td className="props__cell">
            An array of objects that define the rows of the data grid.
          </td>
        </tr>
        <tr>
          <td className="props__cell">onRowClick</td>
          <td className="props__cell">Function</td>
          <td className="props__cell">
            A function that is called when a row is clicked. It receives the row
            object as an argument.
          </td>
        </tr>
        <tr>
          <td className="props__cell">onSort</td>
          <td className="props__cell">Function</td>
          <td className="props__cell">
            A function that is called when a column is sorted. It receives the
            field and direction as arguments.
          </td>
        </tr>
        <tr>
          <td className="props__cell">onCellContentUpdate</td>
          <td className="props__cell">Function</td>
          <td className="props__cell">
            A function that is called when a cell content is updated. It
            receives the row object as an argument.
          </td>
        </tr>
        <tr>
          <td className="props__cell">onRowDelete</td>
          <td className="props__cell">Function</td>
          <td className="props__cell">
            A function that is called when a row is deleted. It receives the row
            object as an argument.
          </td>
        </tr>
        <tr>
          <td className="props__cell">paginationOptions</td>
          <td className="props__cell">Object</td>
          <td className="props__cell">
            An object that defines the pagination options of the data grid.
            <ul>
              <li>page: number</li>
              <li>pageSize: number</li>
              <li>total: number</li>
              <li>onPageChanged: Function</li>
              <li>onLimitChanged: Function</li>
              <li>limitOptions: Array</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className="props__cell">infiniteScrollOptions</td>
          <td className="props__cell">Object</td>
          <td className="props__cell">
            An object that defines the infinite scroll options of the data grid.
            <ul>
              <li>onScrollEnd: Function</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
