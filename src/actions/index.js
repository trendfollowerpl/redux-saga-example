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

const getData = () =>
    dispatch =>
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch({ type: 'DATA_LOADED', payload: json }))

export {
    addArticle,
    deleteArticle,
    getData
};