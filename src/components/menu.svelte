

<!--Mobile Menu-->
<div class=" mobileMenu {mobileMenu} absolute w-full min-h-screen bg-white h-screen p-4 z-30">
    <div class="relative ">
        <div class="mb-6 flex justify-between items-center">
            <div>
                <button on:click="{toggleMobileMenu}">
                    <img src="./images/icon-close.svg" alt="">
                </button>
            </div>


        </div>
        <div class=" flex flex-col">
            {#each siteRoutes as route}
                    <a href="/" class="menu-link">{route}</a>
                {/each}
        </div>
    </div>
</div>
<!--//mobile Menu//-->

<!--Desktop Menu-->
<div class=" relative p-4 mx-auto max-w-[1200px] border-b-2">
    
    <div class="flex flex-wrap justify-between items-center">
        <div class="flex flex-wrap">
            <div class="mr-7 flex">
                <button on:click="{toggleMobileMenu}" class="md:hidden mr-3">
                    <img src="./images/icon-menu.svg" alt="">
                </button>
                <div>
                    <img class="mr-3" src="./images/logo.svg" alt="">
                </div>
            </div>

            <div class="hidden md:block">
                {#each siteRoutes as route}
                    <a href="/" class="menu-link">{route}</a>
                {/each}
            </div>
        </div>


        <div class="flex">
            <div class=" relative">
                <button on:click="{toggleCartVisibility}" class="mr-4">
                    {#if $cart.length > 0}
                    <span class="absolute text-xs text-white px-1 bg-theme rounded-lg transform translate-y-2 font-semibold">{$cart.length}</span>
                    {/if}
                    <img class="mt-4" src="./images/icon-cart.svg" alt="">
                </button>

                
            </div>

            <button class="group">
                <img class="w-[50px] group-hover:border-2 rounded-full border-theme" src="./images/image-avatar.png" alt="">
            </button>
        </div>
    </div>

    <div class=" cart {cartVisibility} absolute w-[300px] rounded-lg shadow-2xl bg-white right-4">
        <div class="p-4 border-b-2">
            <h3 class="text-lg font-bold text-gray-700">Cart</h3>
        </div>
        <div class="p-4 max-h-[300px] overflow-y-scroll">
            {#if $cart.length === 0}
             <div class="w-full h-full flex justify-center items-center">
                <h2 class="text-lg font-medium text-gray-600 capitalize">Your cart is empty.</h2>
             </div> 
             {:else}
             {#each $cart as item}
             <CartItem product={item}/> 
             {/each} 
             {#if $cart.length >= 1}
            <button class="w-full p-3 bg-theme text-white font-semibold rounded-lg">Check Out</button>
            {/if}
        {/if}
        
        </div>
    </div>
</div>
<!--//Desktop Menu//-->


<script>
import gsap from "gsap";
import CartItem from './cart-item.svelte'
import {cart} from '../stores'


let siteRoutes = ['Collections', 'Men', 'Women', 'About','Contact']


let mobileMenu = 'hidden'



function toggleMobileMenu(){

    if (mobileMenu === 'hidden'){

        mobileMenu = 'block'

        gsap.from('.mobileMenu',{
            opacity:0,
            y:-10,
            duration:.3
        })

    }else{
        mobileMenu = 'hidden'

    }

}

let cartVisibility = 'hidden'

function toggleCartVisibility(){
    if (cartVisibility === 'hidden'){

            cartVisibility = 'block'

            gsap.from('.cart',{
                opacity:0,
                y:-10,
                duration:.3
            })

        }else{
            cartVisibility = 'hidden'
        }
    }
</script>