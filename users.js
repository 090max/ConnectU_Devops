//Manage users joining in ,signing out

const { use } = require("chai");

var users = [];

const addUser = ({ id, name, room }) => {
  //Kapil Israni == kapilisrani

  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.room == room && user.name == name
  );

  if (existingUser) {
    return { error: "Username already Taken" };
  }

  //If no user with simmillar details was found then
  const user = { id, name, room };
  users.push(user);

  return { user: user };
};

const removeUser = (id, users1 = []) => {
  if (users1.length != 0) users = users1;
  const index = users.findIndex((user) => user.id == id);

  if (index != -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id, users1 = []) => {
  if (users1.length != 0) users = users1;

  ans = users.find((user) => user.id == id);
  if (typeof ans == "undefined") return {};
  return ans;
};

const getUsersInRoom = (room, users1 = []) => {
  if (users1.length != 0) users = users1;

  ans = users.filter((user) => user.room == room);
  if (typeof ans == "undefined") return {};
  return ans;
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };

// var id = 1,
//   name = "Kapil",
//   room = "1234";
// console.log(addUser({ id, name, room }));
