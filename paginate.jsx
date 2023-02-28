const Pagination = ({ items, pageSize, onPageChange }) => {
  const { Button } = ReactBootstrap;
  if (items.length <= 1) {console.log("no items for Pagination"); return null; /*return if no items*/}

  let num = Math.ceil(items.length / pageSize);//round up items 
  let pages = range(1, num + 1);//range(start=1, end=num+1)
  
  /**
   * @function
   * @name list
   * @returns Bootstrap Buttons
   * @description
   * create page buttons and link them with onPageChange
   */
  const list = pages.map(page => {
    return (
      <Button key={page} onClick={onPageChange} className="page-item">
        {page}
      </Button>
    );
  });
  return (
    <nav>
      <ul className="pagination">{list}</ul>
    </nav>
  );
};

  /**
   * 
   * @param {number} start 
   * @param {number} end 
   * @returns {array} - of elemments between start - end
   * @description
   * helper function for Pagination
   */
  const range = (start, end) => {  
    let arrayTotalElements = end - start + 1;
    let emptyArray = Array(arrayTotalElements);
    console.log(emptyArray);
    let fillZero = emptyArray.fill(0); //because map doesnt work with empty array
    console.log(fillZero);
    let rangeArray = fillZero.map((item, i) => start + i);
    console.log(rangeArray);
    return rangeArray;
    // return Array(end - start + 1)
    //   .fill(0)
    //   .map((item, i) => start + i);
  };

/**
 * 
 * @param {number} items - total items
 * @param {number} pageNumber - selected page
 * @param {number} pageSize - items per page 
 * @returns items for pageNumber
 * @description 
 * helper function for Pagination
 */
function paginate(items, pageNumber, pageSize) {
  const start = (pageNumber - 1) * pageSize;
  let page = items.slice(start, start + pageSize);
  return page;
}

  /**
   *
   * @param {*} initialUrl 
   * @param {*} initialData 
   * @returns 
   * @description
   * custom hook to manage a number of state varuables
   */
const useDataApi = (initialUrl, initialData) => {
  const { useState, useEffect, useReducer } = React;
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData
  });

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await axios(url);
        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url]);
  return [state, setUrl];
};
const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();
  }
};
// App that gets data from Hacker News url
function App() {
  const { Fragment, useState, useEffect, useReducer } = React;
  const [query, setQuery] = useState("MIT");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "https://hn.algolia.com/api/v1/search?query=MIT",
    {
      hits: []
    }
  );
  const handlePageChange = e => {
    setCurrentPage(Number(e.target.textContent));
  };
  let page = data.hits;
  if (page.length >= 1) {
    page = paginate(page, currentPage, pageSize);
    console.log(`currentPage: ${currentPage}`);
  }
  return (
    <Fragment>
      <form
        onSubmit={event => {
          doFetch("http://hn.algolia.com/api/v1/search?query=${query}");
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {page.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
      <Pagination
        items={data.hits}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      ></Pagination>
    </Fragment>
  );
}

// ========================================
ReactDOM.render(<App />, document.getElementById("root"));
