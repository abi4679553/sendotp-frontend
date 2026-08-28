// import { Route, Routes } from "react-router-dom";
// import Header  from "./components/Header";
// import { Home } from "./components/Home";
// import { Login } from "./components/Login";
// import { useContext, useEffect } from "react";
// import { Dcontext } from "./provider/Context";
// import { Admin } from "./components/Admin";
// import { Staff } from "./components/Staff";
// import { Student } from "./components/Student";


// function App() {
//   const {currentUser,isAuth} = useContext(Dcontext)

//   console.log("currentUser",currentUser)

//  useEffect(()=>{
//   const handleNavigation = () => {
//     if(currentUser?.role === "admin"){
//       return <Admin />
//   }
//   else if(currentUser?.role === "staff"){
//        return <Staff /> 
//   }
//   else if(currentUser?.role === "student"){
//     <Student />
//   }
//   else {
//       return  <Home/>
//   }
// }
//  },[currentUser])


    
//   return (
//     <div className="App">

//       <Header />
//       <Routes>
//          <Route path="/" element={handleNavigation()}/>
//          <Route path="/login" element={<Login/>}/>
//       </Routes>
  
//     </div>
//   );
// }

// export default App;







import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";

import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Admin } from "./components/Admin";
import { Staff } from "./components/Staff";
import { Student } from "./components/Student";

import { useContext } from "react";
import { Dcontext } from "./provider/Context";

function App() {
  const { currentUser, isAuth } = useContext(Dcontext);

  console.log("currentUser:", currentUser);
  console.log("isAuth:", isAuth);

  // Role Based Component
  const handleNavigation = () => {
    // User not logged in
    if (!isAuth) {
      return <Home />;
    }

    // Admin
    if (currentUser?.role === "admin") {
      return <Admin />;
    }

    // Staff
    if (currentUser?.role === "staff") {
      return <Staff />;
    }

    // Student
    if (currentUser?.role === "student") {
      return <Student />;
    }

    // Default
    return <Home />;
  };

  return (
    <div className="App">

      {/* Header */}
      <Header />

      {/* Routes */}
      <Routes>

        {/* Home / Role Based Page */}
        <Route
          path="/"
          element={handleNavigation()}
        />

        {/* Login */}
        <Route
          path="/login"
          element={
            isAuth ? <Navigate to="/" /> : <Login />
          }
        />

        {/* Invalid URL */}
        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>

    </div>
  );
}

export default App;
