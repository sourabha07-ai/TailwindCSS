 

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header - Simple Flexbox */}
      <header className="bg-white shadow-sm border-b">

  <div className="flex items-center justify-between px-6 py-4 max-w-4xl mx-auto">

    <div className="flex items-center gap-3">

      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">

        <span className="text-white font-bold text-sm">D</span>

      </div>

      <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>

    </div>

    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">

      <span className="text-sm font-medium">U</span>

    </div>

  </div>

</header>

      {/* Main Content - Clean Flexbox Layout */}
      <main className="flex-1 p-6">

  <div className="max-w-4xl mx-auto">

    {/* Page Title */}

    <div className="mb-8">

      <h2 className="text-2xl font-bold text-gray-900 mb-2">

        Flexbox Demo

      </h2>

      <p className="text-gray-600">

        Simple flexbox patterns with Tailwind

      </p>

    </div>

 

    {/* Stats Cards - 3 Cards */}

    <div className="flex flex-col sm:flex-row gap-6 mb-8">

      <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-600">Projects</p>

            <p className="text-2xl font-bold text-gray-900">24</p>

          </div>

          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">

            📁

          </div>

        </div>

      </div>

      <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-600">Tasks</p>

            <p className="text-2xl font-bold text-gray-900">156</p>

          </div>

          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">

            ✅

          </div>

        </div>

      </div>

      <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-600">Team</p>

            <p className="text-2xl font-bold text-gray-900">12</p>

          </div>

          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">

            👥

          </div>

        </div>

      </div>

    </div>

 

    {/* Activity Section */}

    <div className="bg-white p-6 rounded-lg shadow-sm border">

      <h3 className="text-lg font-semibold text-gray-900 mb-4">

        Recent Activity

      </h3>

      <div className="flex flex-col gap-4">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-sm">

            JD

          </div>

          <div className="flex-1">

            <p className="text-sm text-gray-900">

              John updated project timeline

            </p>

            <p className="text-xs text-gray-500">2 hours ago</p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-sm">

            SM

          </div>

          <div className="flex-1">

            <p className="text-sm text-gray-900">

              Sarah completed task review

            </p>

            <p className="text-xs text-gray-500">4 hours ago</p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-sm">

            MK

          </div>

          <div className="flex-1">

            <p className="text-sm text-gray-900">

              Mike joined the project

            </p>

            <p className="text-xs text-gray-500">1 day ago</p>

          </div>

        </div>

      </div>

    </div>

  </div>

</main>

      {/* Footer - Simple */}
      <footer className="bg-white border-t">

  <div className="flex items-center justify-center px-6 py-4 max-w-4xl mx-auto text-sm text-gray-600">

    <span>© 2025 Dashboard App</span>

  </div>

</footer>
    </div>
  );
}

export default Dashboard;
