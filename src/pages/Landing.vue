<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image: url('img/1.jpg')"
      >
      </parallax>
      <div class="golova">
        <div class="content-center brand">
          <h1 class="h1-seo">
            Аппаратчик газоразделения, аппаратчик полимеризации
          </h1>
           <div class="row justify-content-center">
        <div class="col-8">
          <el-carousel height="578px" arrow="always" :autoplay="false">
            <el-carousel-item>
              <img class="d-block" src="img/7/1.jpg" />
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/7/2.jpg" />
            </el-carousel-item>
             <el-carousel-item>
              <img class="d-block" src="img/7/3.jpg" />
            </el-carousel-item>
             <el-carousel-item>
              <img class="d-block" src="img/7/4.jpg" />
            </el-carousel-item>
             <el-carousel-item>
              <img class="d-block" src="img/7/5.jpg" />
            </el-carousel-item>
             <el-carousel-item>
              <img class="d-block" src="img/7/6.jpg" />
            </el-carousel-item>
             <el-carousel-item>
              <img class="d-block" src="img/7/7.jpg" />
            </el-carousel-item>
             <el-carousel-item>
              <img class="d-block" src="img/7/8.jpg" />
            </el-carousel-item>
             <el-carousel-item>
              <img class="d-block" src="img/7/9.jpg" />
            </el-carousel-item>
			      <el-carousel-item>
              <img class="d-block" src="img/7/10.jpg" />
            </el-carousel-item>
			      <el-carousel-item>
              <img class="d-block" src="img/7/11.jpg" />
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/7/12.jpg" />
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/7/13.jpg" />
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="img/7/14.jpg" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, CarouselItem } from 'element-ui';

export default {
  name: "profile",
  data() {
    return {};
  },
  components: {
      [Carousel.name]: Carousel,
	    [CarouselItem.name]: CarouselItem,
  },
};
</script>
<style scoped>
.page-header .content-center {
    max-width: 1200px;
}
</style>
