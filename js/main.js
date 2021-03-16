import { getSearchTerm } from './dataFunctions.js';
import { setSearchFocus } from './searchBar.js'
import { retrieveSearchResults } from './dataFunctions.js'




document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    //set the focus
    setSearchFocus();

    //3 listeners

    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);

}

const submitTheSearch = (event) => {
    event.preventDefault();
    //delete search results
    processTheSearch();
    setSearchFocus();

}

const processTheSearch = async () => {
    const searchTerm = getSearchTerm();
    if (searchTerm === "") return;
    const resultArray = await retrieveSearchResults(searchTerm);
}

