import { OndcService } from '../../services/v2';

const ondcService = new OndcService();

class OndcController {


    productSearch(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.productSearch(req.body, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }


    orderSelect(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.orderSelect(req.body, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }
    orderSelectWithoutlogistic(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.orderSelectWithoutlogistic(req.body, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }
    orderInit(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.orderInit(req.body, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }
    orderInitWithoutlogistic(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.orderInitWithoutlogistic(req.body, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }
    orderConfirm(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        // ondcService.orderConfirm(req.body,req).then(data => {
        //     res.json(data);
        // }).catch((err) => {
        //     next(err);
        // });
        ondcService.orderConfirm(req.body, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }
    orderTrack(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.orderTrack(req.body, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }
    orderCancel(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.orderCancel(req.body, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }

    orderStatus(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.orderStatus(req.body, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }

    orderStatusUnsoliciated(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        productService.productStatusUnsoliciated(req.body, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }

    orderStatusUpdate(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.orderStatusUpdate(req.body, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }

    orderStatusUpdateItems(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.orderStatusUpdateItems(req.body, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }
    notifyItemUpdate(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.notifyItemUpdate(req.body, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }

    notifyStoreUpdate(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.notifyStoreUpdate(req.body, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }

    notifyOrgUpdate(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.notifyOrgUpdate(req.body, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }
    orderCancelFromSeller(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.orderCancelFromSeller(req.body, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }
    orderUpdate(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.orderUpdateV2(req.body, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }
    orderSupport(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.orderSupport(req.body, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }

    logisticsUnsoliciatedHandler(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');

        ondcService.logisticsUnsoliciatedHandler(req.body,req.params, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }

    createLspOrder(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.createLspOrder(req.body, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }


    lspStatus(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.lspStatus(req.params, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }

    lspCancel(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.lspCancel({...req.params,...req.body}, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }


    lspTrack(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.lspTrack({...req.params,...req.body}, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }

    
    lspReadyToShip(req, res, next) {
        // const currentUserAccessToken = res.get('currentUserAccessToken');
        ondcService.lspReadyToShip({...req.params,...req.body}, req).then(data => {
            res.json(data);
        }).catch((err) => {
            next(err);
        });
    }

}

module.exports = OndcController;
