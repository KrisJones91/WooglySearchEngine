export const getSearchTerm = () => {
    const rawSearchTerm = document.getElementById("search").nodeValue.trim()
    const regex = /[]{2,}/gi;
    const searchTerm = rawSearchTerm.replace(regex, " ");
    return searchTerm
}

export const retrieveSearchResults = async (searchTerm) => {
    const wikiSearchString = getWikiSearchString(searchTerm);
}

const getWikiSearchString = (searchTerm) => {
    const maxChars = getMaxChars();
}