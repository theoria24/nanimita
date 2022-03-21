<script lang="ts">
import { useI18n } from 'vue-i18n';

import { defineComponent, ref } from 'vue';
import { useTheme } from '/@/composables';

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
});
</script>
<template>
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
        {{ t('top_title') }}
      </h1>

      <p class="mt-3">
        {{ t('share_whatched') }}
      </p>
      <p class="m-3">
        <a
          class="py-1 px-3 rounded font-bold text-white bg-blue-400"
          href="https://twitter.com/intent/tweet?text=%23nanimita+-+%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%80%8C%E8%A6%8B%E3%81%9F%E3%80%8D%E3%82%92%E5%85%B1%E6%9C%89%E3%81%97%E3%82%88%E3%81%86+https%3A%2F%2Fnanimita.theoria.ga%20@_theoria"
          rel="noreferrer"
          target="_blank"
        >
          <i class="iconify" :data-icon="'mdi:twitter'" />
          Tweet
        </a>
        <a
          class="py-1 px-3 rounded font-bold text-white bg-blue-500 ml-3"
          href="https://mastoshare.net/post.php?text=%23nanimita+-+%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AE%E3%80%8C%E8%A6%8B%E3%81%9F%E3%80%8D%E3%82%92%E5%85%B1%E6%9C%89%E3%81%97%E3%82%88%E3%81%86+https%3A%2F%2Fnanimita.theoria.ga"
          rel="noreferrer"
          target="_blank"
        >
          <i class="iconify" :data-icon="'mdi:mastodon'" />
          Toot!
        </a>
      </p>
    </div>
    <div class="text-center text-lg m-10">
      <ul
        class="
          list-disc list-inside
          text-blue-300
          underline underline-dotted underline-blue-400
        "
      >
        <li class="m-3">
          <a href="/2021spring/">2021年春クール（2021.04-）</a>
        </li>
        <li class="m-3">
          <a href="/2021summer/">2021年夏クール（2021.07-）</a>
        </li>
        <li class="m-3">
          <a href="/2021autumn/">2021年秋クール（2021.10-）</a>
        </li>
        <li class="m-3">
          <a href="/2022winter/">2022年冬クール（2022.01-）</a>
        </li>
      </ul>
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
          href="https://nanimita.theoria.ga"
          rel="noreferrer"
          >nanimita.theoria.ga</a
        >
      </div>
    </footer>
  </div>
</template>

<style>
.hidden {
  display: none;
}
</style>
