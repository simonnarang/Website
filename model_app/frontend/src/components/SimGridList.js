import GridList from './GridList';
import tileData from '../const/teamTileData.js';
import { any } from 'prop-types';

function SimGridList(role = 'all') {
    var SimTileData = [];
    var i = 0;
    for (i = 0; i < tileData.length; i++) {
        if (tileData[i].role == "Simulation") {
            SimTileData.push(tileData[i]);
        }
    }
    return GridList(SimTileData);
}

export default SimGridList