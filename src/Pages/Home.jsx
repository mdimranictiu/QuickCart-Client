import React, { useContext } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import { AuthContext } from '../Provider/AuthProvider';

const Home = () => {
    const {user,logOut}=useContext(AuthContext)
    const handleLogOut=()=>{
        logOut()
    }
    return (
       <div className="flex">
  {/* Sidebar */}
  <div className="fixed">
    <FilterSidebar />
  </div>

  {/* Main Content */}
  <div className="ml-10 p-6">
    <h2>This is Home Page</h2>
    <p>My info: {user?.email}</p>
    <p onClick={handleLogOut}>LogOut</p>
  </div>
</div>

    );
};

export default Home;