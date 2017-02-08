INSERT INTO product
(Name, Description, Price, Imageurl)
VALUES
($1, $2, $3, $4)
RETURNING *;