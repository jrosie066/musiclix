# Musiclix Artist Search

### Installing

To install the dependencies

`npm install`

To start a local build

`npm build`

## Running the tests

To run all unit tests 

`npm test`

## Deployment

App is deployed through AWS Amplify to this url: [https://master.d3brp1ag8h6yxh.amplifyapp.com/](https://master.d3brp1ag8h6yxh.amplifyapp.com/)

## Author

Jamie Artin

## TODO
* parse out the "read more" from the the summary and provide the link to click to profile (think this is the get profile)
* call top artists api to get items to display on front page for a quick reference
* finish test cases
* handle errors
* reorganize modal to allow for more bio information
* call artist.gettoptracks to get top 5 tracks for the artist and add to bio modal on display - would be added to the artist reducer
* call artist.gettopalbums to get top 5 albums for the artist and add to bio modal on display - would be added to the artist reducer