<script>
  import {
    faTicketAlt,
    faConciergeBell,
    faCar,
  } from "@fortawesome/free-solid-svg-icons";
import Contact from "./components/Contact.svelte";

  import Hero from "./components/Hero.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Specs from "./components/Specs.svelte";

  export let companyName;
  let currentYear = new Date();

  const heroProps = {
    mainTitle: "Welcome to",
    src: "https://nariatravel.gr/wp-content/uploads/2017/09/evening-travel-wallpaper-hd-download-free-background-images-amazing-high-definition-4k-2560x1600.jpg",
  };

  const specProps = {
    specTitle: "Everyone enjoys traveling",
    pricesInfo: {
      icon: faTicketAlt,
      text: "Find the best prices <br> for your next <strong>trip</strong>",
    },

    hotelInfo: {
      icon: faConciergeBell,
      text: "The bests hotels <br> around the <strong>world</strong>",
    },

    carInfo: {
      icon: faCar,
      text: "All range of cars <br> at low prices per <strong>day</strong>",
    }
  };

</script>

<Navbar {companyName} />
<Hero {...heroProps} />
<Specs {...specProps} />
<Contact />

<style lang="scss">
  :global(body) {
    margin: 0;
    padding: 0;
    width: 0;
    height: 100vh;
    box-sizing: border-box;
  }
</style>
