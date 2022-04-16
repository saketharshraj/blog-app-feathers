const OnPostLiked = (result, context) => {
    const { _id: post } = result;
    const { app } = context;

    const likeCount = await app.service('like').find({ 
        query : {
            post,
            status: 1
        }
    }).then(
        res => res.total
    )

    await app.service('post').patch(post, {
        likeCount
    })
};

export default OnPostLiked;