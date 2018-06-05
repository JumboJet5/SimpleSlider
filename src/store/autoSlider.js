import {TICK, TICK_CHANGE} from "./constants";

export const autoSlider = store => next => action => {
    console.log('action');
    console.log(action);

    if (action && action.type === TICK) {
        console.log('tick');

        let newTick = {
            type: TICK,
            payload: {
                nextNum: (action.payload.nextNum + action.payload.maxNum + 1) % action.payload.maxNum,
                maxNum: action.payload.maxNum
            }
        };

        let change = {
            type: TICK_CHANGE,
            payload: action.payload.nextNum
        };

        setTimeout(() => {
            console.log('tick2');
            return (dispatch) => {
                console.log('tick3');
                dispatch(change);
                dispatch(newTick);
            }
        }, 1000)
    } else
        return next(action)
};