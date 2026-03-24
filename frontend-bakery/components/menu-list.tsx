"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Cheesecakes",
    href: "/category/cheesecakes",
    description:
      "New york cheesecakes, torta vasca, y más",
  },
  {
    title: "Tartas",
    href: "/category/tartas",
    description:
      "Tartas frutales, tradicionales, y más",
  },
  {
    title: "Tortas",
    href: "/category/tortas",
    description:
      "Tortas de chocolate, vainilla, y más",
  },
  {
    title: "Cookies",
    href: "/category/cookies",
    description: "Cookies clásicas y con toppings",
  },
  {
    title: "Cupcakes",
    href: "/category/cupcakes",
    description:
      "Los mejores cupcakes para endulzar tu día",
  },
  {
    title: "Budines",
    href: "/category/budines",
    description:
      "Budines con glacé, ideales para compartir!",
  },
  {
    title: "Pedidos personalizados",
    href: "/category/personalizados",
    description:
      "Querés que tu postre sea tan único como vos? Hacemos tu antojo realidad!",
  }
]

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>La pastelería</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/pasteleria/historia">
                Historia
              </ListItem>
              <ListItem href="/pasteleria/contacto">
                Contacto
              </ListItem>
              <ListItem href="/pasteleria/pedidos">
                Mis pedidos
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href={"/envios"}>
            Envíos
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div  className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default MenuList