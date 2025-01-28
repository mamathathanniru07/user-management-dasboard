import "./index.css";

const Pagination = ({ pages, current, onClickPrev, onClickNext, goToPage }) => {
  return (
    <div>
      <button
        className={"arrow-button " + (current === 0 ? "disable" : "")}
        onClick={onClickPrev}
      >
        {"<"}
      </button>
      {pages.map((page) => {
        return (
          <button
            className={"page" + (current === page ? " selected-page-num " : "")}
            onClick={() => goToPage(page)}
          >
            {page}
          </button>
        );
      })}
      <button
        className={
          "arrow-button " + (current === pages.length - 1 ? "disable" : "")
        }
        onClick={onClickNext}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
