 
function ProfileActions() {

  return (

    <div className="flex gap-3 mt-8">

      <button className="flex-1 bg-linear-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">

        Follow

      </button>

      <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200">

        Message

      </button>

    </div>

  );

}
 

export default ProfileActions;
