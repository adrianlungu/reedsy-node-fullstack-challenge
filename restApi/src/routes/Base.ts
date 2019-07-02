import { Router } from 'express';
import Exports from './exports/Exports';
import Imports from './imports/Imports';

// Init router and path
const router = Router();
const path = '/api';

// Add sub-routes
router.use(Exports.path, Exports.router);
router.use(Imports.path, Imports.router);

router.get('/', (req, res, next) => {
    res.send('');
});

// Export the base-router
export default { router, path };
