import { Router } from 'express';
import OndcController from '../../controllers/v2/ondc.controller';
import { authentication } from '../../middlewares';

const router = new Router();
const ondcController = new OndcController();

router.post('/client/search',
    ondcController.productSearch);

//new changes
router.post('/client/select',
    ondcController.orderSelect);


router.post('/client/Init',
    ondcController.orderInit);

router.post('/client/confirm',
    ondcController.orderConfirm);

router.post('/client/cancel',
    ondcController.orderCancel);

router.post('/client/track',
    ondcController.orderTrack);

router.post('/client/status',
    ondcController.orderStatus);

router.post('/client/unsoliciated/status',
    ondcController.orderStatusUnsoliciated);

router.post('/client/status/cancel',
    ondcController.orderCancelFromSeller);

router.put('/client/status/updateOrder',
    ondcController.orderStatusUpdate);

router.put('/client/status/updateOrderItems',
    ondcController.orderStatusUpdateItems);

router.post('/client/status/itemUpdate',
    ondcController.notifyItemUpdate);

router.post('/client/status/storeUpdate',
    ondcController.notifyStoreUpdate);

router.post('/client/status/orgUpdate',
    ondcController.notifyOrgUpdate);


router.post('/client/update',
    ondcController.orderUpdate);

router.post('/client/support',
    ondcController.orderSupport);

router.post('/client/logistics/:type',
    ondcController.logisticsUnsoliciatedHandler);

router.post('/order',
    ondcController.createLspOrder);

router.get('/order/:retailOrderId/status',
    ondcController.lspStatus);


router.get('/order/:retailOrderId/track',
    ondcController.lspTrack);

router.post('/order/:retailOrderId/cancel',
    ondcController.lspCancel);
    

    router.post('/order/:retailOrderId/ship',
        ondcController.lspReadyToShip);

export default router;
