export const isEmptyObj = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }

  return true;
};

export const getInitials = str =>
  (str.split(".")[0] + str.split(".")[1].split("")[0]).toUpperCase();
