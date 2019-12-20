import React from 'react';
import faker from 'faker';


const CommentDetail = () => {
    return(
        <div className="comment">
            <a href="/" className="avatar">
                <img src={faker.image.avatar()} alt="avatar"/>
                </a>
                <div className="content">
                    <a className="author" >John</a>
                    <div className="metadata">
                        <div className="date">3 d ays ago</div>
                    </div>
                    <div className="text">
                        Hey guys, I hope this example comment is helping you read this documentation
                    </div>
                </div>
        </div>
    );
};

export default CommentDetail;