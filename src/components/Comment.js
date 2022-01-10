import React, { Component } from 'react';
import './IndividualSite.css';
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            upVotes: this.props.upVotes,
            downVotes: this.props.downVotes,
            userArr: [],
        }
    }
    componentDidMount() {
        console.log(this.props);
        console.log(this.state);
    }
    handleUpVote = (e) => {
        // console.log('button working');
        axios.post(`${REACT_APP_SERVER_URL}/review/comment`, this.state)
            .then((res) => {
                let userArr1 = res.data.comment[0].userArr;
                let userInfo = this.props.user;
                console.log('logged in user information', userInfo);
                console.log(userArr1);
                console.log(userArr1.includes(userInfo.id));
                // console.log(userInfo.id);
                if ((userArr1.includes(userInfo.id)) === true) {
                    console.log('you have already voted');
                } else if (userInfo.id === null || userInfo.id === undefined) {
                    console.log('please log in');
                } else {
                    console.log('you can vote');
                    userArr1.push(userInfo.id);
                    this.setState({
                        upVotes: this.state.upVotes + 1,
                        userArr: userArr1
                    })
                    console.log(userArr1);
                    axios.post(`${REACT_APP_SERVER_URL}/review/vote`, this.state)
                        .then(res => {
                            console.log(res.data);
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            })
            .catch(err => {
                console.log('===> ERROR GETTING DATA', err);
            });
    };

    handleDownVote = (e) => {
        axios.post(`${REACT_APP_SERVER_URL}/review/vote`, this.state)
            .then(res => {
                console.log(this.props.downVotes);
                console.log(this.props.upVotes);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (

            <div className='card content' >
                <table>
                    <tr>
                        <td>
                            <p>Username: {this.props.userName}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Comment: {this.props.review}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Created Date: {this.props.createdDate}</p>
                        </td>
                    </tr>

                    <button onClick={this.handleUpVote.bind(this)}>Up</button>
                    <p>Upvotes: {this.state.upVotes}</p>
                    <button onClick={this.handleDownVote.bind(this)}>Down</button>
                    <p>Downvotes: {this.state.downVotes}</p>
                </table>
            </div>
        )
    }
}

export default Comment;