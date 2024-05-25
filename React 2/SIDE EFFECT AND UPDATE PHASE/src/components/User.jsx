
function User({ avatar, email, first_name, last_name, id }) {
  return (
    <div>
      <h1>Id : {id}</h1>
      <img src={avatar} alt={first_name} />
      <div>
        Name : {first_name} {last_name}
      </div>
      <div>Email : {email}</div>
    </div>
  );
}

export default User;
