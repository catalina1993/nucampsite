import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
  return CAMPSITES;
};

// export const selectRandomCampsite = () => {
//   return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// };

export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => campsite.id === id);
};
