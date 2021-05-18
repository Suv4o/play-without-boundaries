<template>
  <div>
    <main class="height">Story</main>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer/Footer.vue";
export default {
  components: {
    Footer,
  },
  middleware: "story",
};
</script>

<style lang="scss" scoped>
.height {
  height: 200vh;
}
</style>