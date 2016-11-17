# GeoFind API :earth_africa: => :coffee: #

Wraps around the GeoFind utility in StrangeJS allowing you to send requests from a
FED app (JS / VueJs / AngularJS) to the API and therefore develop mobile apps using the
navigator app. This is hosted here for community input and to link to Heroku.

## Usage ##

Don't to forget the two environment variables for :
- GOOGLE_DISTANCE_MATRIX_KEY
- GOOGLE_NEARBY_KEY
- GEOFIND_API_KEY (basic http auth credentials encoded to check against)

## Compliancy ##

NodeJS 6+ and ES6
Uses Fetch, Request and String interpolation and Arrow Functions

## Dependancies ##
- es6-promise
- isomorphic-fetch
- restify

## Contributor ##
Matt Barber <mfmbarber@gmail.com>
