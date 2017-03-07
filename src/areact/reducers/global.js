/**
 * Created by Ethan on 2016/12/22.
 * 17:26
 */
import {actionGlobal} from 'AREACT/actions';
export function globalReducer(state = {}, action) {
    switch(action.type) {
        case actionGlobal.SHOW_LOADING:
            return {
                ...state,
                loading: {
                    show: true,
                    tip: action.payload
                }
            }
            break;
        case actionGlobal.HIDE_LOADING:
            return {
                ...state,
                loading: {
                    show: false,
                    tip: ''
                }
            }
            break;
        default:
            return state;
    }
}
