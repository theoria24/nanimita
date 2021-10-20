<script lang="ts">
import { useI18n } from 'vue-i18n';

import { defineComponent, ref } from 'vue';
import { useTheme } from '/@/composables';
import html2canvas from 'html2canvas';

const year = '2021';
const season = '夏';
const season_en = 'summer';

export default defineComponent({
  name: 'Home',
  setup() {
    const { t, availableLocales, locale } = useI18n();

    const toggleLocales = () => {
      const locales = availableLocales;
      locale.value =
        locales[(locales.indexOf(locale.value) + 1) % locales.length];
    };

    const { isDark, toggleDark } = useTheme();

    const show = ref(false);

    setTimeout(() => {
      show.value = true;
    }, 1000);

    return { locale, t, show, toggleLocales, isDark, toggleDark };
  },
  data() {
    return {
      items: [
        {
          id: 'c_6492',
          title: '小林さんちのメイドラゴンS',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_7411',
          title: '転生したらスライムだった件 第2期 第2部',
          episode: [36.5, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
          watched: [] as Number[],
        },
        {
          id: 'c_7922',
          title: '白い砂のアクアトープ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
          watched: [] as Number[],
        },
        {
          id: 'c_7547',
          title: '乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった…X',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_7973',
          title: '探偵はもう、死んでいる。',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_8024',
          title: 'ひぐらしのなく頃に卒',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          watched: [] as Number[],
        },
        {
          id: 'c_7828',
          title: 'カノジョも彼女',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_7214',
          title: 'ぼくたちのリメイク',
          episode: [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_7858',
          title: '魔法科高校の優等生',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_7747',
          title: 'かげきしょうじょ!!',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_7275',
          title: 'ラブライブ！スーパースター!!',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_7054',
          title: 'うらみちお兄さん',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_7410',
          title:
            'マギアレコード 魔法少女まどか☆マギカ外伝 2nd SEASON ‐覚醒前夜‐',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          watched: [] as Number[],
        },
        {
          id: 'c_8412',
          title: 'Sonny Boy',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_7929',
          title: '死神坊ちゃんと黒メイド',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_8378',
          title: 'ジャヒー様はくじけない！',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_7848',
          title: '出会って5秒でバトル',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_7440',
          title: '現実主義勇者の王国再建記',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_7762',
          title: '精霊幻想記',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_7623',
          title: 'ピーチボーイリバーサイド',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_7609',
          title: '迷宮ブラックカンパニー',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_8202',
          title: 'ヴァニタスの手記',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_7852',
          title: '月が導く異世界道中',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_7527',
          title: 'チート薬師のスローライフ ～異世界に作ろうドラッグストア～',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_7526',
          title: '女神寮の寮母くん。',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_7874',
          title: '100万の命の上に俺は立っている 第2シーズン',
          episode: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          watched: [] as Number[],
        },
        {
          id: 'c_7632',
          title: '平穏世代の韋駄天達',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          watched: [] as Number[],
        },
        {
          id: 'c_8144',
          title: 'RE-MAIN',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_8171',
          title: 'SCARLET NEXUS',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
          watched: [] as Number[],
        },
        {
          id: 'c_7740',
          title: 'NIGHT HEAD 2041',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_8834',
          title: 'がんばれ同期ちゃん',
          episode: [1, 2, 3, 4, 5, 6],
          watched: [] as Number[],
        },
        {
          id: 'c_8131',
          title: '俺、つしま',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_8629',
          title: 'D_CIDE TRAUMEREI THE ANIMATION',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_7923',
          title: 'アサルトリリィふるーつ',
          episode: [1, 2, 3, 4, 5, 6, 7],
          watched: [] as Number[],
        },
        {
          id: 'c_7728',
          title: 'ゲッターロボ アーク',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_8470',
          title: '天官賜福',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_7864',
          title: 'アイドリッシュセブン Third BEAT! 第1クール',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_8937',
          title: '月曜日のたわわ2',
          episode: [1, 2, 3, 4, 5, 6],
          watched: [] as Number[],
        },
        {
          id: 'c_8787',
          title: 'マギアレコード 魔法少女まどか☆マギカ外伝 1st SEASON総集編',
          episode: [1, 2, 3],
          watched: [] as Number[],
        },
        {
          id: 'c_7900',
          title: '指先から本気の熱情2-恋人は消防士-',
          episode: [1, 2, 3, 4, 5, 6, 7, 8],
          watched: [] as Number[],
        },
        {
          id: 'c_8649',
          title: '戦乙女の食卓Ⅱ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8],
          watched: [] as Number[],
        },
        {
          id: 'c_8742',
          title: '異世界チート魔術師 第13話「宵星の祭りと魔術師」',
          episode: [13],
          watched: [] as Number[],
        },
        {
          id: 'c_7716',
          title: 'バイオハザード: インフィニット ダークネス',
          episode: [1, 2, 3, 4],
          watched: [] as Number[],
        },
        {
          id: 'c_7600',
          title: 'TSUKIPRO THE ANIMATION 2',
          episode: [1, 2, 3, 4, 5, 6, 7, 8],
          watched: [] as Number[],
        },
        {
          id: 'c_8747',
          title: 'Fate/Grand Order -絶対魔獣戦線バビロニア- 総集編',
          episode: [1, 2],
          watched: [] as Number[],
        },
        {
          id: 'c_8853',
          title: '鬼滅の刃 竈門炭治郎 立志編 特別編集版',
          episode: [1, 2, 3, 4, 5],
          watched: [] as Number[],
        },
        {
          id: 'c_8789',
          title: '白い砂のアクアトープ みに',
          episode: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21,
          ],
          watched: [] as Number[],
        },
        {
          id: 'c_8583',
          title: '闇芝居 (9期)',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_8526',
          title: 'モンスターズ・ワーク',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_8685',
          title: 'スター・ウォーズ: ビジョンズ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          watched: [] as Number[],
        },
        {
          id: 'c_8704',
          title: 'ホワット・イフ…？',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          watched: [] as Number[],
        },
        {
          id: 'c_8963',
          title: 'Pokémon Evolutions',
          episode: [1, 2, 3, 4, 5, 6, 7, 8],
          watched: [] as Number[],
        },
        {
          id: 'c_8810',
          title: '『SHAMAN KING』ミニアニメ「ふんばり温泉 繁盛記」',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_8668',
          title: '暗黒家族 ワラビさん',
          episode: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ],
          watched: [] as Number[],
        },
        {
          id: 'c_8625',
          title: 'KICK&SLIDE',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_8828',
          title: '『天才王子の赤字国家再生術』ショートドラマ',
          episode: [1, 2],
          watched: [] as Number[],
        },
        {
          id: 'c_8566',
          title: 'よしまほ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_8689',
          title: 'ミュークル大冒険！ ねらわれた異世界を救え',
          episode: [1, 2, 3, 4, 5, 6, 7],
          watched: [] as Number[],
        },
        {
          id: 'c_8777',
          title: '妄想宇宙人バブちゅ～',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_8771',
          title: 'トラとミケ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_8683',
          title: 'みにヴぁん ら～じ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_8624',
          title: 'モンチッチ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
          watched: [] as Number[],
        },
        {
          id: 'c_8984',
          title: '終末のワルキューレ ミニアニメ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_8823',
          title: 'Qフォース',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_8671',
          title: 'チップとデールのパークライフ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          watched: [] as Number[],
        },
        {
          id: 'c_8792',
          title: 'ケンタウロスワールド',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_8873',
          title: 'ダグの日常',
          episode: [1, 2, 3, 4, 5],
          watched: [] as Number[],
        },
        {
          id: 'c_8791',
          title: 'トランスフォーマー: ウォー・フォー・サイバトロン: キングダム',
          episode: [1, 2, 3, 4, 5, 6],
          watched: [] as Number[],
        },
        {
          id: 'c_8862',
          title: 'せかいは ふしぎで できている！',
          episode: [1, 2, 3, 4, 5, 6],
          watched: [] as Number[],
        },
        {
          id: 'c_8833',
          title: 'ヴィラーノス Phase1　「暗躍するブラックハット団」',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          watched: [] as Number[],
        },
        {
          id: 'c_8869',
          title: '勇者: The Animation',
          episode: [1, 2, 3, 4, 5, 6],
          watched: [] as Number[],
        },
        {
          id: 'c_8892',
          title: 'スター・トレック: ローワー・デッキ シーズン2',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_8839',
          title: 'グーフィーのステイホーム教室',
          episode: [1, 2, 3],
          watched: [] as Number[],
        },
        {
          id: 'c_8861',
          title: 'ダイアン姉さんは今日もイケイケ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8],
          watched: [] as Number[],
        },
        {
          id: 'c_8867',
          title: 'キッド・コズミック シーズン2',
          episode: [1, 2, 3, 4, 5, 6, 7, 8],
          watched: [] as Number[],
        },
        {
          id: 'c_8941',
          title: 'シンビアパート',
          episode: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24,
          ],
          watched: [] as Number[],
        },
      ],
      to_this: true,
      hide_works: false,
      info: {
        year: year,
        season: season,
        season_en: season_en,
      },
      twilink:
        'https://twitter.com/intent/tweet?text=%23' +
        encodeURI(
          'nanimita で' +
            year +
            '年' +
            season +
            'クール見たアニメをまとめました！ https://nanimita.theoria.ga/' +
            year +
            season_en,
        ),
      maslink:
        'https://mastoshare.net/post.php?text=%23' +
        encodeURI(
          'nanimita で' +
            year +
            '年' +
            season +
            'クール見たアニメをまとめました！ https://nanimita.theoria.ga/' +
            year +
            season_en,
        ),
    };
  },
  methods: {
    click_episode(
      b: Boolean,
      watched_list: Array<Number>,
      full_list: Array<Number>,
      ep: number,
    ) {
      if (b) {
        watched_list = full_list.slice(0, full_list.indexOf(ep) + 1);
      } else {
        if (watched_list.includes(ep)) {
          watched_list.splice(watched_list.indexOf(ep), 1);
        } else {
          watched_list.push(ep);
        }
      }
      return watched_list;
    },
    generate(b: Boolean) {
      if (b) {
        var bg = '#1f2937';
      } else {
        var bg = '#ffffff';
      }

      html2canvas(<HTMLInputElement>document.querySelector('#shot'), {
        backgroundColor: bg,
        scale: 1,
        width: 1024,
        windowWidth: 1024,
        y: 0,
        scrollY: 0,
      }).then(function (canvas) {
        var dataUrl = canvas.toDataURL('image/jpeg');
        var w = window.open('about:blank');
        if (w === null) {
          window.open(dataUrl);
        } else {
          w.document.write("<img src='" + dataUrl + "'/>");
        }
      });
    },
  },
});
</script>
<template>
  <div id="shot">
    <div class="container max-w-11/12 mx-auto mt-10">
      <div class="h-30 mb-8">
        <a href="/">
          <img
            v-if="show"
            alt="nanimita logo"
            class="w-52 mx-auto"
            :src="'/logo.png'"
          />
        </a>
      </div>

      <div class="text-center text-md">
        <h1 class="font-serif font-bold font-bold text-4xl mb-4">
          {{ t('title', info) }}
        </h1>

        <p class="mt-3">
          {{ t('share_whatched') }}
        </p>
      </div>
      <div class="text-center" data-html2canvas-ignore>
        <button
          v-if="to_this"
          class="py-1 px-3 rounded font-bold text-white bg-blue-500 m-3"
          @click="to_this = !to_this"
        >
          <i class="iconify" :data-icon="'mdi:arrow-expand-left'" />
          {{ t('register_renge') }}
        </button>
        <button
          v-else
          class="py-1 px-3 rounded font-bold text-white bg-blue-500 m-3"
          @click="to_this = !to_this"
        >
          <i class="iconify" :data-icon="'mdi:check'" />
          {{ t('register_one_episode') }}
        </button>

        <button
          v-if="hide_works"
          class="py-1 px-3 rounded font-bold text-white bg-true-gray-500 m-3"
          @click="hide_works = !hide_works"
        >
          <i class="iconify" :data-icon="'mdi:eye'" />
          {{ t('show_zero_works') }}
        </button>
        <button
          v-else
          class="py-1 px-3 rounded font-bold text-white bg-blue-500 m-3"
          @click="hide_works = !hide_works"
        >
          <i class="iconify" :data-icon="'mdi:eye-off'" />
          {{ t('hide_zero_works') }}
        </button>
      </div>
      <div class="table w-full my-4">
        <div class="table-row-group text-center items-center">
          <div
            class="table-row item"
            v-for="item in items"
            :key="item.id"
            :class="{ hidden: hide_works && item.watched.length === 0 }"
          >
            <div class="table-cell w-1/4 align-middle">
              <p class="m-2">{{ item.title }}</p>
            </div>
            <div class="table-cell w-3/4 align-middle">
              <div class="flex text-black">
                <div
                  class="flex-1 mx-1 my-2 py-3 rounded cursor-pointer"
                  v-for="ep in item.episode"
                  :key="ep"
                  :id="item.id + '_' + ep"
                  :class="
                    item.watched.includes(ep)
                      ? 'bg-green-400'
                      : 'bg-true-gray-300'
                  "
                  @click="
                    item.watched = click_episode(
                      to_this,
                      item.watched,
                      item.episode,
                      ep,
                    )
                  "
                >
                  {{ ep }}
                </div>
              </div>
            </div>
          </div>

          <!--/table-row-->
        </div>
      </div>
      <!-- /table -->
      <div class="text-center" data-html2canvas-ignore>
        <button
          v-if="to_this"
          class="py-1 px-3 rounded font-bold text-white bg-blue-500 m-3"
          @click="to_this = !to_this"
        >
          <i class="iconify" :data-icon="'mdi:arrow-expand-left'" />
          {{ t('register_renge') }}
        </button>
        <button
          v-else
          class="py-1 px-3 rounded font-bold text-white bg-blue-500 m-3"
          @click="to_this = !to_this"
        >
          <i class="iconify" :data-icon="'mdi:check'" />
          {{ t('register_one_episode') }}
        </button>

        <button
          v-if="hide_works"
          class="py-1 px-3 rounded font-bold text-white bg-true-gray-500 m-3"
          @click="hide_works = !hide_works"
        >
          <i class="iconify" :data-icon="'mdi:eye'" />
          {{ t('show_zero_works') }}
        </button>
        <button
          v-else
          class="py-1 px-3 rounded font-bold text-white bg-blue-500 m-3"
          @click="hide_works = !hide_works"
        >
          <i class="iconify" :data-icon="'mdi:eye-off'" />
          {{ t('hide_zero_works') }}
        </button>

        <button
          class="py-1 px-3 rounded font-bold text-white bg-blue-500 m-3"
          @click="generate(isDark)"
        >
          <i class="iconify" :data-icon="'mdi:image-edit'" />
          {{ t('generate') }}
        </button>
        <p class="">{{ t('post_with_image') }}</p>
        <p class="m-3">
          <a
            class="py-1 px-3 rounded font-bold text-white bg-blue-400"
            :href="twilink"
            rel="noreferrer"
            target="_blank"
          >
            <i class="iconify" :data-icon="'mdi:twitter'" />
            Tweet
          </a>
          <a
            class="py-1 px-3 rounded font-bold text-white bg-blue-500 ml-3"
            :href="maslink"
            rel="noreferrer"
            target="_blank"
          >
            <i class="iconify" :data-icon="'mdi:mastodon'" />
            Toot!
          </a>
        </p>
      </div>

      <footer class="text-center mt-10">
        <ul
          class="flex justify-between w-1/3 mx-auto mb-8"
          data-html2canvas-ignore
        >
          <li class="cursor-pointer text-2xl">
            <a
              href="#"
              @click="toggleLocales"
              class="footer-link text-cyan-700 hover:text-cyan-500"
              :title="t('toggle_language')"
            >
              <i
                class="iconify"
                :data-icon="'ant-design:translation-outlined'"
              />
            </a>
          </li>
          <li class="cursor-pointer text-2xl">
            <a
              href="#"
              @click="toggleDark"
              class="text-cyan-700 hover:text-cyan-500"
              :title="t('toggle_theme')"
            >
              <i class="iconify" :data-icon="'mdi:theme-light-dark'" />
            </a>
          </li>
          <li class="cursor-pointer text-2xl">
            <a
              href="https://github.com/theoria24/nanimita"
              rel="noreferrer"
              target="_blank"
              class="footer-link text-cyan-700 hover:text-cyan-500"
              title="Github repo"
            >
              <i class="iconify" :data-icon="'mdi:github'" />
            </a>
          </li>
        </ul>

        <div class="m-1">
          &copy; 2021
          <a
            class="text-cyan-500 hover:text-cyan-600"
            href="https://nanimita.theoria.ga"
            rel="noreferrer"
            >nanimita.theoria.ga</a
          >
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
.hidden {
  display: none;
}
</style>
