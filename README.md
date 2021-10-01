# Boiler Room Coding Challenge

The test is comprised of two small apps, a web app (the client) and an Apollo Server (the server). The test is split into two parts: completing a GraphQL server endpoint that returns some JSON about some Boiler Room sets, then using the endpoint in a web app to render a list view of sets.

Both apps have a README.md in their respective folders with information about how to get started.

You'll need installed [node 14.18.0](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/).

## Server

The server is a simple GraphQL [Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started/) with one resolver returning JSON containing 3x Boiler Room sets. Using this resolver we want to be able to filter the sets by their title, and sort them based on fields of your choice (e.g. views, A-Z).

Tasks:
- complete the GraphQL schema for the `Set` type so all the set fields are available
- complete the sets resolver so it works with both arguments using `filterSets` and `sortSets`
- complete `filterSets.js` filter sets based on the set title
- complete `sortBy.js` and decide on some `sortBy` options for sorting sets based on fields available in the `sets` array
- add unit tests for the filter and sort functionality in `filterSets.test.js` and `sortSets.test.js`
- ensure code is formatted correctly using `yarn lint`

## Client
The client is a simple React app using [Apollo Client](https://www.apollographql.com/docs/react/) built using [Webpack](https://webpack.js.org/). Make sure the server is running simultaneously whilst working on the client.

We want the user of the client to be able to see a list of the sets provided by the server, using a filter input and a sort selector we want them to be able to change the sets in the list. It's styled using plain old CSS in `public/styles.css`.

Most of the work you'll do will be inside `src/ListView.js`. Feel free to keep everything in that file, or if you prefer, split the sub components out into their own files.

Tasks:
- create a filter text input
- create a sort by selector with the `sortBy` options you've made available in the server (this can be a dropdown/toggle/radio or another UI element of your choosing)
- create a list view of sets
- install and use `moment-js` as a dependency to render dates in a pretty format in the `List` component
- render a YouTube video embed for each set using the `youtubeId` field
- feel free to get creative if you've got time
- ensure code is formatted properly using `yarn lint`
- make it look presentable, use [boilerroom.tv](https://boilerroom.tv/) as a reference

## Delivery
- this folder is a git repo, commit your changes to it locally before zipping it up and sending to us (we want to see your working)
- make a note of any assumptions you've made during the build
