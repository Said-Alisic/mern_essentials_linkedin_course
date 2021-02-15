import { addNewPlayer } from '../controllers/playerControllers';

const routes = (app) => {
    // POST route for player objects
    app.route('/players')
    // POST endpoint
        .post(addNewPlayer);

}

export default routes;

