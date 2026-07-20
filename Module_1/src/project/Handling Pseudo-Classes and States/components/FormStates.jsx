 

function FormStates() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Form States</h2>
      <div className="space-y-3">
       <input

  type="text"

  placeholder="Focus me to see ring effect"

  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition-colors"

/>

       <textarea

  placeholder="Textarea example"

  rows="2"

  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none hover:border-gray-400 transition-colors"

/>
      </div>
    </div>
  );
}

export default FormStates;
