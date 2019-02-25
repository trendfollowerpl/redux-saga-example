import {
    ADD_ARTICLE,
    DELETE_ARTICLE,
    DATA_REQUESTED
} from '../constants/actionTypes'

const addArticle = (payload) => ({
    type: ADD_ARTICLE,
    payload
})

const deleteArticle = (payload) => ({
    type: DELETE_ARTICLE,
    payload
})

const getData = () =>
    ({ type: DATA_REQUESTED })

export {
    addArticle,
    deleteArticle,
    getData
};