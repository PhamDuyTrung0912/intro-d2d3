<template>
    <div class="header">
        <div class="header-container d-flex justify-content-around">
            <div class="header-image-logo">
                <img
                    class="mt-3"
                    :src="$utils.asset('images/home_logo_d2d3.png')"
                />
            </div>
            <div class="header-nav-menu">
                <ul>
                    <li class="active-item-menu">ACCUEI</li>
                    <li>SERVICES</li>
                    <li>INSPIREZ-VOUS</li>
                    <li>NOTRE ECOSYSTEME</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </div>

        <!-- <div class="header">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <router-link
                        class="nav-link"
                        :class="[{ active: $route.name === 'home' }]"
                        :to="{ name: 'home' }"
                    >
                        Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                        class="nav-link"
                        :class="[{ active: $route.name === 'contact' }]"
                        :to="{ name: 'contact' }"
                    >
                        Contact
                    </router-link>
                </li>
            </ul>
        </div> -->
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
    height: 112px;
    background-color: #000000;
    opacity: 70%;
    position: absolute;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 99;
}

.header-image-logo{
    z-index: 100;
}

.header-container {
    width: 80%;
    margin: auto;
}

.header-nav-menu {
    line-height: 6.5;
}

.header-nav-menu ul {
    display: flex;
    list-style-type: none;
}

.header-nav-menu ul li {
    cursor: pointer;
    margin-left: 20px;
    margin-right: 20px;
    color: white;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    transition: color 0.5s;
    height: 80px;
}

.header-nav-menu ul li:hover {
    color: #c4004a;
}

.active-item-menu {
    color: #c4004a !important;
    border-bottom: 3px solid #c4004a;
}
</style>
