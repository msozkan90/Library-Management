-- USERS TABLE
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- BOOKS TABLE
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    average_rating FLOAT DEFAULT 0
);

-- BORROWS TABLE
CREATE TABLE borrows (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
    borrowed_at DATE NOT NULL,
    returned_at DATE,
    rating FLOAT
);
