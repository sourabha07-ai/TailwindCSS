function ProfileStats({ posts, followers, following }) {
 return (

    <div className="flex justify-between mb-8 text-center px-4">

      <div className="px-2">

        <div className="text-xl font-bold mb-1">{posts}</div>

        <div className="text-sm text-gray-500">Posts</div>

      </div>

      <div className="px-2">

        <div className="text-xl font-bold mb-1">{followers}</div>

        <div className="text-sm text-gray-500">Followers</div>

      </div>

      <div className="px-2">

        <div className="text-xl font-bold mb-1">{following}</div>

        <div className="text-sm text-gray-500">Following</div>

      </div>

    </div>

  );
}

export default ProfileStats;
