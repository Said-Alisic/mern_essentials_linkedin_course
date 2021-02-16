import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModel';

const Player = mongoose.model('Player', PlayerSchema);

// Saves a player with passed parameters to our mongodb database
export const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body);

    newPlayer.save((err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });
};

// Gives a reponse containing all players from our database
export const getPlayers = (req, res) => {
    Player.find({/* options */}, (err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });
};

// Gives a reponse containing a player with an ID in the URL parameters
export const getPlayerWithID = (req, res) => {
    Player.findById(req.params.PlayerId, (err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });
};

// Updates a player with an ID in the URL parameters
export const updatePlayer = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.PlayerId }, req.body, { new: true }, (err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json(Player);
    });
};

// Gives a reponse containing a player with an ID in the URL parameters
export const deletePlayer = (req, res) => {
    Player.remove({ _id: req.params.PlayerId }, (err, Player) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully removed player from soccerDB'});
    });
};



