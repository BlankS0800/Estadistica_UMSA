function ContactDirectoryEmailItem({ item }) {
  const isLink = item.email.startsWith('http')
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4 flex flex-col justify-between h-full">
      <div>
        <h4 className="text-xs font-black uppercase tracking-tight text-slate-800">{item.unit}</h4>
        <a
          href={isLink ? item.email : `mailto:${item.email}`}
          target={isLink ? '_blank' : undefined}
          rel={isLink ? 'noopener noreferrer' : undefined}
          className="my-1 block text-[11px] font-bold text-[#ea580c] hover:underline break-all"
        >
          {item.email}
        </a>
      </div>
      <p className="text-[9px] font-medium italic text-slate-500 mt-2">{item.desc}</p>
    </div>
  )
}

export default ContactDirectoryEmailItem
