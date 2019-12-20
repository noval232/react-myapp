import React from 'react';
// import faker from 'faker';


const CommentDetail = (props) => {
    console.log('branch myapps-branch');
    return(
        <div className="comment">
            <a href="/" className="avatar">
                <img src={props.avatar} alt="avatar"/>
                </a>
                <div className="content">
                    <a className="author" >{props.author}</a>
                    <div className="metadata">
                        <div className="date">{props.timeAgo}</div>
                    </div>
                    <div className="text">
                        {props.contentComment}
                    </div>
                </div>
        </div>
    );
};

export default CommentDetail;