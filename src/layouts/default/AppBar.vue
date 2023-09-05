<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />

      Tablas prueba
      <nav>
        <router-link :to="{ name: 'TablaDinamica' }"
          >Tabla dinamica</router-link
        >
        |
        <router-link :to="{ name: 'Tabla2' }">Tabla 2</router-link> |
        <router-link :to="{ name: 'Tabla3' }">Tabla 3</router-link>
      </nav>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
//
</script>
