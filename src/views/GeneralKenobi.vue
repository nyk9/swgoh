<template>
  <div class="main">
    <div class="character">
      <h1>ケノービ将軍</h1>
      <div class="skills">
        <div class="basic-skill skill">
          <img src="../../assets/assets/ability/tex.ability_generalkenobi_basic.png" class="left">
          <h1 class="right">直感的攻撃</h1>
          <p>
            ターゲットに物理ダメージを与え、75%の確率でランダムな味方1体に2ターンの間フォアサイトを発生させる（フォアサイトが発生していない味方のみが対象）。
            味方全員が強化を得ている場合、ダメージが2倍になる。
          </p>
        </div>
        <div class="special-skill1 skill">
          <img src="../../assets/assets/ability/tex.ability_generalkenobi_special01.png" class="left">
          <h1 class="right">ネゴシエーター</h1>
          <p>
            味方全体の弱体化効果を全て無効化し、2ターンの間、逆の強化効果を発生させる。弱体化効果が発生していなかった味方は3ターンの報復効果が発生する。
            ケノービ将軍のターンメーターが60%上昇する。
          </p>
        </div>
        <div class=" skill leader">
          <img src="../../assets/assets/abilityui\tex.abilityui_passive_hp.png" class="left">
          <h1 class="right">第212攻撃大隊コマンダー</h1>
          <p>
            味方ジェダイおよびクローンの最大HPが30%、防御力が70%上昇する。味方ジェダイが全体回復の特殊スキルを使用すると、HPが最大値の味方全体がアシストを行う。
            アシスト時の攻撃はダメージが50%減少する。味方クローンは特殊スキルを使用すると1ターンの強化（アタッカー：アドバンテージ、サポート：ステルス、
            タンク：挑発）が発生する。
          </p>
        </div>
        <div class="skill unike">
          <img src="../../assets/assets/abilityui/tex.abilityui_passive_foresight.png" class="left">
          <h1 class="right">ソレス</h1>
          <p>
            ケノービ将軍の各ターン終了時に65%の確率で2ターンのフォアサイトが発生する。<br>
            ケノービ将軍生存時に味方がクリティカルヒットを受けると、1ターンのクリティカルヒット耐性が発生し、ケノービ将軍が1ターンの間挑発を行う。 <br>
            味方がすべて銀河共和国の場合、味方銀河共和国がプロテクション上昇を失うと、ケノービ将軍が1ターンの間挑発を行う。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style>
.skill {
  border: 1px solid #34ff19;
  margin: 5px;
  padding: 5px;
}
</style>