//Zomato API d253ce78858e1e6f33ed45ea9fa35e8c
console.log("hello")

//open brewery API AJAX call

$(document).ready(function () {

    //variables defining the six boxes where the brewery information will go
    var box1 = $("#box1");
    var box2 = $("#box2");
    var box3 = $("#box3");
    var box4 = $("#box4");
    var box5 = $("#box5");
    var box6 = $("#box6");

    //function and AJAX functioning as Designed
    function breweryByname() {
        var Location = $("#test").val().trim();
        var breweryURL = "https://api.openbrewerydb.org/breweries?by_city=" + Location;
        console.log("hello");


        $.ajax({
            url: breweryURL,
            method: "GET"

        }).then(function (response) {
            console.log(response);
            //can I do a loop to run all six of these with?

            //box 1 data
            var brewName1 = response[0].name;
            var brewname1H = $("<h5>");
            brewname1H.text(`Name: ${brewName1}`);
            box1.append(brewname1H);

            var brewType1 = response[0].brewery_type;
            var brewType1p = $("<p>");
            brewType1p.text(`Type: ${brewType1}`)
            box1.append(brewType1p);

            var brewStreet1 = response[0].street;
            var brewstreet1P = $("<p>");
            brewstreet1P.text(`Address: ${brewStreet1}`);
            box1.append(brewstreet1P);

            var brewPhone1 = response[0].phone;
            var brewPhone1p = $("<p>");
            brewPhone1p.text(`Phone Number: ${brewPhone1}`);
            box1.append(brewPhone1p);

            var brewWeb1 = response[0].website_url;
            var brewWeb1p = $("<p>");
            brewWeb1p.text(`Website: ${brewWeb1}`);
            box1.append(brewWeb1p);

            //box 2 data
            var brewName2 = response[1].name;
            var brewname2H = $("<h5>");
            brewname2H.text(`Name: ${brewName2}`);
            box2.append(brewname2H);

            var brewType2 = response[1].brewery_type;
            var brewType2p = $("<p>");
            brewType2p.text(`Type: ${brewType2}`)
            box2.append(brewType1p);

            var brewStreet2 = response[1].street;
            var brewstreet2P = $("<p>");
            brewstreet2P.text(`Address: ${brewStreet2}`);
            box2.append(brewstreet2P);

            var brewPhone2 = response[1].phone;
            var brewPhone2p = $("<p>");
            brewPhone2p.text(`Phone Number: ${brewPhone2}`);
            box2.append(brewPhone2p);

            var brewWeb2 = response[1].website_url;
            var brewWeb2p = $("<p>");
            brewWeb2p.text(`Website: ${brewWeb2}`);
            box2.append(brewWeb2p);

            //box 3 data
            var brewName3 = response[2].name;
            var brewname3H = $("<h5>");
            brewname3H.text(`Name: ${brewName3}`);
            box3.append(brewname3H);

            var brewType3 = response[2].brewery_type;
            var brewType3p = $("<p>");
            brewType3p.text(`Type: ${brewType3}`)
            box3.append(brewType3p);

            var brewStreet3 = response[2].street;
            var brewstreet3P = $("<p>");
            brewstreet3P.text(`Address: ${brewStreet3}`);
            box3.append(brewstreet3P);

            var brewPhone3 = response[2].phone;
            var brewPhone3p = $("<p>");
            brewPhone3p.text(`Phone Number: ${brewPhone3}`);
            box3.append(brewPhone3p);

            var brewWeb3 = response[2].website_url;
            var brewWeb3p = $("<p>");
            brewWeb3p.text(`Website: ${brewWeb3}`);
            box3.append(brewWeb3p);

            //box 4 data
            var brewName4 = response[3].name;
            var brewname4H = $("<h5>");
            brewname4H.text(`Name: ${brewName4}`);
            box4.append(brewname4H);

            var brewType4 = response[3].brewery_type;
            var brewType4p = $("<p>");
            brewType4p.text(`Type: ${brewType4}`)
            box4.append(brewType4p);

            var brewStreet4 = response[3].street;
            var brewstreet4P = $("<p>");
            brewstreet4P.text(`Address: ${brewStreet4}`);
            box4.append(brewstreet4P);

            var brewPhone4 = response[3].phone;
            var brewPhone4p = $("<p>");
            brewPhone4p.text(`Phone Number: ${brewPhone4}`);
            box4.append(brewPhone4p);

            var brewWeb4 = response[3].website_url;
            var brewWeb4p = $("<p>");
            brewWeb4p.text(`Website: ${brewWeb4}`);
            box4.append(brewWeb4p);

            //box 5 data
            var brewName5 = response[4].name;
            var brewname5H = $("<h5>");
            brewname5H.text(`Name: ${brewName5}`);
            box5.append(brewname5H);

            var brewType5 = response[4].brewery_type;
            var brewType5p = $("<p>");
            brewType5p.text(`Type: ${brewType5}`)
            box5.append(brewType5p);

            var brewStreet5 = response[4].street;
            var brewstreet5P = $("<p>");
            brewstreet5P.text(`Address: ${brewStreet5}`);
            box5.append(brewstreet5P);

            var brewPhone5 = response[4].phone;
            var brewPhone5p = $("<p>");
            brewPhone5p.text(`Phone Number: ${brewPhone5}`);
            box5.append(brewPhone5p);

            var brewWeb5 = response[4].website_url;
            var brewWeb5p = $("<p>");
            brewWeb5p.text(`Website: ${brewWeb5}`);
            box5.append(brewWeb5p);

             //box 6 data
             var brewName6 = response[5].name;
             var brewname6H = $("<h5>");
             brewname6H.text(`Name: ${brewName6}`);
             box6.append(brewname6H);
 
             var brewType6 = response[5].brewery_type;
             var brewType6p = $("<p>");
             brewType6p.text(`Type: ${brewType6}`)
             box5.append(brewType6p);
 
             var brewStreet6 = response[5].street;
             var brewstreet6P = $("<p>");
             brewstreet6P.text(`Address: ${brewStreet6}`);
             box5.append(brewstreet6P);
 
             var brewPhone6 = response[5].phone;
             var brewPhone6p = $("<p>");
             brewPhone6p.text(`Phone Number: ${brewPhone6}`);
             box6.append(brewPhone6p);
 
             var brewWeb6 = response[5].website_url;
             var brewWeb6p = $("<p>");
             brewWeb6p.text(`Website: ${brewWeb6}`);
             box6.append(brewWeb6p);


        });

    };



//this works. This is the event clicker that will run the brewery function. need to associate it with a search button
$("#searchNow").on("click", function (event) {
    event.preventDefault();
    console.log("clicking works");
    breweryByname();
    });

})
