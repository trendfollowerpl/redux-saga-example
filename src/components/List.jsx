import React from 'react';
import { connect } from 'react-redux';
import { deleteArticle } from '../actions'

const mapStateToProps = state => ({ articles: state.articles });
const mapDispatchToProps = (dispatch) => ({
    deleteArticle: payload => dispatch(deleteArticle(payload))
});
class ConnectedList extends React.Component {
    constructor() {
        super();
    }

    onclick = (event) => {
        this.props.deleteArticle({
            id: event.target.value
        })
    }

    render() {
        const { articles } = this.props;
        return (
            <ul className="list-group list-group-flush" >
                {
                    articles.map(el => (
                        <li className="list-group-item" key={el.id}>
                            {el.title}
                            <button type='button'
                                className='btn btn-danger'
                                onClick={this.onclick}
                                value={el.id}
                            >Delete</button>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export {
    List
}
