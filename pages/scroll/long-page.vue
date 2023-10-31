<template>
    <div class="long-page">
        <h1>Long page</h1>
        <div class="box">
            <h2>Box title</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti porro ratione est magnam totam repudiandae facere, velit laborum? Atque dolor ut officia hic voluptates labore odio laboriosam rerum. Eveniet!</p>
            <img src="https://placehold.jp/750x500.png" alt="">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti porro ratione est magnam totam repudiandae facere, velit laborum? Atque dolor ut officia hic voluptates labore odio laboriosam rerum. Eveniet!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti porro ratione est magnam totam repudiandae facere, velit laborum? Atque dolor ut officia hic voluptates labore odio laboriosam rerum. Eveniet!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti porro ratione est magnam totam repudiandae facere, velit laborum? Atque dolor ut officia hic voluptates labore odio laboriosam rerum. Eveniet!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti porro ratione est magnam totam repudiandae facere, velit laborum? Atque dolor ut officia hic voluptates labore odio laboriosam rerum. Eveniet!</p>
        </div>
        <div class="box">
            <h2>Box title</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti porro ratione est magnam totam repudiandae facere, velit laborum? Atque dolor ut officia hic voluptates labore odio laboriosam rerum. Eveniet!</p>
            <img src="https://placehold.jp/750x500.png" alt="">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti porro ratione est magnam totam repudiandae facere, velit laborum? Atque dolor ut officia hic voluptates labore odio laboriosam rerum. Eveniet!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti porro ratione est magnam totam repudiandae facere, velit laborum? Atque dolor ut officia hic voluptates labore odio laboriosam rerum. Eveniet!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti porro ratione est magnam totam repudiandae facere, velit laborum? Atque dolor ut officia hic voluptates labore odio laboriosam rerum. Eveniet!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti porro ratione est magnam totam repudiandae facere, velit laborum? Atque dolor ut officia hic voluptates labore odio laboriosam rerum. Eveniet!</p>
        </div>
        <div class="box">
            <h2>Box title</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti porro ratione est magnam totam repudiandae facere, velit laborum? Atque dolor ut officia hic voluptates labore odio laboriosam rerum. Eveniet!</p>
            <img src="https://placehold.jp/750x500.png" alt="">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti porro ratione est magnam totam repudiandae facere, velit laborum? Atque dolor ut officia hic voluptates labore odio laboriosam rerum. Eveniet!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti porro ratione est magnam totam repudiandae facere, velit laborum? Atque dolor ut officia hic voluptates labore odio laboriosam rerum. Eveniet!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti porro ratione est magnam totam repudiandae facere, velit laborum? Atque dolor ut officia hic voluptates labore odio laboriosam rerum. Eveniet!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti porro ratione est magnam totam repudiandae facere, velit laborum? Atque dolor ut officia hic voluptates labore odio laboriosam rerum. Eveniet!</p>
        </div>
        <NuxtLink to="/scroll/another-long-page">AnotherLong page</NuxtLink>
        <div class="box">
            <h2>Box title</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti porro ratione est magnam totam repudiandae facere, velit laborum? Atque dolor ut officia hic voluptates labore odio laboriosam rerum. Eveniet!</p>
            <img src="https://placehold.jp/750x500.png" alt="">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti porro ratione est magnam totam repudiandae facere, velit laborum? Atque dolor ut officia hic voluptates labore odio laboriosam rerum. Eveniet!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti porro ratione est magnam totam repudiandae facere, velit laborum? Atque dolor ut officia hic voluptates labore odio laboriosam rerum. Eveniet!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti porro ratione est magnam totam repudiandae facere, velit laborum? Atque dolor ut officia hic voluptates labore odio laboriosam rerum. Eveniet!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi deleniti porro ratione est magnam totam repudiandae facere, velit laborum? Atque dolor ut officia hic voluptates labore odio laboriosam rerum. Eveniet!</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Long page',
            description: 'ipsum dolor sit amet consectetur adipisicing elit.'
        }
    },
    head(){
        return {
            title: this.title,
            meta: [
                {
                    name: 'description',
                    content: this.description
                },
                {
                    name: 'og:title',
                    content: this.description
                },
            ],
            script: [
                {
                    body: true,
                    src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
                }
            ],
        }
    }
}
</script>

<style>
    .long-page {
        width: 960px;
        margin: 0 auto;
        text-align: center;
    }
    .box {
        background-color: rgb(41, 140, 206);
        padding: 20px;
        margin-bottom: 50px;
    }
</style>