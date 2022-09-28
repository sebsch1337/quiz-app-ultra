import profileImage from "../../img/me.jpg";
import styled from "styled-components";

const Profile = () => {
  return (
    <ProfileSection>
      <h1>Hi Sebastian!</h1>
      <ProfilePicture src={profileImage} alt="That's me!" />
      <AboutMeText>
        I don't know what a profile in a quiz game is needed for. But anyways...
        <br />
        <br />
        <CheersSpan>Cheers!</CheersSpan>
      </AboutMeText>
    </ProfileSection>
  );
};

export default Profile;

const CheersSpan = styled.span`
  display: block;
  text-align: center;
  font-size: larger;
`;

const AboutMeText = styled.p`
  margin-top: 50px;
  text-align: justify;
`;

const ProfilePicture = styled.img`
  margin-top: 25px;
  width: 250px;
  border-radius: 50%;
  border: solid 5px var(--dark-color);
  padding: 5px;
`;

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
`;
