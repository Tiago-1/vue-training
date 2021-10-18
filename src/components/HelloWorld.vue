<template>
  <div class="hello">
    <div class="card has-background-white-ter	" v-cloak>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Text input"
            v-model="usuario.name"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Last Name</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-success"
            type="text"
            placeholder="Text input"
            v-model="usuario.lastname"
          />
          <span class="icon is-small is-left">
            <ion-icon :name="icon.heart"></ion-icon>
          </span>
          <span class="icon is-small is-right">
            <ion-icon :name="icon.heart_outline"></ion-icon>
          </span>
        </div>
        <p class="help is-success">This lastname is available</p>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-danger"
            type="email"
            placeholder="Email input"
            v-model="usuario.email"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p class="help is-danger">This email is invalid</p>
      </div>

      <div class="field">
        <label class="label">Telefono</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-danger" type="phone" v-model="usuario.phone" />
          <span class="icon is-small is-left">
            <ion-icon :name="icon.phone"></ion-icon>
          </span>
          <span class="icon is-small is-right">
            <ion-icon :name="icon.phone"></ion-icon>
          </span>
        </div>
        <p class="help is-danger">This telefono is invalid</p>
      </div>

      <div class="field">
        <label class="label">Pass</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input is-danger"
            type="password"
            v-model="usuario.password"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p class="help is-danger">This password is invalid</p>
      </div>

      <div class="field">
        <div class="control">
          <label for="">Usuario Activo? </label>
          <label class="radio">
            <input type="radio" name="question" />
            Si
          </label>
          <label class="radio">
            <input type="radio" name="question" />
            No
          </label>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Agregar</button>
        </div>

        <div class="control">
          <button class="button is-link is-light" @click="clearForm()">
            Cancel
          </button>
        </div>
      </div>
    </div>

    <table class="table card container">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Telefono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" class="upperCase has-background-light">
          <td>{{ user.id }}</td>
          <td>{{ user.nombre }}</td>
          <td>{{ user.apellido }}</td>
          <td>{{ user.email }}</td>
          <td>(646) {{ user.telefono }}</td>
          <td>
            <button class="button is-info">Editar</button>
            <button @click="deleteUser(user.id)" class="button is-danger">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from "@/service/api";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      users: [],
      usuario: {},
      icon: {
        heart: "heart",
        heart_outline: "heart-outline",
        phone: "call",
      },
    };
  },
  filters: {
    upper(word) {
      return word.toString().toUpperCase();
    },
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      this.users = await api.users.list();
    },
    async deleteUser(id) {
      await api.users.delete(id);
      this.getUsers();
    },
    addUser() {
      console.log(this.usuario);
    },
    clearForm() {
      this.usuario = new Object();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
[v-cloak] {
  display: none;
}

.hello {
  margin: 20px;
  display: flex;
  flex-direction: row;
}
.card {
  height: auto;
  padding: 20px;
  margin: 10px;
  border: 1px solid rgb(219, 219, 219);
}
table{
  td{
    white-space: nowrap;
  }
}
button {
  margin: 5px;
}
.upperCase {
  text-transform: uppercase;
}
.lowerCase {
  text-transform: lowercase;
}
</style>
