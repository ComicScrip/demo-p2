export default function TeamMember({ name, bio, githubLink }) {
  return (
    <div>
      <p>{name}</p>
      <p>{bio}</p>
      <p>{githubLink}</p>
    </div>
  );
}
