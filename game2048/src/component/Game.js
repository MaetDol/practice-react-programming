import React, { useState } from 'react';
import times from 'lodash/times';
import { MAX_POS } from '../constant';
import { getInitialTileList } from '../util/tile';
import useMoveTile from '../hook/useMoveTile';
import Tile from './Tile';

export default function Game({ setScore }) {
  const [tileList, setTileList] = useState( getInitialTileList() );
  useMoveTile( tileList, setTileList, setScore );

  return (
    <div className="game-container">
        <div className="grid-container">
          {times(MAX_POS, i => (
            <div key={i} className="grid-row">
              {times(MAX_POS, i => (
                <div key={i} className="grid-cell"></div>
              ))}
            </div>
          ))}
        </div>

        <div className="tile-container">
            {tileList.map( item => (
              <Tile key={item.id} {...item} />
            ))}
        </div>
      </div>
  );
}
