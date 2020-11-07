// card

// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=science&sort=newest&api-key=sjJIn5xVooBrTKuMJVcRgGF5XmW2RPN3
console.log("yes")
// click event 

$("#search-button").on("click", function () {
    var searchTerm = $("#search-term").val();

    var records = $("#records").val();
    var startYear = $("#start-year").val() + "0101";
    console.log(startYear)

    var endYear = $("#end-year").val() + "1231";
    console.log(endYear)

    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date="+ startYear + "&end_date=" + endYear + "&q=" + searchTerm + "&sort=newest&api-key=sjJIn5xVooBrTKuMJVcRgGF5XmW2RPN3";
    console.log("yes")
    $.ajax({
        url: queryUrl,
        method: "GET"
     })
    .then (function(response){
        var story= response.response.docs
        console.log(response)
    });



});

