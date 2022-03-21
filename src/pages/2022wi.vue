<script lang="ts">
import { useI18n } from 'vue-i18n';

import { defineComponent, ref } from 'vue';
import { useTheme } from '/@/composables';
import html2canvas from 'html2canvas';

const year = '2022';
const season = '冬';
const season_en = 'winter';

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
          id: 'c_8365',
          title: 'その着せ替え人形は恋をする',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_8451',
          title: '進撃の巨人 The Final Season Part.2',
          episode: [76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
          watched: [] as Number[],
        },
        {
          id: 'c_8179',
          title: '明日ちゃんのセーラー服',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_7881',
          title: 'スローループ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_8307',
          title: 'ジョジョの奇妙な冒険 ストーンオーシャン',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_8855',
          title: '平家物語',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          watched: [] as Number[],
        },
        {
          id: 'c_8851',
          title: 'からかい上手の高木さん3',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_7654',
          title: 'プリンセスコネクト！Re:Dive Season 2',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          watched: [] as Number[],
        },
        {
          id: 'c_7510',
          title: '終末のハーレム',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          watched: [] as Number[],
        },
        {
          id: 'c_6989',
          title: 'ありふれた職業で世界最強 2nd season',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          watched: [] as Number[],
        },
        {
          id: 'c_7910',
          title: '天才王子の赤字国家再生術',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          watched: [] as Number[],
        },
        {
          id: 'c_8799',
          title: 'ハコヅメ ～交番女子の逆襲～',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_8523',
          title: '異世界美少女受肉おじさんと',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          watched: [] as Number[],
        },
        {
          id: 'c_7908',
          title: '失格紋の最強賢者',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_7530',
          title: '賢者の弟子を名乗る賢者',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          watched: [] as Number[],
        },
        {
          id: 'c_8130',
          title: 'リアデイルの大地にて',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_8691',
          title: '怪人開発部の黒井津さん',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          watched: [] as Number[],
        },
        {
          id: 'c_6066',
          title: '地球外少年少女',
          episode: [1, 2, 3, 4, 5, 6],
          watched: [] as Number[],
        },
        {
          id: 'c_9030',
          title: '東京24区',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_8149',
          title: '錆喰いビスコ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          watched: [] as Number[],
        },
        {
          id: 'c_7746',
          title: 'CUE!',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_9092',
          title: '時光代理人 -LINK CLICK-',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_8958',
          title: '現実主義勇者の王国再建記 第二部',
          episode: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
          watched: [] as Number[],
        },
        {
          id: 'c_7829',
          title: '殺し愛',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          watched: [] as Number[],
        },
        {
          id: 'c_8584',
          title: 'ヴァニタスの手記 2クール目',
          episode: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
          watched: [] as Number[],
        },
        {
          id: 'c_9059',
          title: 'イロドリミドリ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8],
          watched: [] as Number[],
        },
        {
          id: 'c_7684',
          title: '薔薇王の葬列',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_8176',
          title: 'ドールズフロントライン',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_7822',
          title: '佐々木と宮野',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_9018',
          title: 'リーマンズクラブ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          watched: [] as Number[],
        },
        {
          id: 'c_7927',
          title: 'オリエント',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_8969',
          title: 'トライブナイン',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          watched: [] as Number[],
        },
        {
          id: 'c_9133',
          title: 'デリシャスパーティ♡プリキュア',
          episode: [1, 2, 3, 4, 5, 6],
          watched: [] as Number[],
        },
        {
          id: 'c_7924',
          title: '最遊記RELOAD -ZEROIN-',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_8955',
          title: '王子の本命は悪役令嬢',
          episode: [1, 2, 3, 3, 4, 5, 6, 6, 7, 8],
          watched: [] as Number[],
        },
        {
          id: 'c_9062',
          title: 'オンエアできない！',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_8875',
          title:
            'あたしゃ川尻こだまだよ ～デンジャラスライフハッカーのただれた生活～',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_8133',
          title: 'フットサルボーイズ!!!!!',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6685',
          title: '錆色のアーマ -黎明-',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_8804',
          title: '幻想三國誌 -天元霊心記-',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          watched: [] as Number[],
        },
        {
          id: 'c_9269',
          title: 'ぷちセカ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_9212',
          title: 'ポケットモンスター 神とよばれし アルセウス',
          episode: [1, 2, 3, 4],
          watched: [] as Number[],
        },
        {
          id: 'c_8950',
          title: 'コタローは1人暮らし',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_9213',
          title: 'テイルズ オブ ルミナリア The Fateful Crossroad',
          episode: [1, 2],
          watched: [] as Number[],
        },
        {
          id: 'c_9217',
          title: '闇芝居 (10期)',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_9313',
          title:
            'BanG Dream! ガールズバンドパーティ！5th Anniversary Animation -CiRCLE THANKS PARTY!-',
          episode: [1, 2],
          watched: [] as Number[],
        },
        {
          id: 'c_9185',
          title: 'テイコウペンギン',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_9184',
          title: 'ニンジャラ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_9084',
          title: 'お昼のショッカーさん',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_9177',
          title: 'ガル学。Ⅱ～Lucky Stars～',
          episode: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
            37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
          ],
          watched: [] as Number[],
        },
        {
          id: 'c_9266',
          title: '人形学園',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_9265',
          title: '赤ちゃん本部長 第2期',
          episode: [1, 2, 3, 4, 5, 6, 7, 8],
          watched: [] as Number[],
        },
        {
          id: 'c_9237',
          title: 'BABY-HAMITANG',
          episode: [1, 2, 3, 4, 5, 6],
          watched: [] as Number[],
        },
        {
          id: 'c_9298',
          title: 'ザ・カップヘッド・ショウ！',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_9277',
          title: 'マーベル ヒット・モンキー シーズン1',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_9326',
          title: 'ざんねんないきもの事典 (第4シリーズ)',
          episode: [26, 27, 28, 29, 30],
          watched: [] as Number[],
        },
        {
          id: 'c_9238',
          title: 'パウ・パトロール (シーズン4)',
          episode: [79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
          watched: [] as Number[],
        },
        {
          id: 'c_9098',
          title: '全力！ プラウドファミリー',
          episode: [1, 2, 3, 4, 5, 6],
          watched: [] as Number[],
        },
        {
          id: 'c_9325',
          title: 'ぞうきんドッグ',
          episode: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
          ],
          watched: [] as Number[],
        },
        {
          id: 'c_9400',
          title: 'ザ・ボーイズ：ダイアボリカル',
          episode: [1, 2, 3, 4, 5, 6, 7, 8],
          watched: [] as Number[],
        },
        {
          id: 'c_9225',
          title: 'DOTA: ドラゴンの血 シリーズ2',
          episode: [1, 2, 3, 4, 5, 6, 7, 8],
          watched: [] as Number[],
        },
        {
          id: 'c_9297',
          title: 'キッド・コズミック シーズン3',
          episode: [1, 2, 3, 4, 5, 6],
          watched: [] as Number[],
        },
        {
          id: 'c_9339',
          title: 'ヒューマン・リソース・モンスターズ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_9296',
          title: 'アングリーバード: クレイジー・サマーキャンプ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
          watched: [] as Number[],
        },
        {
          id: 'c_9301',
          title: 'ヴォクス・マキナの伝説 シーズン1',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_9418',
          title: 'アウルハウス シーズン2',
          episode: [20, 21, 22, 23, 24, 25, 26],
          watched: [] as Number[],
        },
        {
          id: 'c_9442',
          title: 'キラキラADらっこちゃん',
          episode: [1, 2, 3, 4, 5, 6, 7],
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
            season_en +
            ' @_theoria',
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
      copyyear: '',
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
  created() {
    const d = new Date();
    this.copyyear = String(d.getFullYear());
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
          &copy; 2021 - {{ copyyear }}
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
