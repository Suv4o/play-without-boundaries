<template>
  <div>
    <main>
      <Header />
      <SectionMoveOne />
      <SectionHearts />
      <SectionMoveTwo />
      <SectionBreak />
      <SectionLatestNews />
      <SectionNews />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Home/Header.vue";
import SectionMoveOne from "@/components/Home/Section-Move-One.vue";
import SectionHearts from "@/components/Home/Section-Hearts.vue";
import SectionMoveTwo from "@/components/Home/Section-Move-Two.vue";
import SectionBreak from "@/components/Home/Section-Break.vue";
import SectionLatestNews from "@/components/Home/Section-Latest-News.vue";
import SectionNews from "@/components/Home/Section-News.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  components: {
    Header,
    SectionMoveOne,
    SectionHearts,
    SectionMoveTwo,
    SectionBreak,
    SectionLatestNews,
    SectionNews,
    Footer,
  },
  middleware: "home",
};
</script>

<style></style>
