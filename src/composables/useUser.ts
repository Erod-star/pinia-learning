import { storeToRefs } from "pinia";
import { ref } from "vue";
import { User } from "../interfaces/user";
import { useUserStore } from "../store/userStore";

export const useUser = () => {
  const userStore = useUserStore();

  const {
    firstName,
    lastName,
    email,
    password,
    cellphone,
    fullName,
    userPhoto,
    getFirstName,
  } = storeToRefs(userStore);

  const setNewUser = (user: User) => {
    userStore.editUser(user);
  };

  const resetUser = () => {
    userStore.resetUserState();
  };

  const user = ref({
    firstName,
    lastName,
    email,
    password,
    cellphone,
    fullName,
    userPhoto,
  });

  return {
    // ? Properties
    user,
    firstName,
    lastName,
    email,
    password,
    cellphone,
    userPhoto,
    fullName,
    getFirstName,

    // ? Methods
    setNewUser,
    resetUser,
  };
};
