 

function ProfileSkills() {

  return (

    <div className="space-y-3">

      <div className="flex items-center justify-between">

        <span className="text-sm font-medium text-gray-700">Design</span>

        <span className="text-sm text-gray-500">95%</span>

      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">

        <div

          className="bg-linear-to-r from-blue-500 to-blue-600 h-2 rounded-full"

          style={{ width: "95%" }}

        ></div>

      </div>

      <div className="flex items-center justify-between">

        <span className="text-sm font-medium text-gray-700">Development</span>

        <span className="text-sm text-gray-500">78%</span>

      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">

        <div

          className="bg-linear-to-r from-green-500 to-green-600 h-2 rounded-full"

          style={{ width: "78%" }}

        ></div>

      </div>

      <div className="flex items-center justify-between">

        <span className="text-sm font-medium text-gray-700">Marketing</span>

        <span className="text-sm text-gray-500">82%</span>

      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">

        <div

          className="bg-linear-to-r from-purple-500 to-purple-600 h-2 rounded-full"

          style={{ width: "82%" }}

        ></div>

      </div>

    </div>

  );

}

export default ProfileSkills;
