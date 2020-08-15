import express = require('express');
import { Router } from 'express';
import { UsersRouter } from './controllers/users-router';
import { Logger, LoggerFactory, InvalidResourceUrlError } from '../common';
import { AppDataServices } from '../services';

////////////////////

export class ApiRouterFactory {

  private static readonly LOGGER: Logger = LoggerFactory.getLogger();

  private constructor() {}

  static getApiRouter(services: AppDataServices): Router {
    const router: Router = express.Router();

    const usersRouter: Router = new UsersRouter(services.usersService).router;

    ApiRouterFactory.LOGGER.info('Mounting users route');
    router.use('/users', usersRouter);

    router.all('*', (req, res, next) => {
      next(new InvalidResourceUrlError());
    });

    return router;
  }
}