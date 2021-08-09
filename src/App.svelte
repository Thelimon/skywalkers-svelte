<script>
import Navbar from "./components/Navbar.svelte";

export let companyName;
</script>



<div>
  <Navbar companyName={companyName}/>
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
