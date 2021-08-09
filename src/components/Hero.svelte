<script>
  export let mainTitle;
  export let src;
</script>

<main>
  <h3>{mainTitle}</h3>
  <h2>{mainTitle} awesome travels</h2>
  <button>Learn more</button>
</main>

<style lang="scss">
  @import '../styles/_variables.scss';
    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 50vh;
        background-color: gray;
        h3{
          margin: 0;
        }
        button{
          background-color: $orange_hover_color;
          color: $primary_background_color;
          height: 2.7rem;
          width: 8rem;
          border: none;
          border-radius: .5rem;
          font-weight: 700;
        }
    }
</style>
