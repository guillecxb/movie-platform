CREATE TABLE `film` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `director` varchar(256) NOT NULL,
  `year` char(60) NOT NULL,
  `score` char(60) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);

INSERT INTO film (name, director, year, score)
VALUES ('The Shawshank Redemption', 'Frank Darabont', '1994', '4'), 
    ('The Godfather', 'Francis Ford Coppola', 1972, 4),
    ('The Dark Knight', 'Christopher Nolan', 2008, 5);


