import { 
    addNewFigureSkater, 
    getFigureSkaterWithID, 
    getFigureSkaters,
    updateFigureSkater,
    deleteFigureSkater
} from '../controllers/figureSkaterControllers';

const routes = (app) => {
    // Route for player objects
    app.route('/figureSkaters')
    // GET all players endpoint
        .get(getFigureSkaters)
    // POST endpoint
        .post(addNewFigureSkater);

    // GET and PUT with ID endpoint
    app.route('/figureSkater/:FigureSkaterId')
    // GET a specific player
        .get(getFigureSkaterWithID)

    // UPDATE a specific player
        .put(updateFigureSkater)
    
    // Delete a specific player
        .delete(deleteFigureSkater);
};

export default routes;

