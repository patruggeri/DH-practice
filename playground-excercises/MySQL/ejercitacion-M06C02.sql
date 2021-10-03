use movies_db;

SELECT * FROM genres;

--------- MICRO DESAFIOS PARTE 1 ----------
INSERT INTO genres (name, ranking, active) VALUES ("Investigación", 13, 1);

UPDATE genres SET name="Investigación Científica" WHERE id=13;

DELETE FROM genres WHERE id=13;

SELECT * FROM movies;

SELECT first_name, last_name, rating FROM actors;

SELECT title as titulo FROM series;

--------- MICRO DESAFIOS PARTE 2 ----------

SELECT first_name, last_name FROM actors WHERE rating > 7.5;

SELECT title, rating, awards FROM movies WHERE rating > 7.5 AND awards > 2;

SELECT title, rating FROM movies ORDER BY title ASC;

--------- MICRO DESAFIOS PARTE 3 ----------

SELECT title FROM movies LIMIT 3;

SELECT * FROM movies ORDER BY rating DESC LIMIT 10;

SELECT * FROM movies ORDER BY rating DESC LIMIT 5 OFFSET 5;

SELECT * FROM actors LIMIT 10 OFFSET 20;

--------- MICRO DESAFIOS PARTE 4 ----------

SELECT title, rating FROM movies WHERE title LIKE "Harry Potter%";

SELECT * FROM actors WHERE first_name LIKE "Sam%";

SELECT title, release_date FROM movies WHERE release_date BETWEEN "2004-01-01" AND "2008-12-31";

SELECT title, release_date FROM movies WHERE YEAR(release_date) BETWEEN 2004 AND 2008;
