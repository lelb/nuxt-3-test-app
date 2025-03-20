<template>
  <div>
    <NavBar />
    <CarHero />
  </div>
</template>

<!--<script setup>-->
<!--import NavBar from '/components/NavBar.vue'-->

<!--// export default {-->
<!--//   name: '',-->
<!--//   components: {-->
<!--//     NavBar-->
<!--//   }-->
<!--// }-->
<!--</script>-->
<script>
import CarHero from "/components/Car/Hero";
import NavBar from "/components/NavBar";
export default {
  components: {NavBar, CarHero}
}
</script>

