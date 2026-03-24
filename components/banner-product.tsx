"use client"
import { buttonVariants } from "./ui/button"
import Link from "next/link"

const BannerProduct = () =>{
    return (
        <>
            <div className="mt-4 text-center">
                <h4 className="mt-2 text-5xl font-extrabold upperce">fetch your next byte</h4>
                <p className="mt-3">Buscá tu dulce favorito para extraerle un byte</p>
                <Link href="#" className={buttonVariants({variant: "default"})}>Comprar</Link>
            </div>
            <div className="h-[350px] bg-cover lg:h-[600px] bg-[url('/slider-image.jpg')] bg-center mt-5"/>
        </>
        
        
    )   
}

export default BannerProduct