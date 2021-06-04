/* 1er etape */

CREATE TABLE if not EXISTS students (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 name varchar(30),
 city VARCHAR(30)
);
insert into students(name, city) VALUES
("veronique", "paris");
SELECT * FROM students

insert into students(name, city) VALUES
("Steeven", "lyon");
SELECT * FROM students


insert into students(name, city) VALUES
("marc", "Marseille
");
SELECT * FROM students


insert into students(name, city) VALUES
("nour", "Lyon

");
SELECT * FROM students


insert into students(name, city) VALUES
("Romain", "paris");
SELECT * FROM students

insert into students(name, city) VALUES
("sophie", "paris");
SELECT * FROM students




/* etape 2*/



CREATE TABLE if not EXISTS languages (
 id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 name varchar(30)

);
insert into languages (name) VALUES
("French"),
("English"),
("German"),
("Spanish"),
("Mandarin");


SELECT * FROM languages



/* etape 3*/



CREATE TABLE if not EXISTS favorites (
 id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  class VARCHAR(30),
  sport VARCHAR(30),
  student_id INT,
  CONSTRAINT fk_student      
  FOREIGN KEY (student_id)         
  REFERENCES students(id)


);
insert into favorites ( class, sport, student_id ) VALUES 

("Math", "Cricket", 2),
("music", "Hiphop", 6),
("Arts", "Boxing", 1),
("Literature", "Tennis", 3),
("Computer science", "Tennis", 5),
("Arts","Baseball", 4);

SELECT * FROM favorites




/* Etape 4*/


CREATE TABLE if not EXISTS students_languages (
 id INT  PRIMARY KEY AUTO_INCREMENT,
  student_id INT,
  language_id INT
  
);

INSERT INTO students_languages ( student_id, language_id) VALUES

(1,1),
(1,2),
(2,1),
(2,3),
(3,1),
(4,1),
(4,2),
(4,4),
(4,5),
(5,1),
(5,5),
(6,1),
(6,2),
(6,3);
SELECT * FROM students_languages




/* Rapport lvl 1*/

/* Etape 4 pour recuperer un ID */
SELECT * FROM students where id = 3

SELECT * FROM students where id = 6
SELECT name, city FROM students where id = 1
SELECT name FROM students where id = 2
SELECT * FROM students where city = "paris"
SELECT * FROM students where city = "lyon"

SELECT * from students left JOIN favorites ON students.id = favorites.fk
