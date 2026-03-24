import { cn } from "@/lib/utils";
import { Button } from "@base-ui/react";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

interface IconButtonProps {
    onclick: () => void,
    icon: React.ReactElement
    className?: string
}

const IconButton = (props: IconButtonProps) =>{
    const { onclick, icon, className} = props
    return (
        <Button onClick={onclick} className={cn("rounded-full flex items-center bg-white border shadow-md p-2 hover:scale-110 transition", className)}>
            {icon}
        </Button>
    );
}

export default IconButton