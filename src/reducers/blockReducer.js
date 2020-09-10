const initialState = {sigla: "", bloque: "", init: false};

function reducer(state = initialState, { type, payload}){
  switch(type){
    case "PUT_DATA": {
      return payload;
    }
    default:
      return state;
  }
}

export default reducer;
