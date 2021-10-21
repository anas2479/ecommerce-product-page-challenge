<div class="w-full flex gap-3 mb-4">
    <div class="w-12">
        <img class="rounded" src="{product.images[0].thumbnail}" alt="">
    </div>
    <div class="">
        <h1 class="text-sm font-semibold text-gray-700">{product.title}</h1>
        <p class="text-gray-600"> <span class="italic text-xs">{product.salePrice} x {product.quantity}</span> <span class="font-semibold">${product.salePrice * product.quantity}</span>
        </p> 
    </div>
    <div class="">
        <button on:click="{removeItem}" class="">
            <img src="./images/icon-delete.svg" alt="">
        </button>
    </div>
</div>


<script>
    import _ from "lodash";
    import { cart } from "../stores";
    export let product
   
function removeItem() {
    _.remove($cart,(x)=>{
        return x === product
    })

    $cart = $cart
}
    

</script>