import { 
    addNewPlayer, 
    getPlayerWithID, 
    getPlayers,
    updatePlayer,
    deletePlayer
} from '../controllers/playerControllers';

const routes = (app) => {
    // Route for player objects
    app.route('/players')
    // GET all players endpoint
        .get(getPlayers)
    // POST endpoint
        .post(addNewPlayer);

    // GET and PUT with ID endpoint
    app.route('/player/:PlayerId')
    // GET a specific player
        .get(getPlayerWithID)

    // UPDATE a specific player
        .put(updatePlayer)
    
    // Delete a specific player
        .delete(deletePlayer);
};

export default routes;

