<script>
    export let currentYear = new Date;
</script>
<footer>
    <hr>
    <p>Join us</p>
    <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" alt="facebook">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="instagram">
        <img src="https://seeklogo.com/images/T/twitter-logo-A84FE9258E-seeklogo.com.png" alt="twitter">
    </div>
    <small>{`© Skywalkers inc, ${currentYear.getFullYear()}`}</small>
</footer>

<style lang="scss">
    footer{
        width: 100vw;
        text-align: center;
        hr{
            width: 60%;
        }
        p{
            font-size: 1.2rem;
        }
        div{
            img{
                width: 2rem;
                height: 2rem;
                margin: 0 .5rem 1rem 0;
            }
        }
        small{
            font-size: 1.1rem;
        }
    }

    @media (min-width: 768px){
        footer{
            p{
                font-size: 1.6rem;
            }
            div{
                img{
                    width: 3rem;
                    height: 3rem;
                }
            }
            small{
                font-size: 1.4rem;
            }
        }
    }

    @media(min-width: 1024px){
        footer{
            p{
                font-size: 1rem;
            }
            div{
                img{
                    width: 1.5rem;
                    height: 1.5rem;
                }
            }
            small{
                font-size: .9rem;
            }
        }
    }
</style>