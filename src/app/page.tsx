import { SocialMediaPost } from "~/app/_components/post";
import styles from "./index.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.phoneFrame}>
        <SocialMediaPost />
        <SocialMediaPost color="blue" />
      </div>
      <button className={styles.shareButton}>
        + Share Your Story
      </button>
    </main>
  );
}
