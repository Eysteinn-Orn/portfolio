export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border bg-secondary-background text-foreground font-light">
      <div className="animate-marquee whitespace-nowrap py-6">
        {items.map((item) => {
          return (
            <span key={item} className="mx-4 text-2xl">
              {item}
            </span>
          )
        })}
      </div>

      <div className="absolute top-0 animate-marquee-alt whitespace-nowrap py-6">
        {items.map((item) => {
          return (
            <span key={item} className="mx-4 text-2xl">
              {item}
            </span>
          )
        })}
      </div>

      {/* must have both of these in order to work */}
    </div>
  )
}
