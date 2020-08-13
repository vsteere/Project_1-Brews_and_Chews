
$(document).ready(function () {




    //variables for the six boxes with restaurant choices
    var box1 = $("#box1");
    var box2 = $("#box2");
    var box3 = $("#box3");
    var box4 = $("#box4");
    var box5 = $("#box5");
    var box6 = $("#box6");


    //variable for the submit button
    var search = $("#search");

    function foodSearch() {

        //this pulls the city from the dropdown box
        var city = $("#city").val();

        //this pulls the keyword from the textbox
        var keyword = $("#keyword").val();

        //zomato API
        var API = "d253ce78858e1e6f33ed45ea9fa35e8c";
        var cityURL = "https://developers.zomato.com/api/v2.1/cities?q=" + city 

        $.ajax({

            
            url: cityURL,

            //headers required by Zomato; found example syntax on stackoverflow.com
            headers: {
                "user-key": "d253ce78858e1e6f33ed45ea9fa35e8c",
                "Accept": "application/json"
            },
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
                //this pulls the zomato city ID to use in a later search
                var cityID = response.location_suggestions[0].id;

                console.log(cityID);

                var searchURL = "https://developers.zomato.com/api/v2.1/search?entity_id=" + cityID +"&entity_type=city&q=" + keyword + "&sort=rating&order=desc"
                $.ajax({
                    url: searchURL,
                    headers: {
                        "user-key": "d253ce78858e1e6f33ed45ea9fa35e8c",
                        "Accept": "application/json"
                    },
                    method: "GET"
               
                })

                .then(function (response) {
                    console.log(response);

                    //box 1 data
                    var name1 = response.restaurants[0].restaurant.name
                    var name1h = $("<h5>");
                    name1h.text(`Name: ${name1}`);
                    box1.append(name1h);

                    var phone1 = response.restaurants[0].restaurant.phone_numbers
                    var phone1p = $("<p>");
                    phone1p.text(`Phone: ${phone1}`);
                    box1.append(phone1p);

                    var rate1 = response.restaurants[0].restaurant.user_rating.aggregate_rating
                    var rate1p = $("<p>");
                    rate1p.text(`Diner Rating: ${rate1}`);
                    box1.append(rate1p);

                    var 





                })

            });


                



















    };































    //event handler that will execute the function
    $(search).on("click", function (event) {
        event.preventDefault();
        console.log("this click button works");
        foodSearch();
    })













})
