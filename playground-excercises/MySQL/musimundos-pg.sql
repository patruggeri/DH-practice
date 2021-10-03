-- CREATE, ALTER and DROP excercises:
CREATE Table tipo_cliente (
  id_tipo_cliente INT(6) PRIMARY KEY NOT NULL,
  titulo VARCHAR(20) NOT NULL
);

ALTER TABLE tipo_cliente
  ADD porcentaje_descuento TINYINT UNSIGNED;

ALTER TABLE tipo_cliente
  ADD COLUMN fecha_asignacion DATE;

-- INSERT, UPDATE and DELETE excercises:
INSERT INTO tipo_cliente VALUES (
  1, "Mr", 20, NOW()
);

INSERT INTO generos (id, nombre) VALUES (
  26, "Cumbia"
);

-- SELECT excercises:
SELECT * FROM albumes;

SELECT * FROM clientes;

-- WHERE excercises incl AND and OR conjunctions:
SELECT primer_nombre FROM clientes
WHERE pais = "USA";

SELECT nombre, milisegundos FROM canciones
WHERE milisegundos > 200000 AND milisegundos < 300000;

SELECT primer_nombre FROM clientes
WHERE pais = "Spain" OR pais = "Argentina";

-- ORDER BY excercises incl DESC example:
SELECT * FROM generos
ORDER BY nombre;

SELECT primer_nombre, pais, ciudad FROM clientes
ORDER BY pais DESC, ciudad;

-- LIKE and BETWEEN excercises:
SELECT * FROM canciones
WHERE compositor LIKE "A%";

SELECT * FROM generos
WHERE nombre LIKE "%ro%";

SELECT * FROM canciones
WHERE id BETWEEN 10 AND 20;

-- LIMIT and OFFSET excercises:
SELECT * FROM canciones
ORDER BY milisegundos DESC
LIMIT 3;

SELECT * FROM canciones
ORDER BY nombre
LIMIT 5
OFFSET 5;

-- ALIAS "AS" excercise:
SELECT nombre AS nombres_de_medios FROM tipos_de_medio;

-- Functions are allowed on MySQL.
-- Some examples:
SELECT CONCAT("La canción ", nombre, " fue compuesta por ", compositor) AS subtitulos_canciones FROM canciones;

SELECT EXTRACT (MONTH FROM fecha_factura) FROM facturas
WHERE id_cliente = 2
ORDER BY fecha_factura;

-- AGREGAR MAS FUNCIONES Y COMPLETAR EL UPDATE Y DELETE




--------------------------------------------------

-- JOINS excercises:
SELECT generos.id, canciones.nombre AS nombre_cancion, generos.nombre AS genero, canciones.compositor FROM generos
INNER JOIN canciones
ON generos.id = canciones.id_genero
WHERE generos.nombre LIKE "Rock";

SELECT albumes.id, albumes.titulo, artistas.nombre FROM albumes
INNER JOIN artistas
ON artistas.id = albumes.id_artista
WHERE artistas.nombre LIKE "%Deep Purple%";

SELECT canciones.id, canciones.nombre, canciones.compositor, tipos_de_medio.nombre AS tipos_de_medio FROM canciones
INNER JOIN tipos_de_medio
ON tipos_de_medio.id = canciones.id_tipo_de_medio
WHERE tipos_de_medio.nombre LIKE "MPEG audio file";

-- DISTINCT excercises:
SELECT DISTINCT titulo FROM empleados;

SELECT DISTINCT albumes.titulo, canciones.compositor FROM albumes
INNER JOIN canciones
ON albumes.id = canciones.id_album
WHERE canciones.compositor LIKE "gilberto gil%";

-- GROUP BY and AGGREGATE FUNCTIONS excercises:
-- COUNT, MAX, MIN, AVG, SUM are the ones and only agg. fn
SELECT generos.id, COUNT(*) FROM generos
INNER JOIN canciones
ON canciones.id_genero = generos.id
GROUP BY id;

SELECT canciones.compositor, COUNT(*) FROM canciones
INNER JOIN albumes
ON albumes.id = canciones.id_album
GROUP BY compositor;

SELECT pais, COUNT(*) FROM clientes
GROUP BY pais;

SELECT SUM(facturas.total) FROM facturas;

SELECT MIN(canciones.bytes) FROM canciones;

SELECT AVG(canciones.milisegundos)/1000 AS promedio_en_segundos FROM canciones;

SELECT canciones.nombre, MAX(canciones.precio_unitario) FROM canciones;

-- HAVING excercises:
SELECT pais_de_facturacion, SUM(facturas.total) FROM facturas
GROUP BY pais_de_facturacion
HAVING SUM(facturas.total) > 100;

SELECT clientes.ciudad, COUNT(*) FROM clientes
GROUP BY clientes.ciudad
HAVING COUNT(*) >= 2;

-- EXTRA excercises:
SELECT generos.nombre AS genero, COUNT(*) FROM generos
INNER JOIN canciones
ON generos.id = canciones.id_genero
GROUP BY generos.nombre;

SELECT canciones.nombre AS canciones, canciones.milisegundos FROM canciones
INNER JOIN albumes
ON canciones.id_album = albumes.id
WHERE canciones.compositor = "%AC/DC%" AND albumes.titulo = "%Let There Be Rock%";