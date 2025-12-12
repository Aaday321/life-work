"use client";

import { useState } from "react";
import styles from "./post.module.css";
import Comment from "./Comment";

interface SocialMediaPostProps {
  color?: string;
}

const comments = [
  "Wow! That beach looks so nice! And I cannot wait to join!",
  "LeBron James was at that beach!",
  "OMG! I am a third comment",
]

export function SocialMediaPost({color}:SocialMediaPostProps) {
  const [liked, setLiked] = useState(false)
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      <div className={styles.userInfo}>
        John Doe - Sacramento, California
      </div>

      <div className={styles.imageContainer}>
        <img
          src="/armoni.png"
          alt="Post image"
          style={{width: "100%"}}
        />
      </div>

      <div className={styles.engagementSection}>
        <div className={styles.engagementIcons}>
          <button
            className={`${styles.iconButton} ${liked ? styles.liked : ""}`}
            onClick={() => setLiked(!liked)}
            aria-label="Like"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={liked ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <button
            className={styles.iconButton}
            aria-label="Comment"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        </div>

        <div className={styles.caption}>
          Living the "LifeWork" Dream! #Cruisetime
        </div>

        {
          comments.map(
            text=>
            <Comment key={comments.indexOf(text)} commentText={text}/>
          )
        }
        <button onClick={()=>setShowMore(c=>!c)}>
          Show {!showMore ? "more" : "less"}
        </button>
      </div>
    </>
  );
}
