* Database created using pgAdmin 4

# Query

CREATE TABLE star (
    idMentor INTEGER,
    idStudent INTEGER,
    PRIMARY KEY (idMentor, idStudent)
);

# NOTE
make sure to use:
{
  "idMentor": 1,
  "idStudent": 42
}
and not:
{
  "idMentor": 01,
  "idStudent": 42
}