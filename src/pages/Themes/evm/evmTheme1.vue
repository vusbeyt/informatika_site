<template>
  <div class="page-header clear-filter">
    <div
      style="position: fixed; left: 0; top: 0; width: 100%; height: 100%; background-image: url('img/1.jpg'); max-height: 999px;"
    ></div>
    <div class="container">
      <h3 class="title">Тема 1.</h3>
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
                              Теоретический раздел
                            </template>
                            <p class="blockquote blockquote-primary">
                              <strong
                                ><strong class="name">Иfadas</strong><br />
                                dasas
                              </strong>
                            </p>
                          </tab-pane>
                          <tab-pane class="text-color">
                            <template slot="label">
                              Практический раздел
                            </template>
                            <p class="blockquote blockquote-primary">
                              <strong
                                ><strong
                                  ><b>Практическая работа №1</b><br
                                /></strong>
                                dasdass
                              </strong>
                            </p>
                          </tab-pane>
                          <tab-pane class="text-color">
                            <template slot="label">
                              Вспомогательный раздел
                            </template>
                            <p class="blockquote blockquote-primary">
                              <strong
                                ><strong>
                                  asdas
                                  <br
                                /></strong>
                              </strong>
                            </p>
                          </tab-pane>
                          <tab-pane class="text-color">
                            <template slot="label">
                              Раздел контроля
                            </template>
                            <p class="blockquote blockquote-primary">
                              <strong
                                ><strong
                                  ><b>Вопросы для самоконтроля</b><br
                                /></strong>
                                dasdas
                              </strong>
                            </p>
                            <p class="blockquote blockquote-primary-new">
                              <strong
                                ><strong class="name"
                                  ><a
                                    class="a-href"
                                    target="_blank"
                                    href="https://onlinetestpad.com/ru/test/6266-informacionnye-tekhnologii-v-professionalnoj-deyatelnosti-promezhutochnyj-k"
                                    >Тест 1</a
                                  ></strong
                                ></strong
                              ><br />
                              <strong
                                ><strong class="name"
                                  ><a
                                    class="a-href"
                                    target="_blank"
                                    href="https://testedu.ru/test/informatika/11-klass/informaczionnyie-texnologii-v-professionalnoj-deyatelnosti.html"
                                    >Тест 2</a
                                  ></strong
                                ></strong
                              ><br />
                              <strong
                                ><strong class="name"
                                  ><a
                                    class="a-href"
                                    target="_blank"
                                    href="https://konstruktortestov.ru/test-15156"
                                    >Тест 3</a
                                  ></strong
                                ></strong
                              ><br />
                            </p>
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
