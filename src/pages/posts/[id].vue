<script lang="ts">
import { defineBasicLoader } from 'unplugin-vue-router/data-loaders/basic'

export const usePostData = defineBasicLoader('/posts/[id]', async (route) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
  return fetch(url).then((res) => res.json())
})
</script>

<script setup lang="ts">
const { data, isLoading, error, reload } = usePostData()
</script>

<template>
  <div v-if="isLoading">読込中</div>
  <template v-else>
    <h1>{{ data.title }}</h1>
    <div>{{ data.body }}</div>
  </template>
</template>
