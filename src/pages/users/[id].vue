<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute('/users/[id]')
</script>

<template>
  <h1>User</h1>
  <p>id: {{ route.params.id }}</p>
</template>
