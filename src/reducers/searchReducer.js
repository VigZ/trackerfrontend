export default function searchReducer(state = { businessList: [] }, action) {
  switch (action.type) {
    case "SET_RESULT_LIST":
    if(action.payload && action.payload.businesses){
      return {...state, businessList: [...action.payload.businesses]}
    }
    break
    case "LIST_RESULTS":
      return {...state}
    default:
      return state
  }
}
