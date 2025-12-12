import styles from "~/app/_components/post.module.css";
import { useState } from "react";

interface CommentProps {
  commentText: string;
}

export default function Comment({commentText}: CommentProps) {

  const [commentLiked, setCommentLiked] = useState(false)

  return (
    <>
    <div className={styles.comment}>
      <span className={styles.commentText}>
        {commentText}
      </span>
      <button
        className={`${styles.commentLikeButton} ${commentLiked ? styles.liked : ""}`}
        onClick={() => setCommentLiked(!commentLiked)}
        aria-label="Like comment"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={commentLiked ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>
    </div>

      {
        /*

  <div className={styles.reply}>Reply</div>
         */
      }
    </>
  )
}