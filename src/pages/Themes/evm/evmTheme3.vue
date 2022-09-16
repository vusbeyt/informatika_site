<template>
  <div class="page-header clear-filter">
    <div
      style="position: fixed; left: 0; top: 0; width: 100%; height: 100%; background-image: url('img/1.jpg'); max-height: 999px;"
    ></div>
    <div class="container">
      <h3 class="title">Тема 3. Компьютерные сети</h3>
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
                                    >В.Н. Олифер КОМПЬЮТЕРНЫЕ СЕТИ
                                  </strong>
                                </p>
                              </summary>
                              <iframe
                                src="https://docs.google.com/document/d/1CwmcZlvQPPranMAuDj7gBzGuuJju733qsJ6d2Hr0CmE/preview"
                                width="100%"
                                height="1000"
                              ></iframe>
                            </details>
							<details>
                              <summary>
                                <p class="blockquote blockquote-primary">
                                  <strong
                                    >А. М. Кенин ПРАКТИЧЕСКОЕ РУКОВОДСТВО СИСТЕМНОГО АДМИНИСТРАТОРА
                                  </strong>
                                </p>
                              </summary>
                              <iframe
                                src="https://docs.google.com/document/d/1HmKgChrw_38SLlL0zeglLPQagUX6TCkkSrbL2C_sL0M/preview"
                                width="100%"
                                height="1000"
                              ></iframe>
                            </details>
														<details>
                              <summary>
                                <p class="blockquote blockquote-primary">
                                  <strong
                                    > УЭНДЕЛЛ ОДОМ Официальное руководство  по подготовке к сертификационным экзаменам  
                                  </strong>
                                </p>
                              </summary>
                              <iframe
                                src="https://docs.google.com/document/d/1ptA40MU1Gw3ZOIECTj2GW6ZUdcRnUck5oqYHt6iUSNQ/preview"
                                width="100%"
                                height="1000"
                              ></iframe>
                            </details>
																					<details>
                              <summary>
                                <p class="blockquote blockquote-primary">
                                  <strong
                                    > Н. М. Ковган КОМПЬЮТЕРНЫЕ СЕТИ  
                                  </strong>
                                </p>
                              </summary>
                              <iframe
                                src="https://docs.google.com/document/d/1kXO2jORUbB8bA3TPOb_eaXblqajCAh0UUU2aYzelZSM/preview"
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
