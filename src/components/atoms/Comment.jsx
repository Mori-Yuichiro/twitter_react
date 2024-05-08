import '../../style/atoms/comment/Comment.scss'

export const Comment = ({ comment, user }) => {
    return (
        <>
            <p>{user.name}</p>
            <p className="comment-text">{comment.content}</p>
        </>
    )
}