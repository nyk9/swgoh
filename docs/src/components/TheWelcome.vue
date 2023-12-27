<script setup lang="ts">
</script>

<template>
  <div></div>
  <!-- <ul id="dropdown">

  </ul>
  <div>
    <input type="text" />
  </div>
  <div class="character-list character-search" id="character-list">
    <ul class="characters ">
      <div id="komejirusi"></div>
      キャラテンプレート
          <li class="character" name="ケノービ将軍">
              <router-link="/○○" class="character light-side">
                  <div class="character-image character">
                      <img src="./assets/assets/charui/tex.charui_obiwangeneral.png">
                  </div>
                  <div class="character-detail character">
                      <div class="media-heding">
                          <small class="right">
                              ライトサイド・リーダー・ジェダイ・銀河共和国・タンク・艦隊司令官
                          </small>
                          <h5 class="character-name-ls">ケノービ将軍</h5>
                      </div>
                      <p>
                          パワフルなジェダイのタンク。フォアサイトを得て、弱体の無効化によって強化を発生させ、強化を得ている味方をアシストに呼ぶことができる。
                      </p>
                      <p>
                          パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                      </p>
                  </div>
                  
                </router-link>
          </li> -->
      <!-- <li class="character" name="ケノービ将軍" id="general-kenobi">
        <router-link to="/GeneralKenobi" class="character light-side">
          <div class="character-image character">
            <img src="../../assets/assets/charui/tex.charui_obiwangeneral.png">
          </div>
          <div class="character-detail character">
            <div class="media-heding">
              <small class="right">
                ライトサイド・タンク・リーダー・銀河共和国・ジェダイ・艦隊司令官
              </small>
              <h5 class="character-name-ls">ケノービ将軍</h5>
            </div>
            <p>
              パワフルなジェダイのタンク。フォアサイトを得て、弱体の無効化によって強化を発生させ、強化を得ている味方をアシストに呼ぶことができる。
            </p>
            <p>
              パワー：<strong>35101</strong> , HP：<strong>72,828</strong> , スピード：<strong>147</strong>
            </p>
          </div>
        </router-link>
      </li>

      <li class="character" name="ジェダイ・ナイト・カル・ケスティス" id="JediKnightCalKestis">
        <router-link to="/Character/JediKnightCalKestis" class="character light-side">
          <div class="character-image character">
            <img src="../../assets/assets/charui/tex.charui_jediknightcal.png">
          </div>
          <div class="character-detail character">
            <div class="media-heding">
              <small class="right">
                ライトサイド・アタッカー・リーダー・ジェダイ
              </small>
              <h5 class="character-name-ls">ジェダイ・ナイト・カル・ケスティス</h5>
            </div>
            <p>
              ジェダイ・ナイト・カル・ケスティスは様々なライトセーバーの技を駆使し、攻守のスタンスを自在に変えながら敵を倒す。
            </p>
            <p>
              パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
            </p>
          </div>

        </router-link>
      </li>

      <li class="character" name="ジェダイ・ナイト・ルーク・スカイウォーカー">
        <router-link to="/JediKnightLukeSkywalker" class="character light-side">
          <div class="character-image character">
            <img src="../../assets/assets/charui/tex.charui_luke_jediknight.png">
          </div>
          <div class="character-detail character">
            <div class="media-heding">
              <small class="right">
                ライトサイド・アタッカー・リーダー・ジェダイ
              </small>
              <h5 class="character-name-ls">ジェダイ・ナイト・ルーク・スカイウォーカー</h5>
            </div>
            <p>
              フォースの意志によって味方ジェダイと共にさらなる勝利の高みに登っていく、たくましい伝説のジェダイの英雄
            </p>
            <p>
              パワー:<strong>35,212</strong> , HP:<strong>79,948</strong> , スピード:<strong>112</strong>
            </p>
          </div>

        </router-link>
      </li>

      <li class="character" name="ジェダイ・マスター・ケノービ">
        <router-link to="/JediMasterKenobi" class="character light-side">
          <div class="character-image character">
            <img src="../../assets/assets/charui/tex.charui_globiwan.png">
          </div>
          <div class="character-detail character">
            <div class="media-heding">
              <small class="right">
                銀河の伝説・ライトサイド・アタッカー・リーダー・銀河共和国・ジェダイ
              </small>
              <h5 class="character-name-ls">
                ジェダイ・マスター・ケノービ
              </h5>
            </div>
            <p>
              言わずと知れたジェダイ・マスター。様々なスキルでダメージを与え、サポートを行う。
            </p>
            <p>
              パワー:<strong>54,543</strong> , HP:<strong>88,336</strong> , スピード<strong>385</strong>
            </p>
          </div>

        </router-link>
      </li>

      <li class="character" name="フェネック・シャンド">
        <router-link to="/FennecShand" class="character light-side">
          <div class="character-image character">
            <img src="../../assets/assets/charui/tex.charui_fennec.png">
          </div>
          <div class="character-detail character">
            <div class="media-heding">
              <small class="right">
                ダークサイド・アタッカー・リーダー・賞金稼ぎ・ならず者
              </small>
              <h5 class="character-name-ds">フェネック・シャンド
              </h5>
            </div>
            <p>
              最も危険な敵を相手にできる強力な賞金稼ぎ
            </p>
            <p>
              パワー:<strong>33,016</strong> , HP:<strong>64,799</strong> , スピード:<strong>149</strong>
            </p>
          </div>

        </router-link>
      </li>

    </ul>
    <componet />
  </div>
  <div id="Hello-There">

  </div>  -->
  <!-- <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
    you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank" rel="noopener"
      >Cypress Component Testing</a
    >.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem> -->
</template>
