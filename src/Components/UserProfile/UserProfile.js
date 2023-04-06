import "./UserProfile.css";
import xLogo from "../../Images/x-vector.png";
import { LOAD_USER } from "../../Graphql/Queries";
import { DELETE_PLANT } from "../../Graphql/Mutations";
import { useMutation, useQuery } from "@apollo/client";
import PlantCard from "../PlantCard/PlantCard";
import { Link } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const UserProfile = ({ id, updateUser, saveIcon, updateUserSaved }) => {
  const history = useHistory();

  const { error, data } = useQuery(LOAD_USER, {
    variables: { userId: id },
  });

  const [destroyVegetableUser] = useMutation(DELETE_PLANT, {
    refetchQueries: [{ query: LOAD_USER, variables: { userId: id } }],
  });

  const deleteVegetable = (veggieUserId) => {
    destroyVegetableUser({
      variables: {
        vegetableUserId: veggieUserId,
      },
    });
  };

  useEffect(() => {
    updateUser(id);
    updateUserSaved(data?.userDetails?.vegetableUsers);
    // eslint-disable-next-line
  }, [data]);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <section className="profile-page">
      <section className="back-logo-container">
        <img
          className="x-image-back-button"
          src={xLogo}
          alt="logo"
          onClick={() => history.goBack()}
        />
      </section>
      <section className="user-info-container">
        <section className="user-image-container">
          <img
            className="profile-pic"
            src={`/Assets/${data?.userDetails?.img}`}
            alt="User Profile"
          ></img>
        </section>
        <section className="socials">
          <section className="text">
            <h1 className="profile-name">{data?.userDetails?.name}</h1>
            <article className="aboutMe">
              <p>{data?.userDetails?.aboutMe}</p>
            </article>
            <Link
              className="linked-in"
              to={{
                pathname: data?.userDetails?.linkedIn,
              }}
              target="_blank"
            >
              - Visit my LinkedIn Page
            </Link>
            <br></br>
            <Link
              className="github"
              to={{ pathname: data?.userDetails?.github }}
              target="_blank"
            >
              - Checkout My Work on Github
            </Link>
            <p>{data?.userDetails?.email}</p>
          </section>
        </section>
      </section>
      <section className="users-plants-container">
        <h1>My Garden for GrowZone {data?.userDetails?.growZone}</h1>
        <section className="savedPlantsGrid">
          {data?.userDetails?.vegetableUsers.map((plant, index) => (
            <PlantCard
              key={index}
              id={plant.vegetable.id}
              name={plant.vegetable.name}
              img={plant.vegetable.image}
              userID={data?.userDetails?.id}
              destroyId={plant.id}
              destroyVegetableUser={deleteVegetable}
              saveIcon={saveIcon}
            />
          ))}
        </section>
      </section>
    </section>
  );
};
export default UserProfile;
