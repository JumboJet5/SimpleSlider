import {CHANGE_CURSOR} from "../constants";
export function changeCursor(num) {

    return {
        type: CHANGE_CURSOR,
        payload: num
    }

}