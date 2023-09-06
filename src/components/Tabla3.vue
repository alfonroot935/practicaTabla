<script  lang="ts" setup>
import { ref } from "vue";
const pagoMateria = ref(false);
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3"
        ><v-text-field label="Nombre"></v-text-field
      ></v-col>
      <v-col cols="12" md="3">
        <v-text-field label="Apellidos"></v-text-field
      ></v-col>
      <v-col cols="12" md="3"
        ><v-autocomplete
          label="Materia"
          :items="[
            'Matematicas',
            'Español',
            'Historia',
            'Ciencias naturales',
            'Geografia',
            'Etica',
          ]"
        ></v-autocomplete
      ></v-col>
      <v-col cols="12" md="3"
        ><v-file-input label="Insertar imagen" accept="image/*"></v-file-input
      ></v-col>
      <v-col cols="12" md="3"
        ><v-checkbox label="pago de materia" v-model="pagoMateria"></v-checkbox
      ></v-col>
      <v-col cols="12" md="3"
        ><v-text-field
          v-show="pagoMateria == true"
          label="Numero de pago"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-data-table></v-data-table>
  </v-container>
</template>
<style scope>
</style>