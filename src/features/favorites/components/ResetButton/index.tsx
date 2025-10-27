import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../../../../components/ui/alert-dialog'
import { Button } from '../../../../components/ui/button'
import { useRestButton } from './hooks/useResetButton'

export function ResetButton() {
  const { handleRestAllFavorites } = useRestButton()

  return (
    <AlertDialog>
      <AlertDialogTrigger
        asChild
        className="text-xs font-semibold mt-8 md:mt-auto"
      >
        <Button variant="destructive">Resetar favoritos</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Ao clicar em confirmar a sua lista de favoritos será resetada.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleRestAllFavorites}>
            Confirmar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
