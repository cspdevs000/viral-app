import React, { Component } from 'react';

class Comment extends Component {

    constructor(props){
        super(props);
        
    }


    render() {
        return(

            <div>
                <p>Username: {this.props.userName}</p>
                <p>Comment: {this.props.review}</p>
                <p>Created Date: {this.props.createdDate}</p>
                <p>Upvotes: {this.props.upVotes}</p>
            </div>
        )
    }
}

export default Comment;