import { AppLogo } from '@/components/common/app-logo'
import { Button } from '@/components/ui/button'
import { Activity, CalendarDays, Settings2 } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="flex min-h-screen w-72 flex-col gap-6 border-r border-border bg-surface p-6">
      <AppLogo />
      <nav className="space-y-2">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Activity className="h-4 w-4" />
          Painel
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <CalendarDays className="h-4 w-4" />
          Relatórios
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Settings2 className="h-4 w-4" />
          Configurações
        </Button>
      </nav>
    </aside>
  )
}
