<template>
  <div>
    <main>
      <Header />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Experiences/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  middleware: "experiences",
};
</script>

<style lang="scss" scoped>
</style>