<script setup lang="ts">
</script>

<template>
  <div>
    <main>
      <div class="character-list character-search" id="character-list">
        <ul class="characters ">
          <div id="komejirusi"></div>
          <!-- キャラテンプレート -->
          <!--<li class="character" name="キャラ名">
          <router-link to="/Character/○○" class="character light-side">
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

          <li class="character" name="0-0-0" id="0-0-0">
            <router-link to="/Character/0-0-0" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_triplezero.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・サポート・ドロイド・ならず者
                  </small>
                  <h5 class="character-name-ls">0-0-0</h5>
                </div>
                <p>
                  儀礼、習慣、通訳、拷問に特化したプロトコル・ドロイド。
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="50R-T" id="50R-T">
            <router-link to="/Character/50R-T" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_50rt.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・リーダー・ドロイド・旧共和国
                  </small>
                  <h5 class="character-name-ls">50R-T</h5>
                </div>
                <p>
                  確率を素早く計算し、逆境に逆らう手段を判断できる、きわめて知能の高いドロイド。
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="ARCトルーパー" id="ARCTrooper">
            <router-link to="/Character/ARCTrooper" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_clone_arc.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・第501軍団・クローン・トルーパー・銀河共和国
                  </small>
                  <h5 class="character-name-ls">ARC トルーパー</h5>
                </div>
                <p>
                  戦場でブラスタータレットを操る強力なクローンアタッカー
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="B1バトル・ドロイド" id="B1BattleDroid">
            <router-link to="/Character/B1BattleDroid" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_b1.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="dark">
                    ダークサイド・アタッカー・ドロイド・分離主義者
                  </small>
                  <h5 class="character-name-ls">B1バトルドロイド</h5>
                </div>
                <p>
                  数の力で敵を圧倒する壊れやすい分離主義者アタッカー
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="B2SuperBattleDroid" id="B2SuperBattleDorid">
            <router-link to="/Character/B2SpuerBattleDroid" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_b2.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="dark">
                    ダークサイド・タンク・ドロイド・分離主義者
                  </small>
                  <h5 class="character-name-ls">B2スーパー・バトル・ドロイド</h5>
                </div>
                <p>
                  攻撃を回避する者や、味方を攻撃する者を容赦なく苦しめる、ドロイドのタンク
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="BB-8" id="BB-8">
            <router-link to="/Character/BB-8" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_bb8.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・ドロイド・レジスタンス
                  </small>
                  <h5 class="character-name-ls">BB-8</h5>
                </div>
                <p>
                  持続力のあるレジスタンスのドロイド。機密情報を伝達して味方を強化する。
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="BT-1" id="BT-1">
            <router-link to="/Character/BT-1" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_bt1.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="dark">
                    ダークサイド・アタッカー・ドロイド・ならず者
                  </small>
                  <h5 class="character-name-ls">BT-1</h5>
                </div>
                <p>
                  ブラストメクのプロトタイプ。自らが開発された場所であるターキン・イニシアチブの研究所を破壊したことで知られている。
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="C-3PO" id="C-3PO">
            <router-link to="/Character/C-3PO" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_c3p0.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・ドロイド・銀河共和国・反乱軍・レジスタンス
                  </small>
                  <h5 class="character-name-ls">C-3PO</h5>
                </div>
                <p>
                  混乱効果で敵を惑わし、複数の勢力が混じっていても味方を通訳効果によって強化できる高回避力のサポートユニット。
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="C-3PO&chewie" id="C-3POchewie">
            <router-link to="/Character/C-3PO%" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/ch">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・リーダー・ドロイド・旧共和国
                  </small>
                  <h5 class="character-name-ls">50R-T</h5>
                </div>
                <p>
                  確率を素早く計算し、逆境に逆らう手段を判断できる、きわめて知能の高いドロイド。
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="アイマ＝ガン・ダイ">
            <router-link to=" /Character/Ima-GunDai" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_imagundi.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・リーダー・銀河共和国・ジェダイ
                  </small>
                  <h5 class="character-name-ls">アイマ＝ガン・ダイ</h5>
                </div>
                <p>
                  味方の防御力を強化し、ジェダイのカウンター率を上昇させる支援型タンク
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="イース・コス">
            <router-link to=" /Character/EethKoth" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_eethkoth.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・リーダー・銀河共和国・ジェダイ
                  </small>
                  <h5 class="character-name-ls">イース・コス</h5>
                </div>
                <p>
                  スタン攻撃を行い、ドロイドに絶大な力を発揮するジェダイのサポート
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="アソーカ・タノ(コマンダー)">
            <router-link to=" /Character/CommanderAhsokaTano" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_commanderahsokatano.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・銀河共和国・ならず者・非同盟のフォースの使い手
                  </small>
                  <h5 class="character-name-ls">アソーカ・タノ(コマンダー)</h5>
                </div>
                <p>
                  ジャーカイとシエン・フォームをマスターしている伝説のアタッカーで、敵1体に高い威力のダメージを与える。
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="ケノービ将軍" id="general-kenobi">
            <router-link to="/Character/GeneralKenobi" class="character light-side">
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
                <!-- <p>
                  パワー：<strong>35101</strong> , HP：<strong>72,828</strong> , スピード：<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="カイロレン最高指導者">
            <router-link to="/Character/SupremeLeaderKyloRen" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_kyloren_tros.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    <span class="GL">銀河の伝説</span>ダークサイド・アタッカー・リーダー・ファーストオーダー・非同盟のフォースの使い手
                  </small>
                  <h5 class="character-name-ds">カイロレン最高指導者</h5>
                </div>
                <p>
                  残忍な攻撃で敵を圧倒する、ファーストオーダーの破壊的な指揮官。
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
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
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="ジェダイ・ナイト・ルーク・スカイウォーカー">
            <router-link to="/Character/JediKnightLukeSkywalker" class="character light-side">
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
                <!-- <p>
                  パワー:<strong>35,212</strong> , HP:<strong>79,948</strong> , スピード:<strong>112</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="ジェダイ・マスター・ケノービ">
            <router-link to="/Character/JediMasterKenobi" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_globiwan.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    <span class="GL">銀河の伝説</span>・ライトサイド・アタッカー・リーダー・銀河共和国・ジェダイ
                  </small>
                  <h5 class="character-name-ls">
                    ジェダイ・マスター・ケノービ
                  </h5>
                </div>
                <p>
                  言わずと知れたジェダイ・マスター。様々なスキルでダメージを与え、サポートを行う。
                </p>
                <!-- <p>
                  パワー:<strong>54,543</strong> , HP:<strong>88,336</strong> , スピード<strong>385</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="スカイウォーカー将軍">
            <router-link to=" /Character/GeneralSkywalker" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_generalanakin.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・リーダー・第501軍団・銀河共和国・ジェダイ
                  </small>
                  <h5 class="character-name-ls">スカイウォーカー将軍</h5>
                </div>
                <p>
                  仲間を死守する凶暴なジェダイ。
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="バリス・オフィー">
            <router-link to=" /Character/BarrissOffee" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_barriss_light.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・ヒーラー・リーダー・銀河共和国・ジェダイ
                  </small>
                  <h5 class="character-name-ls">バリス・オフィー</h5>
                </div>
                <p>
                  チームのHPバランスを調整し、味方の状態異常を取り除けるジェダイのヒーラー
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="フェネック・シャンド">
            <router-link to="/Character/FennecShand" class="character light-side">
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
                <!-- <p>
                  パワー:<strong>33,016</strong> , HP:<strong>64,799</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

        </ul>
        <componet />
      </div>
    </main>
    <RouterView />
  </div>
</template>

<style>
main {
  display: flex;
}

#sub {
  display: none;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  /* margin-top: 2rem; */
}

nav a {
  display: inline-block;
  /* padding: 0 1rem; */
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
