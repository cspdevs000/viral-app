import React, { Component } from 'react';
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            upVotes: this.props.upVotes,
        }
    }

    handleLike = (e) => {
        // console.log('button working');
        axios.post(`${REACT_APP_SERVER_URL}/review/comment`, this.state)
            .then((res) => {
                this.setState({
                    upVotes: this.state.upVotes + 1
                })
                axios.post(`${REACT_APP_SERVER_URL}/review/vote`, this.state)
                    .then(res => {
                        console.log(res.data);
                        this.setState({
                            upVotes: res.data
                        })
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log('===> ERROR GETTING DATA', err);
            });
    };


    render() {
        return (

            <div>
                <p>Username: {this.props.userName}</p>
                <p>Comment: {this.props.review}</p>
                <p>Created Date: {this.props.createdDate}</p>
                <p>Upvotes: {this.state.upVotes}</p>
                <button>Down</button> <button onClick={this.handleLike.bind(this)}>Up</button>
            </div>
        )
    }
}

export default Comment;