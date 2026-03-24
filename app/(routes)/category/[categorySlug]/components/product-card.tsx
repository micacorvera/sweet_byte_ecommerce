import { ProductType } from "@/types/products"
import Link from "next/link"

type ProductCardProps = {
    product: ProductType
}
const ProductCard = (props: ProductCardProps) =>{
    const {product} = props
    return(
        <div>
            <Link href={`/product/${product.slug}`}
            className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md">
                <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
                    <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                        {product.taste}</p>
                        
                </div>
            </Link>
        </div>
    )
}

export default ProductCard