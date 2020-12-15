const users = [
  {
    username: "tony@gmail.com",
    secret: "password",
    firstName: "Tony",
    lastName: "Stark",
  },
  {
    username: "bruce@gmail.com",
    secret: "password",
    firstName: "Bruce",
    lastName: "Wayne",
  },
  {
    username: "banner@gmail.com",
    secret: "password",
    firstName: "Bruce",
    lastName: "Banner",
  },
  {
    username: "steve@gmail.com",
    secret: "password",
    firstName: "Steve",
    lastName: "Rogers",
  }
]

const login = (username, secret) => {
  if (!username || !secret) {
    throw new Error("Provide username and secret")
  }
  const user = users.find(user => user.username === username)
  if (user.secret === secret) {
    return;
  } else {
    throw new Error("Invalid credentails");
  }
}