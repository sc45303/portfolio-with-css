import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.content}>
        I&apos;m Suhail Khan, a frontend developer with a passion for creating
        beautiful and functional web applications. With several years of
        experience in the field, I specialize in React, Next.js, and TypeScript.
      </p>
      <p className={styles.content}>
        My journey in web development started when I was in college, and since
        then, I&apos;ve been constantly learning and improving my skills. I love
        the challenge of turning complex problems into simple, beautiful, and
        intuitive designs.
      </p>
      <h2 className={styles.subtitle}>My Approach</h2>
      <p className={styles.content}>
        I believe in writing clean, maintainable code and creating user-friendly
        interfaces. I&apos;m always eager to learn new technologies and best
        practices to deliver the best possible solutions to my clients and
        employers.
      </p>
      <h2 className={styles.subtitle}>When I&apos;m Not Coding</h2>
      <p className={styles.content}>
        Outside of work, I enjoy reading tech blogs, contributing to open-source
        projects, and attending web development meetups. I also love hiking and
        photography, which help me stay creative and refreshed.
      </p>
    </div>
  );
}
