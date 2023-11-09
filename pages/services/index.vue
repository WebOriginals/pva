<template>
<section class="services">
  <div class="services__container">
    <template v-if="desktop">
      <h1>{{ $t('services.pageTitle') }}</h1>
      <div class="services__grid">
        <div class="services__all-services all-services">
          <div class="all-services__menu all-services-menu">
            <div class="all-services-menu__search">
              <ServiceServicesSearchByProduct size="xl" v-model="searchServiceValue"/>
            </div>
            <div class="all-services-menu__body">
              <div class="product-list">
                <ServiceServicesViewCard
                    :class="{ 'active': account.id === serviceActive }"
                    v-for="account in filteredService"
                    :key="account.id"
                    :account="account"
                    @click="fetchProduct(account.id)"
                ></ServiceServicesViewCard>
              </div>
            </div>
          </div>
          <div class="all-services__country all-services-country">
            <div class="all-services-country__head">
              <ServiceServicesSearchByProduct size="xl" v-model="searchCountryValue"/>
            </div>
            <div class="all-services-country__list">
              <ServiceCountryViewCard
                  v-for="country in filteredCountries"
                  :key="country.id"
                  :account="country"
              ></ServiceCountryViewCard>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</section>
</template>

<script setup>

definePageMeta({
	middleware: ['auth'],
});

const desktop = ref(true)
const searchServiceValue = ref('')
const searchCountryValue = ref('')

const { pending: penService, data: accounts } = await useLazyFetch('/api/v1/listProduct', {
      transform: (_accounts) => _accounts.data,
    });
const filteredService = computed(() => {
  return [...accounts.value].filter((item) =>
      item.servName.toLowerCase().includes(searchServiceValue.value.toLowerCase())
  );
});
const serviceActive = ref(filteredService.value[0].id)
const fetchProduct = async (ev) => {
  serviceActive.value = ev
  console.log(`запрос ${ev}`)
  const {pending: penCountries, data: countries} = await useLazyFetch('/api/v1/listCountry', {
    transform: (_countries) => _countries.data,
  });
}


const { pending: penCountries, data: countries } = await useLazyFetch('/api/v1/listCountry', {
  transform: (_countries) => _countries.data,
});
const filteredCountries = computed(() => {
  return [...countries.value].filter((item) =>
      item.servName.toLowerCase().includes(searchCountryValue.value.toLowerCase())
  );
});
</script>

<style scoped lang="scss">
.services{

  &__grid{

  }


}

.all-services{
  grid-template-columns: 370px 1fr;
  @apply bg-white rounded-2xl grid grid divide-x divide-sky-200;

  &-menu{
    @apply  divide-y divide-sky-200;

    &__search{
      @apply py-6 px-8 ;
    }

    &__body{
      @apply py-6 px-8 ;

      .product-list{
        @apply grid gap-2
      }
    }
  }

  &-country{
    @apply  divide-y divide-sky-200;
    &__head{
      @apply py-6 px-8 ;
    }

    &__list{
      @apply py-6 px-8 grid gap-2;


    }
  }
}
</style>