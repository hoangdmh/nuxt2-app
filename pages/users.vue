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
    layout(context) {
        // console.log('context => ', Object.keys(context.req));
        console.log('context => ', context.req.headers['user-agent']);

        var userAgent = '';
        if(context.req){
            userAgent = context.req.headers['user-agent'];// kiểm tra thiết bị là mobile hay desktop
        }else {
            userAgent = navigator.userAgent;
        }

        if(/mobile/i.test(userAgent)){
            return 'mobile'
        }
        
        return 'admin'
        
        console.log('userAgent', userAgent);
    }
}
</script>

<style>

</style>