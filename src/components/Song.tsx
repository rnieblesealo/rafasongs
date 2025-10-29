export type SongData = {
  coverPath: string,
  title: string,
  date: Date,
  teaser: string,
  tags: string[]
}

export const Song = ({ coverPath, title, date, teaser, tags }: SongData) => {
  const songTag = (tagValue: string) => {
    return (
      <p className="text-xs text-white text-center outline-1 outline-white px-3 py-1 rounded-2xl">
        {tagValue}
      </p>
    )
  }

  return (
    <div className="text-white flex flex-col items-center justify-center max-w-50">

      {/* Cover */}
      <img src={coverPath} className="aspect-square object-cover" />

      {/* Title */}
      <h3 className="w-full text-center mt-2">{title}</h3>

      {/* Date */}
      <p className="text-gray-400 text-xs text-center mb-2">
        {date.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric"
        })}
      </p>

      {/* Teaser */}
      <p className="text-gray-600 text-xs text-center">{teaser}</p>

      {/* Tags */}
      <div className="m-4 flex flex-wrap items-center justify-center gap-1">
        {tags.map((tag) => songTag(tag))}
      </div>

    </div>
  )
}