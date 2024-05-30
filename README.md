# Fastify API for Social Media Interactions

This repository contains an API built using Fastify and MongoDB for a simple social media platform. The API provides endpoints for creating users, creating posts, liking posts, and commenting on posts. This project demonstrates how to build a RESTful API with Fastify, manage data with MongoDB, and implement basic social media features.

## Features

### User Management
- **Create User**: Store user details including name, password, and email.
- **User Interactions**: Maintain arrays for likes, comments, and posts, each referencing their respective collections.

### Post Management
- **Create Post**: Store post details including title, body, and the user who created it.
- **Engagement Tracking**: Keep track of likes and comments on each post.

### Like System
- **Like Collection**: Store information about who liked what post, along with a like message.

### Comment System
- **Comment Collection**: Store user comments on posts, including the user, post, and comment message.
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [License](#license)

## Installation

- Clone the repository
  \`\`\`bash
  git clone https://github.com/biswojit65/LDP-Project-2.git
  cd LDP-Project-2
  \`\`\`
- Install dependencies using pnpm
  \`\`\`bash
  pnpm install
  \`\`\`
- Set up the database
  Setup mongodb database and connect it to the application using mongoose.

## Usage

- Start the server
  \`\`\`bash
  pnpm start
  \`\`\`
- API Documentation
  You can use tools like Postman/VS Code Thunder Client to interact with the API endpoints listed below.

## Endpoints

- **Create a User**: \`http://{{host}}:{{port}}/auth/register\`
- **Login a User**: \`http://{{host}}:{{port}}/auth/login\`
- **Create a Post**: \`http://{{host}}:{{port}}/auth/post\`
- **Liking a Post**: \`http://{{host}}:{{port}}/auth/like\`
- **Commenting on a Post**: \`http://{{host}}:{{port}}/auth/comment\`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---


Happy coding!
