# `08` DELETE Then Confirm Missing

Inside `solve(baseUrl)`, do this sequence:

1. Send `DELETE /items/2`
2. Then request `GET /items/2`

Inspect the response of the second request and identify the value that confirms the resource is no longer available.

Expected result: `"Item 2 was not found"`
