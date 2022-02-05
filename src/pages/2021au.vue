<script lang="ts">
import { useI18n } from 'vue-i18n';

import { defineComponent, ref } from 'vue';
import { useTheme } from '/@/composables';
import html2canvas from 'html2canvas';

const year = '2021';
const season = '秋';
const season_en = 'autumn';

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
          id: 'c_6113',
          title: '無職転生 ～異世界行ったら本気だす～  第2部',
          episode: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
          watched: [] as Number[],
        },
        {
          id: 'c_6165',
          title: '鬼滅の刃 無限列車編',
          episode: [1, 2, 3, 4, 5, 6, 7],
          watched: [] as Number[],
        },
        {
          id: 'c_6188',
          title: '鬼滅の刃 遊郭編',
          episode: [1, 2, 3, 4, 5],
          watched: [] as Number[],
        },
        {
          id: 'c_6112',
          title: '先輩がうざい後輩の話',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6118',
          title: '見える子ちゃん',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6133',
          title: 'ブルーピリオド',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6116',
          title: '古見さんは、コミュ症です。',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6131',
          title: 'takt op.Destiny',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6136',
          title: '世界最高の暗殺者、異世界貴族に転生する',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6145',
          title: '王様ランキング',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6114',
          title: '86―エイティシックス― 第2クール',
          episode: [12, 13, 14, 15, 16, 17, 18, 18, 19, 20, 21],
          watched: [] as Number[],
        },
        {
          id: 'c_6115',
          title: '異世界食堂2',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6121',
          title: '結城友奈は勇者である 大満開の章',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6126',
          title:
            '真の仲間じゃないと勇者のパーティーを追い出されたので、辺境でローライフするにしました',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_6124',
          title: 'プラチナエンド',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_6160',
          title: '海賊王女',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6119',
          title: '月とライカと吸血姫',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6123',
          title: '最果てのパラディン',
          episode: [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6110',
          title: '大正オトメ御伽話',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6134',
          title: 'サクガン',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6120',
          title: '吸血鬼すぐ死ぬ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6132',
          title: 'SELECTION PROJECT',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_6141',
          title: 'ルパン三世 PART6',
          episode: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6152',
          title: 'マブラヴ オルタネイティヴ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6149',
          title: 'ワールドトリガー 3rdシーズン',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6147',
          title: '逆転世界ノ電池少女',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6143',
          title: '進化の実～知らないうちに勝ち組人生～',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6161',
          title: 'かぎなど',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6142',
          title: '180秒で君の耳を幸せにできるか？',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6125',
          title: 'プラオレ！～PRIDE OF ORANGE～',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6104',
          title: 'やくならマグカップも 二番窯',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6128',
          title: '境界戦機',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_6130',
          title: 'でーじミーツガール',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6144',
          title: 'テスラノート',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_6137',
          title: 'しょうたいむ！～歌のお姉さんだってしたい',
          episode: [1, 2, 3, 4, 5, 6, 7, 8],
          watched: [] as Number[],
        },
        {
          id: 'c_6108',
          title: 'さんかく窓の外側は夜',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6140',
          title: 'メガトン級ムサシ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_6153',
          title: 'キミとフィットボクシング',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_1',
          title: '極主夫道 Part 2',
          episode: [1, 2, 3, 4, 5],
          watched: [] as Number[],
        },
        {
          id: 'c_2',
          title: '範馬刃牙',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_4785',
          title: 'ポプテピピック 再放送(リミックス版)',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6135',
          title: 'シキザクラ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6148',
          title: 'Deep Insanity THE LOST CHILD',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6150',
          title: 'ワッチャプリマジ！',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_6155',
          title: 'ビルディバイド -#000000-',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6151',
          title: '半妖の夜叉姫 -戦国御伽草子- 弐の章',
          episode: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
          watched: [] as Number[],
        },
        {
          id: 'c_6129',
          title: 'ヴィジュアルプリズン',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6138',
          title: '魔王イブロギアに身を捧げよ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          watched: [] as Number[],
        },
        {
          id: 'c_6171',
          title: '闘神機ジーズフレーム',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6127',
          title: 'MUTEKING THE Dancing HERO',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6158',
          title: 'BanG Dream! ガルパ☆ピコ ふぃーばー！',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
          watched: [] as Number[],
        },
        {
          id: 'c_6163',
          title: 'ぐんまちゃん',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_3',
          title: 'ガンダムブレイカー バトローグ',
          episode: [1, 2, 3, 4, 5, 6],
          watched: [] as Number[],
        },
        {
          id: 'c_6154',
          title: 'デジモンゴーストゲーム',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_6198',
          title: '空色ユーティリティ',
          episode: [1],
          watched: [] as Number[],
        },
        {
          id: 'c_4',
          title: 'Arcane (アーケイン)',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          watched: [] as Number[],
        },
        {
          id: 'c_5',
          title: 'スーパー・クルックス',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_6',
          title: 'うまよん 新作ショートアニメ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_3727',
          title: 'ポンコツクエスト～魔王と派遣の魔物たち～ シーズン7',
          episode: [73],
          watched: [] as Number[],
        },
        {
          id: 'c_6139',
          title: 'カードファイト!! ヴァンガード overDress Season2',
          episode: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
          watched: [] as Number[],
        },
        {
          id: 'c_7',
          title: 'アグレッシブ烈子 シーズン4 (2018)',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_8',
          title: '湖池屋SDGs劇場 サスとテナ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_6157',
          title: 'チキップダンサーズ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
          watched: [] as Number[],
        },
        {
          id: 'c_6176',
          title: '暗界神使',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
          watched: [] as Number[],
        },
        {
          id: 'c_6228',
          title: 'かなしきデブ猫ちゃん',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_9',
          title: '其れ、則ちスケッチ。',
          episode: [1, 2, 3, 4, 5, 6, 7],
          watched: [] as Number[],
        },
        {
          id: 'c_10',
          title: '薄桜鬼 OVA',
          episode: [1, 2, 3],
          watched: [] as Number[],
        },
        {
          id: 'c_11',
          title: 'Fate/Grand Carnival [2nd Season]',
          episode: [1, 2],
          watched: [] as Number[],
        },
        {
          id: 'c_12',
          title: 'リッチ警官キャッシュ！',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
          watched: [] as Number[],
        },
        {
          id: 'c_6166',
          title: '吉田勝子のヤバイわ！SDGs ～荒ぶる！トラブル！サステナブル！',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_13',
          title: '陰謀論のオシゴト',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_14',
          title: '太鼓の達人 アニメば～じょん！',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_15',
          title: '太鼓の達人 アニメば～じょん！ ストーリー編',
          episode: [1],
          watched: [] as Number[],
        },
        {
          id: 'c_16',
          title: 'ミッキーとオリバーのエージェント養成講座',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
          watched: [] as Number[],
        },
        {
          id: 'c_17',
          title: '鎮西八郎為朝',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
          watched: [] as Number[],
        },
        {
          id: 'c_18',
          title: 'スーパーシークレット',
          episode: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22,
          ],
          watched: [] as Number[],
        },
        {
          id: 'c_19',
          title: 'オラフが贈る物語',
          episode: [1, 2, 3, 4, 5, 6],
          watched: [] as Number[],
        },
        {
          id: 'c_6177',
          title: '猫ジョッキー 2期',
          episode: [1, 2, 3, 4],
          watched: [] as Number[],
        },
        {
          id: 'c_20',
          title: 'バトルスピリッツ ミラージュ',
          episode: [1],
          watched: [] as Number[],
        },
        {
          id: 'c_21',
          title: 'コンドームバトラー ゴロー Revive',
          episode: [1, 2],
          watched: [] as Number[],
        },
        {
          id: 'c_22',
          title: '点線に沿って切り取る',
          episode: [1, 2, 3, 4, 5, 6],
          watched: [] as Number[],
        },
        {
          id: 'c_23',
          title: 'ソーラー・オポジット シーズン1',
          episode: [1, 2, 3, 4, 5, 6, 7, 8],
          watched: [] as Number[],
        },
        {
          id: 'c_24',
          title: 'ソーラー・オポジット シーズン2',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          watched: [] as Number[],
        },
        {
          id: 'c_25',
          title: 'ディスカバー・ビースト 〜愉快で残酷な野生のヒミツ〜',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          watched: [] as Number[],
        },
        {
          id: 'c_26',
          title: 'スペースドギーズ',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          watched: [] as Number[],
        },
        {
          id: 'c_27',
          title: 'カルマのラップ・ワールド',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          watched: [] as Number[],
        },
        {
          id: 'c_28',
          title: 'プリンセス・マヤと3人の戦士たち',
          episode: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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
