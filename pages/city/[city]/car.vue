<template>
  <div>
    <NavBar />
    <div
        class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    >
      <div class="mt-32 flex">
        <CarSideBar />
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute()
useHead({
  title: `${route.params.make ? route.params.make : 'Cars'} in ${route.params.city}`
})
// import NavBar from "/components/NavBar";
// import CarSideBar from "/components/Car/SideBar";
// import CarCards from "/components/Car/Cards";
// export default {
//   components: {NavBar, CarCards, CarSideBar}
// }
</script>