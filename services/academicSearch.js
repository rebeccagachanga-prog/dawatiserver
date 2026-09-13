
// =================================
// DAWATI ACADEMIC SEARCH SERVICE
// =================================

async function searchAcademicSources(research) {

    console.log("=================================");
    console.log("DAWATI ACADEMIC SEARCH STARTED");
    console.log("=================================");

    console.log(
        "Searching for:",
        research.title
    );


    // =================================
    // BUILD SEARCH QUERY
    // =================================

  const searchQuery = `
    ${research.searchText || ""}
    ${research.title || ""}
    ${research.idea || ""}
    ${research.fieldOfStudy || ""}
    ${research.objective1 || ""}
    ${research.objective2 || ""}
    ${research.objective3 || ""}
    ${research.objective4 || ""}
`
    .replace(/\s+/g, " ")
    .trim();


    console.log(
        "Search Query:",
        searchQuery
    );

    
console.log("");
console.log("=================================");
console.log("DAWATI ACADEMIC SEARCH QUERY");
console.log("=================================");
console.log(searchQuery);
console.log("=================================");

    // =================================
    // TEMPORARY SOURCES
    // =================================
    // Real academic search API
    // will be connected next.

    const sources = [

        {
            title:
                "Research Study Related to " +
                research.title,

            authors:
                "Academic Researcher",

            year:
                "2024",

            journal:
                "Academic Research Journal",

            url:
                "https://example.com",

            abstract:
                "This source provides information related to the research topic."
        },

        {
            title:
                "Literature Review on " +
                research.fieldOfStudy,

            authors:
                "Research Scholar",

            year:
                "2023",

            journal:
                "International Research Journal",

            url:
                "https://example.com",

            abstract:
                "This study discusses important concepts related to the research area."
        }

    ];


    // =================================
    // RETURN RESULTS
    // =================================

    return sources;

}


module.exports = {
    searchAcademicSources
};

