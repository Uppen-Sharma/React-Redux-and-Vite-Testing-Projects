import "./App.css";
import UserInfoContext from "./context/UserinfoContext";
import BlogPage from "./componenets/BlogPage";

function App() {
  const userInfo = { username: "isAdmin", isAdmin: "True" };

  return (
    <UserInfoContext.Provider value={userInfo}>
      <BlogPage></BlogPage>
    </UserInfoContext.Provider>
  );
}

export default App;
