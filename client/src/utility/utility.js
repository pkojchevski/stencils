import update from "immutability-helper";

export const isEmptyObj = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }

  return true;
};

export const getInitials = str =>
  (str.split(".")[0] + str.split(".")[1].split("")[0]).toUpperCase();

export const updateSzablony = (szablon, szablony) => {
  const szablonIndex = szablony.findIndex(c => c.id === szablon.id);
  // console.log("szablon:", szablon);
  const updatedSzablon = update(szablony[szablonIndex], {
    szablon: { $set: szablon }
  });
  // console.log("udatedSzablon:", updatedSzablon);

  const newSzablony = update(szablony, {
    $splice: [[szablonIndex, 1, updatedSzablon]]
  });
  return newSzablony;
};
