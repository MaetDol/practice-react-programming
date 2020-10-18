import hotkeys from 'hotkeys-js';

const observerMap = [];
export function addKeyObserver( key, callback ) {
  if( !observerMap[key] ) {
    observerMap[key] = [];
    hotkeys( key, () => executeCallback( key ));
  }
  observerMap[key].push( callback );
};

export function removeKeyObserver( key, callback ) {
  observerMap[key] = observerMap[key].filter( cb => cb !== callback );
};

function executeCallback( key ) {
  for( let cb of observerMap[key] ) {
    cb();
  }
}