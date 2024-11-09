import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Suhail Khan&apos;s Portfolio</h1>
      <div className={styles.profile}>
        <Image
          src="/img2.png"
          alt="Suhail Khan"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <p className={styles.intro}>
          Hi, I&apos;m Suhail Khan, a passionate frontend developer with
          expertise in React, Next.js, and TypeScript.
        </p>
      </div>
      <div className={styles.skills}>
        <h2>Skills</h2>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
        </ul>
      </div>
    </div>
  );
}
