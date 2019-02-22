import {
    ADD_ARTICLE,
    DELETE_ARTICLE
} from '../constants/actionTypes'
import uuidv1 from 'uuid';

const initialState = {
    articles: [
        { title: "React Redux Tutorial for Beginners", id: uuidv1()},
        { title: "Redux e React: cos'è Redux e come usarlo con React", id: uuidv1() }
    ]
}

const rootReducer = (state = initialState, action) => {
    if (action.type === ADD_ARTICLE) {
        return Object.assign(
            {},
            state,
            { articles: state.articles.concat(action.payload) }
        )
    }
    if (action.type === DELETE_ARTICLE) {
        return Object.assign(
            {},
            { articles: state.articles.filter(item => item.id !== action.payload.id) }
        )
    }

    return state;
};

export {
    rootReducer
}