import {START, TIC} from "./constants";
import {tickChange} from "./actions/tickChange";

let count = 0;

export const autoSlider = store => next => action => {

    if (action && (action.type === TIC || action.type === START )) {

        let dispatch = store.dispatch;
        let state = store.getState();
        let isAuto = state.slide.auto;

        setTimeout(() => {
            if (isAuto || action.type === START) { //repeat or start new tic
                state = store.getState();
                let skipCount = state.slide.skip; //number of tics that were stopped but not informed about it
                let prevCursor = state.slide.cursor;
                let len = state.feed.slider.length;
                let cursor = (prevCursor + len + 1) % len;
                count++;
                console.log('count');
                console.log(count, action);
                dispatch(tickChange(cursor));
                if (skipCount === 0) dispatch({type: TIC}); //if tic wasn't stopped -> repeat tic
            }
        }, 10000);
        if (action.type === START) return next(action);
    } else {
        // console.log('action');
        // console.log(action.type);

        return next(action)
    }
};