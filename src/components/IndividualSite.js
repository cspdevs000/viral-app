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
            typWaitTime: '', 
            phoneNumber: this.props.phoneNumber
        };
    }

    componentDidMount() {
        axios.get(`${REACT_APP_SERVER_URL}/review/${this.props.id}`)
            .then((response) => {
                this.setState({
                    commentData: response.data.allReviewArr
                });
            })
            .catch((error) => {
                console.log('ERROR', error);
            })
            if(this.props.typWaitTime == "choiceA"){this.setState({typWaitTime: "Less than 30 Minutes" })};
            if(this.props.typWaitTime == "choiceB"){this.setState({typWaitTime: "30 minutes - 1 hour" })};
            if(this.props.typWaitTime == "choiceC"){this.setState({typWaitTime: "1-2 hours" })};
            if(this.props.typWaitTime == "choiceD"){this.setState({typWaitTime: "More than 2 hours" })};
            if(this.props.phoneNumber == '' || this.props.phoneNumber == undefined){
                this.setState({phoneNumber: 'N/A'})
            }
    }

    handleComment = (e) => {
        e.preventDefault();
        let messageVal = e.target.value;
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
        if(this.state.message == '' || this.state.message.length <6){
            alert('Please enter a more detailed review')
        }
        else{
            let commentValue = this.state.message;
            let newComment = {
                review: commentValue,
                createdDate: String(new Date().toJSON().slice(0, 10)),
                upVotes: 0,
                downVotes: 0,
                nameOfUser: this.props.user.name,
                userId: this.props.user.id,
                siteId: this.props.id,
                downVoteColor: '#F0F8FF',
                upVoteColor: '#F0F8FF',
               
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
        }
        
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
                alert('Your wait time has been submitted. Thanks for your feedback!');
            })
            .catch(error => {
                console.log('===> ERROR GETTING DATA', error);
            });
        window.location.reload();
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
                    downVotes={c.downVotes}
                    userName={c.userName}
                    user={this.props.user}
                    downVoteColor={c.downVoteColor}
                    upVoteColor={c.upVoteColor}
                />
            );
        });
        return display;
    }

    render() {
        return (
            <div className="individual-site-container">
                <div className='card content'>
                    <table>
                        <tr>
                            <td>
                                <h1>{this.props.name}</h1>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>{this.props.address}, {this.props.city}, {this.props.state}, {this.props.zipCode}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Phone Number: {this.state.phoneNumber}</p>
                            </td>
                        </tr>
                        <p> Typical Wait Time: {this.state.typWaitTime}</p>
                    </table>
                </div>
                <div className="card content">
                    <form onSubmit={this.handleSubmitWaitTimes.bind(this)}>
                        <h2>Been here before?</h2>
                        <label for="waitTime">How long did you wait?</label>
                        <br/>
                        <select
                            className="site-drop-down"
                            name="waitTime"
                            onChange={this.handleWaitTimes.bind(this)}
                            defaultValue={""}>
                            <option value="choiceA">less than 30 minutes</option>
                            <option value="choiceB">30 minutes - 1 hour</option>
                            <option value="choiceC">1-2 hours</option>
                            <option value="choiceD">more than 2 hours</option>
                        </select>
                        <br/>
                        <button className="site-submit-button" type="submit">Submit</button>
                    </form>
                </div>
                <h1>Reviews</h1>
                {this.displayComments()}
                <form className="card" onSubmit={this.handleSubmit.bind(this)}>
                    Add a review:
                    <br/>
                    <br/>
                    <textarea  className='comment-box' placeholder="..." value={this.state.message} onChange={this.handleComment.bind(this)} wrap="soft"  ></textarea>
                    <button type="submit">Submit</button>
                </form>
                <br/>
            </div>
        );
    }
}

export default IndividualSite;
