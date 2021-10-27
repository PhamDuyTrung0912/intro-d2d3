<template>
    <div class="footer">
        <div class="footer-top-container row">
            <div class="top-content col-6">
                <div class="top-content-container">
                    <p class="top-content-title">GET IN TOUCH</p>
                    <p class="top-content-text">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum
                    </p>
                    <p>
                        <i
                            class="fa fa-map-marker"
                            style="color: #c4004a; margin-right: 2px"
                        ></i>
                        Route De Hannut , 531 5024 Gelbresse , Namur , Belgium
                    </p>
                    <p>
                        <i
                            class="fa fa-mobile"
                            style="color: #c4004a; margin-right: 2px"
                        ></i>
                        +32 81 210 610
                    </p>
                    <p>
                        <i
                            class="fa fa-envelope"
                            style="color: #c4004a; margin-right: 2px"
                        ></i>
                        commune@d2d3.com
                    </p>
                </div>
            </div>
        </div>
        <div class="footer-bottom-container row">
            <div class="bottom-content col-6">
                <div class="bottom-content-container">
                    <p class="bottom-content-title">D2D3.COM</p>
                    <p class="bottom-content-text">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum
                    </p>
                    <p class="bottom-content-text">
                        @2021 D2D3 . All Rights Reserived . Designed by HaiAnh
                    </p>
                </div>
            </div>
        </div>
        <div class="form-description">
            <p class="description-title">TELL US ABOUT YOUR DESIRE</p>
            <div class="mb-4">
                <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Your name"
                />
            </div>
            <div class="mb-4">
                <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Your email"
                />
            </div>
            <div class="mb-4">
                <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Your phone number"
                />
            </div>
            <div class="mb-4">
                <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Type something here"
                ></textarea>
            </div>
            <p class="description-title-bottom">
                Thanks for contact us . We will reply in 2-4 hours
            </p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
    height: auto;
    width: 100%;
    position: relative;
}

.top-content-container {
    width: 500px;
    /* height: 300px; */
}

.footer-top-container {
    height: 420px;
    padding: 20px 40px;
    width: 100%;
    margin: 0;
}

.top-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.top-content-title {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 30px;
    color: #c4004a;
}

.top-content-text {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #787878;
}

.footer-bottom-container {
    height: 350px;
    background-color: #c4004a;
    padding: 20px 40px;
    width: 100%;
    margin: 0;
    position: relative;
}

.bottom-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.bottom-content-container {
    width: 500px;
    /* height: 300px; */
}

.bottom-content-title {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 30px;
    color: #ffffff;
}

.bottom-content-text {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
}

.icon-color {
    color: #c4004a;
}

.form-description {
    padding: 30px;
    width: 510px;
    border-radius: 3px;
    position: absolute;
    top: 24%;
    left: 50%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: white;
}
.description-title {
    padding: 10px 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 30px;
    color: #000;
}

.description-title-bottom {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: #c4004a;
}
</style>