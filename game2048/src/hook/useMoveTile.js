import { useEffect } from "react";
import { addKeyObserver, removeKeyObserver } from "../util/keyboard";
import { makeTile, moveTile } from "../util/tile";

export default function useMoveTile( tileList, setTileList, setScore ) {
  useEffect(() => {
    function moveAndAdd({x, y}) {
      const newTileList = moveTile({ tileList, x, y });
      const score = newTileList.reduce(
        (acc, t) => t.isMerged ? acc + t.value : acc, 
        0,
      );
      setScore( v => v + score );
      newTileList.push({ ...makeTile( newTileList ), isNew: true });
      setTileList( newTileList );
    }

    function moveUp() { moveAndAdd({ x:0, y:-1 }); }
    function moveDown() { moveAndAdd({ x:0, y:1 }); }
    function moveLeft() { moveAndAdd({ x:-1, y:0 }); }
    function moveRight() { moveAndAdd({ x:1, y:0 }); }

    addKeyObserver('up', moveUp );
    addKeyObserver('down', moveDown );
    addKeyObserver('left', moveLeft );
    addKeyObserver('right', moveRight );
    return () => {
      removeKeyObserver('up', moveUp );
      removeKeyObserver('down', moveDown );
      removeKeyObserver('left', moveLeft );
      removeKeyObserver('right', moveRight );
    };
  }, [tileList, setTileList]);

}