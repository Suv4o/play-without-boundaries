<template>
  <div>
    <main class="height">Latest</main>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer/Footer.vue";
export default {
  components: {
    Footer,
  },
  middleware: "latest",
};
</script>

<style lang="scss" scoped>
.height {
  height: 200vh;
}
</style>