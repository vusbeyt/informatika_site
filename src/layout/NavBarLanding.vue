<template>
  <!-- <navbar
    class="new-nav-bar"
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <div class="golova">
        <router-link to="/">
          Главная страница 
        </router-link>
      </div>
      <div class="golova2">
        <template>
      <div class="new-navbar">
        <drop-down class="nav-item" title="Темы">
           <router-link to="/Themes1">
              <a class="dropdown-item"><span>1. Информационные ресурсы в профессиональной деятельности </span></a>
              </router-link>
              <router-link to="/Themes2">
              <a class="dropdown-item"><span>2. Информационная безопасность и уровни её обеспечения </span> </a>
              </router-link>
              <router-link to="/Themes3">
              <a class="dropdown-item"><span>3. Электронные документы и способы их обработки</span> </a>
              </router-link>
              <router-link to="/Themes31">
              <a class="dropdown-item"><span>3.1. Создание документов с помощью шаблонов в текстовом редакторе WORD</span> </a>
              </router-link>
              <router-link to="/Themes32">
              <a class="dropdown-item"><span>3.2. Решение практических задач с использование формул и функций в MS EXEl</span> </a>
              </router-link>
              <router-link to="/Themes4">
              <a class="dropdown-item"><span>4. Информационные технологии в профессиональной деятельности (программа CorelDRAW) </span> </a>
              </router-link>
        </drop-down>
      </div>
        </template>
      </div>
       <div class="golova3">
        <template>
      <div class="new-navbar">
        <drop-down class="nav-item" title="Темы">
           <router-link to="/evmTheme1">
                  <a class="dropdown-item"><span>1. Оргтехника</span></a>
                </router-link>
                <router-link to="/evmTheme2">
                  <a class="dropdown-item"
                    ><span>2. Основы вычислительной техники</span>
                  </a>
                </router-link>
                <router-link to="/evmTheme3">
                  <a class="dropdown-item"
                    ><span>3. Компьютерные сети</span>
                  </a>
                </router-link>
                <router-link to="/evmTheme4">
                  <a class="dropdown-item"
                    ><span>4. Операцонные системы</span></a
                  >
                </router-link>
                <router-link to="/evmTheme5">
                  <a class="dropdown-item"><span>5. Электронный офнис</span></a>
                </router-link>
        </drop-down>
      </div>
        </template>
      </div>
    </template>
  </navbar> -->
  <div></div>
</template> 

<script>
import { DropDown, Navbar } from "@/components";
import { Popover } from "element-ui";
export default {
  name: "main-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number,
  },
  components: {
    DropDown,
    Navbar,
    [Popover.name]: Popover,
  },
};
</script>

<style scoped>
.new-nav-bar {
  transition: unset;
  background: transparent !important;
}
.new-navbar {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  white-space: nowrap;
}
.fixed-top {
  position: absolute;
}
.golova2 {
  font-size: 20px;
}
.golova {
  font-size: 20px;
}
.golova3 {
  font-size: 20px;
}
</style>


