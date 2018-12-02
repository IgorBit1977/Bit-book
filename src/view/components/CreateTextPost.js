import React, { Component } from 'react';
import Modal from "react-responsive-modal";
import { postService } from "../services/postFeedServices"; 

class CreateTextPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            inputValue: ''
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };

    sendTextPost = () => {
        const textPost = this.state.inputValue;
        postService.uploadTextPost(textPost);
    }

    onInputChange = (e) => {
        const value = e.target.value;
        this.setState({
            inputValue: value
        })
    }

    render() {
        const { open, inputValue } = this.state

        return (
            <div className="new-post">
                <div onClick={this.onOpenModal}>
                    Text Post
                </div>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h5>Add new text post</h5>
                    <input type="text" value={inputValue} onChange={this.onInputChange} />
                    <input type="button" value="send" onClick={this.sendTextPost} />
                </Modal>
            </div>
        )
    }
}

export { CreateTextPost }