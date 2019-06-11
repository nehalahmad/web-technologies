let checkLogin = ({ username, pass }) => {
  if (username !== "admin" || pass !== "root") {
    console.log("incorrect credentials");
  }
};

export let login = () => checkLogin({ username: "admin", pass: "admin" });
