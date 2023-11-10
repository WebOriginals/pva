<template>
  <section class="services">
    <div class="services__container">
      <template v-if="width > 1024">
        <h1>{{ $t('services.pageTitle') }}</h1>
        <div class="services__grid">
          <div class="services__all-services all-services">
            <div class="all-services__menu all-services-menu">
              <div class="all-services-menu__search">
                <ServiceServicesSearchByProduct size="xl" v-model="searchServiceValue"/>
              </div>
              <div class="all-services-menu__wrapper">
                <div class="all-services-menu__scroll scrollCust">
                  <div class="all-services-menu__list">
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
            </div>
            <div class="all-services__country all-services-country">
              <div class="all-services-country__head">
                <ServiceServicesSearchByProduct size="xl" v-model="searchCountryValue"/>
                <UiFilterForServices/>
              </div>
              <div class="all-services-country__wrapper">
                <div class="all-services-country__scroll scrollCust">
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
          </div>
        </div>
      </template>
      <template v-else>
        <UTabs :items="items" class="w-full">
          <template #account="{ item }">

            <div class="services__all-services all-services">
              <div v-if="mobileCountries " class="all-services__menu all-services-menu">
                <div class="all-services-menu__search">
                  <ServiceServicesSearchByProduct size="xl" v-model="searchServiceValue"/>
                </div>
                <div class="all-services-menu__wrapper">
                  <div class="all-services-menu__scroll scrollCust">
                    <div class="all-services-menu__list">
                      <ServiceServicesViewCard
                          :class="{ 'active': account.id === serviceActive.id }"
                          v-for="account in filteredService"
                          :key="account.id"
                          :account="account"
                          @click="fetchProduct(account)"
                      ></ServiceServicesViewCard>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="all-services__country all-services-country">
                <div class="all-services-country__nav">
                  <UiBaseButton size="lg" icon="icon-pva__back" variant="soft" @click="mobileCountries = true"/>
                  <ServiceServicesViewCard
                      :background="false"
                      :account="serviceActive"
                  ></ServiceServicesViewCard>
                </div>
                <div class="all-services-country__head">
                  <ServiceServicesSearchByProduct :size="sizeSearchInputInCountry" v-model="searchCountryValue"/>
                  <UiFilterForServices/>
                </div>
                <div class="all-services-country__wrapper">
                  <div class="all-services-country__scroll scrollCust">
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
            </div>

          </template>

          <template #password="{ item }">
            <UCard>
              <template #header>
                <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                  {{ item.label }}
                </h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Change your password here. After saving, you'll be logged out.
                </p>
              </template>
            </UCard>
          </template>
        </UTabs>
      </template>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  middleware: ['auth'],
});

const { width } = useGetWidth();

const sizeSearchInputInCountry = computed(() => (width.value > 640) ? "xl" : "md");

const mobileCountries = ref(true)
const searchServiceValue = ref('')
const searchCountryValue = ref('')

const {pending: penService, data: accounts} = await useLazyFetch('/api/v1/listProduct', {
  transform: (_accounts) => _accounts.data,
});
const filteredService = computed(() => {
  return [...accounts.value].filter((item) =>
      item.servName.toLowerCase().includes(searchServiceValue.value.toLowerCase())
  );
});
const serviceActive = ref(filteredService.value[0])
const fetchProduct = async (account) => {
  serviceActive.value = account
  console.log(`запрос ${account.id}`)

  if(width.value < 1024){
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


const {t} = useI18n();
const items = computed(() => [
  {
    slot: 'account',
    label: t('services.tab.titleServices')
  },
  {
    slot: 'password',
    label: t('services.tab.titleNumbers')
  }
])

</script>

<style scoped lang="scss">
.services {
  @apply py-9 lg:py-16;

  &__grid {
    @apply mt-8;
  }
}

.all-services {

  @apply bg-white rounded-2xl grid  divide-x divide-sky-200 lg:grid-cols-[370px_1fr];

  &-menu {
    @apply divide-y divide-sky-200;

    &__search {
      @apply py-6 px-8 ;
    }

    &__wrapper {
      @apply py-6 px-8 pr-4;
    }

    &__scroll {
      @apply overflow-y-auto max-h-[390px] lg:max-h-[616px];
    }

    &__list {
      @apply grid gap-2 pr-4;
    }
  }

  &-country {
    @apply divide-y divide-sky-200;

    &__nav{
      @apply grid grid-cols-[41px_1fr] md:grid-cols-[52px_1fr] gap-2 p-4 sm:py-6 sm:px-8;
    }

    &__head{
      @apply py-4 px-4 grid gap-6 grid-cols-[1fr_48px] sm:grid-cols-[2fr_1fr] sm:py-6 sm:px-8;
    }

    &__wrapper {
      @apply py-4 px-4 pr-2 sm:py-6 sm:px-8 sm:pr-4;
    }

    &__scroll {
      @apply overflow-y-auto max-h-[390px] lg:max-h-[616px];
    }

    &__list {
      @apply pr-4 grid gap-2;
    }
  }
}
</style>