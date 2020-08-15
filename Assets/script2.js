
$(document).ready(function () {




    //variables for the six boxes with restaurant choices
    const box1 = $("#box1");
    const box2 = $("#box2");
    const box3 = $("#box3");
    const box4 = $("#box4");
    const box5 = $("#box5");
    const box6 = $("#box6");


    //variable for the submit button
    const search = $("#foodSearch");

    function foodSearch() {
        //clearing divs of old data
        $(box1).empty();
        $(box2).empty();
        $(box3).empty();
        $(box4).empty();
        $(box5).empty();
        $(box6).empty();


        //this pulls the city from the dropdown box
        let city = $("#city").val();

        //this pulls the keyword from the textbox
        let keyword = $("#keyword").val();

        //zomato API
        let API = "d253ce78858e1e6f33ed45ea9fa35e8c";
        let cityURL = "https://developers.zomato.com/api/v2.1/cities?q=" + city

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

                let searchURL = "https://developers.zomato.com/api/v2.1/search?entity_id=" + cityID + "&entity_type=city&q=" + keyword + "&sort=rating&order=desc"
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

                        //name of restaurant
                        let name1 = response.restaurants[0].restaurant.name;
                        let name1h = $("<h3>");
                        name1h.text(`Name: ${name1}`);
                        box1.append(name1h);

                        //cuisine type
                        let cuisine1 = response.restaurants[0].restaurant.cuisines;
                        let cuisine1p = $("<p>");
                        cuisine1p.text(`Cuisine type: ${cuisine1}`);
                        box1.append(cuisine1p);

                        //rating of restaurant; converted to float to allow decimals 
                        let rate1 = parseFloat(response.restaurants[0].restaurant.user_rating.aggregate_rating);
                        let rate1p = $("<p>");
                        rate1p.text(`Diner Rating: ${rate1}`);
                        box1.append(rate1p);

                        //change color of rating based on scale
                        if (rate1 <= 3) {
                            rate1p.css("color", "red")
                        }
                        else if (rate1 >= 4) {
                            rate1p.css("color", "green")
                        }
                        else {
                            rate1p.css("color", "#fc8c03")
                        };

                        // phone of restaurant
                        let phone1 = response.restaurants[0].restaurant.phone_numbers;
                        let phone1p = $("<p>");
                        phone1p.text(`Phone: ${phone1}`);
                        box1.append(phone1p);


                        //address of restaurant
                        let addy1 = response.restaurants[0].restaurant.location.address;
                        let addy1p = $("<p>");
                        addy1p.text(`Address: ${addy1}`);
                        box1.append(addy1p);

                        //website
                        let web1 = response.restaurants[0].restaurant.url;
                        //found this syntax on stackoverflow
                        let web1a = $("<a />", {
                            text: "Link to Website",
                            href: web1
                        })
                        box1.append(web1a);

                        //box 2 data

                        //name of restaurant
                        let name2 = response.restaurants[1].restaurant.name;
                        let name2h = $("<h3>");
                        name2h.text(`Name: ${name2}`);
                        box2.append(name2h);

                        //cuisine type
                        let cuisine2 = response.restaurants[1].restaurant.cuisines;
                        let cuisine2p = $("<p>");
                        cuisine2p.text(`Cuisine type: ${cuisine2}`);
                        box2.append(cuisine2p);

                        //rating of restaurant
                        let rate2 = parseFloat(response.restaurants[1].restaurant.user_rating.aggregate_rating)
                        let rate2p = $("<p>");
                        rate2p.text(`Diner Rating: ${rate2}`);
                        box2.append(rate2p);

                        //change color of rating based on scale
                        if (rate2 <= 3) {
                            rate2p.css("color", "red")
                        }
                        else if (rate2 >= 4) {
                            rate2p.css("color", "green")
                        }
                        else {
                            rate2p.css("color", "#fc8c03")
                        };

                        // phone of restaurant
                        let phone2 = response.restaurants[1].restaurant.phone_numbers;
                        let phone2p = $("<p>");
                        phone2p.text(`Phone: ${phone2}`);
                        box2.append(phone2p);


                        //address of restaurant
                        let addy2 = response.restaurants[1].restaurant.location.address;
                        let addy2p = $("<p>");
                        addy2p.text(`Address: ${addy2}`);
                        box2.append(addy2p);

                        //website
                        let web2 = response.restaurants[1].restaurant.url;
                        //found this syntax on stackoverflow
                        let web2a = $("<a />", {
                            text: "Link to Website",
                            href: web2
                        })
                        box2.append(web2a);

                        //box 3 data

                        //name of restaurant
                        let name3 = response.restaurants[2].restaurant.name;
                        let name3h = $("<h3>");
                        name3h.text(`Name: ${name3}`);
                        box3.append(name3h);

                        //cuisine type
                        let cuisine3 = response.restaurants[2].restaurant.cuisines;
                        let cuisine3p = $("<p>");
                        cuisine3p.text(`Cuisine type: ${cuisine3}`);
                        box3.append(cuisine3p);

                        //rating of restaurant
                        let rate3 = parseFloat(response.restaurants[2].restaurant.user_rating.aggregate_rating)
                        let rate3p = $("<p>");
                        rate3p.text(`Diner Rating: ${rate3}`);
                        box3.append(rate3p);

                        //change color of rating based on scale
                        if (rate3 <= 3) {
                            rate3p.css("color", "red")
                        }
                        else if (rate3 >= 4) {
                            rate3p.css("color", "green")
                        }
                        else {
                            rate3p.css("color", "#fc8c03")
                        };

                        // phone of restaurant
                        let phone3 = response.restaurants[2].restaurant.phone_numbers;
                        let phone3p = $("<p>");
                        phone3p.text(`Phone: ${phone3}`);
                        box3.append(phone3p);


                        //address of restaurant
                        let addy3 = response.restaurants[2].restaurant.location.address;
                        let addy3p = $("<p>");
                        addy3p.text(`Address: ${addy3}`);
                        box3.append(addy3p);

                        //website
                        let web3 = response.restaurants[2].restaurant.url;
                        //found this syntax on stackoverflow
                        let web3a = $("<a />", {
                            text: "Link to Website",
                            href: web3
                        })
                        box3.append(web3a);


                        //box 4 data

                        //name of restaurant
                        let name4 = response.restaurants[3].restaurant.name;
                        let name4h = $("<h3>");
                        name4h.text(`Name: ${name4}`);
                        box4.append(name4h);

                        //cuisine type
                        let cuisine4 = response.restaurants[3].restaurant.cuisines;
                        let cuisine4p = $("<p>");
                        cuisine4p.text(`Cuisine type: ${cuisine4}`);
                        box4.append(cuisine4p);

                        //rating of restaurant
                        let rate4 = parseFloat(response.restaurants[3].restaurant.user_rating.aggregate_rating)
                        let rate4p = $("<p>");
                        rate4p.text(`Diner Rating: ${rate4}`);
                        box4.append(rate4p);

                        //change color of rating based on scale
                        if (rate4 <= 3) {
                            rate4p.css("color", "red")
                        }
                        else if (rate4 >= 4) {
                            rate4p.css("color", "green")
                        }
                        else {
                            rate4p.css("color", "#fc8c03")
                        };

                        // phone of restaurant
                        let phone4 = response.restaurants[3].restaurant.phone_numbers;
                        let phone4p = $("<p>");
                        phone4p.text(`Phone: ${phone4}`);
                        box4.append(phone4p);


                        //address of restaurant
                        let addy4 = response.restaurants[3].restaurant.location.address;
                        let addy4p = $("<p>");
                        addy4p.text(`Address: ${addy4}`);
                        box4.append(addy4p);

                        //website
                        let web4 = response.restaurants[3].restaurant.url;
                        //found this syntax on stackoverflow
                        let web4a = $("<a />", {
                            text: "Link to Website",
                            href: web4
                        })
                        box4.append(web4a);

                         //box 5 data

                        //name of restaurant
                        let name5 = response.restaurants[4].restaurant.name;
                        let name5h = $("<h3>");
                        name5h.text(`Name: ${name5}`);
                        box5.append(name5h);

                        //cuisine type
                        let cuisine5 = response.restaurants[4].restaurant.cuisines;
                        let cuisine5p = $("<p>");
                        cuisine5p.text(`Cuisine type: ${cuisine5}`);
                        box5.append(cuisine5p);

                        //rating of restaurant
                        let rate5 = parseFloat(response.restaurants[4].restaurant.user_rating.aggregate_rating)
                        let rate5p = $("<p>");
                        rate5p.text(`Diner Rating: ${rate5}`);
                        box5.append(rate5p);

                        //change color of rating based on scale
                        if (rate5 <= 3) {
                            rate5p.css("color", "red")
                        }
                        else if (rate5 >= 4) {
                            rate5p.css("color", "green")
                        }
                        else {
                            rate5p.css("color", "#fc8c03")
                        };

                        // phone of restaurant
                        let phone5 = response.restaurants[4].restaurant.phone_numbers;
                        let phone5p = $("<p>");
                        phone5p.text(`Phone: ${phone5}`);
                        box5.append(phone5p);


                        //address of restaurant
                        let addy5 = response.restaurants[4].restaurant.location.address;
                        let addy5p = $("<p>");
                        addy5p.text(`Address: ${addy5}`);
                        box5.append(addy5p);

                        //website
                        let web5 = response.restaurants[4].restaurant.url;
                        //found this syntax on stackoverflow
                        let web5a = $("<a />", {
                            text: "Link to Website",
                            href: web5
                        })
                        box5.append(web5a);

                        //box 6 data

                        //name of restaurant
                        let name6 = response.restaurants[5].restaurant.name;
                        let name6h = $("<h3>");
                        name6h.text(`Name: ${name6}`);
                        box6.append(name6h);

                        //cuisine type
                        let cuisine6 = response.restaurants[5].restaurant.cuisines;
                        let cuisine6p = $("<p>");
                        cuisine6p.text(`Cuisine type: ${cuisine6}`);
                        box6.append(cuisine6p);

                        //rating of restaurant
                        let rate6 = parseFloat(response.restaurants[5].restaurant.user_rating.aggregate_rating)
                        let rate6p = $("<p>");
                        rate6p.text(`Diner Rating: ${rate6}`);
                        box6.append(rate6p);

                        //change color of rating based on scale
                        if (rate6 <= 3) {
                            rate6p.css("color", "red")
                        }
                        else if (rate6 >= 4) {
                            rate6p.css("color", "green")
                        }
                        else {
                            rate6p.css("color", "#fc8c03")
                        };

                        // phone of restaurant
                        let phone6 = response.restaurants[5].restaurant.phone_numbers;
                        let phone6p = $("<p>");
                        phone6p.text(`Phone: ${phone6}`);
                        box6.append(phone6p);


                        //address of restaurant
                        let addy6 = response.restaurants[5].restaurant.location.address;
                        let addy6p = $("<p>");
                        addy6p.text(`Address: ${addy6}`);
                        box6.append(addy6p);

                        //website
                        let web6 = response.restaurants[5].restaurant.url;
                        //found this syntax on stackoverflow
                        let web6a = $("<a />", {
                            text: "Link to Website",
                            href: web6
                        })
                        box6.append(web6a);











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
