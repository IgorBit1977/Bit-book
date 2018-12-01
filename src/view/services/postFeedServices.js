import { BASE_URL, API_KEY, SESSION_ID, GET_POSTS, GET_TEXT_POSTS, POST_TEXT_POSTS } from '../config/constants';
import { VideoPost } from '../entities/VideoPost';
import { ImagePost } from '../entities/ImagePost';
import { TextPost } from '../entities/TextPost';

class PostService {
    getPosts = () => {
        return fetch(`${BASE_URL}${GET_POSTS}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Key': API_KEY,
                'SessionId': SESSION_ID
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((posts) => {
           return posts.map((post)=> {
            if (post.type === 'video'){

                const { videoUrl, id, dateCreated, userId, userDisplayName, type, commentsNum } = post;
                return new VideoPost(videoUrl, id, dateCreated, userId, userDisplayName, type, commentsNum)
            }
            if (post.type === 'image'){
                const { imageUrl, id, dateCreated, userId, userDisplayName, type, commentsNum } = post;
                return new ImagePost(imageUrl, id, dateCreated, userId, userDisplayName, type, commentsNum)
            }
            if (post.type === 'text'){
                const { text, id, dateCreated, userId, userDisplayName, type, commentsNum } = post;
                return new TextPost(text, id, dateCreated, userId, userDisplayName, type, commentsNum)
            }
            })
        })
    }
}

export const postService = new PostService();