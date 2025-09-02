const express = require('express');
const router = express.Router();

const viewController = require('./engineerViews.js');
const dataController = require('./engineerData.js');
const apiController = require('./engineerAPI.js');

// Example function if you want to define someFunction:
function someFunction(req, res) {
  res.send('Hello from someFunction');
}

// Web page routes
router.get('/', dataController.index, viewController.index);
router.get('/path', someFunction);   // Pass function, not call it
router.delete('/:id', dataController.destroy, viewController.redirectHome);
router.put('/:id', dataController.update, viewController.redirectShow);
router.post('/', dataController.create, viewController.redirectHome);
router.get('/:id/edit', dataController.show, viewController.edit);
router.get('/:id', dataController.show, viewController.show);

// API routes
router.get('/api', dataController.index, apiController.index);
router.delete('/api/:id', dataController.destroy, apiController.destroy);
router.put('/api/:id', dataController.update, apiController.show);
router.post('/api', dataController.create, apiController.show);
router.get('/api/:id', dataController.show, apiController.show);

module.exports = router;
