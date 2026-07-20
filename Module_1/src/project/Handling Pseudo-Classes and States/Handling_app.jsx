import ButtonStates from "./components/ButtonStates.jsx";
import FormStates from "./components/FormStates.jsx";
import InteractiveStates from "./components/InteractiveStates.jsx";


const Handling_app = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Tailwind States
        </h1>

        <div className="space-y-8">
          <ButtonStates />
          <FormStates />
          <InteractiveStates />
        </div>
      </div>
    </div>
  )
}

export default Handling_app
