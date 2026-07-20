function ProfileHeader({ name, title, location }) {
 return (

    <div className="text-center mb-8">

      <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>

      <h2 className="text-2xl font-bold mb-2">{name}</h2>

      <p className="text-base text-gray-600 mb-2">{title}</p>

      <p className="text-sm text-gray-500">{location}</p>

    </div>

  );
}

export default ProfileHeader;
