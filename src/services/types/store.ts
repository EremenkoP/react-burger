import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import store from "../store";
import { TUnionAuthAction } from "./toDo/toDoAuth";
import { TUnionIngredientAction } from "./toDo/toDoIngredient";
import { TUnionOrderDetail } from "./toDo/todoOrder";
import { TUnioniWsAll, TUnioniWsAuth } from "./toDo/toDoWsReducer";

type TApplicationActions = TUnionAuthAction | TUnionIngredientAction | TUnionOrderDetail | TUnioniWsAll | TUnioniWsAuth

type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;


type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export {RootState, AppDispatch, AppThunk}
