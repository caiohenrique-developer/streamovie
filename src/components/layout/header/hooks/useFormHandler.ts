import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import type { z } from 'zod'
import { formHandlerSchema } from '../model/formHandler.schema'

export const useFormHandler = () => {
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof formHandlerSchema>>({
    resolver: zodResolver(formHandlerSchema),
    defaultValues: { searchMovieTitle: '' },
  })

  function onSubmit({ searchMovieTitle }: z.infer<typeof formHandlerSchema>) {
    navigate(`/search?q=${encodeURIComponent(searchMovieTitle)}`)
  }

  return { form, onSubmit }
}
