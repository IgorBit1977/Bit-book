import React, { Component } from 'react';
import { postService } from '../services/postFeedServices';
import { PostTextFeed } from './PostTextFeed';
import { PostImageFeed } from './PostImageFeed';
import { PostVideoFeed } from './PostVideoFeed';
import { NothingInFeed } from './NothingInFeed';


class FeedContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        this.loadPosts();
    }

    loadPosts() {
        postService.getPosts()
        .then(posts => this.setState({ posts })); 
    }

    render() {
        const { posts } = this.state

        return (
            <div className="feed-content">
                {posts.length === 0 ? <NothingInFeed /> :
                posts.map((post, i) => {
                    if (post.type === 'image') {
                        return <PostImageFeed post={post} key={i} />
                    }
                    if (post.type === 'text') {
                        return <PostTextFeed post={post} key={i} />
                    }
                    if (post.type === 'video') {
                        return <PostVideoFeed post={post} key={i} />
                    }
                })}
                
            </div>
        )
    }
}
export { FeedContent }