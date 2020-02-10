import {SEARCH_TERM, BASE_URL, LIMIT_DEFAULT, API_KEY, PROXY_URL}from '../constants'

export function fetchBusinessInfo(locationTerm) {
  return (dispatch) => {
    let init = { method: 'GET',
               headers: {'Authorization': `Bearer ${API_KEY}`},
               mode: 'cors',
               cache: 'default' };
    fetch(`${PROXY_URL}${BASE_URL}?term=${SEARCH_TERM}&location=${locationTerm}&limit${LIMIT_DEFAULT}`, init)
    .then(response => response.json())
    .then(resultList =>{
       dispatch(setResultsList(resultList))
     })
  }
}

export function setResultsList(resultList){
  return {
  type: "SET_RESULT_LIST",
  payload: resultList
  }
}
