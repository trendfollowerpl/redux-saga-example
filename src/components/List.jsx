import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ articles: state.articles });

class ConnectedList extends React.Component {
    constructor() {
        super();
    }
    onclick = (event) => {
        console.log(event.target)
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
                            >Delete</button>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

const List = connect(mapStateToProps)(ConnectedList);
export {
    List
}
