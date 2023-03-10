import { defineStore } from "pinia";
import { User } from "../interfaces/user";

interface UserStore {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  cellphone: String;
  userPhoto: String;
}

export const useUserStore = defineStore("user", {
  state: (): UserStore => {
    return {
      firstName: "Edson",
      lastName: "Rodriguez",
      email: "erodstardev@gmail.com",
      password: "Password1!",
      cellphone: "312113597",
      userPhoto: "",
    };
  },
  actions: {
    editUser(user: User) {
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.password = user.password;
      this.cellphone = user.cellphone || "";
      this.email = user.email;
      this.userPhoto = user.photo || "";
    },
    resetUserState() {
      this.firstName = "Edson";
      this.lastName = "Rodriguez";
      this.password = "Password1!";
      this.cellphone = "312113597";
      this.email = "erodstardev@gmail.com";
      this.userPhoto = "";
    },
  },
  getters: {
    getFirstName: (state) => state.firstName,
    fullName: (state) => state.firstName + " " + state.lastName,
  },
});
