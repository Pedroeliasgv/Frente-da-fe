interface GalleryProps {
  images: { alt: string; src: string }[]
}

export function Gallery({ images }: GalleryProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <div key={image.src} className="overflow-hidden rounded-[1.5rem] border border-border bg-surface">
          <img src={image.src} alt={image.alt} className="h-64 w-full object-cover" />
        </div>
      ))}
    </div>
  )
}
