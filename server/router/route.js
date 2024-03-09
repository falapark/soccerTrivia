import {Router }from 'express';
const router = Router();

/**import controllers */
import * as controllers from '../controllers/controller.js';
/**Question Routes API*/


router.route('/questions')
        .get(controllers.getQuestions)/**POST REQUEST */
        .post(controllers.insertQuestions)/**POST REQUEST*/
        .delete(controllers.dropQuestions);/**DELETE REQUEST */

router.route('/result')
        .get(controllers.getResult)
        .post(controllers.storeResult)
        .delete(controllers.dropResult)

export default router;