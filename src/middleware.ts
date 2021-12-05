import { Request, Response} from "express";


function log(request:Request, response:Response, next:any) {
  const { url, method } = request; 
  console.log(`${method} - ${url} at ${new Date()}`);
  next();
}

export {log}