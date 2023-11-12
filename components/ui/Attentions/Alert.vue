<template>
    <div class="alert">
        <div class="alert__wrapper">
            <div class="alert__info">
                <div class="alert__title-wrapper">
                    <div class="alert__logo">
                        <img src="https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/tg0.webp" alt="tg">
                    </div>
                    <div class="alert__title">Телеграм</div>
                </div>
                <div class="alert__time-ago">10 минут назад</div>
            </div>
            <div class="alert__message mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi laboriosam voluptatum quidem impedit dolores nam vitae pariatur molestias ducimus perferendis veritatis cum tempora quia, ipsa doloremque deleniti dicta corrupti ad deserunt? Omnis nisi nesciunt esse tempora est labore magnam reiciendis fugiat, ad quaerat consequatur, quia soluta doloremque, id nulla incidunt.
            </div>
            <UiBaseButton size="lg" icon="icon-pva__copy" label="СМС код: 320640"></UiBaseButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.alert {
    @apply p-6 rounded-lg bg-sky-50;
    &:not(:last-child) {
        @apply mb-2;
    }
    &__info {
        @apply flex justify-between
    }
    &__title {
        &-wrapper {
            @apply flex items-center gap-2 mb-2;
        }
    }
    &__logo {
        @apply w-6;
        & img {
            @apply rounded-full;
        }
    }
    &__time-ago {
        @apply text-xs text-stone-500;
    }
    &__message {
        @apply text-sm text-stone-500;
    }
}
</style>