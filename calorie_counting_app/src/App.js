import { h, diff, patch } from "virtual-dom";
import createElement from "virtual-dom/create-element";

function app(initModel, update, view, node) {
  let model = initModel;
  let currentView = view(dispatch, model);
  let rootNode = createElement(currentView);
  node.appendChild(rootNode);
  // dispatch is called when there's interaction with the app
  function dispatch(msg) {
    model = update(msg, model); // return the updated model
    const updatedView = view(dispatch, model); // hoisting happening here
    const patches = diff(currentView, updatedView);
    rootNode = patch(rootNode, patches);
    currentView = updatedView;
  }
}

export default app;
