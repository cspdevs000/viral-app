import React, { Component } from 'react';
import './Comment.css';
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            upVoteArr: [],
            downVoteArr: [],
            upVotes: this.props.upVotes,
            downVotes: this.props.downVotes,
            userArr: [],
            downVoteColor: this.props.downVoteColor,
            upVoteColor: this.props.upVoteColor
        }
    }
    componentDidMount() {
        axios.post(`${REACT_APP_SERVER_URL}/review/comment`, this.state)
            .then((res) => {
                let upVoteArr1 = res.data.comment[0].upVoteArr;
                let downVoteArr1 = res.data.comment[0].downVoteArr;
                if (upVoteArr1.includes(this.props.user.id) === false) {
                    this.setState({
                        upVoteColor: '#F0F8FF'
                    })
                } else {
                    this.setState({
                        upVoteColor: 'green'
                    })
                }
                if (downVoteArr1.includes(this.props.user.id) === false) {
                    this.setState({
                        downVoteColor: '#F0F8FF'
                    })
                } else {
                    this.setState({
                        downVoteColor: 'red'
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            })

    }

    handleUpVote = (e) => {
        axios.post(`${REACT_APP_SERVER_URL}/review/comment`, this.state)
            .then((res) => {
                let userArr1 = res.data.comment[0].userArr;
                let userInfo = this.props.user;
                let upVoteArr1 = res.data.comment[0].upVoteArr;
                if ((userArr1.includes(userInfo.id)) === true) {
                    if ((upVoteArr1.includes(userInfo.id)) === true) {
                        for (let i = 0; i < upVoteArr1.length; i++) {
                            if (upVoteArr1[i] === userInfo.id) {
                                upVoteArr1.splice(i, 1);
                                i--;
                            }
                        }
                        for (let i = 0; i < userArr1.length; i++) {
                            if (userArr1[i] === userInfo.id) {
                                userArr1.splice(i, 1);
                                i--;
                            }
                        }
                        this.setState({
                            upVotes: this.state.upVotes - 1,
                            upVoteArr: upVoteArr1,
                            userArr: userArr1,
                            upVoteColor: '#F0F8FF'
                        })
                        axios.post(`${REACT_APP_SERVER_URL}/review/vote`, this.state)
                            .then(res => {
                            })
                            .catch(err => {
                            })
                    }
                } else if (userInfo.id === null || userInfo.id === undefined) {
                    alert('You must be logged in to vote');
                } else {
                    upVoteArr1.push(userInfo.id);
                    userArr1.push(userInfo.id);
                    this.setState({
                        upVotes: this.state.upVotes + 1,
                        upVoteArr: upVoteArr1,
                        userArr: userArr1,
                        upVoteColor: 'green'
                    })
                    axios.post(`${REACT_APP_SERVER_URL}/review/vote`, this.state)
                        .then(res => {
                        })
                        .catch(err => {
                        })
                }
            })
            .catch(err => {
                console.log('===> ERROR GETTING DATA', err);
            });
    };

    handleDownVote = (e) => {
        axios.post(`${REACT_APP_SERVER_URL}/review/comment`, this.state)
            .then(res => {
                let userArr1 = res.data.comment[0].userArr;
                let userInfo = this.props.user;
                let downVoteArr1 = res.data.comment[0].downVoteArr;
                if ((userArr1.includes(userInfo.id)) === true) {
                    if ((downVoteArr1.includes(userInfo.id)) === true) {
                        for (let i = 0; i < downVoteArr1.length; i++) {
                            if (downVoteArr1[i] === userInfo.id) {
                                downVoteArr1.splice(i, 1);
                                i--;
                            }
                        }
                        for (let i = 0; i < userArr1.length; i++) {
                            if (userArr1[i] === userInfo.id) {
                                userArr1.splice(i, 1);
                                i--;
                            }
                        }
                        this.setState({
                            downVotes: this.state.downVotes - 1,
                            downVoteArr: downVoteArr1,
                            userArr: userArr1,
                            downVoteColor: '#F0F8FF'
                        })
                        axios.post(`${REACT_APP_SERVER_URL}/review/downVote`, this.state)
                            .then(res => {
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    }
                } else if (userInfo.id === null || userInfo.id === undefined) {
                    alert('You must be logged in to vote');
                } else {
                    userArr1.push(userInfo.id);
                    downVoteArr1.push(userInfo.id);
                    this.setState({
                        downVotes: this.state.downVotes + 1,
                        downVoteArr: downVoteArr1,
                        userArr: userArr1,
                        downVoteColor: 'red'
                    })
                    axios.post(`${REACT_APP_SERVER_URL}/review/downVote`, this.state)
                        .then(res => {
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (


            <div className='comment-card content' >
                <div className="comment-user-container">
                    <p class="comment-username">{this.props.userName}</p>
                    <p>Posted: {this.props.createdDate}</p>
                </div>
                <div className="review-text-container">
                    <p>{this.props.review}</p>
                </div>
                <div className="vote-container">
                    <i class="material-icons vote-button" style={{ backgroundColor: this.state.upVoteColor }} onClick={this.handleUpVote.bind(this)}>arrow_upward</i>
                    <p>{this.state.upVotes}</p>
                    <i class="material-icons vote-button downvote-button" style={{ backgroundColor: this.state.downVoteColor }} onClick={this.handleDownVote.bind(this)}>arrow_downward</i>
                    <p>{this.state.downVotes}</p>
                </div>
            </div>
        )
    }
}

export default Comment;