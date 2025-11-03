export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 mt-8">
      <div className="container text-sm opacity-70">
        © {new Date().getFullYear()} Samuel Ray. Built with React + Tailwind.
      </div>
    </footer>
  )
}
