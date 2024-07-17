import "../styles/Pagination.css";
import { PaginationOptions } from "../types/types";

const MAX_POSITION_DISPLAYED = 5;

const getPositionArray = (page: number, total: number): number[] => {
  if (total <= MAX_POSITION_DISPLAYED) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  if (page <= 3) {
    return [1, 2, 3, 4, 5];
  }

  if (page >= total - 2) {
    return [total - 4, total - 3, total - 2, total - 1, total];
  }

  return [page - 2, page - 1, page, page + 1, page + 2];
};

export const Pagination: React.FC<{ paginationOptions: PaginationOptions }> = ({
  paginationOptions: {
    page,
    pageSize,
    total,
    onPageChanged,
    onLimitChanged,
    limitOptions,
  },
}) => {
  const positionArray = getPositionArray(page, total);

  return (
    <div className="pagination">
      <button
        className="pagination__controls"
        disabled={page <= MAX_POSITION_DISPLAYED / 2 + 1}
        onClick={() => onPageChanged(1)}
      >
        &laquo;&laquo;
      </button>
      <button
        className="pagination__controls"
        disabled={page <= 1}
        onClick={() => onPageChanged(page - 1)}
      >
        &laquo;
      </button>
      {positionArray.map((position) => (
        <button
          key={position}
          className={`pagination__position ${position === page ? "pagination__position--active" : ""}`}
          onClick={() => onPageChanged(position)}
        >
          {position}
        </button>
      ))}
      <button
        className="pagination__controls"
        disabled={page >= total}
        onClick={() => onPageChanged(page + 1)}
      >
        &raquo;
      </button>
      <button
        className="pagination__controls"
        disabled={page >= total - MAX_POSITION_DISPLAYED / 2}
        onClick={() => onPageChanged(total)}
      >
        &raquo;&raquo;
      </button>

      <select name="limit" className="pagination__limitSelector">
        {limitOptions.map((limit) => (
          <option
            key={limit}
            value={limit}
            selected={limit === pageSize}
            onClick={() => onLimitChanged(limit)}
          >
            {limit}
          </option>
        ))}
      </select>
    </div>
  );
};
