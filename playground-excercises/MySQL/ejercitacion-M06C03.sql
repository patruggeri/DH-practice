-- MICRO DESAFIO - PASO 1:
/*
Utilizando la base de datos de películas queremos conocer, por un lado, los títulos y el nombre del género de todas las series de la base de datos.
*/

SELECT series.title, genres.name FROM genres
RIGHT JOIN series
ON series.genre_id = genres.id;

/*
Por otro, necesitamos listar los títulos de los episodios junto con el nombre y apellido de los actores que trabajan en cada uno de ellos.
*/
SELECT episodes.title, actors.first_name, actors.last_name FROM actor_episode
INNER JOIN episodes ON episodes.id = actor_episode.episode_id
INNER JOIN actors ON actors.id = actor_episode.actor_id;

/*
Y ahora queremos agregar también la serie a la cual pertenece cada capítulo
*/
SELECT series.title AS serie, episodes.title, actors.first_name, actors.last_name FROM episodes
INNER JOIN seasons ON episodes.season_id = seasons.id
INNER JOIN series ON seasons.serie_id = series.id
INNER JOIN actor_episode ON episodes.id = actor_episode.episode_id
INNER JOIN actors ON actors.id = actor_episode.actor_id;


-- MICRO DESAFIO - PASO 2:
/*
Para nuestro próximo desafío necesitamos obtener a todos los actores o actrices (mostrar nombre y apellido) que han trabajado en cualquier película de la saga de la Guerra de las galaxias, pero ¡cuidado!: debemos asegurarnos de que solo se muestre una sola vez cada actor/actriz.
*/
SELECT DISTINCT actors.first_name, actors.last_name FROM actors
INNER JOIN actor_movie ON actors.id = actor_movie.actor_id
INNER JOIN movies ON movies.id = actor_movie.movie_id
WHERE movies.title LIKE "%Guerra de las galaxias%";


-- MICRO DESAFIO - PASO 3:
/*
Debemos listar los títulos de cada película con su género correspondiente. En el caso de que no tenga género, mostraremos una leyenda que diga "no tiene género". Como ayuda podemos usar la función COALESCE() que retorna el primer valor no nulo de una lista.
*/
SELECT movies.title, COALESCE(genres.name, "No tiene género") FROM movies
LEFT JOIN genres ON genres.id = movies.genre_id;


-- MICRO DESAFIO - PASO 4:
/*
Necesitamos mostrar, de cada serie, la cantidad de días desde su estreno hasta su fin, con la particularidad de que a la columna que mostrará dicha cantidad la renombraremos: “Duración”.
*/
SELECT series.title, release_date, end_date, DATEDIFF(series.end_date, series.release_date) AS duration FROM series;


-- MICRO DESAFIO - PASO 5:
/*
Listar los actores ordenados alfabéticamente cuyo nombre sea mayor a 6 caracteres.
*/
SELECT actors.first_name, actors.last_name FROM actors
WHERE LENGTH(actors.first_name) > 6
ORDER BY actors.first_name;

/*
Debemos mostrar la cantidad total de los episodios guardados en la base de datos.
*/
SELECT COUNT(*) as total_episodes FROM episodes;

/*
Para el siguiente desafío nos piden que obtengamos el título de todas las series y el total de temporadas que tiene cada una de ellas.
*/
SELECT series.title, COUNT(*) FROM series
INNER JOIN seasons ON series.id = seasons.serie_id
GROUP BY series.title;

/*
Mostrar, por cada género, la cantidad total de películas que posee, siempre que sea mayor o igual a 3.
*/
SELECT genres.name, COUNT(*) AS total_movies FROM genres
INNER JOIN movies ON genres.id = movies.genre_id
GROUP BY genres.name
HAVING total_movies >= 3;

/*
Mostrar, por cada género, la cantidad total de películas que posee, siempre que sea menor o igual a 2, aún cuando no posea ninguna.
*/
SELECT genres.name, COUNT(movies.title) AS total_movies FROM genres
LEFT JOIN movies ON genres.id = movies.genre_id
GROUP BY genres.name
HAVING total_movies <= 2;