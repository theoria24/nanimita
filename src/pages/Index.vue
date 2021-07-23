<script lang="ts">
import { useI18n } from 'vue-i18n';

import { defineComponent, ref } from 'vue';
import { useTheme } from '/@/composables';
import html2canvas from 'html2canvas';

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
      c_5929: 0,
      c_5943: 0,
      c_5931: 0,
      c_5953: 0,
      c_5971: 0,
      c_5982: 0,
      c_5946: 0,
      c_5935: 0,
      c_5928: 0,
      c_5973: 0,
      c_5930: 0,
      c_5945: 0,
      c_5933: 0,
      c_5965: 0,
      c_5939: 0,
      c_5959: 0,
      c_5934: 0,
      c_5955: 0,
      c_5966: 0,
      c_5950: 0,
      c_5963: 0,
      c_5936: 0,
      c_5932: 0,
      c_5944: 0,
      c_5948: 0,
      c_5947: 0,
      c_5940: 0,
      c_5949: 0,
      c_5938: 0,
      c_5942: 0,
      c_5967: 0,
      c_5974: 0,
      c_5990: 0,
      c_5991: 0,
      c_5992: 0,
      c_5976: 0,
      c_5989: 0,
      c_5985: 0,
      c_5984: 0,
      c_5917: 0,
      c_5980: 0,
      c_5997: 0,
      c_6004: 0,
      c_5968: 0,
      c_5993: 0,
      c_5923: 0,
      c_6016: 0,
      c_5956: 0,
      c_5958: 0,
      c_5954: 0,
      c_6001: 0,
      c_5839: 0,
      c_5867: 0,
      c_5915: 0,
      c_5861: 0,
      c_5833: 0,
      hide_works: false,
    };
  },
  methods: {
    generate(b: Boolean) {
      if (b) {
        var bg = '#1f2937';
      } else {
        var bg = '#ffffff';
      }
      var result = document.querySelector('#result');
      if (result === null) return;
      result.innerHTML = '';

      html2canvas(<HTMLInputElement>document.querySelector('#app'), {
        backgroundColor: bg,
        width: 1024,
        windowWidth: 1024,
        y: 0,
      }).then(function (canvas) {
        var result = document.querySelector('#result');
        if (result === null) return;
        result.appendChild(canvas);
      });
    },
  },
});
</script>
<template>
  <div class="container max-w-11/12 mx-auto mt-10">
    <div class="h-30 mb-8">
      <img
        v-if="show"
        alt="nanimita logo"
        class="w-52 mx-auto"
        :src="'logo.png'"
      />
    </div>

    <div class="text-center text-md">
      <h1 class="font-serif font-bold font-bold text-4xl mb-4">
        {{ t('title') }}
      </h1>

      <p class="mt-3">
        {{ t('share_progress') }}
      </p>
    </div>

    <div class="table w-full my-4">
      <div class="table-row-group text-center items-center">
        <div
          class="table-row"
          :class="c_5929 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">ゾンビランドサガ リベンジ</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5929 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5929 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5929 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5929 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5929 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5929 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5929 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5929 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5929 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5929 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5929 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5929 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5929 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5929 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5929 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5929 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5929 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5929 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5929 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5929 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5929 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5929 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5929 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5929 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5929 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5929 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5943 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">スーパーカブ</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5943 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5943 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5943 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5943 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5943 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5943 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5943 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5943 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5943 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5943 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5943 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5943 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5943 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5943 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5943 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5943 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5943 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5943 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5943 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5943 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5943 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5943 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5943 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5943 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5943 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5943 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5931 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">ひげを剃る。そして女子高生を拾う。</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5931 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5931 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5931 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5931 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5931 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5931 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5931 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5931 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5931 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5931 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5931 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5931 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5931 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5931 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5931 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5931 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5931 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5931 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5931 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5931 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5931 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5931 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5931 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5931 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5931 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5931 = 12"
              >
                12
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5931 < 13 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5931 = 13"
              >
                13
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5953 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">SSSS.DYNAZENON</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5953 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5953 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5953 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5953 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5953 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5953 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5953 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5953 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5953 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5953 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5953 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5953 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5953 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5953 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5953 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5953 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5953 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5953 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5953 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5953 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5953 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5953 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5953 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5953 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5953 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5953 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5971 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">シャドーハウス</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5971 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5971 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5971 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5971 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5971 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5971 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5971 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5971 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5971 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5971 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5971 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5971 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5971 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5971 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5971 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5971 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5971 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5971 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5971 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5971 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5971 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5971 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5971 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5971 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5971 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5971 = 12"
              >
                12
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5971 < 13 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5971 = 13"
              >
                13
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5982 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">Vivy -Fluorite Eye's Song-</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5982 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5982 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5982 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5982 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5982 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5982 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5982 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5982 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5982 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5982 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5982 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5982 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5982 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5982 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5982 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5982 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5982 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5982 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5982 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5982 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5982 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5982 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5982 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5982 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5982 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5982 = 12"
              >
                12
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5982 < 13 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5982 = 13"
              >
                13
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5946 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">戦闘員、派遣します！</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5946 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5946 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5946 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5946 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5946 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5946 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5946 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5946 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5946 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5946 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5946 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5946 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5946 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5946 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5946 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5946 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5946 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5946 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5946 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5946 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5946 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5946 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5946 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5946 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5946 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5946 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5935 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">
              スライム倒して300年、知らないうちにレベルMAXになってました
            </p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5935 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5935 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5935 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5935 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5935 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5935 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5935 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5935 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5935 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5935 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5935 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5935 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5935 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5935 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5935 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5935 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5935 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5935 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5935 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5935 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5935 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5935 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5935 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5935 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5935 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5935 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5928 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">幼なじみが絶対に負けないラブコメ</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5928 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5928 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5928 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5928 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5928 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5928 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5928 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5928 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5928 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5928 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5928 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5928 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5928 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5928 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5928 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5928 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5928 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5928 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5928 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5928 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5928 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5928 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5928 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5928 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5928 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5928 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5973 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">86-エイティシックス-</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5973 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5973 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5973 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5973 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5973 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5973 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5973 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5973 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5973 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5973 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5973 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5973 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5973 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5973 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5973 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5973 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5973 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5973 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5973 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5973 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5973 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5973 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5973 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5973 = 11"
              >
                11
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5930 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">異世界魔王と召喚少女の奴隷魔術Ω</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5930 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5930 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5930 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5930 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5930 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5930 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5930 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5930 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5930 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5930 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5930 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5930 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5930 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5930 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5930 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5930 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5930 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5930 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5930 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5930 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5930 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5930 = 10"
              >
                10
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5945 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">
              究極進化したフルダイブRPGが現実よりもクソゲーだったら
            </p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5945 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5945 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5945 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5945 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5945 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5945 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5945 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5945 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5945 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5945 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5945 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5945 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5945 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5945 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5945 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5945 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5945 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5945 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5945 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5945 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5945 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5945 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5945 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5945 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5945 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5945 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5933 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">聖女の魔力は万能です</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5933 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5933 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5933 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5933 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5933 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5933 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5933 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5933 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5933 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5933 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5933 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5933 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5933 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5933 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5933 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5933 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5933 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5933 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5933 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5933 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5933 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5933 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5933 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5933 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5933 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5933 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5965 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">イジらないで、長瀞さん</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5965 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5965 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5965 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5965 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5965 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5965 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5965 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5965 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5965 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5965 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5965 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5965 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5965 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5965 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5965 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5965 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5965 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5965 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5965 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5965 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5965 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5965 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5965 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5965 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5965 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5965 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5939 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">東京リベンジャーズ（第1クール）</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5939 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5939 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5939 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5939 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5939 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5939 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5939 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5939 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5939 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5939 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5939 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5939 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5939 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5939 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5939 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5939 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5939 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5939 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5939 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5939 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5939 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5939 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5939 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5939 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5939 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5939 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5959 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">やくならマグカップも</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5959 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5959 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5959 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5959 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5959 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5959 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5959 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5959 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5959 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5959 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5959 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5959 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5959 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5959 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5959 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5959 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5959 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5959 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5959 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5959 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5959 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5959 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5959 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5959 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5959 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5959 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5934 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">転生したらスライムだった件 転スラ日記</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5934 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5934 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5934 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5934 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5934 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5934 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5934 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5934 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5934 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5934 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5934 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5934 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5934 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5934 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5934 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5934 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5934 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5934 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5934 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5934 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5934 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5934 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5934 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5934 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5934 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5934 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5955 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">不滅のあなたへ（第1クール）</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5955 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5955 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5955 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5955 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5955 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5955 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5955 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5955 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5955 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5955 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5955 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5955 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5955 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5955 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5955 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5955 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5955 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5955 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5955 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5955 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5955 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5955 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5955 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5955 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5955 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5955 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5966 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">さよなら私のクラマー</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5966 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5966 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5966 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5966 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5966 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5966 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5966 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5966 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5966 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5966 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5966 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5966 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5966 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5966 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5966 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5966 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5966 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5966 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5966 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5966 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5966 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5966 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5966 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5966 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5966 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5966 = 12"
              >
                12
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5966 < 13 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5966 = 13"
              >
                13
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5950 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">SHAMAN KING（第1クール）</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5950 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5950 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5950 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5950 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5950 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5950 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5950 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5950 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5950 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5950 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5950 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5950 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5950 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5950 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5950 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5950 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5950 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5950 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5950 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5950 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5950 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5950 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5950 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5950 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5950 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5950 = 12"
              >
                12
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5950 < 13 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5950 = 13"
              >
                13
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5963 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">ゴジラ S.P</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5963 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5963 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5963 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5963 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5963 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5963 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5963 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5963 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5963 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5963 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5963 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5963 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5963 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5963 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5963 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5963 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5963 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5963 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5963 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5963 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5963 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5963 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5963 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5963 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5963 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5963 = 12"
              >
                12
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5963 < 13 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5963 = 13"
              >
                13
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5936 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">恋と呼ぶには気持ち悪い</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5936 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5936 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5936 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5936 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5936 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5936 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5936 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5936 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5936 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5936 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5936 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5936 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5936 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5936 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5936 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5936 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5936 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5936 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5936 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5936 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5936 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5936 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5936 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5936 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5936 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5936 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5932 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">ましろのおと</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5932 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5932 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5932 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5932 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5932 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5932 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5932 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5932 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5932 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5932 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5932 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5932 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5932 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5932 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5932 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5932 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5932 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5932 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5932 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5932 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5932 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5932 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5932 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5932 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5932 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5932 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5944 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">ドラゴン、家を買う。</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5944 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5944 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5944 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5944 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5944 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5944 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5944 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5944 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5944 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5944 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5944 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5944 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5944 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5944 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5944 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5944 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5944 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5944 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5944 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5944 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5944 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5944 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5944 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5944 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5944 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5944 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5948 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">灼熱カバディ</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5948 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5948 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5948 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5948 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5948 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5948 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5948 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5948 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5948 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5948 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5948 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5948 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5948 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5948 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5948 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5948 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5948 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5948 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5948 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5948 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5948 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5948 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5948 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5948 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5948 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5948 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5947 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">僕のヒーローアカデミア（第5期）（第1クール）</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5947 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5947 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5947 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5947 = 1"
              >
                89
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5947 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5947 = 2"
              >
                90
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5947 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5947 = 3"
              >
                91
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5947 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5947 = 4"
              >
                92
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5947 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5947 = 5"
              >
                93
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5947 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5947 = 6"
              >
                94
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5947 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5947 = 7"
              >
                95
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5947 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5947 = 8"
              >
                96
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5947 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5947 = 9"
              >
                97
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5947 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5947 = 10"
              >
                98
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5947 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5947 = 11"
              >
                99
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5947 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5947 = 12"
              >
                100
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5947 < 13 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5947 = 13"
              >
                101
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5940 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">憂国のモリアーティ（第2クール）</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5940 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5940 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5940 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5940 = 1"
              >
                12
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5940 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5940 = 2"
              >
                13
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5940 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5940 = 3"
              >
                14
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5940 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5940 = 4"
              >
                15
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5940 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5940 = 5"
              >
                16
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5940 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5940 = 6"
              >
                17
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5940 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5940 = 7"
              >
                18
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5940 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5940 = 8"
              >
                19
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5940 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5940 = 9"
              >
                20
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5940 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5940 = 10"
              >
                21
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5940 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5940 = 11"
              >
                22
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5940 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5940 = 12"
              >
                23
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5940 < 13 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5940 = 13"
              >
                24
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5949 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">オッドタクシー</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5949 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5949 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5949 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5949 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5949 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5949 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5949 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5949 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5949 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5949 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5949 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5949 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5949 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5949 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5949 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5949 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5949 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5949 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5949 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5949 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5949 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5949 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5949 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5949 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5949 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5949 = 12"
              >
                12
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5949 < 13 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5949 = 13"
              >
                13
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5938 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">美少年探偵団</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5938 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5938 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5938 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5938 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5938 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5938 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5938 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5938 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5938 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5938 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5938 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5938 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5938 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5938 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5938 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5938 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5938 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5938 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5938 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5938 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5938 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5938 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5938 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5938 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5938 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5938 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5942 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">フルーツバスケット The Final</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5942 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5942 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5942 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5942 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5942 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5942 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5942 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5942 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5942 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5942 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5942 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5942 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5942 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5942 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5942 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5942 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5942 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5942 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5942 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5942 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5942 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5942 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5942 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5942 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5942 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5942 = 12"
              >
                12
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5942 < 13 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5942 = 13"
              >
                13
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5967 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">BLUE REFLECTION RAY/澪（第1クール）</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5967 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5967 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5967 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5967 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5967 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5967 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5967 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5967 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5967 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5967 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5967 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5967 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5967 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5967 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5967 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5967 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5967 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5967 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5967 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5967 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5967 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5967 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5967 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5967 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5967 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5967 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5974 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">バトルアスリーテス大運動会 ReSTART!</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5974 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5974 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5974 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5974 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5974 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5974 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5974 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5974 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5974 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5974 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5974 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5974 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5974 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5974 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5974 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5974 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5974 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5974 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5974 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5974 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5974 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5974 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5974 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5974 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5974 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5974 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5990 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">バクテン!!</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5990 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5990 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5990 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5990 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5990 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5990 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5990 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5990 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5990 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5990 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5990 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5990 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5990 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5990 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5990 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5990 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5990 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5990 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5990 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5990 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5990 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5990 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5990 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5990 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5990 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5990 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5991 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">すばらしきこのせかい The Animation</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5991 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5991 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5991 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5991 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5991 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5991 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5991 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5991 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5991 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5991 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5991 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5991 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5991 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5991 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5991 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5991 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5991 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5991 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5991 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5991 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5991 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5991 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5991 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5991 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5991 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5991 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5992 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">結城友奈は勇者である ちゅるっと！</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5992 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5992 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5992 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5992 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5992 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5992 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5992 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5992 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5992 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5992 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5992 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5992 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5992 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5992 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5992 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5992 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5992 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5992 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5992 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5992 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5992 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5992 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5992 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5992 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5992 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5992 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5976 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">MARS RED</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5976 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5976 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5976 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5976 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5976 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5976 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5976 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5976 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5976 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5976 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5976 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5976 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5976 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5976 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5976 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5976 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5976 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5976 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5976 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5976 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5976 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5976 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5976 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5976 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5976 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5976 = 12"
              >
                12
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5976 < 13 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5976 = 13"
              >
                13
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5989 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">NOMAD メガロボクス2</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5989 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5989 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5989 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5989 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5989 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5989 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5989 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5989 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5989 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5989 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5989 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5989 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5989 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5989 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5989 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5989 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5989 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5989 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5989 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5989 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5989 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5989 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5989 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5989 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5989 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5989 = 12"
              >
                12
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5989 < 13 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5989 = 13"
              >
                13
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5985 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">EDENS ZERO（第1クール）</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5985 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5985 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5985 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5985 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5985 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5985 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5985 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5985 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5985 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5985 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5985 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5985 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5985 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5985 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5985 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5985 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5985 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5985 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5985 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5985 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5985 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5985 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5985 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5985 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5985 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5985 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5984 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">セブンナイツ レボリューション -英雄の継承者-</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5984 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5984 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5984 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5984 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5984 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5984 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5984 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5984 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5984 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5984 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5984 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5984 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5984 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5984 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5984 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5984 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5984 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5984 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5984 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5984 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5984 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5984 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5984 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5984 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5984 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5984 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5917 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">黒ギャルになったから親友としてみた。</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5917 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5917 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5917 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5917 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5917 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5917 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5917 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5917 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5917 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5917 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5917 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5917 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5917 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5917 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5917 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5917 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5917 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5917 = 8"
              >
                8
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5980 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">擾乱 THE PRINCESS OF SNOW AND BLOOD</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5980 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5980 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5980 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5980 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5980 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5980 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5980 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5980 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5980 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5980 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5980 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5980 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5980 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5980 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5980 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5980 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5980 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5980 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5980 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5980 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5980 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5980 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5980 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5980 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5980 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5980 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_6004 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">ミュークルドリーミー みっくす！（第1クール）</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_6004 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6004 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6004 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6004 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6004 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6004 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6004 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6004 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6004 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6004 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6004 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6004 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6004 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6004 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6004 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6004 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6004 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6004 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6004 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6004 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6004 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6004 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6004 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6004 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6004 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6004 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5997 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">魔入りました！入間くん（第2シリーズ・第1クール）</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5997 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5997 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5997 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5997 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5997 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5997 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5997 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5997 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5997 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5997 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5997 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5997 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5997 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5997 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5997 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5997 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5997 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5997 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5997 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5997 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5997 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5997 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5997 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5997 = 11"
              >
                11
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5968 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">Fairy蘭丸～あなたの心お助けします～</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5968 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5968 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5968 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5968 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5968 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5968 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5968 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5968 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5968 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5968 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5968 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5968 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5968 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5968 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5968 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5968 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5968 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5968 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5968 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5968 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5968 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5968 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5968 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5968 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5968 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5968 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5993 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">セスタス -The Roman Fighter-</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5993 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5993 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5993 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5993 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5993 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5993 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5993 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5993 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5993 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5993 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5993 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5993 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5993 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5993 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5993 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5993 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5993 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5993 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5993 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5993 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5993 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5993 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5993 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5993 = 11"
              >
                11
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5923 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">
              新幹線変形ロボ シンカリオンZ THE ANIMATION（第1クール）
            </p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5923 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5923 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5923 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5923 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5923 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5923 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5923 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5923 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5923 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5923 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5923 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5923 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5923 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5923 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5923 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5923 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5923 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5923 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5923 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5923 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5923 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5923 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5923 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5923 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5923 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5923 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_6016 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">
              小林さんちのメイドラゴン 連続ショートアニメ劇場『ミニドラ』
            </p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_6016 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6016 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6016 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6016 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6016 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6016 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6016 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6016 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6016 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6016 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6016 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6016 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6016 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6016 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6016 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6016 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6016 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6016 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6016 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6016 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6016 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6016 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6016 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6016 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6016 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6016 = 12"
              >
                12
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6016 < 13 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6016 = 13"
              >
                13
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5956 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">ダイナ荘びより（第1クール）</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5956 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5956 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5956 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5956 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5956 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5956 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5956 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5956 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5956 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5956 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5956 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5956 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5956 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5956 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5956 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5956 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5956 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5956 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5956 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5956 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5956 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5956 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5956 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5956 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5956 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5956 = 12"
              >
                12
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5956 < 13 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5956 = 13"
              >
                13
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5958 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">マジカパーティ（第1クール）</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5958 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5958 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5958 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5958 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5958 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5958 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5958 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5958 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5958 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5958 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5958 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5958 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5958 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5958 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5958 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5958 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5958 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5958 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5958 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5958 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5958 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5958 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5958 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5958 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5958 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5958 = 12"
              >
                12
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5958 < 13 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5958 = 13"
              >
                13
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5954 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">カードファイト!! ヴァンガード overDress</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5954 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5954 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5954 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5954 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5954 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5954 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5954 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5954 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5954 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5954 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5954 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5954 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5954 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5954 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5954 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5954 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5954 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5954 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5954 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5954 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5954 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5954 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5954 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5954 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5954 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5954 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_6001 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">ヘタリア World★Stars（第1クール）</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_6001 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6001 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6001 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6001 = 1"
              >
                1
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6001 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6001 = 2"
              >
                2
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6001 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6001 = 3"
              >
                3
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6001 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6001 = 4"
              >
                4
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6001 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6001 = 5"
              >
                5
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6001 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6001 = 6"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6001 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6001 = 7"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6001 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6001 = 8"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6001 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6001 = 9"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6001 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6001 = 10"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6001 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6001 = 11"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_6001 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_6001 = 12"
              >
                12
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5839 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">蜘蛛ですが、なにか？（第2クール）</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5839 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5839 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5839 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5839 = 1"
              >
                13
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5839 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5839 = 2"
              >
                14
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5839 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5839 = 3"
              >
                15
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5839 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5839 = 4"
              >
                16
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5839 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5839 = 5"
              >
                17
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5839 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5839 = 6"
              >
                18
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5839 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5839 = 7"
              >
                19
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5839 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5839 = 8"
              >
                20
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5839 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5839 = 9"
              >
                21
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5839 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5839 = 10"
              >
                22
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5839 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5839 = 11"
              >
                23
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5839 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5839 = 12"
              >
                24
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5867 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">バック・アロウ（第2クール）</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5867 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5867 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5867 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5867 = 1"
              >
                13
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5867 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5867 = 2"
              >
                14
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5867 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5867 = 3"
              >
                15
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5867 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5867 = 4"
              >
                16
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5867 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5867 = 5"
              >
                17
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5867 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5867 = 6"
              >
                18
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5867 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5867 = 7"
              >
                19
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5867 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5867 = 8"
              >
                20
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5867 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5867 = 9"
              >
                21
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5867 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5867 = 10"
              >
                22
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5867 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5867 = 11"
              >
                23
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5867 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5867 = 12"
              >
                24
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5915 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">トロピカル～ジュ！プリキュア（第2クール）</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5915 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5915 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5915 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5915 = 1"
              >
                6
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5915 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5915 = 2"
              >
                7
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5915 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5915 = 3"
              >
                8
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5915 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5915 = 4"
              >
                9
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5915 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5915 = 5"
              >
                10
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5915 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5915 = 6"
              >
                11
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5915 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5915 = 7"
              >
                12
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5915 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5915 = 8"
              >
                13
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5915 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5915 = 9"
              >
                14
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5915 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5915 = 10"
              >
                15
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5915 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5915 = 11"
              >
                16
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5915 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5915 = 12"
              >
                17
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5915 < 13 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5915 = 13"
              >
                18
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5861 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">七つの大罪 憤怒の審判（第2クール）</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5861 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5861 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5861 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5861 = 1"
              >
                13
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5861 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5861 = 2"
              >
                14
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5861 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5861 = 3"
              >
                15
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5861 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5861 = 4"
              >
                16
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5861 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5861 = 5"
              >
                17
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5861 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5861 = 6"
              >
                18
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5861 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5861 = 7"
              >
                19
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5861 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5861 = 8"
              >
                20
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5861 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5861 = 9"
              >
                21
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5861 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5861 = 10"
              >
                22
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5861 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5861 = 11"
              >
                23
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5861 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5861 = 12"
              >
                24
              </div>
            </div>
          </div>
        </div>

        <div
          class="table-row"
          :class="c_5833 == 0 && hide_works ? 'hidden' : ''"
        >
          <div class="table-cell w-1/4 align-middle">
            <p class="m-2">アイカツプラネット！（第2クール）</p>
          </div>
          <div class="table-cell w-3/4 align-middle">
            <div class="flex text-black">
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                data-html2canvas-ignore
                :class="c_5833 < 0 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5833 = 0"
              >
                0
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5833 < 1 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5833 = 1"
              >
                13
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5833 < 2 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5833 = 2"
              >
                14
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5833 < 3 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5833 = 3"
              >
                15
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5833 < 4 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5833 = 4"
              >
                16
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5833 < 5 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5833 = 5"
              >
                17
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5833 < 6 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5833 = 6"
              >
                18
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5833 < 7 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5833 = 7"
              >
                19
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5833 < 8 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5833 = 8"
              >
                20
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5833 < 9 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5833 = 9"
              >
                21
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5833 < 10 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5833 = 10"
              >
                22
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5833 < 11 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5833 = 11"
              >
                23
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5833 < 12 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5833 = 12"
              >
                24
              </div>
              <div
                class="flex-1 mx-1 my-2 py-3 rounded"
                :class="c_5833 < 13 ? 'bg-true-gray-300' : 'bg-green-400'"
                @click="c_5833 = 13"
              >
                25
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
        v-if="hide_works"
        class="py-1 px-3 rounded font-bold text-white bg-true-gray-500 m-3"
        @click="hide_works = !hide_works"
      >
        <i class="iconify" :data-icon="'mdi:eye'" /> {{ t('show_zero_works') }}
      </button>
      <button
        v-else
        class="py-1 px-3 rounded font-bold text-white bg-true-gray-500 m-3"
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
      <div id="result" class="border-2"></div>
      <p class="m-3">
        <a
          class="py-1 px-3 rounded font-bold text-white bg-blue-500"
          href="https://twitter.com/intent/tweet?text=%23nanimita%20%E3%81%A7%E5%89%8D%E3%82%AF%E3%83%BC%E3%83%AB%E8%A6%8B%E3%81%9F%E3%82%A2%E3%83%8B%E3%83%A1%E3%82%92%E3%81%BE%E3%81%A8%E3%82%81%E3%81%BE%E3%81%97%E3%81%9F%EF%BC%81%20https%3A%2F%2Fnanimita.theoria.ga"
          rel="noreferrer"
          target="_blank"
        >
          <i class="iconify" :data-icon="'mdi:twitter'" />
          Tweet
        </a>
        <span class="mx-3">画像を保存して投稿してください。</span>
      </p>
    </div>

    <footer class="text-center mt-10">
      <ul class="flex justify-between w-1/3 mx-auto mb-8">
        <li class="cursor-pointer text-2xl">
          <a
            href="#"
            @click="toggleLocales"
            class="footer-link text-cyan-700 hover:text-cyan-500"
            :title="t('toggle_language')"
          >
            <i class="iconify" :data-icon="'ant-design:translation-outlined'" />
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
          href="https://github.com/theoria24"
          rel="noreferrer"
          target="_blank"
          >theoria</a
        >
      </div>
    </footer>
  </div>
</template>

<style>
</style>
