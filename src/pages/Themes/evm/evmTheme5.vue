<template>
  <div class="page-header clear-filter">
    <div
      style="position: fixed; left: 0; top: 0; width: 100%; height: 100%; background-image: url('img/1.jpg'); max-height: 999px;"
    ></div>
    <div class="container">
      <h3 class="title">Тема 5. Электронный офиc</h3>
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
                                    >В. П. Семенов EXCEL 2013 НА ПРИМЕРАХ
                                  </strong>
                                </p>
                              </summary>
                              <iframe
                                src="https://drive.google.com/file/d/1pZISXJtDX2D3aamCGZfKyVH0TnxxSMVk/preview"
                                width="100%"
                                height="1000"
                              ></iframe>
                            </details>
							                            <details>
                              <summary>
                                <p class="blockquote blockquote-primary">
                                  <strong
                                    >Ю. Бекаревич MS OFFICE ACCESS 2016 САМОУЧИТЕЛЬ  
                                  </strong>
                                </p>
                              </summary>
                              <iframe
                                src="https://drive.google.com/file/d/1S-jjW3HayiHbVLbel1VShkJSU3-qfikc/preview"
                                width="100%"
                                height="1000"
                              ></iframe>
                            </details>
							                            <details>
                              <summary>
                                <p class="blockquote blockquote-primary">
                                  <strong
                                    >В. П. Леонтьев OFFICE 2016 НОВЕЙШИЙ САМОУЧИТЕЛЬ
                                  </strong>
                                </p>
                              </summary>
                              <iframe
                                src="https://drive.google.com/file/d/1QtGEVDr0YHNOnw_P2tGNNqs80yhowoJ3/preview"
                                width="100%"
                                height="1000"
                              ></iframe>
                            </details>
							                            <details>
                              <summary>
                                <p class="blockquote blockquote-primary">
                                  <strong
                                    >В.П. Шульгин СОЗДАНИЕ ЭФФЕКТНЫХ ПРЕЗЕНТАЦИЙ 
                                  </strong>
                                </p>
                              </summary>
                              <iframe
                                src="https://drive.google.com/file/d/1e20HCu4IyBRQewLUagAE2PpfgZQbauml/preview"
                                width="100%"
                                height="1000"
                              ></iframe>
                            </details>
														                            <details>
                              <summary>
                                <p class="blockquote blockquote-primary">
                                  <strong
                                    > Т.А. Тибенко MS VISIO 
                                  </strong>
                                </p>
                              </summary>
                              <iframe
                                src="https://drive.google.com/file/d/1raI6szr1ghQTfeWVwH-srGW78iLnsNkz/preview"
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
