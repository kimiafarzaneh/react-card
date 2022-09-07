import "./card.css";

const Card = ( {userData}) => {


  return (
    <div >
      <div className="card">
        { <img src={userData.picture.medium} style={{ width: "100%" }} alt="profile"/> }
        <h1>{`${userData.name.first} ${userData.name.last}`}</h1>
        <p className="title">{userData.email}</p>
        <p>
          <button>Contact</button>
        </p>
      </div>
    </div>
  );
};

export default Card;