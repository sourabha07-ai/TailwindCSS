 

 function ProfileStats() {

  return (

    <div className="grid grid-cols-3 gap-4 mb-8">

      <div className="bg-blue-50 rounded-lg p-4">

        <div className="text-2xl font-bold text-blue-600">2.4k</div>

        <div className="text-xs text-blue-500 uppercase tracking-wide">

          Followers

        </div>

      </div>

      <div className="bg-green-50 rounded-lg p-4">

        <div className="text-2xl font-bold text-green-600">156</div>

        <div className="text-xs text-green-500 uppercase tracking-wide">

          Projects

        </div>

      </div>

      <div className="bg-purple-50 rounded-lg p-4">

        <div className="text-2xl font-bold text-purple-600">89</div>

        <div className="text-xs text-purple-500 uppercase tracking-wide">

          Awards

        </div>

      </div>

    </div>

  );

}

export default ProfileStats;
