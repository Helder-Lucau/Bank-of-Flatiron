# Code Challenge: Bank of Flatiron

## Learning Goals

- Implement a mini web app to practice on components, props, state, events and data fetching in react

## Introduction

For this project, you’ll be building out a React application that displays a list of your recent bank transactions, among other features.

## Project Setup & Pre-requisite Data

In your project directory, create a db.json file and use this [data](https://docs.google.com/document/d/1EWN0qLfAWfgzO1N2P8H5WmrsTx0nMkhp3s-rXVESTNA/edit). for your server DB.
Run this command to get the backend started: `**json-server --watch db.json**`
Test your server by visiting this route in the browser: http://localhost:8001/transactions


## Project Guidelines

Your project should conform to the following set of guidelines:

### Core Deliverables

As a user, I can:

See a table of all transactions.
* Fill out and submit the form to add a new transaction. This should add the new transaction to the table *the new transaction does not have to be persisted to the backend*
* Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.

### Bonus Deliverables

These bonus deliverables are here if you want an extra challenge and won't affect your score. Make sure to commit your work to save your progress before attempting the bonus deliverables!

As a user, I should be able to:

- Sort transactions alphabetically by category or description.

- Delete a transaction which will remove it from the table

## Author
* This project code files is authored by [Helder Lucau](https://github.com/Helder-Lucau).

## License

Copyright (c) 2023 [Helder Lucau](https://github.com/Helder-Lucau).

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files , to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.