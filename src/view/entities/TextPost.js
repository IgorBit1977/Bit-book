class TextPost {

    constructor(text, id, dateCreated, userId, userDisplayName, type, commentsNum) {
        this.text = text;
        this.dateCreated = dateCreated;
        this.userId = userId;
        this.userDisplayName = userDisplayName;
        this.type = type;
        this.commentsNum = commentsNum;
    }
}

export { TextPost }