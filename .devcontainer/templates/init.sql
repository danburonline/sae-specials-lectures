-- This file initializes the database if it's empty during the initial setup of the devcontainer
CREATE TABLE IF NOT EXISTS subscribers (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  opt_in BOOLEAN NOT NULL DEFAULT FALSE
);
