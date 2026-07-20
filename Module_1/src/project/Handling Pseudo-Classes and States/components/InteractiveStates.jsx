 

function InteractiveStates() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        Interactive States
      </h2>
     <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md cursor-pointer transition-all duration-200 group">

  <h3 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">

    Hover Card

  </h3>

  <p className="text-sm text-gray-600 mt-1">

    Hover to see color change

  </p>

</div>

        <a

  href="#"

  className="block text-blue-600 hover:text-blue-800 focus:outline-none focus:underline active:text-blue-900 transition-colors"

>

  Interactive Link

</a>
      </div>
  );
}

export default InteractiveStates;
