/* eslint-disable @next/next/no-img-element */
"use client"
import { useGetCathegories } from "@/api/getProducts"
import Link from "next/link"
import { ResponseType } from "@/types/response"
import { CategoryType } from "@/types/category"
const ChooseCategory = () =>{
    const { result, loading }: ResponseType = useGetCathegories()
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 pb-2 text-3xl sm:pb-5 flex justify-center">Categorías</h3>
            <h4 className="flex justify-center pb-4">Elegí la que más te guste!</h4>
            <div className="grid gap-5 sm:grid-cols-3">
                {!loading && result !== undefined && (
                    result.map((category: CategoryType) =>(
                        <Link 
                        key={category.id} 
                        href={`/category/${category.slug}`}
                        className="relative max-w-xs md.auto overflow-hidden bg-no-repeat bg-cover rounded-lg">
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage?.url}`}
                            alt={category.categoryName}
                            className="justify-center max-w-[100%] transition duration-300 ease-in-out rounded-lg hover:scale-110" />
                            <p className="absolute w-[100%] py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg backdrop-contrast-80 hover:text-xl hover:bg-black/50 ">{category.categoryName}</p>
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}

export default ChooseCategory