<script>
  import Fa from "svelte-fa";

  export let specTitle;
  export let pricesInfo;
  export let hotelInfo;
  export let carInfo;
</script>

<aside>
  <h3>{specTitle}</h3>
  <section>
    <article>
      <Fa icon={pricesInfo.icon} size="4x" />
      <p>{@html pricesInfo.text}</p>
    </article>
    <article>
      <Fa icon={hotelInfo.icon} size="4x" />
      <p>{@html hotelInfo.text}</p>
    </article>
    <article>
      <Fa icon={carInfo.icon} size="4x" />
      <p>{@html carInfo.text}</p>
    </article>
  </section>
</aside>

<style lang="scss">
  @import "../styles/_variables.scss";

  aside {
    text-align: center;
    width: 100vw;
    h3 {
      margin-top: 3rem;
      font-weight: 400;
    }
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      article {
        padding: 1rem;
        width: 50%;
        &:hover {
          background-color: $orange_hover_color;
          color: $primary_background_color;
          transition: ease-in-out 0.3s;
        }
      }
    }
  }

  @media (min-width: 768px) {
    aside {
        h3{
            font-size: 2rem;
        }
      section {
        display: flex;
        flex-direction: row;
        article{
            p{
                font-size: 1.3rem;
            }
        }
      }
    }
  }

  @media (min-width: 1024px){
      aside{
          h3{
            font-size: 1.5rem;
            margin-bottom: 3rem;
          }
          section{
              justify-content: center;
              article{
                  width: 20%;
                  padding: 2rem;
                  p{
                      font-size: 1rem;
                  }
              }
          }
      }
  }
</style>
