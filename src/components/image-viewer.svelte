<div class="fixed inset-0 h-screen w-screen z-40 bg-transparent">

    <div class="absolute h-full w-full bg-gray-900 opacity-50 inset-0 "/>


    <div class="relative max-w-[800px] mx-auto mt-4 p-4">

        <div class="w-full flex justify-between">
            <div/>
            <button on:click="{trigerClose}" class="group">
                <svg class="w-7 h-7 fill-current text-white group-hover:text-theme"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" /></svg>
            </button>
        </div>

        <div class="w-full rounded-lg flex justify-between gap-2 md:gap-4">
            <div class="flex items-center">
                <button on:click="{previousImage}" class="w-12 h-12 rounded-full bg-white translate-x-10">
                    <i class="fas fa-chevron-left"></i>
                </button>
            </div>
            {#if currentImage != undefined}
                <div class="">
                    <img class="rounded-lg" src="{currentImage.image}" alt="">
                </div>
            {/if}
            <div class="flex items-center">
                <button on:click="{nextImage}" class="w-12 h-12 rounded-full bg-white -translate-x-10">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    </div>
</div>


<script>
import { createEventDispatcher } from "svelte";
import _ from "lodash";

    export let gallery
    export let currentImage

    let despatch = createEventDispatcher()

    function trigerClose() {
        despatch('close',{
            
        })
        
    }
    console.log(currentImage);

    function nextImage(){
        let index = _.findIndex(gallery, (image)=>{
            return image === currentImage
        })
        
        if(index < gallery.length - 1){
            currentImage= gallery[index+1]
        }else if(index === gallery.length - 1){
            currentImage= gallery[1]
        }
    }

    
    function previousImage(){
        let index = _.findIndex(gallery, (image)=>{
            return image === currentImage
        })
        
        if(index > 1){
            currentImage= gallery[index - 1]
        }else if(index === 1){
            currentImage= gallery[index + 1]
        }
    }
</script>