<template>
  <section class="about">
    <div class="about__container">
      <h1 class="about__title">{{ $t("AboutPage.title") }}</h1>
      <div class="about__subtitle">
        {{ $t("AboutPage.info") }}
      </div>
      <div class="about__info">
        <div class="about__support">
          <div class="about__support-title">
            {{ $t("AboutPage.supportTitle") }}
          </div>
          <ul class="about__support-list">
            <li class="about__support-item">
              <a href="tel:+79199149511">+7(919)914-95-11</a>
            </li>
            <li class="about__support-item">
              <a href="mailto:support@pvaboom.com">support@pvaboom.com </a>
            </li>
          </ul>
        </div>
        <div class="about__manager">
          <div class="about__manager-title">
            {{ $t("AboutPage.managerTitle") }}
          </div>
          <ul class="about__manager-list">
            <li class="about__manager-item">
              {{ $t("AboutPage.work") }}
            </li>
            <li class="about__manager-item">
              {{ $t("AboutPage.closed") }}
            </li>
          </ul>
        </div>
      </div>
      <div class="about__company">
        <div class="about__company-title">{{ $t("AboutPage.companyTitle") }}</div>
        <div class="about__company-adress mb-3">{{ $t("AboutPage.companyAdress") }}</div>
        <div class="about__company-map">
          <picture class="desktop">
            <source srcset="~/assets/img/map.webp" />
            <img src="~/assets/img/map.jpg" alt="" />
          </picture>
          <picture class="mob">
            <source srcset="~/assets/img/map-mob.webp" />
            <img src="~/assets/img/map-mob.jpg" alt="" />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
useHead({
  title: t("AboutPage.title"),
  meta: [{ name: "description", content: "My amazing site2." }],
});
const localePath = useLocalePath();
</script>

<style lang="scss" scoped>
@import "~/assets/css/mixins.scss";
.about {
  @include adaptiveValue(padding-top, 64, 32);
  &__title {
    @include adaptiveValue(margin-bottom, 24, 16);
  }
  &__subtitle {
    @include adaptiveValue(margin-bottom, 48, 32);
    @apply font-medium;  
  }
  &__info {
    display: flex;
    flex-wrap: wrap;
    gap: rem(62);
    @include adaptiveValue(margin-bottom, 48, 40);

  }
  &__manager-title,
  &__support-title {
    @include adaptiveValue(margin-bottom, 24, 16);
    line-height: rem(32);
    @apply text-2xl font-semibold;
  }
  &__manager-item,
  &__support-item {
    position: relative;
    @apply font-semibold mb-2 pl-6;
    &:before {
      content: '';
      position: absolute;
      top: rem(9);
      left: rem(9);
      width: rem(6);
      height: rem(6);
      background: #070707;
      border-radius: 50%;
    }
    

  }
  &__company {
    &-title {
      @include adaptiveValue(margin-bottom, 24, 16);
      @apply text-2xl font-semibold;
    }
    &-adress {
    @include adaptiveValue(margin-bottom, 12, 24);

    }
    &-map {
      display: flex;
      justify-content: flex-end;
      & .desktop {
        width: 90%;
      }
      & .mob {
        display: none;
      }
      
      & img {
        width: 100%;
        object-fit: contain;
      }
    }
  }
}
@media(max-width: 36em) {
  .about {
    &__company {
      &-map {
        & .desktop {
          display: none;
        }
        & .mob {
          display: block;
        }
      }
    }
  }
}
</style>