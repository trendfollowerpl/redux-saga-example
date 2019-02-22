import { ADD_ARTICLE } from '../constants/actionTypes'

const addArticle = (payload) => ({
    type: ADD_ARTICLE,
    payload
})

export {
    addArticle
};