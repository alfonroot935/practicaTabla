<script  lang="ts" setup>
import { usetabla } from "@/store/Tablastore";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = usetabla();
const { datosTabla, tabladatos, refDatos, valid } = storeToRefs(store);

const headers = ref([
  { title: "index", key: "id" },
  { title: "Nombre", key: "nombre" },
  { title: "Apellidos", key: "apellidos" },
  { title: "Correo", key: "correo" },
  { title: "Teléfono", key: "numeroTelefono" },
  { title: "FeCha de REgistro", key: "fecha" },
  { title: "", key: "actions" },
]);
function agregarDatos() {
  store.pushAgregar();
}
const rulesRequired = (value) => {
  return value?.trim().length > 0 || "Campo Requerido";
};
const editarDato = (itemDato: any): void => {
  store.editarDato(itemDato.selectable);
};
const modificarDato = (): void => {
  store.modificarDato();
};
const eliminarDato = (itemDato: any): void => {
  store.eliminarDato(itemDato.selectable);
};
</script>



<template>
  <v-container>
    <v-form v-model="valid" ref="refDatos">
      <v-row>
        <v-col cols="12" md="3"
          ><v-text-field
            label="Ingresa tu nombre"
            v-model="datosTabla.nombre"
            :rules="[rulesRequired]"
          >
          </v-text-field
        ></v-col>
        <v-col cols="6"
          ><v-text-field
            label="Ingresa tus Apellidos"
            v-model="datosTabla.apellidos"
            :rules="[rulesRequired]"
          >
          </v-text-field
        ></v-col>
        <v-col cols="6"
          ><v-text-field
            label="Ingresa tu correo electrónico"
            v-model="datosTabla.correo"
            :rules="[rulesRequired]"
          >
          </v-text-field
        ></v-col>
        <v-col cols="6"
          ><v-text-field
            label="Ingresa tu numero de teléfono"
            v-model="datosTabla.numeroTelefono"
            :rules="[rulesRequired]"
          >
          </v-text-field
        ></v-col>
      </v-row>
      <nav>
        <v-btn color="blue" @click="agregarDatos" :disabled="!valid"
          >Agregar</v-btn
        >
        <v-btn color="blue" @click="modificarDato" v-show="datosTabla.id > 0">
          Modificar dato</v-btn
        >
      </nav>
      <v-data-table :headers="headers" :items="tabladatos">
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn color="yellow" @click="editarDato(item)"
            ><v-icon>mdi-pencil</v-icon></v-btn
          >
          <v-btn color="red" @click="eliminarDato(item)"
            ><v-icon>mdi-delete</v-icon></v-btn
          >
        </template>
      </v-data-table>
    </v-form>
  </v-container>
</template>
<style scope>
</style>