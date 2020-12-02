const expect = require("chai").expect;
const should = require("chai").should();

const { addUser, removeUser, getUser, getUsersInRoom } = require("../users.js");

describe("users.js tests", () => {
  describe("add User Test", () => {
    it("should equal to user object", () => {
      var id = 1,
        name = "kapil",
        room = "1234";
      const result = addUser({ id, name, room });
      const obj = { id, name, room };
      expect(result.user).to.deep.equal(obj);
    });
  });

  describe("Remove Users Test", () => {
    it("should equal to removed user", () => {
      var users_dict = [
        { id: 1, name: "kapil", room: "1234" },
        { id: 2, name: "aditya", room: "1112" },
        { id: 3, name: "Ajay", room: "1901" },
      ];
      var result_dict = { id: 1, name: "kapil", room: "1234" };
      var result = removeUser(1, users_dict);
      expect(result).to.deep.equal(result_dict);
    });
  });

  describe("Find Users Test", () => {
    it("should equal the found user", () => {
      var users_dict = [
        { id: 1, name: "kapil", room: "1234" },
        { id: 2, name: "aditya", room: "1112" },
        { id: 3, name: "Ajay", room: "1901" },
      ];
      var result_dict = { id: 1, name: "kapil", room: "1234" };

      var result = getUser(1, users_dict);
      expect(result).to.deep.equal(result_dict);
    });

    it("should equal to empty object", () => {
      var users_dict = [
        { id: 1, name: "kapil", room: "1234" },
        { id: 2, name: "aditya", room: "1112" },
        { id: 3, name: "Ajay", room: "1901" },
      ];
      var result_dict = {};

      var result = getUser(5, users_dict);
      expect(result).to.deep.equal(result_dict);
    });
  });

  describe("Find Users By Room Test", () => {
    it("should equal the found user", () => {
      var users_dict = [
        { id: 1, name: "kapil", room: "1234" },
        { id: 2, name: "aditya", room: "1234" },
        { id: 3, name: "Ajay", room: "1901" },
      ];
      var result_dict = [users_dict[0], users_dict[1]];

      var result = getUsersInRoom("1234", users_dict);
      expect(result).to.deep.equal(result_dict);
    });

    it("should equal to empty array", () => {
      var users_dict = [
        { id: 1, name: "kapil", room: "1234" },
        { id: 2, name: "aditya", room: "1112" },
        { id: 3, name: "Ajay", room: "1901" },
      ];
      var result_dict = [];

      var result = getUsersInRoom("10934", users_dict);
      expect(result).to.deep.equal([]);
    });
  });
});
