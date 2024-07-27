# 99Tech Code Challenge #1 #

Note that if you fork this repository, your responses may be publicly linked to this repo.  
Please submit your application along with the solutions attached or linked.   

It is important that you minimally attempt the problems, even if you do not arrive at a working solution.

## Submission ##
You can either provide a link to an online repository, attach the solution in your application, or whichever method you prefer.
We're cool as long as we can view your solution without any pain.

## 
## Problem 4 ##

Please refer to `src/problem4/sumToNumber.ts` for detailed implementation.  
For testing function, please install `npm install -g typescript`, use `tsc` to compile your TypeScript files to JavaScript and run `node ./src/problem4/sumToNumber.js`

## Problem 5 ##

### Overview

This project follows the MVC model, with the addition of a repository and service layer to enhance separation of concerns

#### Libraries Used
- **dotenv**: For loading environment variables from a `.env` file.
- **sequelize**: An ORM for SQL databases.
- **pg**: PostgreSQL client for Node.js.

#### Folder Structure
- **config**: Contains environment variables and database connection settings.
- **controller**: Contains controllers that handle incoming HTTP requests and send responses.
- **models**: Contains Sequelize models representing the database schema.
- **repository**: Manages logic for accessing data source.
- **route**: Defines the routes for the application and redirect corresponding controllers.
- **services**: Contains business logic and interacts with repositories.

### How to Run

#### Prerequisites
- PostgreSQL installed on your machine.
- Node.js installed on your machine.

#### Configuration
1. Create a `.env` file in the root directory of the project and configure the following environment variables:

    ```env
    DB_HOST=your_database_host
    DB_PORT=your_database_port
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_NAME=your_database_name
    ```

2. Configure the database connection settings in the `config` directory.

#### Installation
1. Clone the repository:

    ```
    git clone https://github.com/minhtrung21032002/code-challenge-99Tech at your folder
    ```

2. Install the required Node.js packages:

    ```
    npm install
    ```

3. Install TypeScript and the necessary type definitions:

    ```
    npm install --save-dev typescript @types/express
    ```

#### Running the Application
1. Compile the TypeScript files to JavaScript:

    ```
    tsc
    ```

2. Start the server:

    ```
    npm start
    ```

3. The server should be running at `http://localhost:3000` and you can test it by making API requests.


