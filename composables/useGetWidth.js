export function useGetWidth() {
    const width = ref(null);
    const onResize = () => {
        width.value = window.innerWidth;
    };
    onMounted(() => {
        onResize();
        window.addEventListener('resize', onResize);
    });
    onBeforeUnmount(() => {
        window.removeEventListener('resize', onResize);
    });

    return {width}
}