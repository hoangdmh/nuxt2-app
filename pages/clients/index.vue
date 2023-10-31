<template>
    <h1>Clients page</h1>
</template>

<script>
export default {
    mounted () {
        this.$notify({
            group: 'foo',
            title: 'Important message',
            text: 'Hello user! This is a notification!'
        });

        setTimeout(() => {
            this.$hello('mounted')
        }, 2000);
    },
}
</script>

<style></style>