<script>
export default {
    name: "Pagination",
    props: {
        modelValue: {
            default: {
                cursor: 1,
                size: 1,
                count: 1,
            },
        },
    },
    emits: ["update:modelValue", "get"],
    computed: {
        pagination() {
            return this.$props.modelValue;
        },
    },
    methods: {
        loadMore() {
            let data = this.pagination;
            data.cursor = data.data.at(-1).id;
            if (data.data.length < data.count) {
                this.$emit("update:modelValue", data);
                this.$emit("get");

            }


        },
    },
    mounted() {
        this.observer = new IntersectionObserver((entries) => {
            const loadMoreEntry = entries[0];
            if (loadMoreEntry.isIntersecting) {
                this.loadMore();
            }
        });
        this.observer.observe(this.$refs.loadMore);
    },
    beforeUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    },
}
</script>
<template>
    <div>
        <div ref="loadMore" class="load-more" v-if="!$store.loading" style="height: 20px;"></div>

    </div>
</template>