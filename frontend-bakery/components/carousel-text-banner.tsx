"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
export const dataCarouselTop = [
    {
        id: 1,
        title: "Tortas frescas todos los días",
        description: "Descubre nuestra selección de tortas recién hechas",
        link: "#!"
    },
    {
        id: 2,
        title: "Tortas personalizadas",
        description: "Encargá tu torta personalizada para cualquier ocasión",
        link: "#!"
    },
    {
        id: 3,
        title: "Take away y entrega a domicilio",
        description: "Podés elegir venir a buscar tu torta o recibirla en la puerta de tu casa",
        link: "#!"
    }
]
const CarouselTextBanner = () => {
    const router = useRouter();

    return (
        <div className="bg-pink-100 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto bg-transparent"
            plugins={[Autoplay({ delay: 2500 })]} >
                <CarouselContent>
                {dataCarouselTop.map(({id, title, description, link}) => (
                    <CarouselItem key={id} onClick={()=> router.push(link)} className="cursor-pointer bg-none">
                        <div>
                            <Card className="shadow-none border-none bg-pink-200 dark:bg-pink-500">
                                <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                    <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary">
                                        {description}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default CarouselTextBanner;