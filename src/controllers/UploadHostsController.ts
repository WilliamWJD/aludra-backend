import { Request, Response } from "express";

import {LoadHosts} from '../utils/LoadHosts';

class UploadHostsController{
    async store(req:Request, res:Response):Promise<Response>{
        const { file } = req;
        const hosts = await LoadHosts(file);
        console.log(hosts);
        return res.json({ok:true})
    }
}

export default UploadHostsController;