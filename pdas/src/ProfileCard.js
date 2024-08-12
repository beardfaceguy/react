// The below change to the argument is an example of
//argument destructuring, where create new variables
//and assign them to the values of the same name in
//the argument object being passed in

function ProfileCard({ title, handle, image, description }) {
  console.log(
    `ProfileCard props \n   title: ${title}\n   handle: ${handle}\n image:${image}`
  );
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="Personal Digital Assistant logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
