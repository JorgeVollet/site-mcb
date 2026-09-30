import { Plus } from 'lucide-react'

// Perguntas frequentes em acordeão nativo (<details>): o texto fica no HTML,
// então Google e IAs leem as respostas mesmo fechadas.
export default function FaqLista({ faq, escuro = false }) {
  if (!faq?.length) return null
  const borda = escuro ? 'border-white/10' : 'border-mcb-gray-200'
  return (
    <div className={`divide-y ${escuro ? 'divide-white/10' : 'divide-mcb-gray-200'} border-y ${borda}`}>
      {faq.map((f) => (
        <details key={f.p} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
            <h3 className={`text-base font-medium leading-snug sm:text-lg ${escuro ? 'text-cream' : 'text-ink'}`}>
              {f.p}
            </h3>
            <Plus
              size={20}
              className="mt-0.5 shrink-0 text-wood-500 transition-transform duration-300 group-open:rotate-45"
            />
          </summary>
          <p className={`mt-3 max-w-3xl leading-relaxed ${escuro ? 'text-mcb-gray-300' : 'text-mcb-gray-600'}`}>
            {f.r}
          </p>
        </details>
      ))}
    </div>
  )
}
