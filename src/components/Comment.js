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
            downVoteColor: 'white',
            upVoteColor:'white'
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
                // console.log(userArr1);
                // console.log(userArr1.includes(userInfo.id));
                let upVoteArr1 = res.data.comment[0].upVoteArr;
                console.log(upVoteArr1);
                console.log('includes in upVoteArr1', upVoteArr1.includes(userInfo.id));
                // console.log(userInfo.id);
                if ((userArr1.includes(userInfo.id)) === true) {
                    console.log('you have already voted');
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
                            upVoteColor:'white'
                        })
                        axios.post(`${REACT_APP_SERVER_URL}/review/vote`, this.state)
                            .then(res => {
                                console.log(res.data);
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    }
                } else if (userInfo.id === null || userInfo.id === undefined) {
                    console.log('please log in');
                    alert('You must be logged in to vote');
                } else {
                    console.log('you can vote');
                    upVoteArr1.push(userInfo.id);
                    userArr1.push(userInfo.id);
                    this.setState({
                        upVotes: this.state.upVotes + 1,
                        upVoteArr: upVoteArr1,
                        userArr: userArr1, 
                        upVoteColor:'green'
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
        axios.post(`${REACT_APP_SERVER_URL}/review/comment`, this.state)
            .then(res => {
                console.log(this.props.downVotes);
                let userArr1 = res.data.comment[0].userArr;
                let userInfo = this.props.user;
                console.log('logged in user information', userInfo);
                // console.log(userArr1);
                // console.log(userArr1.includes(userInfo.id));
                // console.log(userInfo.id);
                let downVoteArr1 = res.data.comment[0].downVoteArr;
                console.log(downVoteArr1);
                console.log('includes in downVoteArr1', downVoteArr1.includes(userInfo.id));
                //If they already voted
                if ((userArr1.includes(userInfo.id)) === true) {
                    console.log('you have already voted');
                    //if already voted in downvote
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
                            downVoteColor:'white'
                        })
                        axios.post(`${REACT_APP_SERVER_URL}/review/downVote`, this.state)
                            .then(res => {
                                console.log(res.data);
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    }
                } else if (userInfo.id === null || userInfo.id === undefined) {
                    console.log('please log in');
                    alert('You must be logged in to vote');
                } else {
                    // if they have not voted 
                    console.log('you can vote');
                
                    userArr1.push(userInfo.id);
                    downVoteArr1.push(userInfo.id);
                    this.setState({
                        downVotes: this.state.downVotes + 1,
                        downVoteArr: downVoteArr1,
                        userArr: userArr1,
                        downVoteColor:'red'
                    })
                    console.log(userArr1);
                    axios.post(`${REACT_APP_SERVER_URL}/review/downVote`, this.state)
                        .then(res => {
                            console.log(res.data);
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
                    <button class="vote-button" style={{backgroundColor: this.state.upVoteColor}} onClick={this.handleUpVote.bind(this)}>Up</button>
                    <p>Upvotes: {this.state.upVotes}</p>
                    <button class="vote-button downvote-button" style={{backgroundColor: this.state.downVoteColor}} onClick={this.handleDownVote.bind(this)}>Down</button>
                    <p>Downvotes: {this.state.downVotes}</p>
                </div>
                {/* <table> */}
                    {/* <tr>
                        <td> */}
                            {/* <p>Username: {this.props.userName}</p> */}
                        {/* </td>
                    </tr>
                    <tr>
                        <td> */}
                            {/* <p>Comment: {this.props.review}</p> */}
                        {/* </td>
                    </tr>
                    <tr>
                        <td> */}
                            {/* <p>Created Date: {this.props.createdDate}</p> */}
                        {/* </td>
                    </tr> */}

                    
                {/* </table> */}
            </div>
        )
    }
}

export default Comment;