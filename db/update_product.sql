UPDATE product
SET
  name = COALESCE($2, name),
  description = COALESCE($3, description),
  price = COALESCE($4, price),
  imageurl = COALESCE($5, imageurl)
WHERE id = $1
RETURNING *;