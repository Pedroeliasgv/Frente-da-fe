import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { Sparkles } from 'lucide-react'

export function Topbar() {
  return (
    <div className="flex flex-col gap-4 border-b border-border bg-surface px-6 py-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-semibold text-text">Visão geral</p>
        <p className="text-sm text-secondary">Uma base pronta para o portal e admin.</p>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="ghost" className="hidden items-center gap-2 sm:inline-flex">
          <Sparkles className="h-4 w-4" />
          Destaques
        </Button>
        <Avatar />
      </div>
    </div>
  )
}
