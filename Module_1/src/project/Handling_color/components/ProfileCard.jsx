 

import ProfileHeader from "./ProfileHeader";

import ProfileStats from "./ProfileStats";

import ProfileSkills from "./ProfileSkills";

import ProfileActions from "./ProfileActions";

 

function ProfileCard() {

  return (

    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

      <ProfileHeader />

      <div className="px-8 pb-8">

        <ProfileStats />

        <ProfileSkills />

        <ProfileActions />

      </div>

    </div>

  );

}

 

export default ProfileCard;