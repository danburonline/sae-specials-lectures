-- This file initializes the database if it's empty during the initial setup of the devcontainer
CREATE TABLE IF NOT EXISTS colors (
  id SERIAL PRIMARY KEY,
  color VARCHAR(255) UNIQUE NOT NULL,
  main_color BOOLEAN NOT NULL DEFAULT FALSE
);
