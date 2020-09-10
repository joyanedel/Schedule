const initialState = {sigla: "", bloque: ""};

function reducer(state = initialState, { type, payload}){
  console.log(state);
  switch(type){
    case "PUT_DATA": {
      return payload;
    }
    default:
      return state;
  }
}

export default reducer;
