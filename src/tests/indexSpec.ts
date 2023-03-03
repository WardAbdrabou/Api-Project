
import supertest from 'supertest'; 
import app from '../index';
const request = supertest(app);

describe('image Test Responses', () => {
    it('gets the api images', async ( ) => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
       
    });

    it(' test requested image missing', async () => {
        const response = await request.get('/image');
        expect(response.status).toBe(400);
      });
    

  it('gets the invalid images', async () => {
      const response = await request.get('/image?myNameForFile=fjord&x=jpg&newwidth=newwidth&newheight=newheight');
      expect(response.status).toBe(400);
    
  });

  it('check the unknown images', async ( ) => {
      const response = await request.get('/image?myNameForFile=unknown&x=jpg&newwidth=100&newheight=100');
      expect(response.status).toBe(404);
  });

  it('found resized image', async () => {
      const response = await request.get('/image?myNameForFile=fjord&x=jpg&newwidth=100&newheight=100');
      expect(response.status).toBe(200);
    
  });

  it('specified image format ', async () => {
    const response = await request.get('/image?myNameForFile=fjord&x=jpg&newwidth=200&newheight=200');
    expect(response.status).toBe(200);
  });

});
