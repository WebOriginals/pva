<template lang="pug">
UAccordion(:items="items" :ui="accordionStyle" )
  template(#default="{ item, index, open }")
    UButton( variant="ghost" class="accordion-title flex justify-between group hover:bg-transparent p-0 hover:outline-none w- dark:hover:bg-transparent" :ui="{ rounded :'rounded-none', padding: { sm:'p-3' } }")
      span(class="text-black truncate group-hover:text-primary-500 font-semibold text-xl  ") {{ item.label }}
      template(#trailing)
        div(class="w-8 h-8 rounded-full bg-primary-50 dark:bg-primary-800 flex items-center justify-center -my-1 group-hover:bg-primary-500")
          UIcon(:name="item.icon" class="w-4 h-4 text-primary-500 transform transition-transform  duration-200 origin-center group-hover:text-white  dark:text-white"  :class="[open && 'origin-center rotate-45 ']")
  template(#item="{ item }")
    .accordion-content
      p(class="text-stone-500 dark:text-stone-500 pt-8 text-base ") {{ item.content }}

</template>

<script setup>
const accordionStyle = {
  wrapper: "w-full grid grid-cols-1 gap-4",
  wrapperItem: "blocWr"
}
const items = [
  {
    label: 'Getting Started',
    icon: 'icon-pva__plus',
    defaultOpen: true,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
  },
  {
    label: 'Installation',
    icon: 'icon-pva__plus',
    defaultOpen: false,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
  },
  {
    label: 'Getting Started',
    icon: 'icon-pva__plus',
    defaultOpen: false,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
  },
  {
    label: 'Getting Started',
    icon: 'icon-pva__plus',
    defaultOpen: false,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
  },
]
</script>

<style  lang="scss">
.blocWr{
  padding: 32px 48px 32px 48px;
  background: #fff;
  border-radius: 16px;
}
.accordion-title{
  width: 100%;

  &:focus, &:focus-visible{
    --tw-ring-opacity: 0;
    outline: none!important;
  }
  &:hover{
    outline: none!important;
  }
}

</style>