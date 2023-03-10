<template>
  <Navbar />
  <div id="edit-profile">
    <v-form class="form">
      <h2>Edit info</h2>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="First name"
              required
              v-model="firstName"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field label="Last name" required v-model="lastName" />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field label="E-mail" required v-model="email" />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              label="Passowrd"
              required
              v-model="password"
              type="password"
            />
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field label="Cellphone" v-model="cellphone" />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-img src="https://cdn-icons-png.flaticon.com/512/149/149071.png">
      <v-tooltip activator="parent" location="bottom"
        >Change profile picture</v-tooltip
      >
    </v-img>
  </div>
  <div class="actions">
    <button class="btn btn-danger cancel-btn" @click="onCancel">Cancel</button>
    <button class="btn btn-warning" @click="onSave">Save</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Navbar from "../../components/Navbar.vue";
import MovieSection from "../../components/movies/MovieSection.vue";
import router from "../../router";
import { useUser } from "../../composables/useUser";

export default defineComponent({
  components: { MovieSection, Navbar },
  props: {
    user: { type: Object, default: () => {} },
  },
  setup() {
    const { user, setNewUser } = useUser();
    const onCancel = () => router.push("/profile");
    const onSave = () => {
      const newUser = {
        cellphone: cellphone.value,
        firstName: firstName.value,
        lastName: lastName.value,
        password: password.value,
        email: email.value,
      };
      setNewUser(newUser);
      router.push("/profile");
    };

    const firstName = ref(user.value.firstName);
    const lastName = ref(user.value.lastName);
    const cellphone = ref(user.value.cellphone);
    const password = ref(user.value.password);
    const email = ref(user.value.email);
    return {
      onCancel,
      user,
      onSave,
      firstName,
      lastName,
      cellphone,
      email,
      password,
    };
  },
});
</script>

<style lang="sass" scoped>
#edit-profile
  margin-top: 80px
  display: flex
  padding: 2em 2.5em
  .v-form
    width: 70%
    margin-right: 20px
.actions
  padding: 2em 3.5em
  width: 100%
  display: flex
  justify-content: flex-end
  .btn
    width: 100px
  .cancel-btn
    margin-right: 20px
</style>
