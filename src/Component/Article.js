import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './Contact';

// var applyFilter = function applyFilter(searchTerm) {
//     return function (row) {
//         return row.title.toLowerCase().includes(searchTerm.toLowerCase())
//     }
// }

const applyFilter = searchTerm => art => {
    return art.title.toLowerCase().includes(searchTerm.toLowerCase())
}

const ArticleComponent = ({articles, searchTerm, onSearch}) => {
    var searchedArticles = articles.filter(applyFilter(searchTerm))
    const submit = values => {
        console.log(values)
    }
    return (
        <div style={{padding: '20px'}}>
            <div>
                Search : &nbsp; 
                <input type="text" value={searchTerm} onChange={e => onSearch(e.target.value)}></input>
            </div>
            <ul>
                {searchedArticles.map(article =>(
                    <li key={article.id}>
                        <a href={article.url}> {article.title} </a>
                    </li>
                ))}
            </ul>
            <ContactForm onSubmit={submit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    articles : state.articlesState.articles,
    searchTerm : state.searchState.searchTerm
})

const mapDispatchToProps = (dispatch) => ({
    onSearch : searchTerm => dispatch({type: 'SEARCH_SET', payload: searchTerm})
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleComponent);