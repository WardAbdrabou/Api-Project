
import {
  isImageExist,
  isImageDirectory,
  imageResize
} from '../utilities/imgFile';
import path from "path";

describe('utilities imgfile test', () => {
  it('is file exists', async () => {
    const imgInputFile = path.join(__dirname, '../../all/images/fjord.jpg');

    const imgFileExists = await isImageExist(imgInputFile);
    expect(imgFileExists).toBe(true);

  });

  it('Image Directory Exists', async () => {
    const imgoutDir = path.join(__dirname, '../../all/thumbnail/');
    await expectAsync(isImageDirectory(imgoutDir)).toBeResolved();
  });



  it('image file resizes', async () => {
    const imgInputFile = path.join(
      __dirname,
      '../../all/images/fjord.jpg'
    );
    const imgoutFile = path.join(
      __dirname,
      '../../all/thumbnail/fjord-100w-100h.jpg'
    );
    const mythumbnailFile = await imageResize(imgInputFile, 100, 100, imgoutFile);
    expect(mythumbnailFile).toEqual(imgoutFile);
  });

});