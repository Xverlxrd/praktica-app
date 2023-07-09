<template>
    <div class="case__wrapper">
        <div class="case__container">
            <h1 class="case__title">VR - Тренажеры</h1>

            <div class="case__content">
                <RadioComponent :updateCategoriesName="updateCategoriesName"/>
                <CaseComponent :categoriesName="categoriesName"/>
            </div>
        </div>
    </div>
</template>

<script>
import RadioComponent from "@/components/common/RadioComponent/RadioComponent.vue";
import CaseComponent from "@/components/common/CaseComponent/CaseComponent.vue";
export default {
    name: 'App',
    data() {
        return {
            categoriesName: 'Все'
        }
    },
    components: {RadioComponent, CaseComponent},
    methods: {
        updateCategoriesName(name) {
            this.categoriesName = name
            console.log(this.categoriesName)
        }
    }
}
</script>

<style>

* {
    padding: 0px;
    margin: 0px;
    border: none;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}


a, a:link, a:visited  {
    text-decoration: none;
}

a:hover  {
    text-decoration: none;
}
html, body {
    height: 100%;
}

aside, nav, footer, header, section, main {
    display: block;
}

h1, h2, h3, h4, h5, h6, p {
    font-size: inherit;
    font-weight: inherit;
}

ul, ul li {
    list-style: none;
}

img {
    vertical-align: top;
}

img, svg {
    max-width: 100%;
    height: auto;
}

address {
    font-style: normal;
}


input, textarea, button, select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
}

input::-ms-clear {
    display: none;
}

button, input[type="submit"] {
    display: inline-block;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
}

input:focus, input:active,
button:focus, button:active {
    outline: none;
}

button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

label {
    cursor: pointer;
}

legend {
    display: block;
}

body{
    width: 100%;
    height: 100vh;
    padding-top: 100px;
    padding-bottom: 2200px;
}
.case__wrapper{
    margin: 0 auto;
    height: 100%;
    width: 1140px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.case__container{
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 70px;
    width: 1440px;
}
.case__title{
    color: #222E37;
    font-size: 52px;
    font-weight: 700;
    line-height: 120%;
}
.case__content{
    width: 100%;
}

</style>
