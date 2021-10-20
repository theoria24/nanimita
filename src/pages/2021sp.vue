<script lang="ts">
import { useI18n } from 'vue-i18n';

import { defineComponent, ref } from 'vue';
import { useTheme } from '/@/composables';
import html2canvas from 'html2canvas';

const year = '2021';
const season = '春';
const season_en = 'spring';

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
          id: 'c_5929',
          title: 'ゾンビランドサガ リベンジ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5943',
          title: 'スーパーカブ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5931',
          title: 'ひげを剃る。そして女子高生を拾う。',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_5953',
          title: 'SSSS.DYNAZENON',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5971',
          title: 'シャドーハウス',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_5982',
          title: "Vivy -Fluorite Eye's Song-",
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_5946',
          title: '戦闘員、派遣します！',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5935',
          title: 'スライム倒して300年、知らないうちにレベルMAXになってました',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5928',
          title: '幼なじみが絶対に負けないラブコメ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5973',
          title: '86-エイティシックス-',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          watched: [] as Number[],
        },
        {
          id: 'c_5930',
          title: '異世界魔王と召喚少女の奴隷魔術Ω',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_5945',
          title: '究極進化したフルダイブRPGが現実よりもクソゲーだったら',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5933',
          title: '聖女の魔力は万能です',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5965',
          title: 'イジらないで、長瀞さん',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5939',
          title: '東京リベンジャーズ（第1クール）',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5959',
          title: 'やくならマグカップも',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5934',
          title: '転生したらスライムだった件 転スラ日記',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5955',
          title: '不滅のあなたへ（第1クール）',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5966',
          title: 'さよなら私のクラマー',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_5950',
          title: 'SHAMAN KING（第1クール）',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_5963',
          title: 'ゴジラ S.P',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_5936',
          title: '恋と呼ぶには気持ち悪い',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5932',
          title: 'ましろのおと',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5944',
          title: 'ドラゴン、家を買う。',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5948',
          title: '灼熱カバディ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5947',
          title: '僕のヒーローアカデミア（第5期）（第1クール）',
          episode: [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101],
          watched: [] as Number[],
        },
        {
          id: 'c_5940',
          title: '憂国のモリアーティ（第2クール）',
          episode: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          watched: [] as Number[],
        },
        {
          id: 'c_5949',
          title: 'オッドタクシー',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_5938',
          title: '美少年探偵団',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5942',
          title: 'フルーツバスケット The Final',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_5967',
          title: 'BLUE REFLECTION RAY/澪（第1クール）',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5974',
          title: 'バトルアスリーテス大運動会 ReSTART!',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5990',
          title: 'バクテン!!',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5991',
          title: 'すばらしきこのせかい The Animation',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5992',
          title: '結城友奈は勇者である ちゅるっと！',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5976',
          title: 'MARS RED',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_5989',
          title: 'NOMAD メガロボクス2',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_5985',
          title: 'EDENS ZERO（第1クール）',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5984',
          title: 'セブンナイツ レボリューション -英雄の継承者-',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5917',
          title: '黒ギャルになったから親友としてみた。',
          episode: [1, 2, 3, 4, 5, 6, 7, 8],
          watched: [] as Number[],
        },
        {
          id: 'c_5980',
          title: '擾乱 THE PRINCESS OF SNOW AND BLOOD',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6004',
          title: 'ミュークルドリーミー みっくす！（第1クール）',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5997',
          title: '魔入りました！入間くん（第2シリーズ・第1クール）',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          watched: [] as Number[],
        },
        {
          id: 'c_5968',
          title: 'Fairy蘭丸～あなたの心お助けします～',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5993',
          title: 'セスタス -The Roman Fighter-',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          watched: [] as Number[],
        },
        {
          id: 'c_5923',
          title: '新幹線変形ロボ シンカリオンZ THE ANIMATION（第1クール）',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6016',
          title: '小林さんちのメイドラゴン 連続ショートアニメ劇場『ミニドラ』',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_5956',
          title: 'ダイナ荘びより（第1クール）',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_5958',
          title: 'マジカパーティ（第1クール）',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_5954',
          title: 'カードファイト!! ヴァンガード overDress',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6001',
          title: 'ヘタリア World★Stars（第1クール）',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_5839',
          title: '蜘蛛ですが、なにか？（第2クール）',
          episode: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          watched: [] as Number[],
        },
        {
          id: 'c_5867',
          title: 'バック・アロウ（第2クール）',
          episode: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          watched: [] as Number[],
        },
        {
          id: 'c_5915',
          title: 'トロピカル～ジュ！プリキュア（第2クール）',
          episode: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
          watched: [] as Number[],
        },
        {
          id: 'c_5861',
          title: '七つの大罪 憤怒の審判（第2クール）',
          episode: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          watched: [] as Number[],
        },
        {
          id: 'c_5833',
          title: 'アイカツプラネット！（第2クール）',
          episode: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
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
            'クールに見たアニメをまとめました！ https://nanimita.theoria.ga/' +
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
            'クールに見たアニメをまとめました！ https://nanimita.theoria.ga/' +
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
