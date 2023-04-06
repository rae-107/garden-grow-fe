import "./Plants.css";
import PlantCard from "../PlantCard/PlantCard";
import PropTypes from "prop-types";
import NavBar from "../NavBar/NavBar";
import { useEffect } from "react";
import beetLogo from "../../Images/beet3_720.png";
import { Link } from "react-router-dom";
import { SAVE_PLANT, DELETE_PLANT } from "../../Graphql/Mutations";
import { useMutation, useQuery } from "@apollo/client";
import { LOAD_USER, LOAD_PLANTS } from "../../Graphql/Queries";

const Plants = ({
  plants,
  heading,
  growzone,
  loadPlants,
  zipcode,
  userId,
  userSavedList,
  isLoggedIn,
  handleLogout,
  updateUserSaved,
  saveIcon
}) => {

  const { error, data } = useQuery(LOAD_USER, {
    variables: { userId: userId },
  });

  useEffect(() => {
    loadPlants({ variables: { zipcode: zipcode } });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    updateUserSaved(data?.userDetails?.vegetableUsers);
    // eslint-disable-next-line
  }, [data]);

  const [createVegetableUser] = useMutation(SAVE_PLANT, {
    refetchQueries: [{ query: LOAD_USER, variables: { userId: userId } }],
  });

  const addVegetable = (veggieId) => {
    const savedVegetables = userSavedList.map((obj) => {
      return obj.vegetable.id;
    });
    
    if (!savedVegetables.includes(veggieId)) {
      createVegetableUser({
        variables: {
          userId: userId,
          vegetableId: veggieId,
        },
      });
    }
    console.log(userSavedList);
  };

  const [destroyVegetableUser] = useMutation(DELETE_PLANT, {
    refetchQueries: [{ query: LOAD_USER, variables: { userId: userId } }],
  });

  const deleteVegetable = (veggieUserId) => {
    destroyVegetableUser({
      variables: {
        vegetableUserId: veggieUserId,
      },
    });
  };

  const plantCards = plants.map((plant) => {
  if (userSavedList) {
    const displaySaveIcon = userSavedList.some(
      (savedPlant) => savedPlant.vegetable.id === plant.id
    );

    let destroyId

    if (displaySaveIcon) {
      destroyId = userSavedList.find(savedPlant => savedPlant.vegetable.id === plant.id).id;
    }

    return (
      <PlantCard
        destroyVegetableUser={deleteVegetable}
        destroyId={destroyId && destroyId}
        key={plant.id}
        isLoggedIn={isLoggedIn}
        id={plant.id}
        name={plant.name}
        img={plant.image}
        growzone={growzone}
        userID={userId}
        createVegetableUser={addVegetable}
        saveIcon={displaySaveIcon}
      />
    );}
    else {
      return (
        <PlantCard
          key={plant.id}
          isLoggedIn={isLoggedIn}
          id={plant.id}
          name={plant.name}
          img={plant.image}
          growzone={growzone}
          userID={userId}
          createVegetableUser={addVegetable}
          saveIcon={saveIcon}
        />
   ) }
  });

  return (
    <section className="plants-page">
      <section className="logo-box">
        <NavBar
          isLoggedIn={isLoggedIn}
          // updateUser={updateUser}
          handleLogout={handleLogout}
        />
        <Link to="/">
          <img className="beet-logo" src={beetLogo} alt="beet" />
        </Link>
      </section>
      <h1 className="plants-title">{heading}</h1>
      <section className="plants-display-grid">{plantCards}</section>
    </section>
  );
};

export default Plants;

Plants.propTypes = {
  plants: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
  growzone: PropTypes.string.isRequired,
};