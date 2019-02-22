import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

const mapStateToProps = (state) => ({
    articles: state.remoteArticles.slice(0, 10)
})

export class Posts extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        // calling the new action creator
        this.props.getData();
    }

    render() {
        return (
            <ul className="list-group list-group-flush">
                {this.props.articles.map(el => (
                    <li className="list-group-item" key={el.id}>
                        {el.title}
                    </li>
                ))}
            </ul>
        )
    }
}

export default connect(mapStateToProps, { getData })(Posts)