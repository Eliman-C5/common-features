import { TYPES } from "../data/types";

//El reducer siempre recibe dos valores: state y action
export const counterReducer = (state, action) => {
  
  //El switch siempre evalua el action.type
  switch (action.type) {
  
    case TYPES.counter_app.INCREMENT:
      return state + 1;
      
    case TYPES.counter_app.DECREMENT:
      return state - 1;
    
    case TYPES.counter_app.RESET:
      return 0;
  
    //Al final siempre debemos poner un default que retorne el state inicial, para prevenir errores
    default:
      return state
  }
  
}
