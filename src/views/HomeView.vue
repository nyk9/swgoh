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
                <!-- <p>
                  パワー：<strong>35101</strong> , HP：<strong>72,828</strong> , スピード：<strong>147</strong>
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
                <p class="left">
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
                <p class="left">
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
                <p class="left">
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
                <p class="left">
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
                <p class="left">
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
