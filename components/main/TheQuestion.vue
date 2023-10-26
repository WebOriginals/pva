<template >
<section class="question">
  <div class="question__container">
    <h2 @click="log($tm('main.question.questionItems'))"> {{ $t('main.question.title') }} </h2>
    <div class="question__wrapper">
      <UiSpoilerCard
        v-for="(item, index) in $tm('main.question.questionItems')"
        :key="index"
        :item="item"
      ></UiSpoilerCard>
    </div>
  </div>
</section>  

</template>

<script setup>
const { t } = useI18n()
const log = (val) => {
  console.log(val);
}
  onMounted(()=> {
    
    console.log(t('main.question.questionItems'))
  })
</script>

<style scoped lang="scss">
@import "~/assets/css/mixins.scss";

.question{
  @include adaptiveValue(padding-top, 60, 30);
  @include adaptiveValue(padding-bottom, 60, 30);

  h2{
    @include adaptiveValue(padding-bottom, 64, 32);
    text-align: center;
  }
}

</style>