<template>
	<div>
		<html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
			<head>
				<template v-for="link in head.link" :key="link.id">
					<link
						:id="link.id"
						:rel="link.rel"
						:href="link.href"
						:hreflang="link.hreflang"
					/>
				</template>
				<template v-for="meta in head.meta" :key="meta.id">
					<meta
						:id="meta.id"
						:property="meta.property"
						:content="meta.content"
					/>
				</template>
			</head>

			<body>
				<div class="wrapper" :class="{ lock: lockScrollValue }">
					<TheHeader @lockScroll="lockScroll"></TheHeader>
					<main class="page" :class="{ pb150: !store.getIsLoggedIn }">
						<slot></slot>
					</main>
          <ModalAuthorization></ModalAuthorization>
					<TheFooter></TheFooter>
				</div>
			</body>
		</html>
	</div>
</template>

<script setup>
const head = useLocaleHead({
	addDirAttribute: true,
	identifierAttribute: 'id',
	addSeoAttributes: true,
});
import { useUserStore } from '~/store/user.js';

const store = useUserStore();

const lockScrollValue = ref(false);
const lockScroll = (value) => {
	lockScrollValue.value = value.value;
};
</script>

<style lang="scss">
.wrapper {
	@apply overflow-hidden flex min-h-screen flex-col;

	> main {
		@apply flex-auto pb-16;

		&.pb150 {
			@apply pb-48;
		}
	}

	&.lock {
		@apply h-screen;
	}
}
</style>
