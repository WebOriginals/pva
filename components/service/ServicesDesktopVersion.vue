<template>
  <div class="services__all-services all-services">
    <div class="all-services__menu all-services-menu">
      <div class="all-services-menu__search">
        <ServiceServicesSearchByProduct size="xl" v-model="searchServiceValue"/>
      </div>
      <div class="all-services-menu__wrapper">
        <div class="all-services-menu__scroll scrollCust">
          <div class="all-services-menu__list">
<!--            <ServiceCardWithCountryAndNumber-->
<!--                :class="{ 'active': account.id === serviceActive }"-->
<!--                v-for="account in filteredService"-->
<!--                :key="account.id"-->
<!--                :account="account"-->
<!--                :show-logo-service="true"-->
<!--                @click="fetchProduct(account.id)"-->
<!--            />-->
          </div>
        </div>
      </div>
    </div>
    <div class="all-services__country all-services-country">
      <div class="all-services-country__head">
        <ServiceServicesSearchByProduct size="xl" v-model="searchCountryValue"/>
        <UiFilterForServices/>
      </div>
      <div class="all-services-country__wrapper">
        <div class="all-services-country__scroll scrollCust">
          <div class="all-services-country__list">
            <ServiceCardWithCountryAndBuy
                v-for="country in filteredCountries"
                :key="country.id"
                :account="country"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const searchServiceValue = ref('');
const searchCountryValue = ref('');

// const {pending: penService, data: accounts} = await useAsyncData('/api/v1/listProduct', {
//   transform: (_accounts) => _accounts.data,
// })
const {data: accounts , pending, error, refresh} = await useAsyncData(
    'listProduct',
    () => $fetch('/api/v1/listProduct'), {
      transform: (_accounts) => _accounts.data,
    }
)

setTimeout(() => {
  console.log(accounts)
},5000)

// const filteredService = computed(() => {
//   return [...accounts.value].filter((item) =>
//       item.servName.toLowerCase().includes(searchServiceValue.value.toLowerCase())
//   );
// });
// const serviceActive = ref(filteredService.value[0])
const fetchProduct = async (account) => {
  serviceActive.value = account
  console.log(`запрос ${account.id}`)

  if (width.value < 1024) {
    mobileCountries.value = false;
  }
  const {pending: penCountries, data: countries} = await useLazyFetch('/api/v1/listCountry', {
    transform: (_countries) => _countries.data,
  });
}


const {pending: penCountries, data: countries} = await useLazyFetch('/api/v1/listCountry', {
  transform: (_countries) => _countries.data,
});
const filteredCountries = computed(() => {
  return [...countries.value].filter((item) =>
      item.servName.toLowerCase().includes(searchCountryValue.value.toLowerCase())
  );
});

</script>

<style scoped lang="scss">

</style>