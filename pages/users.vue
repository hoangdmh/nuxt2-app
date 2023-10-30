<template>
    <div>
        <ul>
            <li>
                <NuxtLink to="/users">User</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/users/20">User id</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/users/setting">User setting</NuxtLink>
            </li>
        </ul>
        <h1>User page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, recusandae ab dolorem ducimus expedita enim optio consequuntur natus dolor ex vitae, quia quibusdam fugiat, mollitia soluta nisi possimus minus unde.</p>

        <NuxtChild />
    </div>
</template>

<script>
export default {
    layout: 'admin'
}
</script>

<style>

</style>