// Door Tristan Jacobs

// Bronnen:
// - Funda: http://content.funda.nl/opdrachten/cmd-amsterdam/maart-2017

// TO DO:

// Nice To Have:
// A better, more accurate way to get GPS location on desktops, mobile works perfectly.

// =================================================================================================



(function () {
    'use strict';
    var utils = {
        $:  function (id) {
            return document.getElementById(id);
        },

        numberWithPeriods: function(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
    };

    var DOMelements = {
        map:            utils.$('map'),
        userLocation:   utils.$('user-location'),
        result:         utils.$('searchResults'),
        startBtn:       utils.$('startCheck'),
        banner:         utils.$('banner-img')
    };

    var sections = {
        zoeken:         utils.$('zoeken'),
        detail:         utils.$('detail')
    };

    var objectAPIconfig = {
        url:    null,
        detailURL: null,
        key:    '271175433a7c4fe2a45750d385dd9bfd',


        updateQuery:    function (locationQuery) {
            objectAPIconfig.query = locationQuery;
            objectAPIconfig.resolveURL();
        },

        resolveURL:   function () {
            var resolvedURL =    'http://funda.kyrandia.nl/feeds/Aanbod.svc/json/271175433a7c4fe2a45750d385dd9bfd/?type=koop&zo=/'
                + currentLocation.plaats + '/+5km/&page=1&pagesize=24';

            objectAPIconfig.url = resolvedURL;
            console.log(resolvedURL);
        }
    };

    var mapsAPIconfig = {
        mapsLat:    null,
        mapsLng:    null,
        url: '',
        updateURL: function () {
            mapsAPIconfig.url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+ this.mapsLat + ',' + this.mapsLng + '&key=AIzaSyAk193hqfh47nKZM7qtX55YvLbcTr48Upk'
        }
    };

    var currentLocation = { // Properties van dit object worden gevuld met de adresgegevens uit de Maps API
        plaats: ''
    };

    var location = {
        getUserLocation: function () {
            var msg;
            if('geolocation' in navigator){
                this.requestCoordinates();
            } else {
                msg = "Oeps! Zo te zien ondersteunt je browser geen geolocatie :(";
                DOMelements.location.innerHTML = msg;
            }
        },
        requestCoordinates: function(){ // Haal huidige coordinaten op om naar Maps API te sturen

            navigator.geolocation.getAccurateCurrentPosition(success, error, inProgress, {desiredAccuracy: 50, maxWait: 5000});

            function inProgress () {
                DOMelements.startBtn.innerHTML = 'Zoeken';
                DOMelements.startBtn.disabled = true;
                DOMelements.userLocation.innerHTML = 'We halen even je locatie op... '+ '<i class="fa fa-spinner fa-spin"></i>';
            }

            // Locatie succesvol opgehaald
            function success(pos){

                var lng = pos.coords.longitude; // Sla de Longitude op
                var lat = pos.coords.latitude; // Sla de Latitude op

                mapsAPIconfig.mapsLat = lat; // Zet de property van mapsAPIconfig gelijk aan de waarden van de variabelen hierboven
                mapsAPIconfig.mapsLng = lng;

                mapsAPIconfig.updateURL(); // Update de Maps API URL met coordinaten
                location.requestAddress();
            }

            function error(err) {
                console.log(err);
                DOMelements.userLocation.innerHTML = 'Oeps! Er gaat iets mis.. Probeer het opnieuw.';
                DOMelements.startBtn.innerHTML = 'Opnieuw zoeken';
            }
        },

        requestAddress: function () { // Haal adresgegevebs van huidige locatie op vanuit Maps API
            aja()
                .url(mapsAPIconfig.url)
                .on('success', function (data){

                    currentLocation.plaats = data.results[2].address_components[2].long_name;
                    DOMelements.userLocation.innerHTML = 'Je locatie is: ' + currentLocation.plaats;
                    //data is a javascript object
                    // console.log(mapsAPIconfig.url);
                    console.log(data);
                    console.log(currentLocation);

                    objectAPIconfig.updateQuery(currentLocation);
                    getDataForLocation();
                })
                .go();

            function getDataForLocation () {

                aja()
                    .url(objectAPIconfig.url)
                    .on('success', function (data) {
                        console.log(data.Objects);

                        DOMelements.result.innerHTML = data.Objects.map(function (d) {
                            var objectID = d.Id;
                            console.log(objectID);
                            var href = ' href="#detail/' + objectID + '"';
                            var itemTemplate =  '<div class="huisItem">' +
                                '<div>' +
                                '<h4 class="item-adres">' + d.Adres + '</h4>' +
                                '<p class="item-prijs">Koopprijs: €' + utils.numberWithPeriods(d.Koopprijs) + ',-</p>' +
                                '<p class="item-makelaar">Aangeboden door: ' + d.MakelaarNaam + '</p>' +
                                '<a class="btn item-btn" id="'+ objectID + '"'+ href + '" >Bekijken</a>' +
                                '</div>' +
                                '<div>' +
                                '<img class="item-foto" src="'+ d.FotoMedium +'" />' +
                                '</div>' +
                                '</div>';

                            return itemTemplate;

                        }).join('');

                        DOMelements.banner.classList.add('hidden');
                    })
                    .go();

            }

        }
    };



    var app = {

        // Main Initializer
        init: function () {

            routie({
                'zoeken': function() {
                    sections.zoeken.classList.remove('hidden');
                    sections.detail.classList.add('hidden');
                },
                'detail/:id': function(id) {
                    sections.zoeken.classList.add('hidden');
                    sections.detail.classList.remove('hidden');


                    function renderDetails() {
                        console.log('ID huidige object = ' + id);
                        aja()
                            .url('http://funda.kyrandia.nl/feeds/Aanbod.svc/json/detail/271175433a7c4fe2a45750d385dd9bfd/koop/' + id +'/')
                            .on('success', function (d) {
                                console.log(d);

                                var details = {
                                    adres: d.Adres,
                                    status: d.VerkoopStatus,
                                    prijs: d.Koopprijs,
                                    bouwjaar: d.Bouwjaar,
                                    aantalkamers: d.AantalKamers,
                                    aantalbadkamers: d.AantalBadkamers,
                                    beschrijving: d.VolledigeOmschrijving,
                                    voorzieningen: d.Voorzieningen
                                };

                                var detailTemplate =
                                    '<div class="item-details">' +
                                        '<div>' +
                                            '<header class="details-header">' +
                                                '<h4 class="item-adres">' + details.adres + '</h4>' +
                                                '<p class="item-beschikbaar">' + details.status + '</p>' +
                                            '</header>' +
                                            '<p class="item-prijs">Koopprijs: €' + utils.numberWithPeriods(details.prijs) + ',-</p>' +
                                            '<p class="bouwjaar">Bouwjaar: ' + details.bouwjaar + '</p>' +
                                            '<p class="kamers">Aantal Kamers: ' + details.aantalkamers + '</p>' +
                                            '<p class="badkamers">Aantal Kamers: ' + details.aantalbadkamers + '</p>' +
                                            '<p class="voorzieningen">Voorzieningen: <br /> ' + details.voorzieningen.split('\n') + '</p>' +

                                        '</div>' +
                                        '<div>' +
                                            '<img class="item-foto" src="'+ d.HoofdFoto +'" />' +
                                        '</div>' +
                                        '<a href="#zoeken" class="back-btn btn">Terug</a>' +
                                    '</div>';

                                sections.detail.innerHTML = detailTemplate;

                            })
                            .go();
                    }
                renderDetails();
                }
            });

            DOMelements.startBtn.addEventListener('click', function () {
                location.getUserLocation();
            });
        }
    };

    app.init();
})();
