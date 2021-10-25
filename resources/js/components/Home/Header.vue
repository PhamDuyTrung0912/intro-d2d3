<template>
    <div>
        <div class="header">
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
        </div>

        <div class="main mt-4">
            <div class="row">
                <div class="col-md-8 offset-2 text-center">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
