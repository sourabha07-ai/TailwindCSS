import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";
import ProfileBio from "./ProfileBio";
import ProfileActions from "./ProfileActions";

function UserProfileCard() {
  const userData = {
    name: "John Doe",
    title: "Software Developer",
    location: "San Francisco, CA",
    posts: "42",
    followers: "1.2k",
    following: "890",
    bio: "Passionate about building user-friendly applications and exploring new technologies. Love to learn and share knowledge with the community.",
  };

  const handleEditProfile = () => {
    alert("Edit profile clicked");
  };

  const handleViewPortfolio = () => {
    alert("View portfolio clicked");
  };

return (

    <div className="w-80 p-3 border border-solid">

      <ProfileHeader

        name={userData.name}

        title={userData.title}

        location={userData.location}

      />

      <ProfileStats

        posts={userData.posts}

        followers={userData.followers}

        following={userData.following}

      />

      <ProfileBio bio={userData.bio} />

      <ProfileActions

        onEditProfile={handleEditProfile}

        onViewPortfolio={handleViewPortfolio}

      />

    </div>

  );
}

export default UserProfileCard;
