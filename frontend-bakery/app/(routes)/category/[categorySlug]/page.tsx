"use client"
import { ResponseType } from "@/types/response"
import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { Separator } from "@base-ui/react"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"
import FiltersControlCategory from "./components/filters-control-category"
import SkeletonSchema from "@/components/skeletonSchema"
import ProductCard from "./components/product-card"
import { ProductType } from "@/types/products"
import { readSync } from "node:fs"

export default function Page(){
    const params = useParams()
    const categorySlug = params
    const {result, loading}: ResponseType = useGetCategoryProduct('budin')
    const router = useRouter()
    console.log(result)
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {result !== null && !loading &&(
                <h1 className="text-3xl font-medium ">{result[0].category.categoryName}</h1>
            )}
            <Separator />

            <div className="sm:fkex sm:justify-between">
                <FiltersControlCategory />
                <div className="grid gap-5 mt-8 md:grid-cols-3 md:gap-10">
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {result !== null && !loading && 
                        result.map((product: ProductType) => (
                            <ProductCard key={product.id} product={product}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}