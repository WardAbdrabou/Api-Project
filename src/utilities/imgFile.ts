import {promises as fsPromises} from 'fs';
import sharp from 'sharp';

const isImageExist = async (myResNameFile:string ) : Promise<boolean> => {
    try{
        const myImageFile = await fsPromises.open(myResNameFile ,'r' );
        myImageFile.close();
        return true;
       
    }
    catch(error) {
      return false;   
      }
    
  };

  const isImageDirectory = async (
    imageDirectoryName: string
  ) : Promise<void> => {
    try {
      await fsPromises.readdir( imageDirectoryName);
    } catch {
      await fsPromises.mkdir( imageDirectoryName);
    }
    return Promise.resolve();

};


  const imageResize = async (myNameinpFile:string,width:number,height: number,myNameOutFile: string ) : Promise<string>  => {

        const imageNameoutExist = await isImageExist(myNameOutFile);
        if (!imageNameoutExist ){
            console.log("File image is been created");
            await sharp(myNameinpFile).resize( width, height).toFile(myNameOutFile);
            return myNameOutFile;
        }else {
            console.log('File image is exists ');
            return myNameOutFile;
          }   
    };
    export {isImageExist ,isImageDirectory, imageResize};
  


