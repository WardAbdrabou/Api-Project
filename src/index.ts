
import express from 'express';
import myRoutes from './routes/index';
import imageLogger from './utilities/Logger';
import path from 'path';

 const app = express();
 const port = 4000;

 app.get('/', imageLogger, async(req: express.Request, res: express.Response):Promise<void>=> {
  res.sendFile(path.join(__dirname, '../starterpage/index.html'));
});


app.use('/image',imageLogger, myRoutes);




app.listen(port, theListin );
function theListin(){
    console.log('server is running');
    console.log(`running on local host : http://localhost:${port}`);
}
export default app ;