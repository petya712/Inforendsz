import { Router } from 'express';
import { CategoryController } from './src/controller/category.controller';
import { VideoController } from './src/controller/video.controller';
import { UserController } from './src/controller/user.controller';

export function getRouter() {
    const router = Router();

    const userController = new UserController();
    const videoController = new VideoController();
    const categoryController = new CategoryController();

    router.get('/users', userController.getAll);
    router.get('/users/:id', userController.getOne);
    router.post('/users', userController.create);
    router.put('/users', userController.update);
    router.delete('/users/:id', userController.delete);

    router.get('/videos', videoController.getAll);
    router.get('/videos/:id', videoController.getOne);
    router.post('/videos', videoController.create);
    router.put('/videos', videoController.update);
    router.delete('/videos/:id', videoController.delete);

    router.get('/categories', categoryController.getAll);
    router.get('/categories/:id', categoryController.getOne);
    router.post('/categories', categoryController.create);
    router.put('/categories', categoryController.update);
    router.delete('/categories/:id', categoryController.delete);

    return router;
}
