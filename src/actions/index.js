import {
    ADD_ARTICLE,
    DELETE_ARTICLE
} from '../constants/actionTypes'

const addArticle = (payload) => ({
    type: ADD_ARTICLE,
    payload
})

const deleteArticle = (payload) => ({
    type: DELETE_ARTICLE,
    payload
})

export {
    addArticle,
    deleteArticle
};