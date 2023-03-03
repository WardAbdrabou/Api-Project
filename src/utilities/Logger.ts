import  express  from "express";

const imageLogger = ( req: express.Request,  res: express.Response,  next:express.NextFunction
): void => {
    const url = req.url;
    console.log(`${url} was visitied`);
    next();
};

export default imageLogger;