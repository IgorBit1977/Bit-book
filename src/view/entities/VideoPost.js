class VideoPost {

    constructor(videoUrl, id, dateCreated, userId, userDisplayName, type, commentsNum) {
        this.videoUrl = videoUrl;
        this.dateCreated = dateCreated;
        this.userId = userId;
        this.userDisplayName = userDisplayName;
        this.type = type;
        this.commentsNum = commentsNum;
    }
}

export { VideoPost }