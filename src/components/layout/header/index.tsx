import { SearchIcon } from 'lucide-react'
import { MediaQuery } from 'react-responsive'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../../../components/ui/form'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '../../../components/ui/input-group'
import { AppContainer } from '../appContainer'
import { useFormHandler } from './hooks/useFormHandler'
import { Logotipo } from './ui/logotipo'
import { NavMenuDesk } from './ui/navMenuDesk'
import { NavMenuMob } from './ui/navMenuMob'

export function Header() {
  const { form, onSubmit } = useFormHandler()

  return (
    <header className="bg-slate-950 shadow-md">
      <AppContainer>
        <div className="flex items-center justify-between gap-8">
          <Logotipo />

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full max-w-lg"
            >
              <FormField
                control={form.control}
                name="searchMovieTitle"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <InputGroup className="h-auto rounded-full bg-white/20 border-white/10 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                        <InputGroupInput
                          aria-invalid={
                            !!form.formState.errors.searchMovieTitle?.message
                          }
                          placeholder="Buscar filmes..."
                          className="placeholder:text-xs md:placeholder:text-sm placeholder:text-white"
                          {...field}
                        />
                        <InputGroupAddon align="inline-end">
                          <InputGroupButton
                            type="submit"
                            className="w-6 h-6 md:w-8 md:h-8 text-white hover:text-white rounded-full hover:bg-white/20 hover:border-white/10"
                          >
                            <SearchIcon />
                          </InputGroupButton>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormControl>
                    <FormMessage className="absolute bottom-[-20px] text-xs md:text-sm w-[300px] md:w-auto" />
                  </FormItem>
                )}
              />
            </form>
          </Form>

          <MediaQuery maxWidth={767}>
            <NavMenuMob />
          </MediaQuery>

          <MediaQuery minWidth={768}>
            <NavMenuDesk />
          </MediaQuery>
        </div>
      </AppContainer>
    </header>
  )
}
