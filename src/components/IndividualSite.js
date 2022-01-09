import React, { Component } from "react";
import Comment from "./Comment";
import './IndividualSite.css';
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;

class IndividualSite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            commentData: [],
            waitTimes: "choiceA",
        };

    }

    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/review/${this.props.id}`)
            .then((response) => {
                this.setState({
                    commentData: response.data.allReviewArr
                });
                // console.log(this.state.commentData[0]._id);
            })
            .catch((error) => {
                console.log('ERROR', error);
            })
    }

    handleComment = (e) => {
        e.preventDefault();
        let messageVal = e.target.value;
        console.log("inputted Message", messageVal);

        this.setState({
            message: messageVal,
        });
    };

    handleWaitTimes(e) {
        
        this.setState({
            waitTimes: e.target.value,
        });
    }


    handleSubmit = (e) => {
        e.preventDefault();
        let commentValue = this.state.message;
        let newComment = {
            review: commentValue,
            createdDate: String(new Date()),
            upVotes: 0,
            nameOfUser: this.props.user.name,
            userId: this.props.user.id,
            siteId: this.props.id,
        };

        axios.post(`${REACT_APP_SERVER_URL}/review/new`, newComment)
            .then(response => {
                let newReview = response.data.newReview[0]

                let commentArr = this.state.commentData.slice();

                commentArr.push(newReview);

                this.setState({
                    message: "",
                    commentData: commentArr,
                })



            })
            .catch(error => {
                console.log('===> ERROR GETTING DATA', error);
            });
    };

    handleSubmitWaitTimes = (e) => {
        e.preventDefault();
        let commentValue = this.state.message;
       
        let newWaitTimes = {
            waitTimes: this.state.waitTimes, 
            siteId: this.props.id
        };

        axios.put(`${REACT_APP_SERVER_URL}/site/updateWaitTime`, newWaitTimes)
            .then(response => {
                console.log(response.data);
                // this.setState({
                //     waitTime: this.state.waitTime
                // })
            })
            .catch(error => {
                console.log('===> ERROR GETTING DATA', error);
            });
    };

    displayComments() {
        const display = this.state.commentData.map((c, idx) => {
            return (
                <Comment
                    id={c._id}
                    key={idx}
                    review={c.review}
                    createdDate={c.createdDate}
                    upVotes={c.upVotes}
                    userName={c.userName}
                />
            );
        });
        return display;
    }

    render() {
        return (
            <div className="individual-site-container">
                <p>{this.props.name}</p>
                <p>{this.props.address}</p>
                <p>{this.props.city}</p>
                <p>{this.props.state}</p>
                <p>{this.props.zipCode}</p>
                <p>{this.props.waitTimes}</p>
                <div className="site-wait-times">
                    <form onSubmit={this.handleSubmitWaitTimes.bind(this)}>
                        <h1>Been here before?</h1>
                        <label for="waitTime">How long did you wait?</label><br></br>
                        <select
                            name="waitTime"
                            onChange={this.handleWaitTimes.bind(this)}
                            defaultValue={""}>
                            <option value="choiceA">less than 30 minutes</option>
                            <option value="choiceB">30 minutes - 1 hour</option>
                            <option value="choiceC">1-2 hours</option>
                            <option value="choiceD">more than 2 hours</option>
                        </select><br></br>
                        <button typ="submit">Submit</button>
                    </form>
                </div>
                <h1>Comments</h1>
                {this.displayComments()}
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        value={this.state.message}
                        onChange={this.handleComment.bind(this)}
                    ></input>
                </form>
            </div>
        );
    }
}

export default IndividualSite;
