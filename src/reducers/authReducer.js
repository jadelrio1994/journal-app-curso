import { types } from "../data/types";


export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.name
      }
    case types.logout:
      return {}
  
    default:
      return state
  }
}