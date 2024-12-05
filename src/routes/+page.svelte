<script>
	import { base } from '$app/paths';
</script>

<div class="rickroll-container">
    <h1 class="meme-title">YOU JUST GOT</h1>
    <img src={`${base}/rickrolled.jpg`} alt="Rick Roll" class="meme-image" />
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
    ></iframe>
</div>

<style>
    .rickroll-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 2rem;
    }

    .meme-title {
        font-size: 3rem;
        font-weight: bold;
        color: red;
        text-shadow: 2px 2px 0 #000;
    }

    .meme-image {
        max-width: 400px;
        border-radius: 8px;
        margin: 1rem 0;
    }
</style>

