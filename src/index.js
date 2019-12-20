import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="John" 
                timeAgo="2 days ago, 1am"  
                contentComment="First Comment" 
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Sam" 
                timeAgo="a days ago, 15pm" 
                contentComment="First React Apps"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Abdul Wahed" 
                timeAgo="today, 4pm" 
                contentComment="Angular more difficult than react, i think! "
                avatar={faker.image.avatar()}
            />
        </div>
        );
};

ReactDOM.render(<App />, document.getElementById('root'));