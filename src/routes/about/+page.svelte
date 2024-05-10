<script>
    let intro_image_src = 'https://source.unsplash.com/1600x900/?nature';
    let second_image_src = 'https://source.unsplash.com/1600x900/?city';

    let eboard_members = 14;

</script>

<style>
    .intro-image-container {
        width: 100%;
        max-width: 100vw;
        height: 100vh;
        display: flex;
        position: relative;
    }

    .about-container {
        width: 100%;
        max-width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .eboard-container {
        width: 100%;
        max-width: 100vw;
        height: 200vh;
        display: flex;
        position: relative;
    }

    .contact-us-container {
        width: 100%;
        max-width: 100vw;
        height: 75vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .inner-intro-container {
        width: 30%;
        max-width: 30vw;
        height: 60vh;
        left: 5%;
        top: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: rgba(100, 100, 100);
    }

    .inner-about-container {
        width: 90%;
        max-width: 90vw;
        height: 65vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: rgba(100, 100, 100);
        z-index: 1;
    }

    .eboard-grid-container {
        width: calc(100% - 10rem);
        max-width: 100vw;
        display: grid;
        grid-template-columns: repeat(4, minmax(20vh, 1fr));
        justify-content: space-evenly;
        align-items: space-evenly;
        padding: 10% 5% 10% 5%;
        gap: 4rem;
    }

    .eboard-image-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }
</style>

<div class="intro-image-container">
    <img src={intro_image_src} alt="Nature"/>
    <div class="inner-intro-container">
        <h1>Intro</h1>
    </div>
</div>

<div class="about-container">
    <div class="inner-about-container">
        <h1>About</h1>
    </div>
</div>

<div class="eboard-container">
    <img src={second_image_src} alt="City"/>
    <div class="eboard-grid-container">
        {#each Array(eboard_members) as _, i}
            <div class="eboard-image-container">
                <img src="https://source.unsplash.com/1600x900/?person" alt="Person"/>
            </div>
        {/each}
    </div>
</div>
<div class="contact-us-container" />