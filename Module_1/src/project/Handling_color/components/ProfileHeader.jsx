 

 function ProfileHeader() {

  return (

    <>

      {/* Header with gradient background */}

      <div className="bg-linear-to-r from-blue-600 to-purple-600 h-32 relative">

        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">

          <div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">

            <span className="text-3xl text-gray-700 font-bold">JD</span>

          </div>

        </div>

      </div>

      {/* Profile Content */}

      <div className="pt-16 pb-8 px-8 text-center">

        <h2 className="text-2xl font-bold text-gray-900 mb-2">John Doe</h2>

        <p className="text-gray-600 mb-6">Product Designer</p>

      </div>

    </>

  );

}

export default ProfileHeader;
