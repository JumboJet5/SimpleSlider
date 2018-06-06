import {TIC_CHANGE} from "../constants";
export function tickChange(num) {

    return {
        type: TIC_CHANGE,
        payload: num
    }

}