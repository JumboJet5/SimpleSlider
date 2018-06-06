import {CHANGE_CURSOR, START, STOP, TIC_CHANGE} from "../constants";
const initialState = {
    cursor: 0,
    auto: false,
    skip: 0
};

export default function slide(state = initialState, action) {
    switch (action.type) {
        case STOP:
            // skip++ -> ticChange was stopped but not informed about it
            // we must ignore {skip} ticChanges
            console.log('STOP SKIP');
            console.log(state.skip + 1);

            return {...state, ...{auto: false, skip: state.skip + 1}};

        case START:
            return {...state, ...{auto: true}};

        case CHANGE_CURSOR:
            return {...state, ...{cursor: action.payload}};

        case TIC_CHANGE:
            //ignoring changes
            console.log('state.skip');
            console.log(state.skip);
            if (state.skip > 0) return {...state, ...{skip: state.skip - 1}};
            console.log('change');
            console.log(action.payload);

            if (state.auto) return {...state, ...{cursor: action.payload}};
            else return state;

        default:
            return state;
    }
}