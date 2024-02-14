CREATE TABLE todo_table (
  id SERIAL PRIMARY KEY,
  todo_desc VARCHAR(255),
  todo_completed BOOLEAN DEFAULT false
);