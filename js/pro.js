document.oncontextmenu = function(){
    return false;
}
onkeydown = e => {
    let tecla = e.which || e.keyCode;
    if ( e.ctrlKey ) {
      if ( tecla === 70){
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      if ( tecla === 85 ){
        e.preventDefault();
        e.stopPropagation();
        return false;

      }
      if ( tecla === 83 ){
        e.preventDefault();
        e.stopPropagation();
        return false;
 
      }
    }
  }