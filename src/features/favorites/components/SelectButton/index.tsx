import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../components/ui/select'
import { useAppSelector } from '../../../../stores/model/storeStateType'
import { useHandleSelectOption } from './hooks/useHandleSelectOption'

export function SelectButton() {
  const { handleChange } = useHandleSelectOption()
  const { sortOption } = useAppSelector(({ favoriteMovies }) => favoriteMovies)

  return (
    <div className="text-xs md:text-sm text-slate-400 w-fit mx-auto">
      <Select value={sortOption} onValueChange={handleChange}>
        <SelectTrigger>
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a-z">Título (A-Z)</SelectItem>
          <SelectItem value="z-a">Título (Z-A)</SelectItem>
          <SelectItem value="maior-nota">Maior nota</SelectItem>
          <SelectItem value="menor-nota">Menor nota</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
