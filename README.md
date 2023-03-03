image prossing Api 
The project is about an image resizing and also serves up image based on specified dimensions

npm scripts :
npm install for install
Start server: npm run start
npm run build for build
 npm run lint for lint
npm run prettier for Prettier
npm run test for test

usage : 
The server will run on port 7000 , and this request image end point 
example :http://localhost:4000/image?myNameForFile=fjord&x=jpg&newwidth=100&newheight=100

width : numerical pixel value greater than zero
height: numerical pixel value greater than zero

Notes :

 The thumbnail will be created in the first time only and after will be served from thumbnail folder
 query image are missing, invalid => 400 Bad Request
 image file could not be found or does not exist under all => 404 Not found