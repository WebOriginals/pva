<template>
  <section class="free-numbers">
    <div class="free-numbers__container">
      <h1 class="title">Бесплатные виртуальные номера для приёма СМС</h1>
      <div class="subtitle">
        Используйте бесплатные виртуальные номера на PvaBoom и легко
        регистрируйтесь на тысячи сервисах. Просто выберите номер, примените
        на нужном вам сервисе, и получите моментальное СМС с кодом
        подтверждения.
      </div>
      <div class="free-numbers__wrapper">
        <FreeNumbersComparisonCard
          :item="freeNumberList"
          buttonType="outline"
          buttonName="Попробовать"
          @click-btn="log"
        />
        <FreeNumbersComparisonCard
          :item="numberList"
          buttonName="Получить номер"
          @click-btn="log"
        />
      </div>
    </div>
  </section>
  <section class="use-free-number">
    <div class="use-free-number__container">
      <h2 class="title">Бесплатные временные номера</h2>
      <div class="use-free-number__wrapper">
        <div class="use-free-number__aside">
          <AsideCard></AsideCard>
          <AsideCard></AsideCard>
          <AsideCard></AsideCard>
        </div>
        <div class="use-free-number__content">
          <div class="use-free-number__controls">
            <div class="use-free-number__choise-number">
              <div class="use-free-number__select">
                <SelectDefault :avatar="true" :items="numbers"></SelectDefault>
              </div>
              <div class="use-free-number__btns">
                <BtnBlue size="lg" icon="icon-pva__copy" variant="soft"></BtnBlue>
                <BtnBlue size="lg" icon="icon-pva__update" variant="soft"></BtnBlue>
              </div>
            </div>
            <div class="use-free-number__time-add">
                Номер добавлен: 2 дня назад
            </div>
          </div>
          <div class="use-free-number__messages">
            <Alert></Alert>
            <Alert></Alert>
            <Alert></Alert>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AsideCard from "~/components/ui/Card/AsideCard.vue";
import SelectDefault from "~/components/ui/Form/SelectDefault.vue";
import BtnBlue from "~/components/ui/BtnBlue.vue";
import Alert from "~/components/ui/Attentions/Alert.vue";

useHead({
  title: "Бесплатные номера",
  meta: [{ name: "description", content: "My amazing site." }],
});

const freeNumberList = ref({
  title: "Бесплатные номера",
  subtitle:
    "Активация может быть недоступна, так как номер телефона уже мог быть использован",
  list: [
    {
      id: 0,
      icon: false,
      label: "Ограниченное число стран",
    },
    {
      id: 1,
      icon: false,
      label: "Номер доступен для всех",
    },
    {
      id: 2,
      icon: false,
      label: "Нет возможности выбрать сервис",
    },
    {
      id: 3,
      icon: false,
      label: "Нет возможности восстановить номер",
    },
    {
      id: 4,
      icon: false,
      label: "Ограниченное число номеров",
    },
  ],
});
const numberList = ref({
  title: "Виртуальные номера",
  subtitle:
    "Гарантированное получение кода для выбранного сервиса, круглосуточная техподдержка",
  list: [
    {
      id: 0,
      icon: true,
      label: "Более 180 стран",
    },
    {
      id: 1,
      icon: true,
      label: "Более 10 млн доступных номеров",
    },
    {
      id: 2,
      icon: true,
      label: "Номер для сервиса доступен",
    },
    {
      id: 3,
      icon: true,
      label: "Выбор нужного вам сервиса и страны",
    },
    {
      id: 4,
      icon: false,
      label: "Номер доступен после покупки",
    },
  ],
});
const numbers = [
  {
    id: 0,
    label: "+7 (800) 640-42-32",
    icon: { src: "/_nuxt/assets/img/flag/ru.png" },
  },
  {
    id: 1,
    label: "+7 (800) 640-48-32",
    icon: { src: "/_nuxt/assets/img/flag/ru.png" },
  },
  {
    id: 2,
    label: "+7 (800) 240-25-32",
    icon: { src: "/_nuxt/assets/img/flag/ru.png" },
  },
];
const log = () => {
  console.log();
};
</script>

<style lang="scss" scoped>
.free-numbers {
  @apply pt-11 pb-8;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }
  & .title {
    max-width: 46.5625rem;
    @apply mb-6;
  }
  & .subtitle {
    max-width: 46.5625rem;
    @apply mb-8;
  }
}
.use-free-number {
  @apply py-8;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    border-radius: 16px;
    background-color: #fff;
  }
  & .title {
    max-width: 46.5625rem;
    @apply mb-8;
  }
  &__aside {
    width: 32%;
    padding: 32px;
    border-right: 1px solid #cde2ff;
    flex-shrink: 0;
  }
  &__content {
    width: 100%;
  }
  &__controls {
    @apply flex justify-between items-center gap-x-6 pb-6 border-b border-solid border-sky-200 px-8 py-6;
  }
  &__choise-number {
    @apply flex items-center gap-x-4;
  }
  &__select {
    width: 17.5rem;
  }
  &__btns {
    @apply flex items-center gap-x-2;
  }
  &__time-add {
    @apply text-stone-500;
  }
  &__messages {
    @apply px-8 py-6;
  }
}
</style>