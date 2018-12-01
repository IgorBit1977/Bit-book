class ImagePost {

    constructor(imageUrl, id, dateCreated, userId, userDisplayName, type, commentsNum) {
        this.imageUrl = imageUrl;
        this.dateCreated = dateCreated;
        this.userId = userId;
        this.userDisplayName = userDisplayName;
        this.type = type;
        this.commentsNum = commentsNum;
    }
}

export { ImagePost }