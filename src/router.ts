import { Router } from "express";
import { ensureAuthenticatedClient } from "./middlewares/ensureAuthenticatedClient";
import { ensureAuthenticatedDeliveryman } from "./middlewares/ensureAuthenticatedDeliveryman";
import { AuthenticatedClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/CreateClientController";
import { CreateDeliveriesController } from "./modules/deliveries/createDeliveries/CreateDeliveriesController";
import { FindManyDeliveriesController } from "./modules/deliveries/findManyDeliveries/findManyDeliveriesController";
import { UpdateDeliveriesController } from "./modules/deliveries/updateDeliveriesEnd/updateDeliveriesEndController";
import { CreateDeliverymanController } from "./modules/deliveryman/createDeliveryman/CreateDeliverymanController";

export const routes = Router();

const findManyDeliveriesController = new FindManyDeliveriesController()
routes.get('/findManyDeliveries/',ensureAuthenticatedDeliveryman, findManyDeliveriesController.handle)

const authenticatedClientController = new AuthenticatedClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

routes.post('/authenticateClient/', authenticatedClientController.handle);
routes.post('/authenticateDeliveryman/', authenticateDeliverymanController.handle);

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const createDeliveriesController = new CreateDeliveriesController();
const updateDeliveriesEndController = new UpdateDeliveriesController()

routes.post('/deliveries/',ensureAuthenticatedClient, createDeliveriesController.handle);
routes.post('/client/', createClientController.handle); //O midleware ja passa o req.body automaticamente para classe
routes.post('/deliveryman/', createDeliverymanController.handle);
routes.post('/updateDeliveriesEnd/', updateDeliveriesEndController.handle);