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
                  <h5 class="character-name-ds">0-0-0</h5>
                </div>
                <p class="left">
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
                <p class="left">
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
                <img src="../../assets/assets/charui/tex.charui_trooperclone_arc.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・第501軍団・クローン・トルーパー・銀河共和国
                  </small>
                  <h5 class="character-name-ls">ARC トルーパー</h5>
                </div>
                <p class="left">
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
                  <small class="right">
                    ダークサイド・アタッカー・ドロイド・分離主義者
                  </small>
                  <h5 class="character-name-ls">B1バトルドロイド</h5>
                </div>
                <p class="left">
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
                  <small class="right">
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
                <p class="left">
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
                  <small class="right">
                    ダークサイド・アタッカー・ドロイド・ならず者
                  </small>
                  <h5 class="character-name-ds">BT-1</h5>
                </div>
                <p class="left">
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
                <p class="left">
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
                <img src="../../assets/assets/charui/tex.charui_chewbacca_c3po.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・リーダー・ドロイド・旧共和国
                  </small>
                  <h5 class="character-name-ls">C-3PO&チューイ</h5>
                </div>
                <p style="float:center">
                  反乱軍アタッカーのペアで、敵を暗闇状態にして注意をそらし、マルチエンカウンター遭遇で敵全体に大ダメージを与えることができる。
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="Cody" id="Cody">
            <router-link to="/Character/CC-2444Cody" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_trooperclone_cody.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・リーダー・クローン・トルーパー・銀河共和国
                  </small>
                  <h5 class="character-name-ls">CC-2224 "コーディ"</h5>
                </div>
                <p class="left">
                  敵をスタン状態にし、大量のアシストを呼ぶクローンアタッカー
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="CT-21-0408Echo" id="CT-21-0408Echo">
            <router-link to="/Character/CT-21-0408Echo" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_trooperclone_echo.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・第501軍団・クローン・トルーパー・銀河共和国
                  </small>
                  <h5 class="character-name-ls">CT-21-0408 "エコー"</h5>
                </div>
                <p class="left">
                  味方を自動的にアシストし、敵全体の強化効果を解除できるクローン・トルーパーサポート
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="CT-5555Fives" id="Fives">
            <router-link to="/Character/CT-5555Fives" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_trooperclone_fives.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・タンク・リーダー・第501軍団・クローン・トルーパー・銀河共和国
                  </small>
                  <h5 class="character-name-ls">CT-5555 "ファイブス"</h5>
                </div>
                <p class="left">
                  高い防御力、敵スピードの低下、チーム全体へのステータスボーナスを与えるタンク。
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="CT-7567Rex" id="rex">
            <router-link to="/Character/CT-7567Rex" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_trooperclone_rex.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・リーダー・第501軍団・クローン・トルーパー・銀河共和国
                  </small>
                  <h5 class="character-name-ls">CT-7567 "レックス"</h5>
                </div>
                <p class="left">
                  味方第501軍団とクローン・トルーパーを徹底的にサポートし守り抜くクローンリーダー
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="HK-47" id="HK-47">
            <router-link to="/Character/HK-47" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_hk47.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・リーダー・ドロイド・シス帝国
                  </small>
                  <h5 class="character-name-ds">HK-47</h5>
                </div>
                <p class="left">
                  ダース・レヴァンとの効力なシナジー効果を持つ攻撃的なアタッカー
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="IG-100MagnaGuard" id="MagunaGuard">
            <router-link to="/Character/IG-100MagunaGuard" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_magnaguard.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・タンク・ドロイド・分離主義者
                  </small>
                  <h5 class="character-name-ds">IG-100マグナガード</h5>
                </div>
                <p class="left">
                  挑発を行って戦闘不能になる前に追加ターンを得る強力なドロイドタンク
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="IG-11" id="IG-11">
            <router-link to="/Character/IG-11" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_ig11_nurse.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・ヒーラー・ドロイド・ならず者
                  </small>
                  <h5 class="character-name-ls">IG-11</h5>
                </div>
                <p class="left">
                  ならず者とドロイドに対して強力なシナジー効果を発揮する万能ヒーラー
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="IG-12Grogu" id="IG-12Grogu">
            <router-link to="/Character/IG-12&Grogu" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_ig12.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・ヒーラー・マンダロリアン
                  </small>
                  <h5 class="character-name-ls">IG-12 & グローグー</h5>
                </div>
                <p class="left">
                  味方を回復して敵を妨害する、改造されて安全になったアサシン・ドロイド
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="IG-86" id="IG-86">
            <router-link to="/Character/IG-86SentinelDroid" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_ig86.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・ドロイド
                  </small>
                  <h5 class="character-name-ds">IG-86歩哨ドロイド</h5>
                </div>
                <p class="left">
                  ドロイドによる強力なアシストを得て、圧倒的なクリティカル能力を発揮するドロイドのアタッカー
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="IG-88" id="IG-88">
            <router-link to="/Character/IG-88" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_ig88.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・リーダー・賞金稼ぎ・ドロイド・ならず者
                  </small>
                  <h5 class="character-name-ds">IG-88</h5>
                </div>
                <p class="left">
                  弱体能力を持ち、弱体を受けている敵に対してボーナスダメージが発生するドロイドのアタッカー
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="K-2SO" id="K-2SO">
            <router-link to="/Character/K-SO" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_k2so.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・タンク・ドロイド・反乱軍・反乱軍ファイター・ローグ・ワン
                  </small>
                  <h5 class="character-name-ls">K-2SO</h5>
                </div>
                <p class="left">
                  挑発とカウンター攻撃を行う反乱軍タンク
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="L3-37" id="L3-37">
            <router-link to="/Character/L3-37" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_l337.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・タンク・ならず者・ドロイド・スマグラー
                  </small>
                  <h5 class="character-name-ls">L3-37</h5>
                </div>
                <p class="left">
                  味方の弱体を解除し、様々な方法で自分のステータスを永続的に強化していくドロイドタンク
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="R2-D2" id="R2-D2">
            <router-link to="/Character/R2-D2" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_astromech_r2d2.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・ドロイド・銀河共和国・反乱軍・レジスタンス
                  </small>
                  <h5 class="character-name-ls">R2-D2</h5>
                </div>
                <p class="left">
                  多彩なサポートドロイド。敵を炎上させて味方にステルス効果を発生させる
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="T3-M4" id="T3-M4">
            <router-link to="/Character/T3-M4" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_t3m4.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・ドロイド・旧共和国
                  </small>
                  <h5 class="character-name-ls">T3-M4</h5>
                </div>
                <p class="left">
                  味方ドロイドへのステータス強化効果や敵への弱体効果でサポートを行う攻撃的なドロイド
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="TIEファイター・パイロット" id="TIEFighterPilot">
            <router-link to="/Character/TIEFighterPilot" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_tiepilot.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・帝国軍
                  </small>
                  <h5 class="character-name-ds">TIEファイター・パイロット</h5>
                </div>
                <p class="left">
                  強化無効やフォアサイトを発生させられる帝国軍アタッカー
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="TheArmorer" id="TheArmorer">
            <router-link to="/Character/TheArmorer" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_armorer.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・リーダー・マンダロリアン
                  </small>
                  <h5 class="character-name-ls">アーマラー</h5>
                </div>
                <p class="left">
                  ベスカーを集めてチームを強化して戦う、マンダロリアンの指導者かつサポートユニット
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="IdenVersio" id="IdenVersio">
            <router-link to="/Character/IdenVersio" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_idenversioempire.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・リーダー・帝国軍・帝国軍トルーパー
                  </small>
                  <h5 class="character-name-ds">アイデン・ヴェルシオ</h5>
                </div>
                <p class="left">
                  チームをサポートしながら敵を巧みに倒す、粘り強い帝国軍アタッカー
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
                <p class="left">
                  味方の防御力を強化し、ジェダイのカウンター率を上昇させる支援型タンク
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="AaylaSecura" id="AaylaSecura">
            <router-link to="/Character/AaylaSecura" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_aaylasecura.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・リーダー・銀河共和国・ジェダイ
                  </small>
                  <h5 class="character-name-ls">アイラ・セキュラ</h5>
                </div>
                <p class="left">
                  高い回避力、HP、自己回復力によって優れた生存能力を備えた、多才なアタッカー
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="URoRRuR'R'R" id="URoRRuR'R'R">
            <router-link to="/Character/URoRRuR'R'R" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_urorrurrr.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・サポート・リーダー・タスケン
                  </small>
                  <h5 class="character-name-ds">ア゛ウァア゛ゥア゛ウウ</h5>
                </div>
                <p class="left">
                  頻繁にスタン攻撃を行い、タスケンのスピードを上昇させて奇襲を可能にするタスケンのサポート
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="Ugnaught" id="Ugnaught">
            <router-link to="/Character/Ugnaught" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_ugnaught.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート
                  </small>
                  <h5 class="character-name-ls">アグノート</h5>
                </div>
                <p class="left">
                  範囲攻撃を行い、ドロイドに高い回避力を発揮する対ドロイドのサポート
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="GialAckbar" id="AdmiralAckbar">
            <router-link to="/Character/AdmiarlAckbar" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_ackbaradmiral.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・リーダー・反乱軍・艦隊司令官
                  </small>
                  <h5 class="character-name-ls">アクバー提督</h5>
                </div>
                <p class="left">
                  弱体を解除し、味方に追加ターンを与えられる反乱軍のサポート
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="AsajjVentress" id="AsajjVentress">
            <router-link to="/Character/AsajjVentress" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_ventress.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・サポート・リーダー・ナイトシスター・分離主義者・非同盟のフォースの使い手
                  </small>
                  <h5 class="character-name-ds">アサージ・ヴェントレス</h5>
                </div>
                <p class="left">
                  回避能力を持つナイトシスターコントローラー。ユニットが戦闘不能になるたびに攻撃力を強化できる。
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="AhsokaTano" id="AhsokaTano">
            <router-link to="/Character/AhsokaTano" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_ahsoka.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・リーダー・第501軍団・銀河共和国・ジェダイ
                  </small>
                  <h5 class="character-name-ls">アソーカ・タノ</h5>
                </div>
                <p class="left">
                  回復や解除をしながら継続的にアシストを行う多彩なアタッカー
                </p>
                <!-- <p>
                  パワー:<strong>37,773</strong> , HP:<strong>71,063</strong> , スピード:<strong>149</strong>
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
                <p class="left">
                  ジャーカイとシエン・フォームをマスターしている伝説のアタッカーで、敵1体に高い威力のダメージを与える。
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="アソーカ・タノ(フルクラム)">
            <router-link to=" /Character/AhsokaTanoFulcrum" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_ahsokaadult.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・反乱軍・非同盟のフォースの使い手
                  </small>
                  <h5 class="character-name-ls">アソーカ・タノ(フルクラム)</h5>
                </div>
                <p class="left">
                  耐久力に優れた反乱軍アタッカー。弱体を退け、強化を消費してダメージを増加させる。
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="アミリン・ホルド">
            <router-link to=" /Character/AmilynHoldo" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_holdo.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・タンク・レジスタンス・艦隊司令官
                  </small>
                  <h5 class="character-name-ls">アミリン・ホルド</h5>
                </div>
                <p class="left">
                  レジスタンスの熟練タンク。強力なサポート能力および敵への弱体攻撃を駆使する。
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
                <p class="left">
                  スタン攻撃を行い、ドロイドに絶大な力を発揮するジェダイのサポート
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="イウォーク・エルダー">
            <router-link to=" /Character/Ewok-Elder" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_ewok_chief.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・ヒーラー・イウォーク
                  </small>
                  <h5 class="character-name-ls">イウォーク・エルダー</h5>
                </div>
                <p class="left">
                  復活能力に特化したイウォークのヒーラー
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="イウォーク・スカウト">
            <router-link to=" /Character/Ewok-Scout" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_ewokscout.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・イウォーク
                  </small>
                  <h5 class="character-name-ls">イウォーク・スカウト</h5>
                </div>
                <p class="left">
                  味方イウォークがいると回避力が上昇する、強力な単体攻撃型アタッカー
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="インペリアル・スーパー・コマンドー">
            <router-link to=" /Character/Imperial-Super-Commando" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_imperial_super_commando.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・帝国軍・マンダロリアン
                  </small>
                  <h5 class="character-name-ds">インペリアル・スーパー・コマンドー</h5>
                </div>
                <p class="left">
                  カウンターを駆使する帝国軍アタッカー。敵の強化を解除して強化無効を発生させる
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="ヴァンドア・チューバッカ">
            <router-link to=" /Character/Vandor-Chewbacca" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_chewbacca_vandor.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・タンク・ならず者・スマグラー・ウーキー
                  </small>
                  <h5 class="character-name-ls">ヴァンドア・チューバッカ</h5>
                </div>
                <p class="left">
                  攻撃された味方のプロテクションを回復させる、攻撃的なならず者のタンク
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="ヴィアーズ将軍">
            <router-link to=" /Character/General-Veers" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_veers.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・サポート・リーダー・帝国軍・帝国軍トルーパー
                  </small>
                  <h5 class="character-name-ds">ヴィアーズ将軍</h5>
                </div>
                <p class="left">
                  敵を倒すことで強くなる積極的な帝国軍のサポート
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="ウィケット">
            <router-link to=" /Character/Wicket" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_ewok_wicket.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・イウォーク
                  </small>
                  <h5 class="character-name-ls">ウィケット</h5>
                </div>
                <p class="left">
                  神経質なイウォークのアタッカー。クリティカルヒットとステルスシナジーを駆使する。
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="ヴィサス・マー">
            <router-link to=" /Character/Visas-Marr" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_visas.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・ヒーラー・非同盟のフォースの使い手
                  </small>
                  <h5 class="character-name-ls">ヴィサス・マー</h5>
                </div>
                <p class="left">
                  対シスの強力なシナジー効果を持つ攻撃的ヒーラー
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="ウェッジ・アンティリーズ">
            <router-link to=" /Character/Wedge-Antilles" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_eethkoth.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・リーダー・反乱軍・反乱軍ファイター
                  </small>
                  <h5 class="character-name-ls">ウェッジ・アンティリーズ</h5>
                </div>
                <p class="left">
                  強力かつ攻撃的な出だしが可能な反乱軍のアタッカー
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="エイス・ブラザー">
            <router-link to=" /Character/Eight-Brother" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_eighthbrother.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・リーダー・帝国軍・尋問官・非同盟のフォースの使い手
                  </small>
                  <h5 class="character-name-ds">エイス・ブラザー</h5>
                </div>
                <p class="left">
                  陰密を得意とする尋問官の一員。様々な技と武器で敵を圧倒する。
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="エコー">
            <router-link to=" /Character/Echo" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_bb_echo.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・バッド・バッチ・クローン・トルーパー・銀河共和国
                  </small>
                  <h5 class="character-name-ls">エコー</h5>
                </div>
                <p class="left">
                  バトルで味方をサポートする忠実なクローン・トルーパー
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="エズラ・ブリッジャー">
            <router-link to=" /Character/EzraBridger" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_ezra_s3.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・ジェダイ・フェニックス・反乱軍
                  </small>
                  <h5 class="character-name-ls">エズラ・ブリッジャー</h5>
                </div>
                <p class="left">
                  多才なフェニックスのアタッカー。味方のタイプに応じて様々な効果を発動できる。
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="エンフィス・ネスト">
            <router-link to=" /Character/Enfys-Nest" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_enfys.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・ならず者・スマグラー
                  </small>
                  <h5 class="character-name-ls">エンフィス・ネスト</h5>
                </div>
                <p class="left">
                  パワフルなアタッカー。攻撃を受けるごとにプロテクションを得て、強化解除やターンメーター操作によって敵の守りを崩す
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="エンボ">
            <router-link to=" /Character/Embo" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_embo.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・リーダー・賞金稼ぎ・ハット・カルテル・ならず者
                  </small>
                  <h5 class="character-name-ds">エンボ</h5>
                </div>
                <p class="left">
                  強力な賞金稼ぎアタッカー。プロテクションを消費して与えるダメージを増加させる
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="オーラ・シング">
            <router-link to=" /Character/Aurra-Sing" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_aurrasing.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・リーダー・賞金稼ぎ・ならず者
                  </small>
                  <h5 class="character-name-ds">オーラ・シング</h5>
                </div>
                <p class="left">
                  ステルス状態でダメージを増加させる強力な賞金稼ぎ
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="オールド・ダカ">
            <router-link to=" /Character/Old-Daka" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_eethkoth.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・ヒーラー・リーダー・ナイトシスター
                  </small>
                  <h5 class="character-name-ls">オールド・ダカ</h5>
                </div>
                <p class="left">
                  防衛的なナイトシスターヒーラー。スタンと復活を駆使する。
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="オビ＝ワン・ケノービ(ベン爺)">
            <router-link to=" /Character/Obi-Wan-Kenobi-old-Ben" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_obiwanep4.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・タンク・リーダー・ジェダイ・反乱軍
                  </small>
                  <h5 class="character-name-ls">オビ＝ワン・ケノービ(ベン爺)</h5>
                </div>
                <p class="left">
                  複数対象への弱体で敵の攻撃力を削ぐ、耐久力の高いジェダイのタンク
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="オメガ">
            <router-link to=" /Character/Omega" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_badbatchomega.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・バッド・バッチ・クローン・トルーパー
                  </small>
                  <h5 class="character-name-ls">オメガ</h5>
                </div>
                <p class="left">
                  強化効果や弱体化効果を巧みに操り、味方バッド・バッチと共に敵に立ち向かう、クレバーで共感力の高いアタッカー
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="ガー・サクソン">
            <router-link to=" /Character/Gar-Saxon" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_gar_saxon.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・タンク・リーダー・帝国軍・マンダロリアン
                  </small>
                  <h5 class="character-name-ds">ガー・サクソン</h5>
                </div>
                <p class="left">
                  味方帝国軍にカウンター率を付与し、カウンター攻撃時にはアシストを行うリーダー
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>
            </router-link>
          </li>

          <li class="character" name="カース・オナシ">
            <router-link to=" /Character/Carth-Onasi" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_eethkoth.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・リーダー・旧共和国
                  </small>
                  <h5 class="character-name-ls">カース・オナシ</h5>
                </div>
                <p class="left">
                  敵の波を次々に倒す旧共和国兵士
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="カーラ・デューン">
            <router-link to=" /Character/Cara-Dune" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_caradune.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・タンク・反乱軍・反乱軍ファイター・ならず者
                  </small>
                  <h5 class="character-name-ls">カーラ・デューン</h5>
                </div>
                <p class="left">
                  リーダーがならず者もしくは反乱軍のタンクの場合、さらなる力を発揮する
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="カイル・カターン">
            <router-link to=" /Character/Kyle-Katarn" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_kylekatarn.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・ジェダイ・反乱軍・反乱軍ファイター
                  </small>
                  <h5 class="character-name-ls">カイル・カターン</h5>
                </div>
                <p class="left">
                  反乱軍を率いるフォース感応者でありジェダイ・ナイト
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="カイロ・レン">
            <router-link to=" /Character/Kylo-Ren" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_kyloren.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・ファースト・オーダー・非同盟のフォースの使い手
                  </small>
                  <h5 class="character-name-ds">カイロ・レン</h5>
                </div>
                <p class="left">
                  ダメージを受けた時に特殊スキルを再使用できる、ファースト・オーダーの多才なアタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="カイロ・レン(マスクなし)">
            <router-link to=" /Character/Kylo-Ren-Unmasked" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_kylo_unmasked.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・タンク・リーダー・ファースト・オーダー・非同盟のフォースの使い手
                  </small>
                  <h5 class="character-name-ds">カイロ・レン(マスクなし)</h5>
                </div>
                <p class="left">
                  スタンを駆使する屈強なファースト・オーダータンク
                </p>
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
                    <span class="GL">銀河の伝説</span>・ダークサイド・アタッカー・リーダー・ファーストオーダー・非同盟のフォースの使い手
                  </small>
                  <h5 class="character-name-ds">カイロレン最高指導者</h5>
                </div>
                <p class="left">
                  残忍な攻撃で敵を圧倒する、ファーストオーダーの破壊的な指揮官。
                </p>
                <!-- <p>
                  パワー:<strong>35101</strong> , HP:<strong>72,828</strong> , スピード:<strong>147</strong>
                </p> -->
              </div>

            </router-link>
          </li>

          <li class="character" name="ガーモリアン・ガード">
            <router-link to=" /Character/Gamorrean-Guard" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_gamorreanguard.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・タンク・ハット・カルテル・ならず者
                  </small>
                  <h5 class="character-name-ds">ガ―モリアン・ガード</h5>
                </div>
                <p class="left">
                  反乱軍を率いるフォース感応者でありジェダイ・ナイト
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name='ガラゼブ・ "ゼブ" ・オレリオス'>
            <router-link to=" /Character/Garazeb-Zeb-Orrelios" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_zeb_s3.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・タンク・反乱軍・フェニックス
                  </small>
                  <h5 class="character-name-ls">ガラゼブ・ "ゼブ" ・オレリオス</h5>
                </div>
                <p class="left">
                  多才なフェニックス・タンク。弱体の有無で内容が変化する様々な効果を敵、味方に付与できる
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="カル・ケスティス">
            <router-link to=" /Character/Cal-Kestis" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_calkestis.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・非同盟のフォースの使い手
                  </small>
                  <h5 class="character-name-ls">カル・ケスティス</h5>
                </div>
                <p class="left">
                  ユニークスキルで味方をサポートして戦いの流れを操る、約束されたフォースの使い手
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="カレラン・ベク">
            <router-link to=" /Character/Kalleran-Beq" class="character light-side">
              <div class="character-image character left">
                <img src="../../assets/assets/charui/tex.charui_kelleranbeq.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・リーダー・銀河共和国・ジェダイ
                  </small>
                  <h5 class="character-name-ls">カレラン・ベク</h5>
                </div>
                <p class="left">
                  ライトセーバーの才能から「セーバー・ハンド」の異名を持つカレラン・ベクは、そのフォースの知識を活かして子供たちを修行し、オーダー66ではグローグーを救出した
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="カンデラス・オルド">
            <router-link to=" /Character/Canderous-Ordo" class="character dark-side">
              <div class="character-image character left">
                <img src="../../assets/assets/charui/tex.charui_canderous.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・マンダロリアン・旧共和国・ならず者
                  </small>
                  <h5 class="character-name-ds">カンデラス・オルド</h5>
                </div>
                <p class="left">
                  敵タンクをすばやく倒せる強力なアタッカー
                </p>
              </div>

            </router-link>
          </li>

          <li class="character" name="キ＝アディ＝ムンディ">
            <router-link to="/Character/Ki-Adi-Mundi" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_kiadimundi.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・ジェダイ・銀河共和国
                  </small>
                  <h5 class="character-name-ls">キ＝アディ＝ムンディ</h5>
                </div>
                <p>
                  ライトセーバーのフォーム「アダル」と「マカシ」を切り替えて戦う熟練のジェダイ・マスター
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="キーラ">
            <router-link to="/Character/Qi'ra" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_qira.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・リーダー・ならず者・スマグラー
                  </small>
                  <h5 class="character-name-ls">キーラ</h5>
                </div>
                <p>
                  準備万端効果、弱体、順応性のあるリーダースキルを使いこなして敵を圧倒する、万能なサポートユニット
                </p>
              </div>
            </router-link>
          </li>
          
          <li class="character" name="キット・フィストー">
            <router-link to="/Character/Kit-Fisto" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_kitfisto.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・リーダー・銀河共和国・ジェダイ
                  </small>
                  <h5 class="character-name-ls">キット・フィストー</h5>
                </div>
                <p>
                  連続攻撃、カウンター率上昇、味方の強化を行う多才なジェダイのアタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="キャシアン・アンドー">
            <router-link to="/Character/Cassian-Andor" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_cassian.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・反乱軍・反乱軍ファイター・ローグ・ワン
                  </small>
                  <h5 class="character-name-ls">キャシアン・アンドー</h5>
                </div>
                <p>
                  バトル開始時に味方を強化し、バトル中に敵を弱体化する反乱軍サポート
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="キャド・ベイン">
            <router-link to="/Character/Cad-Bane" class="character dark-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_cadbane.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・サポート・リーダー・賞金稼ぎ・ハット・カルテル・ならず者
                  </small>
                  <h5 class="character-name-ds">キャド・ベイン</h5>
                </div>
                <p>
                  強力なスタンとジェダイユニットに有効な攻撃を繰り出す賞金稼ぎサポート
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="キャプテン・ドロガン">
            <router-link to="/Character/Captain-Drogan" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_captaindrogan.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・反乱軍・反乱軍ファイター
                  </small>
                  <h5 class="character-name-ls">キャプテン・ドロガン</h5>
                </div>
                <p>
                  同次攻撃で敵勢力を滅ぼし戦況を変えられる、名高い反乱軍キャプテン
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="キャプテン・ハン・ソロ">
            <router-link to="/Character/Captain-Han-Solo" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_hoth_han.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・反乱軍・ならず者
                  </small>
                  <h5 class="character-name-ls">キャプテン・ハン・ソロ</h5>
                </div>
                <p>
                  向こう見ずな反乱軍サポート。自分を危険にさらして味方を復活させ、敵にめまい効果を与える
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="キャプテン・ファズマ">
            <router-link to="/Character/Captain-Phasma" class="character dark-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_phasma.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・サポート・リーダー・ファースト・オーダー
                  </small>
                  <h5 class="character-name-ds">キャプテン・ファズマ</h5>
                </div>
                <p>
                  味方に数多くの追加攻撃機会を与えられるファースト・オーダーの高ダメージアタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="キャプテン・レックス">
            <router-link to="/Character/Captain-Rex" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_captainrex.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・クローン・トルーパー・フェニックス・反乱軍・反乱軍ファイター
                  </small>
                  <h5 class="character-name-ls">キャプテン・レックス</h5>
                </div>
                <p>
                  第501軍団クローン大隊の旧キャプテンであり、無数の戦いをサポートするベテラン兵士
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="クイール">
            <router-link to="/Character/Kuiil" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_kuiil.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・ならず者
                  </small>
                  <h5 class="character-name-ls">クイール</h5>
                </div>
                <p>
                  ドロイドとならず者を助けるサポートメカニック
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="グランドマスター・ヨーダ">
            <router-link to="/Character/Grand-Master-Yoda" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_yodagrandmaster.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・リーダー・ジェダイ・銀河共和国
                  </small>
                  <h5 class="character-name-ls">グランドマスター・ヨーダ</h5>
                </div>
                <p>
                  敵が持つ強化を複製して味方と共有できる、卓越したジェダイのサポート
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="グランドモフ・ターキン">
            <router-link to="/Character/Grand-Modd-Tarkin" class="character dark-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_tarkinadmiral.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・サポート・リーダー・帝国軍・艦隊司令官
                  </small>
                  <h5 class="character-name-ds">グランドモフ・ターキン</h5>
                </div>
                <p>
                  強化な範囲弱体を行う攻撃的な帝国軍のサポート
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="グリーヴァス将軍">
            <router-link to="/Character/General-Grievous" class="character dark-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_grievous.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・リーダー・ドロイド・分離主義者・艦隊司令官
                  </small>
                  <h5 class="character-name-ds">グリーヴァス将軍</h5>
                </div>
                <p>
                  周りに倒れたドロイドの数だけ強さを増していく縦横無尽のアタッカー。ドロイドと呼ばれるのを嫌うが、戦闘ではドロイドとしてカウントされる。
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="グリード">
            <router-link to="/Character/Greedo" class="character dark-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_greedo.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・リーダー・賞金稼ぎ・ハット・カルテル・ならず者
                  </small>
                  <h5 class="character-name-ds">グリード</h5>
                </div>
                <p>
                  クリティカルヒット時に追加攻撃が可能な危険なアタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="グリーフ・カルガ">
            <router-link to="/Character/Greef-Karga" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_greefkarga.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・リーダー・賞金稼ぎ・ならず者
                  </small>
                  <h5 class="character-name-ls">グリーフ・カルガ</h5>
                </div>
                <p>
                  回復し、アシストを呼ぶ賞金稼ぎサポート
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="クルルサンタン">
            <router-link to="/Character/Krrsantan" class="character dark-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_krrsantan.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・タンク・リーダー・賞金稼ぎ・ハット・カルテル・ならず者・ウーキー
                  </small>
                  <h5 class="character-name-ds">クルルサンタン</h5>
                </div>
                <p>
                  恐ろしさと不屈の強さを持つ悪名高い賞金稼ぎタンク
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="クレニック長官">
            <router-link to="/Character/Director-Krennic" class="character dark-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_krennic.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・サポート・リーダー・帝国軍
                  </small>
                  <h5 class="character-name-ls">クレニック長官</h5>
                </div>
                <p>
                  恐ろしい帝国軍サポート。強力な弱体を発生させ、敵を減速させる
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="クローン・サージェント(フェーズI)">
            <router-link to="/Character/Clone-Sergeant-Phase-i" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_trooperclonegreen.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・クローン・トルーパー・銀河共和国
                  </small>
                  <h5 class="character-name-ls">クローン・サージェント(フェーズI)</h5>
                </div>
                <p>
                  範囲攻撃とターンメーター減少能力を持つクローンのアタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="クローン大戦チューバッカ">
            <router-link to="/Character/Clone-Wars-Chewbacca" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_clonewarschewbacca.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    挑発と自己回復が可能な耐久力の高いタンク
                  </small>
                  <h5 class="character-name-ls">クローン大戦チューバッカ</h5>
                </div>
                <p>
                  挑発と自己回復が可能な耐久力の高いタンク
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="クワイ=ガン・ジン">
            <router-link to="/Character/Qui-Gon-Jinn" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_quigon.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・リーダー・銀河共和国・ジェダイ
                  </small>
                  <h5 class="character-name-ls">クワイ=ガン・ジン</h5>
                </div>
                <p>
                  追加攻撃重視の多才なアタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ケイナン・ジャラス">
            <router-link to="/Character/Kanan-Jarrus" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_kanan_s3.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・タンク・ジェダイ・フェニックス・反乱軍
                  </small>
                  <h5 class="character-name-ls">ケイナン・ジャラス</h5>
                </div>
                <p>
                  耐久力のあるフェニックス・タンク。敵の攻撃力を継続して低下させ、味方へのダメージを抑えられる
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ケノービ将軍" id="general-kenobi">
            <router-link to="/Character/GeneralKenobi" class="character light-side">
              <div class="character-image character ">
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
              </div>
            </router-link>
          </li>

          <li class="character" name="コルサント・アンダーワールド警察隊">
            <router-link to="/Character/Coruscant-Underworld-Police" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_trooperclonegreen.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・銀河共和国
                  </small>
                  <h5 class="character-name-ls">コルサント・アンダーワールド警察隊</h5>
                </div>
                <p>
                  スタンと攻撃力低下で敵を抑え込むサポート
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="サード・シスター">
            <router-link to="/Character/Third-Sister" class="character dark-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_thirdsister.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・タンク・リーダー・帝国軍・尋問官・非同盟のフォースの使い手
                  </small>
                  <h5 class="character-name-ds">サード・シスター</h5>
                </div>
                <p>
                  自らの目的を果たすまで決して立ち止まらない、無慈悲な尋問官
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="サヴァージ・オプレス">
            <router-link to="/Character/Savage-Opress" class="character dark-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_savageopress.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・リーダー・シス
                  </small>
                  <h5 class="character-name-ds">サヴァージ・オプレス</h5>
                </div>
                <p>
                  HPの低下したユニットに追い打ちをかけ、攻撃を受けると強くなる耐久力の高いアタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="サナ・スタロス">
            <router-link to="/Character/Sana-Starros" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_trooperclonegreen.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・リーダー・ならず者・スマグラー
                  </small>
                  <h5 class="character-name-ls">サナ・スタロス</h5>
                </div>
                <p>
                  チームが範囲ダメージを与えるのに役立つ、反乱軍シンバになったならず者。
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="サビーヌ・レン">
            <router-link to="/Character/Sabine-Wren" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_sabine_s3-2.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・マンダロリアン・フェニックス・反乱軍
                  </small>
                  <h5 class="character-name-ls">サビーヌ・レン</h5>
                </div>
                <p>
                  積極的なフェニックス・アタッカー。防御力を継続して低下させ、動きの遅い敵を苦しめる
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ザム・ウェセル">
            <router-link to="/Character/Zam-Wesell" class="character dark-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_zamwesell.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・リーダー・賞金稼ぎ・ならず者
                  </small>
                  <h5 class="character-name-ls">ザム・ウェセル</h5>
                </div>
                <p>
                  回避力低下を発生させ、爆薬を駆使する、ならず者の高速アタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ザルバー">
            <router-link to="/Character/Zaallbar" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_zaalbar.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・タンク・旧共和国・ならず者・ウーキー
                  </small>
                  <h5 class="character-name-ls">ザルバー</h5>
                </div>
                <p>
                  強化な範囲攻撃と変化に応じて挑発を行う万能のならず者タンク
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="サン・ファク">
            <router-link to="/Character/Sun-Fac" class="character dark-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_geonosian_sunfac.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・タンク・ジオノージアン・分離主義者
                  </small>
                  <h5 class="character-name-ds">サン・ファク</h5>
                </div>
                <p>
                  様々な状態異常効果で敵を苦しめるジオノージアンのタンク
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="シア・ジュンダ">
            <router-link to="/Character/Cere-Junda" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_cerejunda.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・リーダー・ならず者・非同盟のフォースの使い手
                  </small>
                  <h5 class="character-name-ls">シア・ジュンダ</h5>
                </div>
                <p>
                  様々な強化効果で味方を支援し、素早い敵を罰する強靭なサポーター
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ジェダイ・コンシュラー">
            <router-link to="/Character/Jedi-Consular" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_jedi_consular_03.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・ヒーラー・銀河共和国・ジェダイ
                  </small>
                  <h5 class="character-name-ls">ジェダイ・コンシュラー</h5>
                </div>
                <p>
                  攻守のバランスに優れたジェダイのヒーラー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ジェダイ・ナイト・アナキン">
            <router-link to="/Character/Jedi-Knight-Anakin" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_anakinknight.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・リーダー・銀河共和国・ジェダイ
                  </small>
                  <h5 class="character-name-ls">ジェダイ・ナイト・アナキン</h5>
                </div>
                <p>
                  味方を傷つけた敵に報復を行う、威圧的なジェダイのアタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="クローン・サージェント(フェーズI)">
            <router-link to="/Character/Clone-Sergeant-Phase-i" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_trooperclonegreen.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・クローン・トルーパー・銀河共和国
                  </small>
                  <h5 class="character-name-ls">クローン・サージェント(フェーズI)</h5>
                </div>
                <p>
                  範囲攻撃とターンメーター減少能力を持つクローンのアタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ジェダイ・ナイト・カル・ケスティス">
            <router-link to="/Character/Jedi-Knight-Cal-Kestis" class="character light-side">
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
                <p class="left">
                  ジェダイ・ナイト・カル・ケスティスは様々なライトセーバーの技を駆使し、攻守のスタンスを自在に変えながら敵を倒す。
                </p>
              </div>

            </router-link>
          </li>

          <li class="character" name="ジェダイ・ナイト・ガーディアン">
            <router-link to="/Character/Jedi-Knight-Guardian" class="character light-side">
              <div class="character-image character ">
                <img src="../../assets/assets/charui/tex.charui_jedi_guardian_01.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・タンク・銀河共和国・ジェダイ
                  </small>
                  <h5 class="character-name-ls">ジェダイ・ナイト・ガーディアン</h5>
                </div>
                <p>
                  敵の弱体化に優れ、HP低下時の自然回復能力を持つ、粘り強いジェダイタンク
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ジェダイ・ナイト・ルーク・スカイウォーカー">
            <router-link to="/Character/Jedi-Knight-Luke-Skywalker" class="character light-side">
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
                <p class="left">
                  フォースの意志によって味方ジェダイと共にさらなる勝利の高みに登っていく、たくましい伝説のジェダイの英雄
                </p>
              </div>

            </router-link>
          </li>

          <li class="character" name="ジェダイ・ナイトレヴァン">
            <router-link to="/Character/Jedi-Kinght-Revan" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_jedirevan.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・リーダー・ジェダイ・旧共和国
                  </small>
                  <h5 class="character-name-ls">ジェダイ・ナイトレヴァン</h5>
                </div>
                <p class="left">
                  伝説的ジェダイリーダー。幅広い強力なスキルで戦局を支配する
                </p>
              </div>

            </router-link>
          </li>

          <li class="character" name="ジェダイ・マスター・ケノービ">
            <router-link to="/Character/Jedi-Master-Kenobi" class="character light-side">
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
                <p class="left">
                  言わずと知れたジェダイ・マスター。様々なスキルでダメージを与え、サポートを行う。
                </p>
              </div>

            </router-link>
          </li>

          <li class="character" name="ジェダイ・マスター・ルーク・スカイウォーカー">
            <router-link to="/Character/Jedi-Master-Luke-Skywalker" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_luke_jml.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    <span class="GL">銀河の伝説</span>・ライトサイド・タンク・リーダー・ジェダイ
                  </small>
                  <h5 class="character-name-ls">ジェダイ・マスター・ルーク・スカイウォーカー</h5>
                </div>
                <p class="left">
                  その知恵とこれまでに取得した技で味方ジェダイを強化する、年老いた伝説のジェダイ・マスター
                </p>
              </div>

            </router-link>
          </li>

          <li class="character" name="ジオノージアン・スパイ">
            <router-link to=" /Character/Geonosian-Spy" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_geonosian_spy.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・ジオノージアン・分離主義者
                  </small>
                  <h5 class="character-name-ds">ジオノージアン・スパイ</h5>
                </div>
                <p class="left">
                  敵をエクスポーズ状態にして高いダメージを叩き出すポテンシャルを秘めたステルスアタッカー
                </p>
              </div>
            </router-link>
          </li>   
          
          <li class="character" name="ジオノージアン・ブルード・アルファ">
            <router-link to=" /Character/Geonosian-Brood-Alpha" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_geonosian_broodalpha.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・サポート・リーダー・ジオノージアン・分離主義者
                  </small>
                  <h5 class="character-name-ds">ジオノージアン・ブルード・アルファ</h5>
                </div>
                <p class="left">
                  味方を招集し、集団意識の効果で敵に一斉に襲い掛からせるジオノージアンサポート
                </p>
              </div>
            </router-link>
          </li> 

          <li class="character" name="ジオノージアン兵士">
            <router-link to=" /Character/Geonosian-Soldier" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_geonosian_soldier.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・ジオノージアン・分離主義者
                  </small>
                  <h5 class="character-name-ds">ジオノージアン兵士</h5>
                </div>
                <p class="left">
                  アシストを呼び、強力な攻撃ボーナスを味方ジオノージアンに付与する攻撃的なアタッカー
                </p>
              </div>
            </router-link>
          </li> 

          <li class="character" name="シス・アサシン">
            <router-link to=" /Character/Sith-Assassin" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_sithassassin.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・シス・シス帝国
                  </small>
                  <h5 class="character-name-ds">シス・アサシン</h5>
                </div>
                <p class="left">
                  回避能力に長けたシスのアタッカー。ステルスで威力が増す
                </p>
              </div>
            </router-link>
          </li> 

          <li class="character" name="シス・エターナルの皇帝">
            <router-link to=" /Character/Sith-Eternal-Emperor" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_espalpatine_pre.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    <sapn class="GL">銀河の伝説</sapn>・ダークサイド・アタッカー・リーダー・シス
                  </small>
                  <h5 class="character-name-ls">シス・エターナルの皇帝</h5>
                </div>
                <p class="left">
                  ダークサイドの圧倒的な力で敵を排除する狡猾なシスの皇帝
                </p>
              </div>
            </router-link>
          </li> 

          <li class="character" name="シス・トルーパー">
            <router-link to=" /Character/Sith-Trooper" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_firstorder_sithtrooper.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・ファースト・オーダー・シス
                  </small>
                  <h5 class="character-name-ds">シス・トルーパー</h5>
                </div>
                <p class="left">
                  ファースト・オーダーやシスと強力なシナジー効果を発揮し、高ダメージを与えられる精鋭トルーパー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="シス・マローダー">
            <router-link to=" /Character/Sith-Marauder" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_sithmarauder.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・シス・シス帝国
                  </small>
                  <h5 class="character-name-ds">シス・マローダー</h5>
                </div>
                <p class="left">
                  恐ろしいシス・アタッカー。バトルに発生している強化および弱体を利用して戦う
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="シス帝国トルーパー">
            <router-link to=" /Character/Sith-Empire-Trooper" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_sithassassin.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・タンク・シス・シス帝国
                  </small>
                  <h5 class="character-name-ds">シス帝国トルーパー</h5>
                </div>
                <p class="left">
                  挑発を行い、敵プロテクションを無効化できるシスのタンク
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="シャアク・ティ">
            <router-link to=" /Character/Shaak-Ti" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_shaakti.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・リーダー・銀河共和国・ジェダイ
                  </small>
                  <h5 class="character-name-ls">シャアク・ティ</h5>
                </div>
                <p class="left">
                  高い反応力を備える勇ましいジェダイリーダー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ジャバ・ザ・ハット">
            <router-link to=" /Character/Jabba-The-Hutt" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_jabbathehutt.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    <span class="銀河の伝説"></span>・ダークサイド・サポート・リーダー・賞金稼ぎ・ハット・カルテル・スマグラー
                  </small>
                  <h5 class="character-name-ds">ジャバ・ザ・ハット</h5>
                </div>
                <p class="left">
                  犯罪組織とハット・カルテルのエンフォーサーを支援するため、戦況をコントロールして影響力で他者を操る、冷酷非道な犯罪王
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ジャワ">
            <router-link to=" /Character/Jawa" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_jawa_jawa.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・ジャワ
                  </small>
                  <h5 class="character-name-ls">ジャワ</h5>
                </div>
                <p class="left">
                  ドロイドおよび弱体を受けている敵に力を発揮するアタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ジャワ・エンジニア">
            <router-link to=" /Character/Jawa_Engineer" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_jawa_engineer.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・ヒーラー・ジャワ
                  </small>
                  <h5 class="character-name-ls">ジャワ・エンジニア</h5>
                </div>
                <p class="left">
                  クリティカル率強化とジャワおよびドロイドとのシナジーを備えた非常に素早いジャワのヒーラー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ジャワ・スカベンジャー">
            <router-link to=" /Character/Jawa_Scavenger" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_jawa_scavenger.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・ジャワ
                  </small>
                  <h5 class="character-name-ls">ジャワ・スカベンジャー</h5>
                </div>
                <p class="left">
                  サーマル・デトネーターを起爆して様々なステータス効果を発生させられる、多才なジャワのサポート
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ジャンゴ・フェット">
            <router-link to=" /Character/Jango-Fett" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_jangofett.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・リーダー・賞金稼ぎ・マンダロリアン・ならず者・分離主義者
                  </small>
                  <h5 class="character-name-ds">ジャンゴ・フェット</h5>
                </div>
                <p class="left">
                  弱体させた敵を巧みに利用して炎上効果を発生させる悪名高き賞金稼ぎ
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ジュアニ">
            <router-link to=" /Character/Juhani" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_juhani.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・タンク・ジェダイ・旧共和国
                  </small>
                  <h5 class="character-name-ls">ジュアニ</h5>
                </div>
                <p class="left">
                  味方旧共和国ユニットから弱体効果を解除し、HPが100%の状態を切るとさらに危険な存在となる比類なきジェダイタンク
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ショアトルーパー">
            <router-link to=" /Character/Shoretrooper" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_troopershore.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・タンク・帝国軍・帝国軍トルーパー
                  </small>
                  <h5 class="character-name-ds">ショアトルーパー</h5>
                </div>
                <p class="left">
                  バトル開始時に挑発を行い、味方の回復や、クリティカルヒット耐性を発生させられる帝国軍タンク
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ジョリー・ビンド">
            <router-link to=" /Character/Jolee-Bindo" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_joleebindo.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・ヒーラー・ジェダイ・旧共和国
                  </small>
                  <h5 class="character-name-ls">ジョリー・ビンド</h5>
                </div>
                <p class="left">
                  有能なジェダイヒーラー。耐久性に優れ、弱体効果などにも強い
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ジン・アーソ">
            <router-link to=" /Character/Jyn-Erso" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_jyn.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・リーダー・反乱軍・反乱軍ファイター・ローグ・ワン
                  </small>
                  <h5 class="character-name-ls">ジン・アーソ</h5>
                </div>
                <p class="left">
                  攻撃的な反乱軍ファイター。味方反乱軍の復活やアドバンテージ獲得、有効性上昇の付与を行い、敵をスタン状態にする
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="スカイウォーカー将軍">
            <router-link to=" /Character/General-Skywalker" class="character light-side">
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
                <p class="left">
                  仲間を死守する凶暴なジェダイ。
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="スカウト・トルーパー">
            <router-link to="/Character/Scout-Trooper" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_trooperscout.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・サポート・帝国軍・インペリアル・レムナント・帝国軍トルーパー
                  </small>
                  <h5 class="character-name-ds">スカウト・トルーパー</h5>
                </div>
                <p class="left">
                  影から味方をサポートする銀河帝国のステルス兵
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="スカリフ同盟軍パスファインダー">
            <router-link to="/Character/Scarif-Rebel-Pathfinder" class="character light-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_rebel_scarif.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・タンク・反乱軍・反乱軍ファイター・ローグ・ワン
                  </small>
                  <h5 class="character-name-ls">スカリフ同盟軍パスファインダー</h5>
                </div>
                <p class="left">
                  敵を弱体化し、挑発を行い、自己復活する不動の反乱軍タンク
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="スキッフ・ガード(ランド・カルリジアン)">
            <router-link to="/Character/Scout-Trooper" class="character light-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_lando_jabbaguard.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・ハット・カルテル・ならず者・スマグラー
                  </small>
                  <h5 class="character-name-ls">スキッフ・ガード(ランド・カルリジアン)</h5>
                </div>
                <p class="left">
                  味方をアシストし、潜伏し続けるほどに攻撃力が上昇する狡猾なならず者アタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="スターキラー">
            <router-link to="/Character/Starkiller" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_starkiller.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・非同盟のフォースの使い手
                  </small>
                  <h5 class="character-name-ds">スターキラー</h5>
                </div>
                <p class="left">
                  強力なダークサイドのフォースの使い手。その内なる葛藤はあらゆるフォースの使い手を奮い立たせる
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="スターク大佐">
            <router-link to="/Character/Colonel-Starck" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_colonel_stark.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・サポート・帝国軍・帝国軍トルーパー
                  </small>
                  <h5 class="character-name-ds">スターク大佐</h5>
                </div>
                <p class="left">
                  クリティカルヒット強化を発生さえ、敵のターンメーターを減少させる攻撃的サポートユニット
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ストーム・トルーパー">
            <router-link to="/Character/Stormtrooper" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_trooperstorm.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・タンク・帝国軍・インペリアル・レムナント・帝国軍トルーパー
                  </small>
                  <h5 class="character-name-ds">ストーム・トルーパー</h5>
                </div>
                <p class="left">
                  挑発を行い、予想できないダメージで敵を翻弄する帝国軍のタンク
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="スノートルーパー">
            <router-link to="/Character/Snowtrooper" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_troopersnow.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・帝国軍・帝国軍トルーパー
                  </small>
                  <h5 class="character-name-ds">スノー・トルーパー</h5>
                </div>
                <p class="left">
                  敵を倒すことで素早く、強くなる帝国軍のアタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="スマグラー・チューバッカ">
            <router-link to="/Character/Veteran-Smuggler-Chewbacca" class="character light-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_tfa_chewbacca.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・レジスタンス・ならず者・ウーキー・スマグラー
                  </small>
                  <h5 class="character-name-ls">スマグラー・チューバッカ</h5>
                </div>
                <p class="left">
                  敵の行動に応じて攻撃性が高まっていく純重なアタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="スマグラー・ハン">
            <router-link to="/Character/Veteran-Smuggler-Han-Solo" class="character light-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_tfa_han.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・レジスタンス・ならず者・スマグラー
                  </small>
                  <h5 class="character-name-ls">スマグラー・ハン</h5>
                </div>
                <p class="left">
                  複数回攻撃と強力な弱体効果を駆使する、ならず者のアタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="スローン大提督">
            <router-link to="/Character/Grand-Admiral-Thrawn" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_thrawn.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・サポート・リーダー・帝国軍・艦隊司令官
                  </small>
                  <h5 class="character-name-ds">スローン大提督</h5>
                </div>
                <p class="left">
                  策略に長ける帝国軍リーダー。敵の行動を封じ、味方帝国軍に新たな特殊スキルを付与する
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="セカンド・シスター">
            <router-link to="/Character/Second-Sister" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_secondsister.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・リーダー・帝国軍・尋問官・非同盟のフォースの使い手
                  </small>
                  <h5 class="character-name-ds">セカンド・シスター</h5>
                </div>
                <p class="left">
                  ジェダイを倒すことに特化した冷酷な尋問官アタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="セブンス・シスター">
            <router-link to="/Character/Sventh-Sister" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_seventhsister.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・ヒーラー・リーダー・帝国軍・尋問官・非同盟のフォースの使い手
                  </small>
                  <h5 class="character-name-ds">セブンス・シスター</h5>
                </div>
                <p class="left">
                  ジェダイの排除に役立つ尋問官ヒーラー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ソウ・ゲレラ">
            <router-link to="/Character/Saw-Gerrera" class="character light-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_sawgerrera.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・リーダー・反乱軍・反乱軍ファイター
                  </small>
                  <h5 class="character-name-ls">ソウ・ゲレラ</h5>
                </div>
                <p class="left">
                  パルチザンを率いて帝国に対抗する過激なゲリラ戦士
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ゾリ・ブリス">
            <router-link to="/Character/Zorii-Bliss" class="character light-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_zoriibliss.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポーター・レジスタンス・ならず者・スマグラー
                  </small>
                  <h5 class="character-name-ls">ゾリ・ブリス</h5>
                </div>
                <p class="left">
                  スパイスランナーのスキルでレジスタンスを助ける捉えどころのないスマグラー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ダーク・トルーパー">
            <router-link to="/Character/Dark-Trooper" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_darktrooper.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・ドロイド・帝国軍・インペリアル・レムナント・帝国軍トルーパー
                  </small>
                  <h5 class="character-name-ds">ダーク・トルーパー</h5>
                </div>
                <p class="left">
                  ダーク・トルーパー部隊の数に応じてスキルが変化する、インペリアル・レムナントのアタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ダース・サイオン">
            <router-link to="/Character/Darth-Sion" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_sion.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・タンク・シス
                  </small>
                  <h5 class="character-name-ds">ダース・サイオン</h5>
                </div>
                <p class="left">
                  憎悪の力で強くなる攻撃的なシスのタンク
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ダース・シディアス">
            <router-link to="/Character/Darth-Sidious" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_sidious.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・リーダー・シス
                  </small>
                  <h5 class="character-name-ds">ダース・シディアス</h5>
                </div>
                <p class="left">
                  リーダーとして味方のクリティカル能力を強化できる容赦のないアタッカー。ヒーラーやジェダイに対して力を発揮する
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ダース・タロン">
            <router-link to="/Character/Darth-Talon" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_darthtalon.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・シス
                  </small>
                  <h5 class="character-name-ds">ダース・タロン</h5>
                </div>
                <p class="left">
                  忠誠と死に疑いを挟まない、敏捷なシスアタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="セカンド・トレイヤ">
            <router-link to="/Character/Darth-Traya" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_traya.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・サポート・リーダー・シス
                  </small>
                  <h5 class="character-name-ds">ダース・トレイヤ</h5>
                </div>
                <p class="left">
                  仲間との連携を封じるシスのサポート
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ダース・ナイアリス">
            <router-link to="/Character/Darth-Nihilus" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_nihilus.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・サポート・リーダー・シス
                  </small>
                  <h5 class="character-name-ds">ダース・ナイアリス</h5>
                </div>
                <p class="left">
                  吸収によってクールダウンを減らし、敵を即座に倒すことができるシスのサポート
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ダース・ベイダー">
            <router-link to="/Character/Darth-Vader" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_vader.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・リーダー・帝国軍・シス
                  </small>
                  <h5 class="character-name-ds">ダース・ベイダー</h5>
                </div>
                <p class="left">
                  範囲攻撃で時間経過ダメージを与え、弱体化したターゲットに追い打ちをかけて対方ターンを発生する恐ろしいアタッカー
                </p>
              </div>
            </router-link>
          </li>
        
          <li class="character" name="ダース・ベイン">
            <router-link to=" /Character/Darth-Bane" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_darthbane.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・リーダー・シス
                  </small>
                  <h5 class="character-name-ds">ダース・ベイン</h5>
                </div>
                <p class="left">
                  力と狡猾さで敵をねじ伏せる古代のシス卿。ダークサイドの力を振るうには強い者だけが生き残るべきだと信じている
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ダース・マラック">
            <router-link to="/Character/Darth-Malak" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_darthmalak.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・タンク・シス・シス帝国
                  </small>
                  <h5 class="character-name-ds">ダース・マラック</h5>
                </div>
                <p class="left">
                  生き延びるために、敵に脅威を与えてその力を吸収する残忍なシスタンク
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ダース・マルガス">
            <router-link to="/Character/Darth-Malgus" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_darthmalgus.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・タンク・リーダー・シス・シス帝国
                  </small>
                  <h5 class="character-name-ds">ダース・マラック</h5>
                </div>
                <p class="left">
                  敵に疑心を抱かせ、シス帝国の復活を告げる伝説のシス卿
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ダース・モール">
            <router-link to="/Character/Darth-Maul" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_maul.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・タンク・リーダー・シス
                  </small>
                  <h5 class="character-name-ds">ダース・モール</h5>
                </div>
                <p class="left">
                  敵を倒すことで強くなり、追加ターンを得る危険なアタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ダース・レヴァン">
            <router-link to="/Character/Darth-Revan" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_sithrevan.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・リーダー・シス・シス帝国・艦隊司令官
                  </small>
                  <h5 class="character-name-ds">ダース・レヴァン</h5>
                </div>
                <p class="left">
                  敵リーダーをこの上なく効率的に倒せる冷酷なシス卿
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ターフル">
            <router-link to="/Character/Tarfful" class="character light-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_tarfful.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・リーダー・ウーキー
                  </small>
                  <h5 class="character-name-ls">ターフル</h5>
                </div>
                <p class="left">
                  味方の防御力を上昇させて敵には誘発の効果を発生させる獰猛なサポート
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="タスケン・ウォーリアー">
            <router-link to="/Character/Tusken-Warrior" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_tuskenhuntress.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・タスケン
                  </small>
                  <h5 class="character-name-ds">タスケン・ウォーリアー</h5>
                </div>
                <p class="left">
                  モメンタムで攻撃が強くなる勇敢で恐れ知らずのタスケンの戦士
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="タスケン・シャーマン">
            <router-link to="/Character/Tusken-Shaman" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_tuskenshaman.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・ヒーラー・タスケン
                  </small>
                  <h5 class="character-name-ds">タスケン・シャーマン</h5>
                </div>
                <p class="left">
                  攻撃力の強化と、素早い時間経過ダメージの積み重ねも可能な攻撃的ヒーラー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="タスケン・レイダー">
            <router-link to="/Character/Tusken-Raider" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_tuskenraider.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・タスケン
                  </small>
                  <h5 class="character-name-ds">タスケン・レイダー</h5>
                </div>
                <p class="left">
                  タスケンとのシナジーおよびアシスト攻撃の能力を持つ耐久力の高いアタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="タスケン族長">
            <router-link to="/Character/Tusken-Chieftain" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_tuskenchief.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・サポート・リーダー・タスケン
                  </small>
                  <h5 class="character-name-ds">タスケン族長</h5>
                </div>
                <p class="left">
                  モメンタムで味方を守り、ダメージを与える効果を敵に発生させる強力な部族の長
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ダスチャ">
            <router-link to="/Character/Dathcha" class="character light-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_jawa_dathcha.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・リーダー・ジャワ
                  </small>
                  <h5 class="character-name-ls">ダスチャ</h5>
                </div>
                <p class="left">
                  スキルブロックとステルス能力を持つ多才なサポート。ドロイドに強く、ジャワがいるとより力を発揮する
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ダッシュ・レンダー">
            <router-link to="/Character/Dash-Rendar" class="character light-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_dashrendar.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・リーダー・ならず者・スマグラー
                  </small>
                  <h5 class="character-name-ls">ダッシュ・レンダー</h5>
                </div>
                <p class="left">
                  味方ならず者に準備万端の効果を与えるカリスマ的ならず者リーダー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="タリア">
            <router-link to="/Character/Talia" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_nightsister_talia.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・ヒーラー・リーダー・ナイトシスター
                  </small>
                  <h5 class="character-name-ds">タリア</h5>
                </div>
                <p class="left">
                  自らのHPを消費して味方のHP、ターンメーターを回避する積極的なヒーラー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="タロン・マリコス">
            <router-link to=" /Character/Tron-Malicos" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_taronmalicos.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・非同盟のフォースの使い手
                  </small>
                  <h5 class="character-name-ds">タロン・マリコス</h5>
                </div>
                <p class="left">
                  狂気と暗黒面の野望をその身に抱く、恐ろしいアタッカーにしてかつてのジェダイ
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="チアルート・イムウェ">
            <router-link to="/Character/Chirrut-Imwe" class="character light-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_chirrut.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・反乱軍・反乱軍ファイター・ローグ・ワン
                  </small>
                  <h5 class="character-name-ls">チアルート・イムウェ</h5>
                </div>
                <p class="left">
                  バランスの取れた反乱軍ファイター。弱体の無効化、味方の回復、抵抗力上昇を発生させる
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="チャーパ族長">
            <router-link to="/Character/Chief-Chirpa" class="character light-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_chirpa.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・リーダー・イウォーク
                  </small>
                  <h5 class="character-name-ls">チャーパ族長</h5>
                </div>
                <p class="left">
                  味方の通常スキルを大幅に強化するイウォークのリーダー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="チューバッカ">
            <router-link to="/Character/Chewbacca" class="character light-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_chewbacca_ot.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・反乱軍・ならず者・スマグラー・ウーキー
                  </small>
                  <h5 class="character-name-ls">チューバッカ</h5>
                </div>
                <p class="left">
                  最弱の味方をガードする強力な反乱軍アタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="チョッパー">
            <router-link to="/Character/Chopper" class="character light-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_chopper.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポーター・ドロイド・フェニックス・反乱軍
                  </small>
                  <h5 class="character-name-ls">チョッパー</h5>
                </div>
                <p class="left">
                  無愛想なフェニックスのサポート。挑発と効果解除を行い、味方フェニックスのクールダウンを減少させる
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ティーボ">
            <router-link to="/Character/Teebo" class="character light-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_ewok_teebo.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・タンク・リーダー・イウォーク
                  </small>
                  <h5 class="character-name-ls">ティーボ</h5>
                </div>
                <p class="left">
                  ステルスシナジーとコントロールスキルを持ったイウォークのステルスユニット
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="デス・トルーパー">
            <router-link to="/Character/Death-Trooper" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_trooperdeath.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・帝国軍・インペリアル・レムナント・帝国軍トルーパー
                  </small>
                  <h5 class="character-name-ds">デス・トルーパー</h5>
                </div>
                <p class="left">
                  強力な帝国軍アタッカー。敵を弱体化し、復活できなくする
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="テック">
            <router-link to="/Character/Tech" class="character light-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_bb_tech.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・サポート・バッド・バッチ・クローン・トルーパー・銀河共和国
                  </small>
                  <h5 class="character-name-ls">テック</h5>
                </div>
                <p class="left">
                  味方クローン・トルーパーに通訳の効果を与え、敵にターゲットロックを発生させる、ステルスに優れたサポートユニット
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="デンガー">
            <router-link to="/Character/Dengar" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_dengar.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・リーダー・賞金稼ぎ・ならず者
                  </small>
                  <h5 class="character-name-ds">デンガー</h5>
                </div>
                <p class="left">
                  スタン効果と抵抗力低下を発生させる、順応性の高いならず者のアタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ドゥークー伯爵">
            <router-link to="/Character/Count-Dooku" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_dooku.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・リーダー・分離主義者・シス
                  </small>
                  <h5 class="character-name-ds">デンガー</h5>
                </div>
                <p class="left">
                  高ダメージ・カウンター攻撃、弱体効果を操る厳格な分離主義者のアタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ドクター・アフラ">
            <router-link to=" /Character/Docter-Aphra" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_doctoraphra.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・サポート・リーダー・ならず者
                  </small>
                  <h5 class="character-name-ds">ドクター・アフラ</h5>
                </div>
                <p class="left">
                  危険なお宝や技術でチームを強化して敵を倒す、インベンティブでカオティックなサポート
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="トレンチ提督">
            <router-link to=" /Character/Admiral-Trench" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_admiraltrench.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・サポート・リーダー・分離主義者
                  </small>
                  <h5 class="character-name-ds">トレンチ提督</h5>
                </div>
                <p class="left">
                  強力な強化効果で味方をサポートし、弱体化効果で敵を衰弱させる狡猾な分離主義者の提督
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ドロイデカ">
            <router-link to="/Character/Droideka" class="character dark-side">
              <div class="character-image character left" >
                <img src="../../assets/assets/charui/tex.charui_droideka.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・アタッカー・ドロイド・分離主義者
                  </small>
                  <h5 class="character-name-ds">ドロイデカ</h5>
                </div>
                <p class="left">
                  動きの素早い敵に偏向シールドの後ろから強力な攻撃を繰り出す破壊的なドロイドアタッカー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="バリス・オフィー">
            <router-link to=" /Character/Barriss-Offee" class="character light-side">
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
                <p class="left">
                  チームのHPバランスを調整し、味方の状態異常を取り除けるジェダイのヒーラー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="フェネック・シャンド">
            <router-link to="/Character/Fennec-Shand" class="character light-side">
              <div class="character-image character left" >
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
                <p class="left">
                  最も危険な敵を相手にできる強力な賞金稼ぎ
                </p>
              </div>

            </router-link>
          </li>

          <li class="character" name="ベイダー卿">
            <router-link to=" /Character/Lord-Vader" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_lordvader.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    <span class="GL">銀河の伝説</span>・ダークサイド・アタッカー・リーダー・帝国軍・シス
                  </small>
                  <h5 class="character-name-ds">ベイダー卿</h5>
                </div>
                <p class="left">
                  他のユニットのアクションを利用して自身の潜在能力を向上させる、決して見くびってはならない伝説のシス卿
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="ボ＝カターン(マンダロア)">
            <router-link to=" /Character/General-Skywalker" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_mandalorbokatan.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ライトサイド・アタッカー・リーダー・マンダロリアン
                  </small>
                  <h5 class="character-name-ls">ボ=カターン(マンダロア)</h5>
                </div>
                <p class="left">
                  ダークセーバーを操り、仲間を率いて戦うマンダロリアンの勇敢なリーダー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="モフ・ギデオン(ダーク・トルーパー)">
            <router-link to=" /Character/Dark-Trooper-Moff-Gideon" class="character dark-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_moffgideons3.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    ダークサイド・タンク・リーダー・帝国軍・インペリアル・レムナント
                  </small>
                  <h5 class="character-name-ds">モフ・ギデオン(ダーク・トルーパー)</h5>
                </div>
                <p class="left">
                  最弱の味方を犠牲にして生き延び洞察により戦況を支配するインペリアル・レムナントのリーダー
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="レイ">
            <router-link to=" /Character/Rey" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_rey_tros.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    <span class="GL">銀河の伝説</span>・ライトサイド・リーダー・レジスタンス・非同盟のフォースの使い手
                  </small>
                  <h5 class="character-name-ls">レイ</h5>
                </div>
                <p class="left">
                  強力なシールドを提供し、敵に大ダメージを与えて味方を守るレジスタンスのリーダー。
                </p>
              </div>
            </router-link>
          </li>

          <li class="character" name="レイア・オーガナ">
            <router-link to=" /Character/Leia-Organa" class="character light-side">
              <div class="character-image character">
                <img src="../../assets/assets/charui/tex.charui_leiaendor.png">
              </div>
              <div class="character-detail character">
                <div class="media-heding">
                  <small class="right">
                    <span class="GL">銀河の伝説</span>・ライトサイド・タンク・リーダー・反乱軍
                  </small>
                  <h5 class="character-name-ls">レイア・オーガナ</h5>
                </div>
                <p class="left">
                  反乱軍の戦術リーダーであり、帝国の最優先ターゲットであるレイア・オーガナは、味方を鼓舞したり守ったりしながら的確な攻撃を仕掛けることができる
                </p>
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
img{
  min-width: 100px;
  min-height: 100px;
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
