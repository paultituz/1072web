$(document).ready(function(){
    $("input").click(function(){
        //alert("Hi");
        //$("h1").text("Hello");
        //$("h1").text($("li;first").text());
        
        var numberOfLisItem = driver.length;
        var randomChildNumber = Math.floor(Math.random()*numberOfLisItem);
        
        $("H1").text(driver[randomChildNumber].name);
        $("h2").text("Age: " + driver[randomChildNumber].age);
        $("h3").text("Nationality: " + driver[randomChildNumber].Nationality);
        $("h4").text("Championships: " + driver[randomChildNumber].Championships);
        $("#driver").attr('src',driver[randomChildNumber].img);
        $("#driver").removeAttr("hidden");
               
        
    });
});

/*
$(document).ready(function(){
    $("button").click(function(){
        var numberOfListItem = driver.length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("H1").text(driver[randomChildNumber].name);
        $("#info").empty();
        $("#info").append("<h2>age: " + driver[randomChildNumber].age + "<br>" +
                         "age: " + driver[randomChildNumber].Nationality + "<br>" + 
                         "championnships: " + driver[randomChildNumber].Championships)
        $("#player").attr('src', driver[randomChildNumber].img);
        $("#player").removeAttr("hidden"); 
    });
});


$(document).ready(function(){
    $("button").click(function(){
        var numberOfListItem = player.length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("H1").text(player[randomChildNumber].name);
        $("#info").empty();
        $("#info").append("<h2>number: " + player[randomChildNumber].number + "<br>" +
                         "age: " + player[randomChildNumber].age + "<br>" + 
                         "posotion: " + player[randomChildNumber].position + "<br>" +
                         "country: " + player[randomChildNumber].country + "<br>" + 
                         "joined: " + player[randomChildNumber].joined + "<br>" + 
                         player[randomChildNumber].words + "<br>")
        $("#player").attr('src', player[randomChildNumber].img);
        $("#player").removeAttr("hidden"); 
    });
});*/


var driver = [
    {
        "name":"Juan Manuel Fangio",
        "age":"24 June 1911 - 17 July 1995 (aged : 84)",
        "Nationality":"Argentine",
        "Championships":"5 (1951, 1954, 1955, 1956, 1957)",
        "img":"../photo/220px-Fangio.png"
    },
     {
        "name":"Hans Herrmann",
        "age":"23 February 1928 - now (age 91)",
        "Nationality":"German",
        "Championships":"0",
        "img":"../photo/220px-HansHerrmann.jpeg"
    },
    {
        "name":"Karl Kling",
        "age":"16 September 1910 - 18 March 2003 (aged 92)",
        "Nationality":"German",
        "Championships":"0",
        "img":"../photo/220px-KlingK-MB-W196-1976.jpg"
    },
    {
        "name":"Hermann Lang",
        "age":"6 April 1909 - 19 October 1987 (aged 78)",
        "Nationality":"German",
        "Championships":"0",
        "img":"../photo/220px-LangH-MB-W154-1986-08-16.jpg"
    },
    {
        "name":"Sir Stirling Moss",
        "age":"17 September 1929 - now (age 89)",
        "Nationality":"British",
        "Championships":"0",
        "img":"../photo/220px-Stirling_Moss.jpg"
    },
    {
        "name":"André Simon",
        "age":"5 January 1920 - 11 July 2012 (aged 92)",
        "Nationality":"French",
        "Championships":"0",
        "img":"../photo/black.jpg"
        
    },
    {
        "name":"Piero Taruffi",
        "age":"12 October 1906 - 12 January 1988 (aged 81)",
        "Nationality":"Italian",
        "Championships":"0",
        "img":"../photo/220px-Piero_Taruffi.jpg"
    },
    {
        "name":"Michael Schumacher",
        "age":"3 January 1969 - now (age 50)",
        "Nationality":"German",
        "Championships":"7 (1994, 1995, 2000, 2001, 2002, 2003, 2004)",
        "img":"../photo/schumacher.jpeg"
    },
    {
        "name":"Nico Rosberg",
        "age":"27 June 1985 - now (age 33)",
        "Nationality":"German",
        "Championships":"1 (2016)",
        "img":"../photo/220px-Web_Summit_2018_-_Forum_-_Day_1,_November_6_SAM_9601_(45023831104).jpg"
    },
    {
        "name":"Lewis Hamilton",
        "age":"7 January 1985 - now (age 34)",
        "Nationality":"United Kingdom",
        "Championships":"5 (2008, 2014, 2015, 2017, 2018)",
        "img":"../photo/220px-Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    {
        "name":"Valtteri Bottas",
        "age":"28 August 1989 - now (age 29)",
        "Nationality":" Finnish",
        "Championships":"0",
        "img":"../photo/220px-2019_Formula_One_tests_Barcelona,_Bottas_(47200028912).jpg"
    },
    {
        "name":"Esteban Ocon(Junior team)",
        "age":"17 September 1996 - now (age 22)",
        "Nationality":" French",
        "Championships":"0",
        "img":"../photo/220px-Esteban_Ocon_2017_Malaysia_1.jpg"
    },
    {
        "name":"George Russell(Junior team)",
        "age":"15 February 1998 - now (age 21)",
        "Nationality":" British",
        "Championships":"0",
        "img":"../photo/220px-2019_Formula_One_tests_Barcelona,_Russell_(33376134568).jpg"
    }

]
