# Tourism Management System

## Description
This project is a backend system for managing tourism-related data, including attractions, visitors, and reviews. It provides APIs to add new attractions, register visitors, and allow visitors to review the attractions they have visited.

## Features
- **Attractions Management**: Add and retrieve attractions including details like name, location, and entry fee.
- **Visitor Management**: Register visitors and track their visits to various attractions.
- **Reviews Management**: Visitors can add reviews for attractions they have visited.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```
2. Install dependencies:
   ```bash
   cd [project-folder]
   npm install
   ```

### Running the Application
1. Start the MongoDB server in your local environment.
2. Run the application:
   ```bash
   npm start
   ```

## API Endpoints

### Attractions
- **POST /attractions/**: Add a new attraction.
- **GET /attractions/top-rated**: Get top 5 rated attractions.

### Visitors
- **POST /visitors/**: Register a new visitor.
- **GET /visitors/activity**: Get visitor activity details.

### Reviews
- **POST /reviews/**: Add a new review by a visitor for an attraction.

## License
This project is licensed under the ISC License. 
