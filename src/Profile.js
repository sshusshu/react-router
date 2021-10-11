const profileData = {
  sshu: {
    name: "임수빈",
    description: "FE engineer",
  },
  hoon: {
    name: "신경훈",
    description: "QC engineer",
  },
};

export const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};
