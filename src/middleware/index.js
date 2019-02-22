import { ADD_ARTICLE } from '../constants/actionTypes'

const forbiddenWords = ["spam", "money"];
const forbiddenwordsMidleware = ({ dispatch }) => next => action => {
    if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word =>
            action.payload.title.includes(word)
        );
        if (foundWord.length) {
            return dispatch({ type: "FOUND_BAD_WORD" });
        }
    }
    return next(action);
}

export {
    forbiddenwordsMidleware
}



