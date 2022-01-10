type TermsPointProps = {
  header: string
  paragraph: string
}

export default function TermsPoint({ header, paragraph }: TermsPointProps) {
  return (
    <article>
      <h2>{header}</h2>
      <p>{paragraph}</p>
    </article>
  )
}
