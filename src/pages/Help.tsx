export default function HelpPage() {
  return (
    <section className="py-10">
      <div className="container space-y-6">
        <h1 className="text-2xl font-bold">Help & Support</h1>
        <p className="text-muted-foreground">Find answers, guides, and ways to contact support.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><a className="underline" href="#" onClick={(e) => e.preventDefault()}>Getting started guide</a></li>
          <li><a className="underline" href="#" onClick={(e) => e.preventDefault()}>FAQ</a></li>
          <li><a className="underline" href="#" onClick={(e) => e.preventDefault()}>Troubleshooting</a></li>
        </ul>
        <div>
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-muted-foreground">Email support@woxsen.edu</p>
        </div>
      </div>
    </section>
  );
}

