<script>
  export let name;
  export let classMate;
  import Hijo from "./Hijo.svelte"

  setTimeout(() => {
    classMate= "Santi"
  }, 3000);
</script>

<h1>Hello {name}!</h1>

<div>
  <p>SASS is working!</p>
  <h1> Hola {classMate} y {name}</h1>
  <Hijo />
</div>


<style lang="scss">

  @import './styles/vars.scss';

  h1 {
    background-color: $background;
  }

  div {
    background: green;

    p {
      color: #fff;
    }
  }
</style>
