// Get visible kids
const selectedKids = (kids, { text, showActive, showInactive, sortBy }) => {
  return kids.filter((kid) => {
    const firsNameMatch = kid.firstName.toLowerCase().includes(text.toLowerCase());
    const lastNameMatch = kid.lastName.toLowerCase().includes(text.toLowerCase());
    
    let show = false;
    if ((showActive === true) && (kid.isActive === true)) {
      show = true;
    };
    if ((showInactive === true) && (!!kid.isActive === false)) {
      show = true;
    };

    return (firsNameMatch || lastNameMatch) && show;
  }).sort((a, b) => {
    let sort = a.firstName.localeCompare(b.firstName);
    if (sort == 0){
      sort = a.lastName.localeCompare(b.lastName);
    }
    return sort;
  })
};

const selectAllKids = (kids, { text, showActive, showInactive, sortBy }) => {
  return kids.sort((a, b) => {
    let sort = a.firstName.localeCompare(b.firstName);
    if (sort == 0){
      sort = a.lastName.localeCompare(b.lastName);
    }
    return sort;
  })
};

export {selectAllKids, selectedKids };