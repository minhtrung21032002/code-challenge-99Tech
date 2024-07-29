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

## Problem 5

### Software Requirement

#### Overview
This module handles updating and displaying the top 10 user scores on the scoreboard. It ensures live updates and secures against unauthorized score manipulations.

#### Features
- Display the top 10 user scores.
- Live update of the scoreboard.
- Secure score updates.

#### 1. Get Top 10 Scores

- **Endpoint**: `/api/scores/top10`
- **Method**: `GET`
- **Description**: Retrieves the top 10 user scores.
- **Response**:
  ```json
  [
    {
      "username": "user1",
      "score": 1500
    },
    {
      "username": "user2",
      "score": 1450
    }
    // More entries...
  ]
  
#### 2. Update Score
- **Endpoint**: `/api/scores/update`
- **Method**: `POST`
- **Description**: Updates the score of a user.
- **Request Body**:
  ```json
  {
    "username": "user1",
    "score": 1500
  }
- **Response**:
  ```json
  {
  "message": "Score updated successfully"
  }
  // OR
  {
  "error": "Invalid request. Please provide both 'username' and 'score'."
  }
  ```json

### Sequecen diagrams
#### Auth Service:

    Handles user authentication and authorization for actions.
    Validates tokens with OAuth and checks permissions before granting access.

    ![ảnh](https://github.com/user-attachments/assets/4f1f8ff3-818b-44f7-9349-9935ff2b8f76)


#### Score Service:

    Receives score update requests.
    Validates the request through the Auth Service.
    Updates the score in the database and publishes the update event to Kafka.

    ![ảnh](https://github.com/user-attachments/assets/9d2cb717-98ae-4dd7-80e2-8a593ceed3d2)

#### Leaderboard Service:

    Subscribes to the Kafka topic for score updates.
    Receives and processes score update events.
    Updates the leaderboard and pushes real-time updates to clients.
  
    ![ảnh](https://github.com/user-attachments/assets/90ab6279-f000-434e-b68b-b017178f1adb)


 
  



