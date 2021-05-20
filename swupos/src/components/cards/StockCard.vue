<template>
  <v-card>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>{{ title }}</v-list-item-title>
        <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar size="80" :color="avatar_bg">
        <slot name="avatar_icon"></slot>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "StockCard",
  props: {
    title: String,
    subtitle: String,
    avatar_bg: String,
    icon: String,
  },
};
</script>

<style></style>
