# Library-Management

## Tech Stack

- NodeJS
- ExpressJS
- Typescript
- PostgreSQL
- Docker
- Joi (validation)
- TypeORM (Db ORM)


## Installation
- Install Docker and Docker compose
- Clone the project from github link to your computer and open via code editor.

    #### Environment

- change .env.example file name to .env

```bash
cd Library-Management # go to project directory

docker-compose up --build # build images with docker compose
```
## Usage

After the installation, you can use postman collection
for the testing project.

### Endpoints
##### User
- GET /users        --> Return User List
- GET /users/:id    --> Return User Detail
- POST /users       --> Create User

##### Book
- GET /books        --> Return Book List
- GET /books/:id    --> Return Book Detail
- POST /books       --> Create Book

##### Borrow
- POST /users/:userId/borrow/:bookId       --> Borrow Book
- POST /users/:userId/return/:bookId       --> Return Book