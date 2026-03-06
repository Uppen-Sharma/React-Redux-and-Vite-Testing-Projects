import profilePic from "./assets/vite.svg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture"></img>
      <h1 className="card-title">Coder</h1>
      <p className="card-text">I Make LOL</p>
    </div>
  );
}
export default Card;
