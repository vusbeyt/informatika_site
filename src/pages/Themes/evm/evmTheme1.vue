<template>
  <div class="page-header clear-filter">
    <div
      style="position: fixed; left: 0; top: 0; width: 100%; height: 100%; background-image: url('img/1.jpg'); max-height: 999px;"
    ></div>
    <div class="container">
      <h3 class="title">Тема 1. Оргтехника</h3>
      <div class="section section-tabs">
        <div class="container">
          <div class="row">
            <div class="card">
              <div id="typography">
                <div class="row">
                  <div class="col-md-12">
                    <div class="typography-line"></div>
                    <div class="typography-line">
                      <blockquote>
                        <tabs
                          centered
                          type="neutral"
                          tab-nav-wrapper-classes="card-header"
                          tab-content-classes="card-body"
                          data-background-color="darkgreen"
                        >
                          <tab-pane class="text-color">
                            <template slot="label">
                              Книги
                            </template>
                            <details>
                              <summary>
                                <p class="blockquote blockquote-primary">
                                  <strong
                                    >Дьяконов В. П. БЫТОВАЯ И ОФИСНАЯ ТЕХНИКА
                                    СВЯЗИ
                                  </strong>
                                </p>
                              </summary>
                              <iframe
                                src="https://docs.google.com/document/d/1NguntvC7t2DF2bcKU2_r52qlj6B20nhlT56COj4n83s/preview"
                                width="100%"
                                height="1000"
                              ></iframe>
                            </details>
                            <details>
                              <summary>
                                <p class="blockquote blockquote-primary">
                                  <strong
                                    >Пархоменко В. П. ОСНОВЫ ТЕХНИЧЕСКОГО
                                    ТВОРЧЕСТВА</strong
                                  >
                                </p>
                              </summary>
                              <iframe
                                src="https://docs.google.com/document/d/16NLj9j32jB1YQ9aZ8BjidWIHv_ruDAkvjbWWTKSYjzk/preview"
                                width="100%"
                                height="1000"
                              ></iframe>
                            </details>
                            <details>
                              <summary>
                                <p class="blockquote blockquote-primary">
                                  <strong>Коджаспирова Г. М.</strong>
                                </p>
                              </summary>
                              <iframe
                                src="https://drive.google.com/file/d/1GzFhPd3HQj-HHcKFhCYoDaKgX9E6-wLm/preview"
                                width="100%"
                                height="1000"
                              ></iframe>
                            </details>
                          </tab-pane>
                        </tabs>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, Tabs, TabPane } from "@/components";

export default {
  components: {
    [Button.name]: Button,
    Tabs,
    TabPane,
  },
};
</script>
<style scoped>
details > summary {
  list-style: none;
}
.text-color {
  color: black;
}
.name {
  font-size: 1.5rem;
}
.checkbox-cell {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.typography {
  font-size: 24px;
}
.blockquote {
  padding: 20px;
  font-size: 1.3rem;
  line-height: 1.8;
}
.blockquote.blockquote-primary {
  color: black;
  border-color: black;
}
.typography-line {
  padding-left: 0%;
  margin-bottom: 0px;
  position: relative;
  display: block;
  width: 100%;
}
.tab-content.tab-content-padding {
  padding: 20px;
}
.container {
  max-width: 1600px;
}
.el-carousel__container {
  position: relative;
  height: 730px;
}
.card {
  margin-bottom: 0px;
}
.a-href {
  color: black;
}
</style>
