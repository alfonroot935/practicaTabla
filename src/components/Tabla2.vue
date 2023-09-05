<script  lang="ts" setup>
import { usetabla2 } from "@/store/Tabla2store";
import { ref } from "vue";
import { storeToRefs } from "pinia";
const store = usetabla2();
const { formularioArreglo, tabla2, valid, refdatos } = storeToRefs(store);

function agregarDatos() {
  store.pushAgregar();
}
const editarDato = (itemDato: any): void => {
  store.editarDato(itemDato.selectable);
};
const modificarDato = (): void => {
  store.modificarDato();
};
const eliminarDato = (itemDato: any): void => {
  store.eliminarDato(itemDato.selectable);
};
const headers = ref([
  { title: "index", key: "id" },
  { title: "Nombre", key: "nombre" },
  { title: "Apellido", key: "apellido" },
  { title: "Correo electrónico", key: "correo" },
  { title: "Contraseña", key: "contrasenia" },
  { title: "Fecha de registro", key: "fecha" },
  { title: "", key: "actions" },
]);
const rulesRequired = (value) => {
  return value?.trim().length > 0 || "Campo requerido";
};
</script>
<template>
  <v-container>
    <v-form v-model="valid" ref="refdatos">
      <v-date-picker
        color="red"
        input-mode="keyboard"
        v-model="tabla2.fecha"
        :rules="[rulesRequired]"
      ></v-date-picker>
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field
            label="nombre"
            v-model="tabla2.nombre"
            :rules="[rulesRequired]"
          ></v-text-field
        ></v-col>
        <v-col cols="12" md="3">
          <v-text-field
            label="Apellido"
            v-model="tabla2.apellido"
            :rules="[rulesRequired]"
          ></v-text-field
        ></v-col>
        <v-col cols="12" md="3">
          <v-text-field
            label="correo electronico"
            v-model="tabla2.correo"
            :rules="[rulesRequired]"
          ></v-text-field
        ></v-col>
        <v-col cols="12" md="3">
          <v-text-field
            label="contraseña"
            v-model="tabla2.contrasenia"
            :rules="[rulesRequired]"
          ></v-text-field
        ></v-col>
      </v-row>
      <v-btn color="blue" @click="agregarDatos">Agregar</v-btn>
      <v-btn color="blue" v-show="tabla2.id > 0" @click="modificarDato"
        >Modificar datos</v-btn
      >
      <v-data-table :headers="headers" :items="formularioArreglo">
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn
            ><v-icon color="yellow" @click="editarDato(item)"
              >mdi mdi-pencil</v-icon
            ></v-btn
          >
          <v-btn
            ><v-icon color="red" @click="eliminarDato(item)"
              >mdi-delete</v-icon
            ></v-btn
          >
        </template></v-data-table
      >
    </v-form>
  </v-container>
</template>
<style scope>
</style>