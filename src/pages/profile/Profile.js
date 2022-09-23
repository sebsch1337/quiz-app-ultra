import "./Profile.css";
import profileImage from "../../img/me.jpg";

const Profile = () => {
  return (
    <section className="profile">
      <h1>Hi Sebastian!</h1>
      <img src={profileImage} alt="A picture of me" className="profile__pic" />
      <p className="profile__text">
        I don't know what a profile in a quiz game is needed for. But anyways...
        <br />
        <br />
        <span className="profile__text__cheers">Cheers!</span>
      </p>
    </section>
  );
};

export default Profile;
