function Layout({ children }) {

  return (

    <div className="min-h-screen p-12 bg-gray-50">

      <div className="max-w-md mx-auto py-16">{children}</div>

    </div>

  );

}

 

export default Layout;