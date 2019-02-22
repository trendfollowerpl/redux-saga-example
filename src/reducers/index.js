import { ADD_ARTICLE } from '../constants/actionTypes'

const initialState = {
    articles: [
        { title: "React Redux Tutorial for Beginners", id: 1 },
        { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
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
    return state;
};

export {
    rootReducer
}