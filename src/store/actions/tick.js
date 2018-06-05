import {TICK} from "../constants";
export function tick(cursor, length) {

    return {
        type: TICK,
        payload: {nextNum: cursor, maxNum: length}
    }

}