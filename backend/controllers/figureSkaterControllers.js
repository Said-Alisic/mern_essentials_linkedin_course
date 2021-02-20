import mongoose from 'mongoose';
import { FigureSkaterSchema } from '../models/figureSkaterModel';

const FigureSkater = mongoose.model('FigureSkater', FigureSkaterSchema);

// Saves a figure skater with passed parameters to our mongodb database
export const addNewFigureSkater = (req, res) => {
    let newFigureSkater = new FigureSkater(req.body);

    newFigureSkater.save((err, FigureSkater) => {
        if (err) {
            res.send(err);
        }
        res.json(FigureSkater);
    });
};

// Gives a reponse containing all figure skaters from our database
export const getFigureSkaters = (req, res) => {
    FigureSkater.find({/* options */}, (err, FigureSkater) => {
        if (err) {
            res.send(err);
        }
        res.json(FigureSkater);
    });
};

// Gives a reponse containing a figure skater with an ID in the URL parameters
export const getFigureSkaterWithID = (req, res) => {
    FigureSkater.findById(req.params.FigureSkaterId, (err, FigureSkater) => {
        if (err) {
            res.send(err);
        }
        res.json(FigureSkater);
    });
};

// Updates a figure skater with an ID in the URL parameters
export const updateFigureSkater = (req, res) => {
    FigureSkater.findOneAndUpdate({ _id: req.params.FigureSkaterId }, req.body, { new: true }, (err, FigureSkater) => {
        if (err) {
            res.send(err);
        }
        res.json(FigureSkater);
    });
};

// Gives a reponse containing a figure skater with an ID in the URL parameters
export const deleteFigureSkater = (req, res) => {
    FigureSkater.deleteOne({ _id: req.params.FigureSkaterId }, (err, FigureSkater) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully removed figure skater from IceSkatingDB'});
    });
};



