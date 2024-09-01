import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import ContactForm from "./Contact";
import { fetchData } from "../thunk/action";
import { bindActionCreators } from "redux";

// var applyFilter = function applyFilter(searchTerm) {
//     return function (row) {
//         return row.title.toLowerCase().includes(searchTerm.toLowerCase())
//     }
// }

const applyFilter = (searchTerm) => (art) => {
  return art.title.toLowerCase().includes(searchTerm.toLowerCase());
};

const ArticleComponent = ({ articles, searchTerm, onSearch, getData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, [dispatch]);

  var searchedArticles = articles && articles.filter(applyFilter(searchTerm));
  const submit = (values) => {
    console.log(values);
  };
  return (
    <div style={{ padding: "20px" }}>
      <div>
        Search : &nbsp;
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}></input>
      </div>
      <ul>
        {searchedArticles &&
          searchedArticles.map((article) => (
            <li key={article.id}>
              <a href={article.url}> {article.title} </a>
            </li>
          ))}
      </ul>
      <ContactForm onSubmit={submit} />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    articles: state.articlesState.data,
    searchTerm: state.searchState.searchTerm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (searchTerm) =>
      dispatch({ type: "SEARCH_SET", payload: searchTerm }),
    getData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleComponent);
