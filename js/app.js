function memoize() {
  var cache = [ ];
  function getElement( name ){
    var result;
    console.log( cache.indexOf( name ) );
    if( cache.indexOf( name ) > -1 ){
      console.log( cache [ cache.indexOf( name ) ] );
      return cache [ cache.indexOf( name ) ];
    } else {
     cache.push( document.querySelector ( name ) );
    }
    console.log(result);
    console.log(cache);
    return result;
   }
  return {
    getElement
  };
}


