<template >
  <NavBar />
  <div
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
  >
    <CarDetailHero />
    <CarDetailAttributes />
    <CarDetailDescription />
    <CarDetailContact />
  </div >
</template >
<script >
import NavBar from "/components/NavBar";
import CarDetailHero from "/components/Car/Detail/Hero";
import CarDetailAttributes from "/components/Car/Detail/Attributes";
import CarDetailDescription from "/components/Car/Detail/Description";
import CarDetailContact from "д/components/Car/Detail/Contact";

export default {
  components: {CarDetailContact, CarDetailDescription, CarDetailAttributes, CarDetailHero, NavBar}
}
</script >