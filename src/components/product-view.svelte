
<div class="max-w-[1200px] mx-auto p-4">

    

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="">
            <div class="">
                <img on:click="{()=>openGallery(currentThumbnail)}" class="cursor-pointer max-h-[450px] rounded-lg" src="{currentThumbnail.image}" alt="">
            </div>
            <div class="flex">
                {#each currentProduct.images as image}
                    <div on:click="{openGallery(image)}" class="mt-4 rounded-lg overflow-hidden mr-3 hover:scale-110 cursor-pointer hover:shadow-2xl transition-all duration-75">
                        <img class="" src="{image.thumbnail}" alt="">
                    </div>
                {/each}
            </div>
        </div>

        <div class="">
            <h3 class="text-lg text-theme mb-4">Sneaker Company</h3>
            <h1 class="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{currentProduct.title}</h1>
            <p class="text-gray-600 mb-4">{currentProduct.description}</p>

            {#if currentProduct.onSale === true}
                <div class="mb-4">
                    <span class="text-2xl font-bold text-gray-800">${currentProduct.salePrice}</span>
                    <span class="bg-red-100 p-2 font-bold text-theme rounded-lg">{currentProduct.salePercent}%</span>
                    <span class="text-gray-500 italic block line-through">{currentProduct.actualPrice}</span>
                </div>
            {/if}

            <div class="flex flex-col md:flex-row flex-wrap">

                <div class=" md:w-40 md:mr-4 p-3 rounded-lg bg-gray-100 flex flex-wrap justify-between items-center mb-4 md:mb-0">
                    <button on:click="{decreaseQuantity}" class="p-4 hover:bg-gray-200 rounded-lg">
                        <img src="./images/icon-minus.svg" alt="">
                    </button>
                    <span class="text-lg font-semibold text-gray-700">{currentProduct.quantity}</span>
                    <button on:click="{increaseQuantity}" class="p-4 hover:bg-gray-200 rounded-lg">
                        <img src="./images/icon-plus.svg" alt="">
                    </button>
                </div>


                <!--Add to Cart-->
                <button on:click="{addToCart}" class="px-7 py-4 bg-theme rounded-lg text-white font-semibold">
                    <svg class="w-6 h-6 inline fill-current text-white" ><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
                    </svg>Add to cart</button>
            </div>
        </div>
    </div>
</div>


<script>

import { cart } from "../stores";
import ImageViewer from "./image-viewer.svelte";


let currentProduct = {
        quantity:1,
        title:"Fall limited edition sneakers",
        description:`These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.`,
        onSale:true,
        actualPrice:299.99,
        salePrice:149.99,
        salePercent:50,
        images:[
            
            {
                image:"./images/image-product-1.jpg",
                thumbnail:"./images/image-product-1-thumbnail.jpg"
            },
            {
                image:"./images/image-product-2.jpg",
                thumbnail:"./images/image-product-2-thumbnail.jpg"
            },
            {
                image:"./images/image-product-3.jpg",
                thumbnail:"./images/image-product-3-thumbnail.jpg"
            },
            {
                image:"./images/image-product-4.jpg",
                thumbnail:"./images/image-product-4-thumbnail.jpg"
            }
            
        ]
    }




let currentThumbnail = currentProduct.images[1]



function addToCart(){
    let product = currentProduct
    $cart.push(product)
    $cart = $cart

    currentProduct =  {
        quantity:1,
        title:"Fall limited edition sneakers",
        description:`These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.`,
        onSale:true,
        actualPrice:299.99,
        salePrice:149.99,
        salePercent:50,
        images:[
            
            {
                image:"./images/image-product-1.jpg",
                thumbnail:"./images/image-product-1-thumbnail.jpg"
            },
            {
                image:"./images/image-product-2.jpg",
                thumbnail:"./images/image-product-2-thumbnail.jpg"
            },
            {
                image:"./images/image-product-3.jpg",
                thumbnail:"./images/image-product-3-thumbnail.jpg"
            },
            {
                image:"./images/image-product-4.jpg",
                thumbnail:"./images/image-product-4-thumbnail.jpg"
            }
            
        ]
    }


}


function increaseQuantity(){

    currentProduct.quantity++
}

function decreaseQuantity(){
    if(currentProduct.quantity >= 2){
        currentProduct.quantity--
    }
}


function openGallery(image) {
    let gallery = new ImageViewer({
        target:document.body,
        props:{
            gallery:currentProduct.images,
            currentImage:image
        }
    })

    gallery.$on('close',()=>{
        gallery.$destroy()
    })
}

</script>