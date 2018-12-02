import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import { postService } from "../services/postFeedServices"; 


class CreateImagePost extends Component {
    constructor(props) {
        super(props)

        this.state={
            open:false,
            inputValue:''
        }
    }
    
    onOpenModal = () => {
        this.setState({
            open:true
        })
    }
    onCloseModal = () => {
        this.setState({
            open:false
        })
    }
    onInputChange = (e) => {
        const value = e.target.value;
        this.setState({
            inputValue: value
        })
    }
    sendImagePosts = () => {
        postService.uploadImagePost(this.state.inputValue)
    }
    render() {
        return (
            <div className="new-post">
               <div onClick={this.onOpenModal}>
                  Image Post
                </div>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <h5>Add new text post</h5>
                    <input type="text" value={this.state.inputValue} onChange={this.onInputChange} />
                    <input type="button" value="send" onClick={this.sendImagePosts} />
                </Modal>
            </div>
        )
        
    }
}

export { CreateImagePost }