"use client"
import { Variable } from "lucide-react"
import { buttonVariants } from "./ui/button"
import Link from "next/link"

const BannerDiscount = () =>{
    return (
        <div className="p-5 sm:p-20 text-center"> 
            <h2 className="uppercase font-black text-2xl text-primary">Hasta 25% OFF</h2>
            <h2 className="mt-3 font-semibold">Pagando con efectivo o transferencia</h2>
            <h2 className="mt-3 font-semibold">5% OFF adicional en compras superiores a $50.000</h2>
            <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
                <Link href="#" className={buttonVariants()}>Comprar</Link>
                <Link href="#" className={buttonVariants({variant: "outline"})}>Más información</Link>
            </div>
        </div>
    )
}

export default BannerDiscount