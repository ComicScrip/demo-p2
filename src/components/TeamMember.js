import styles from './TeamMember.module.css';

export default function TeamMember({ name, bio, githubLink }) {
  return (
    <div className={styles.card}>
      <p className={styles.name}>{name}</p>
      <a href={githubLink}>
        <img className={styles.avatar} src={`${githubLink}.png`} alt={name} />
      </a>

      <p className={styles.bio}>{bio}</p>
    </div>
  );
}
