import {Dispatch, MutableRefObject, useReducer, useRef} from 'react';
import {ILabel} from './label.interface';

export enum ActionType {
  RE_INITIALIZE = 'RE_INITIALIZE',
  SET_MAX_LENGTH = 'SET_MAX_LENGTH',
}

interface IAction {
  type: ActionType;
  payload?: ILabel;
}

function reducerFunction(state: ILabel, action: IAction) {
  switch (action.type) {
    case ActionType.RE_INITIALIZE:
      return {...state, ...(action.payload ?? {})};

    case ActionType.SET_MAX_LENGTH:
      return state.maxLength && state.children
        ? {
            ...state,
            children:
              state.children.toString().length > state.maxLength
                ? `${state.children
                    ?.toString()
                    .substring(0, state.maxLength - 3)}...`
                : state.children,
          }
        : state;

    default: {
      return {...state};
    }
  }
}

const useLabelReducer = (
  initialValue: ILabel,
): [ILabel, Dispatch<IAction>, MutableRefObject<ILabel>] => {
  const [state, dispatch] = useReducer(reducerFunction, initialValue);
  const refInitialValue = useRef(initialValue);
  return [state, dispatch, refInitialValue];
};

export default useLabelReducer;
