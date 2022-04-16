const OnComment = async(result, context) => {
    const { post } = result;
    const { app } = context;

    const commentCount = await app.service('comment').find({ 
        query : {
            post,
            status: 1
        }
    }).then(
        res => res.total
    )

    await app.service('post').patch(post, {
        commentCount
    })
};

export default OnComment;