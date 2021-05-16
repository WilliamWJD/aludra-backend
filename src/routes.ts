import { Router } from 'express';
import upload from './config/upload';

import UploadHostsController from './controllers/UploadHostsController';

const uploadHostsController = new UploadHostsController();

const routes = Router();

routes.post('/upload-hosts', upload.single('file'), uploadHostsController.store);

export default routes;