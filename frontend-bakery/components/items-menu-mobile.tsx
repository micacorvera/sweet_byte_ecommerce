import { Popover, PopoverTrigger } from "./ui/popover"
import { PopoverContent } from "./ui/popover"
import MenuList from "./menu-list";
import Link from "next/dist/client/link";
import { Menu } from "lucide-react";

const ItemsMenuMobile = () =>{
    return (
        <Popover>
            <PopoverContent>
                <PopoverTrigger>
                    <Menu />
                </PopoverTrigger>
                <PopoverContent>
                    <Link href="/category/cheesecakes" className="block">Cheesecakes</Link>
                    <Link href="/category/tartas" className="block">Tartas</Link>
                    <Link href="/category/tortas" className="block">Tortas</Link>
                    <Link href="/category/cookies" className="block">Cookies</Link>
                    <Link href="/category/cupcakes" className="block">Cupcakes</Link>
                    <Link href="/category/budines" className="block">Budines</Link>
                    <Link href="/category/personalizados" className="block">Pedidos personalizados</Link>
                </PopoverContent>
            </PopoverContent>
        </Popover>
    );
}

export default ItemsMenuMobile;