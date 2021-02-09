<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
          <ul>
            <li>Разработчик сайта</li>
            <li class="up">Дударев И.И. ( гр. 197 )</li>
             </ul>
            <ul>
            <li>Руководитель проекта </li>
            <li class="down">Антоненкова Ирина Павловна </li>
          </ul>
      </nav>
      <div class="copyright">НГПК &copy; {{ year }}</div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style>
.up{
margin-left: 4.3rem;
}
.down{
margin-left: 2.5rem;
}
</style>
