import express from 'express';
import path from 'path';
import {
  isImageExist , 
  isImageDirectory,
  imageResize  
} from '../utilities/imgFile'

const myRoutes = express.Router();

myRoutes.get('/' , async (req = express.request , res = express.response) => {

  const myNameForFile = req.query.myNameForFile as string;
  const myextension = req.query.x as string;
  const width = req.query.newwidth as string;
  const height = req.query.newheight as string;

  if (
    myNameForFile == undefined || width == undefined || height == undefined
  ){
    res.status(400).send(" query image request is missed")
  }else{
      const newWidth = parseInt(width) as number;
      const newheight = parseInt(height) as number;
      if (isNaN(newWidth) || isNaN(newheight)) {
        res.status(400).send('query image request is invalid');
  }else {
     const lowercaseexten = myextension.toLowerCase();
      const imageResourceName =
      path.join(__dirname, '../../all/images/') +myNameForFile +'.'+ lowercaseexten;
    
    const imgDirectoryThumbnail = path.join(__dirname,'../../all/Thumbnail/');

    const imgResourceNameThumbnail = imgDirectoryThumbnail + myNameForFile+width+'newwidth-'+height +'newheight.'+lowercaseexten;

    const imagesfolderExists = await isImageExist(imageResourceName);
        if (imagesfolderExists) {
          isImageDirectory(imgDirectoryThumbnail);

          imageResize (
            imageResourceName,
            parseInt(width),
            parseInt(height),
            imgResourceNameThumbnail,
          ).then((myNameOutFile) => {
            console.log('return the File ' + myNameOutFile);
            res.status(200).sendFile(myNameOutFile);
          });
        } else {
          res.status(404).send('Request Resource is not found');
        }
      }
   }
  });

   export default myRoutes;