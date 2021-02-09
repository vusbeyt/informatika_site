<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
       <div>
        <router-link to="/">
          <font> Главная страница </font>
        </router-link>
        <template>
      <div class="new-navbar">
        <drop-down class="nav-item" title="Темы">
         <router-link to="/SlesarT1">
              <a class="dropdown-item"><span>1. Технология слесарных работ</span></a>
              </router-link>
              <router-link to="/SlesarT2">
              <a class="dropdown-item"><span>2. Допуски, посадки и технические измерения</span> </a>
              </router-link>
              <router-link to="/SlesarT3">
              <a class="dropdown-item"><span>3. Слесарно-сборочные работы</span> </a>
              </router-link>
              <router-link to="/SlesarT4">
              <a class="dropdown-item"><span>4. Монтажные и электромонтажные работы</span> </a>
              </router-link>
              <router-link to="/SlesarT5">
              <a class="dropdown-item"><span>5. Основы метрологии и измерений</span> </a>
              </router-link>
              <router-link to="/SlesarT6">
              <a class="dropdown-item"><span>6. Контрольно-измерительные приборы</span> </a>
              </router-link>
              <router-link to="/SlesarT7">
              <a class="dropdown-item">7. </a>
              </router-link>
              <router-link to="/SlesarT8">
              <a class="dropdown-item">8. Весовые устройства. Измерение и контроль весовых величин </a>
              </router-link>
              <router-link to="/SlesarT9">
              <a class="dropdown-item">9. Устройство средств автоматизации систем автоматического регулирования и систем автоматического управления </a>
              </router-link>
              <router-link to="/SlesarT10">
              <a class="dropdown-item">10. Надежность и работоспособность средств измерений и средств автоматики </a>
              </router-link>
              <router-link to="/SlesarT11">
              <a class="dropdown-item">11. Ремонт контрольно-измерительных приборов и средств автоматики </a>
              </router-link>
              <router-link to="/SlesarT12">
              <a class="dropdown-item">12. Служба метрологии и автоматизации в организации  </a>
              </router-link>
              <router-link to="/SlesarT13">
              <a class="dropdown-item">13. Стандартизация и контроль качества продукции </a>
              </router-link>
        </drop-down>
     </div>
        </template>
      </div>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar,} from "@/components";
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
.custom_title {
  width: 100%;
  max-width: 380px;
  white-space: unset;
  text-align: center;
  color: white;
}
.new-navbar {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  white-space: nowrap;
}
.new-navbar-border {
  text-transform: uppercase;
  font-size: 0.8571em;
  padding-top: 0.5rem;
  line-height: 1.625rem;
  padding: 5%;
}
</style>
