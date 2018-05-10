export default function createStore(reducer) {
  // add your code here
  let state;
  const getState = ()=>{
    return state
  }
  const dispatch = (action)=>{
    //     dispatch should take in an action,
    // update the state using the reducer, and
    state = reducer(state,action)
    // call the render function.
    render()
  }

  dispatch({ type: '@@INIT' });
  return {dispatch,getState}

}//createStore

function render() {
  const container = document.getElementById('container');
}
// In createStore.js,
// write a function called createStore that
//   takes in a reducer function as an argument.
//   return an object with two methods - getState, dispatch.
//     getState should return the current state.
//     dispatch should take in an action, update the state using the reducer, and call the render function.
// Note: Don't forget, your initial state for each store should be set by the reducer. You'll have to dispatch some sort of 'initialize' action to get your state set!
