<template>
    <h1>User id page</h1>
</template>

<script>
export default {
    validate(context) {
        // console.log('context =>', Object.keys(context));
        // console.log('context =>', Number(context.params.userId));
        if(!Number(context.params.userId)){
            return false
        }else {
            return true
        }
    },
}
</script>

<style>

</style>