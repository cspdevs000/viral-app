import React, { Component } from "react";
import Comment from "./Comment";
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;

class IndividualSite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            // comment: [
            //     {
            //         review: "",
            //         createdDate: "",
            //         upVotes: 0,
            //         userName: "Justin"
            //         // {
            //         // type: mongoose.Schema.Types.ObjectId,
            //         // ref: "User",
            //         // }
            //     },
            // ],
            commentData: []
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
                    commentData: commentArr
                })


            
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
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.address}</p>
                <p>{this.props.city}</p>
                <p>{this.props.state}</p>
                <p>{this.props.zipCode}</p>
                <p>{this.props.waitTimes}</p>
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
