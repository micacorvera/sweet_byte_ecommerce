import { useGetProductField } from "@/api/getProductField"
import { Label } from "@/components/ui/label"
import { RadioGroupItem } from "@/components/ui/radio-group"
import { FilterTypes } from "@/types/filters"
import { RadioGroup } from "@base-ui/react"

const FilterTaste = () =>{
    const {result, loading}: FilterTypes = useGetProductField()
    return (
        <div className="my-5">
            <p className="mb-3 font-bold">Sabor</p>
            {loading && result === null && (
                <p>Cargando sabor...</p>
            )}
            <RadioGroup>
                {result !== null && result.schema.attributes.taste.enum.map((taste: string) =>(
                    <div key={taste} className="flex items-center space-x-2 space-y-2">
                        <RadioGroupItem value={taste} id={taste}/>
                        <Label htmlFor={taste}>{taste}</Label>
                    </div>
                ) )}
            </RadioGroup>
        </div>
    )
}

export default FilterTaste