# Giphy Challenge

## Brief

You are to create a Single Page JavaScript Application to display GIF results from Giphy's developer API https://github.com/giphy/GiphyAPI.

The application should include the following features:
* A control to show latest Cats or Dog results (no search field needed).
* Results view with paging of 25 GIFs per page.
* A detail view which shows the selected GIF when clicked/hovered/interacted with.

* You are free to use any JavaScript technology to implement this solution (React, Ember, Vue, Angular or just plain JavaScript).
* You should treat your code as if it were going into production, so some tests and appropriate comments are expected.
* We would like you to implement your own design without utilising any third-party CSS frameworks. Use of CSS methodologies is encouraged.
* Feel free to impress us, by going above and beyond scope; implement any extra features you like.

## Initial Steps

1. Create Rekit App shell
2. Add ImmutableJS, Redux, Redux-Api-Middleware
3. Create an initial HTML page with appropriate elements
    1. Cat & Dog Radio Buttons
    2. Search Button
    3. Div(?) for Results
    4. Next button

## Initial Tests

    describe "API Requests"
        it "should take an API key as a parameter"
        it "should throw an error if no API key provided" 
        it "should take a search string parameter"
        it "should throw an error if search parameter is provided" 
        it "should url encode the search parameter"
        it "should accept a pagination request limit parameter"
        it "should default to a pagination request limit of 25"
        it "should accept a pagination index parameter"
        it "should default the pagination index to 0"

    describe "UI"
        it "should have a Cat and a Dog radio button"
        it "should have a Search button"
        it "should have a results list"
        it "should have a Next button, hidden when there are no results"
        describe "List"
            it "should be initially empty"
            it "should populate with the current result-set"
            it "should have an associated event for loading the next items"

    describe "Detail View"
        it "should take an Image Url as parameter"
        it "should create/unhide the lightbox"
        it "should display the selected image"