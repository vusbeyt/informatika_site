<template>
  <div
    class="section-1 section-examples" style="background-image: linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url('img/1.jpg')" >
    <div class="space-50"></div>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <router-link to="/landing" target="_blank">
            <img src="img/landing.jpg" alt="Image"  class="img-raised" />
          </router-link>
          <router-link to="/landing" class="Knopka border-knopka"
            >Аппаратчик газоразделения, аппаратчик полимеризации
          </router-link>
        </div>
        <div class="col">
          <router-link to="/profile" target="_blank">
            <img src="img/profile.jpg" alt="Image" class="img-raised" />
          </router-link>
          <router-link to="/profile" class="Knopka border-knopka"
            >Слесарь по контрольно-измерительным приборам и
            автоматике</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style>
.section-1 {
    padding: 9%;
    margin-top: -13%;
    margin-left: -17%;
    position: relative;
    background: #ffffff;
    width: 141%;
    border-radius: 3%;
}
a {
  color: rgb(255, 255, 255);
}
.Knopka {
  color: #ffffff;
  display: block;
}
.border-knopka {
    font-size: 21px;
    border: 1px solid;
    border-color: #ffffff;
    padding: 10px 22px;
    background-color: transparent;
    border-radius: 100px !important;
    border-width: 2px;
    padding: 0px 0px;
}
.img-raised {
    border: 3px solid;
    border-color: #ffffff;
}
</style>
