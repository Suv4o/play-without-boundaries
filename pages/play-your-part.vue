<template>
  <div>
    <main class="height">Play Your Part</main>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer/Footer.vue";
export default {
  components: {
    Footer,
  },
  middleware: "playYourPart",
};
</script>

<style lang="scss" scoped>
.height {
  height: 200vh;
}
</style>