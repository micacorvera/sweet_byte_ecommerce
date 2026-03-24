/* eslint-disable @next/next/no-img-element */
"use client"

import { useRouter } from "next/navigation"
import { ResponseType } from "@/types/response"
import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Card, CardContent } from "./ui/card"
import SkeletonSchema from "./skeletonSchema"
import { ProductType } from "@/types/products"
import { Expand, ShoppingCart } from "lucide-react"
import IconButton from "./icon-button"

const FeaturedProducts = () => {
    const { result, loading } : ResponseType = useGetFeaturedProducts()
    const router = useRouter()
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-15 sm:px-24">
            <h3 className="px-6 text-3xl sm:pb-8 flex justify-center">Productos destacados</h3>
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    { loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {result != null && (
                        result.map((product: ProductType) => {
                            
                            const {id, slug, image, productName, taste, type } = product
                            
                            return (

                                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                                    <div className="p-1">
                                        <Card className="py-4 shadow-none">
                                            <CardContent className="relative flex items-center justify-center px-6 py-2">
                                                <img 
                                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image[0]?.url}`} 
                                                alt="Image featured" />
                                                <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                                    <div className="flex justify-center gap-x-6">
                                                        <IconButton 
                                                            onclick={() => router.push(`product/${slug}`)} 
                                                            icon={<Expand size={20} />} 
                                                            className="text-pink-400"
                                                            />
                                                            <IconButton 
                                                            onclick={() => console.log("add item")} 
                                                            icon={<ShoppingCart size={20} />} 
                                                            className="text-pink-400"
                                                            />
                                                    </div>
                                                </div>
                                            </CardContent>
                                            <div className="flex justify-between gap-3 px-8">
                                                <h3 className="text-lg font-bold">{productName}</h3>
                                            </div>
                                            <div className="flex items-center justify-start px-8 gap-3">
                                                <p className="bg bg-yellow-200 px-1 py-1 rounded-md dark:text-black">{taste}</p>
                                                <p className="bg bg-yellow-800 px-1 py-1 rounded-md">{type}</p>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )}
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
    )
}

export default FeaturedProducts