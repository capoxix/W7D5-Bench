export const createSit= sit => {
  return $.ajax({
    method: "POST",
    url: "/api/sits",
    data: { sit }
  });
};

export const fetchSits = () => {
  return $.ajax({
    method: "GET",
    url: "/api/sits",
    error: (err) => console.log(err)
  });
};
