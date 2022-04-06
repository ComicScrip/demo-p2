import TeamMember from '../components/TeamMember';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  return (
    <div>
      <h1 className={styles.title}>Notre équipe</h1>
      <div className={styles.memberList}>
        <TeamMember
          name="Nico"
          bio={'Bio Nico'}
          githubLink="https://github.com/NycoChavanoud"
        />
        <TeamMember
          name="Pierre"
          bio={'Bio Pierre'}
          githubLink="https://github.com/ComicScrip"
        />
      </div>
    </div>
  );
}
