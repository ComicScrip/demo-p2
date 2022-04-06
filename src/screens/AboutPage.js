import TeamMember from '../components/TeamMember';

export default function AboutPage() {
  return (
    <>
      <h1>Notre équipe</h1>
      <TeamMember
        name="Pierre"
        bio={'bio Pierre'}
        githubLink="https://github.com/NycoChavanoud"
      />
      <TeamMember
        name="Pierre"
        bio={'Bio Nico'}
        githubLink="https://github.com/NycoChavanoud"
      />
    </>
  );
}
