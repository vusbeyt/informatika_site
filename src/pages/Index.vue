<template>
  <div>
    <div class="page-header clear-filter" filter-color="blue">
      <parallax
        class="page-header-image"
        style="background-image: url('img/1.jpg')"
      ></parallax>
      <div class="padding">
      <h3 class="text1">Электронный </h3> 
      <h3 class="text3">учебно-методический комплекс</h3>
      <h3 class="text2"> по "Прикладной информатике"</h3>
      </div>
      <div class="container">
        <div class="content-center brand">
        </div>
      </div>
    </div>
    <!--    <signup-form></signup-form>     !-->
    <!-- Если что, вернуть в script
import SignupForm from "./components/SignupForm";
import { Parallax } from "@/components";
import BasicElements from "./components/BasicElementsSection";
import Navigation from "./components/Navigation";
import TabsSection from "./components/Tabs";
import ProgressPagination from "./components/ProgressPagination";
import Notifications from "./components/Notifications";
import Typography from "./components/Typography";
import JavascriptComponents from "./components/JavascriptComponents";
import CarouselSection from "./components/CarouselSection"; 
!-->
    <!-- Если что, вернуть в export default
    SignupForm,
    Parallax,
    BasicElements,
    Navigation,
    TabsSection,
    ProgressPagination,
    Notifications,
    Typography,
    JavascriptComponents,
    CarouselSection,
!-->
  </div>
</template>
<script>
</script>
<style>
.padding{
  padding: 250px;
}
.text1{
  font-size: 2rem;
  margin-left: 20%;
  font-weight: bold;
  
}
.text2{
  font-size: 2rem;
  margin-left: 11%;
  font-weight: bold;
}
.text3{
  font-size: 2rem;
  margin-left: 10%;
  font-weight: bold;
}
</style>