<template>
    <div class="home">
        <div class="home-image-bg">
            <img :src="$utils.asset('images/bg_home_1.png')" />
            <div class="home-image-content">
                <p class="content-title-1">
                    La cartographie au coeur de vos métiers
                </p>
                <p class="content-title-2 font-weight-bold">D2D3.COM</p>
                <p class="content-title-3">
                    Vous n'imaginez pas toute ce que la cartographie peut vous
                    apporter! C'est une meilleure visualisation de vos assets,
                    de vos données, de vos interventions. C'est une aide à la
                    décision rapide et intuitive. C'est un nouvelle manière
                    d'aborder vos processus métiers.
                </p>
            </div>
        </div>
        <div class="home-content-holder">
            <div class="holder-container row">
                <div class="holder-content col-6">
                    <p class="content-holder-1">Welcome to D2D3</p>
                    <p class="content-holder-2">LET’S FIND OUT <span class="strong">WHO WE ARE</span></p>
                    <p class="content-holder-linestring">______________________</p>
                    <p class="content-holder-3">
                        “Ma carte, mon point d'accès à mes applications”
                    </p>
                    <p class="content-holder-4">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English
                    </p>
                </div>
                <div class="holder-image col-6">
                    <img :src="$utils.asset('images/home_holder_1.png')" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
    height: auto;
}

.home-image-bg {
    /* Full height */
    height: 100%;
    width: 100%;

    position: relative;
    box-shadow: 10px 10px 30px 10px rgba(0, 0, 0, 0.1);
}

.home-image-bg img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.home-image-content {
    width: 45%;
    position: absolute;
    top: 40%;
    left: 30%;
    transform: translateY(-50%, -50%);
    color: white;
}

.content-title-1 {
    font-size: 19px;
    text-align: center;
}

.content-title-2 {
    font-size: 50px;
    text-align: center;
}

.content-holder-2 span{
     color: #c4004a;
}



.content-title-3 {
    font-size: 16px;
    text-align: center;
}

.holder-container {
    width: 80%;
    height: 500px;
    margin: auto;
}

.home-content-holder {
    padding: 50px;
}

.holder-container .holder-content {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 50px;
}

.holder-content .content-holder-1 {
    color: #7c6954;
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 36px;
    text-align: center;
}

.holder-content .content-holder-2 {
    color: black;
    font-weight: bold;
    font-size: 35px;
    text-align: center;
    line-height: 33px;
}

.content-holder-linestring{
     color: #c4004a;
     margin: 10px 0px;
     font-size: 20px;
      text-align: center;
}

.holder-content .content-holder-3 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: black;
}

.holder-content .content-holder-4 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: #787878;
}

.holder-image {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.holder-container .holder-image img {
    width: 450px;
    height: 450px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>>
