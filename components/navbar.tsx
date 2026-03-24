"use client"
import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";

{/*Los estilos se definen en las clases de Tailwind CSS */}
const NavBar = () => {
    const router = useRouter();
    return(
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer">
            <h1 className="text-3xl" onClick={() => router.push("/")}>Sweet
                <span className="--font-lexend">Byte</span>
            </h1>
            {/*Menú aparece solo en desktop */}
            <div className="items-center justify-between hidden sm:flex">
                <MenuList />
            </div>
            {/*Menú aparece solo en mobile */}
            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>
            {/*Icono de carrito de compras */}
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                <ShoppingCart 
                    strokeWidth={"1"} 
                    className="cursor-pointer" 
                    onClick={() => router.push("/cart")} 
                />
                <Heart 
                    strokeWidth={"1"} 
                    className="cursor-pointer" 
                    onClick={() => router.push("/wishlist")} 
                />
                <User 
                    strokeWidth={"1"} 
                    className="cursor-pointer" 
                    onClick={() => router.push("/profile")} 
                />
                <ToggleTheme />
            </div>
        </div>
    );
}



export default NavBar;