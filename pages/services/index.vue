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
                    <ServiceCardWithCountryAndNumber
                        :class="{ 'active': account.id === serviceActive }"
                        v-for="account in filteredService"
                        :key="account.id"
                        :account="account"
                        :show-logo-service="true"
                        @click="fetchProduct(account.id)"
                    />
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
          <div class="use-free-number">

            <h3>{{$t('services.pageTitleH2')}}</h3>
            <div class="use-free-number__grid">
              <div class="use-free-number__wrapper">
                <div class="use-free-number__scroll scrollCust">
                  <div class="use-free-number__list">
                    <ServiceCardWithCountryAndNumber
                        :class="{ 'active': account.id === myNumberActive.id }"
                        v-for="account in myNumbers"
                        :key="account.id"
                        :account="account"
                        :show-logo-service="true"
                        :show-country="true"
                        @click="fetchMyNumber(account)"
                    />
                  </div>
                </div>
              </div>

              <div class="use-free-number__content">
                <div class="use-free-number__controls">
                  <div class="use-free-number__choise-number">
                    <ServiceCardWithCountryAndNumber
                        :account="myNumberActive"
                        :show-logo-service="true"
                        :show-country="true"
                        :show-background="false"
                    />

                    <div class="use-free-number__btns">
                      <UiBaseButton size="lg" icon="icon-pva__copy" variant="soft"/>
                      <UiBaseButton size="lg" icon="icon-pva__check" variant="soft"/>
                      <UiBaseButton size="lg" icon="icon-pva__update" variant="soft"/>
                    </div>
                  </div>
                  <div class="use-free-number__time-add">
                    Номер добавлен: 2 дня назад
                  </div>
                </div>
                <div class="use-free-number__messages">
                  <div class="use-free-number__scroll-sms scrollCust">
                    <div class="use-free-number__list">
                  <ServiceCardWithSMS
                      v-for="sms in AllSms"
                      :key="sms.id"
                      :sms="sms"
                  />
                    </div>
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
                      <ServiceCardWithCountryAndNumber
                          :class="{ 'active': account.id === serviceActive.id }"
                          v-for="account in filteredService"
                          :key="account.id"
                          :account="account"
                          :show-logo-service="true"
                          @click="fetchProduct(account)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="all-services__country all-services-country">
                <div class="all-services-country__nav">
                  <UiBaseButton size="lg" icon="icon-pva__back" variant="soft" @click="mobileCountries = true"/>
                  <ServiceCardWithCountryAndNumber
                      :background="false"
                      :account="serviceActive"
                      :show-background="false"
                      :show-logo-service="true"
                  />

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



const {pending: penMyNumbers, data: myNumbers} = await useLazyFetch('/api/v1/myNumber', {
  transform: (_myNumbers) => _myNumbers.data,
});
const myNumberActive = ref(myNumbers.value[0])
const AllSms = ref([])
const fetchMyNumber = async (account) => {
  myNumberActive.value = toRaw(account)
  if(width.value < 1024){
    mobileCountries.value = false;
  }
  const {pending: penSms, data: sms} = await useLazyFetch('/api/v1/sms', {
    transform: (_sms) => _sms.data,
  });
  AllSms.value = sms.value
}


const {pending: penSms, data: sms} = await useLazyFetch('/api/v1/sms', {
  transform: (_sms) => _sms.data,
});
AllSms.value = sms.value


</script>

<style scoped lang="scss">
.services {
  @apply py-9 lg:py-16;

  &__grid {
    @apply mt-8;
  }
}

.all-services {

  @apply bg-white rounded-2xl grid  divide-x divide-sky-200 lg:grid-cols-[370px_1fr] mb-16;

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

.use-free-number {
  @apply py-8;

  &__grid {
    @apply bg-white rounded-2xl grid  divide-x divide-sky-200 lg:grid-cols-[370px_1fr] mb-16 mt-8;
  }
  & .title {
    @apply mb-8;
  }


  &__wrapper {
    @apply py-8 px-8 pr-4;
  }

  &__scroll {
    @apply overflow-y-auto max-h-[390px] lg:max-h-[616px];
  }
  &__scroll-sms {
    @apply overflow-y-auto max-h-[390px] lg:max-h-[516px];
  }

  &__list {
    @apply grid gap-2 pr-4;
  }


  &__content {

    @apply w-full;
  }
  &__controls {
    @apply flex justify-between items-center gap-x-6 pb-6 border-b border-solid border-sky-200 px-8 py-6;
  }
  &__choise-number {
    @apply flex items-center gap-x-4;
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