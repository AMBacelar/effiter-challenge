## efitter coding challenge

### Requiremnts

- basic knowledge of node

to get started clone this repository and run `npm install`. The goal is for every test to pass.

Create a web scraper/parser, that will receive a URL and find out whether:

- the URL is valid
- the URL is supported
- the page is for womens clothing
- the page is an item details page

If all pass, this scraper/parser will need to be able to get the following item details:

- The name of the item
- A size example (the first size on the pag will suffice)
- A list of materials for the item
  the Brand Name

For the purpose of easy development, this challenge will be done in `node`.

The test runner is using `jest`. Please feel free to add extra tests into the `index.test.j`s file, but do not remove any of the tests that are there.

Please do not limit yourself to writing all of your code inside of `index.js`, do what feels most comfortable to you.

Please feel free to use `npm` packages in your code. What we are testing is your ability to solve realistic problems, not your ability to recreate solutions that already exist.
