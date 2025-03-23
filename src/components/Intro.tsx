import Beu from "../assets/beu (2).jpg";
import '../profile.css'

const Profile = () => {
  return (
    <div className="profile-container">
      <img src={Beu} alt="Profile" className="profile-image" />
      <p className="profile-name">Beulah Ude</p>
      <p className="profile-role">Frontend Engineer</p>
    </div>
  );
};

export default Profile;
