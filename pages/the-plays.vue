<template>
  <div>
    <main>
      <Header />
      <SectionBreakOne />
      <SectionUpcomingPlay />
      <SectionBreakTwo />
      <SectionPastPlays />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/ThePlays/Header.vue";
import SectionBreakOne from "@/components/ThePlays/Section-Break-One.vue";
import SectionUpcomingPlay from "@/components/ThePlays/Section-Upcoming-Play.vue";
import SectionBreakTwo from "@/components/ThePlays/Section-Break-Two.vue";
import SectionPastPlays from "@/components/ThePlays/Section-Past-Plays.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  components: {
    Header,
    SectionBreakOne,
    SectionUpcomingPlay,
    SectionBreakTwo,
    SectionPastPlays,
    Footer,
  },
  middleware: "thePlay",
};
</script>

<style lang="scss" scoped></style>
