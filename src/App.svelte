<script>
import Hero from "./components/Hero.svelte";
import Navbar from "./components/Navbar.svelte";

export let companyName;
const heroProps = {
  mainTitle : 'Welcome to',
	src: "https://nariatravel.gr/wp-content/uploads/2017/09/evening-travel-wallpaper-hd-download-free-background-images-amazing-high-definition-4k-2560x1600.jpg"
}
</script>


<div>
  <Navbar companyName={companyName}/>
  <Hero {...heroProps}/>
</div>


<style lang="scss">
  :global(body){
    margin: 0;  
    padding: 0;
    width: 0;
    height: 100vh;
    box-sizing: border-box;
  }
</style>
