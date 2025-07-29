"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Package, HelpCircle, Send, AlarmClock, X } from "lucide-react"
import clsx from "clsx"

export function FloatingAssistant() {
  const [open, setOpen] = useState(false)
  const [bounce, setBounce] = useState(false)
  const router = useRouter()

  // Form fields
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [query, setQuery] = useState("")

  // Show popup once on visit
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("seen-floating-popup")
    if (!hasSeen) {
      setTimeout(() => {
        setOpen(true)
        playSound()
        sessionStorage.setItem("seen-floating-popup", "true")
      }, 2000)
    }
  }, [])

  // Bounce icon occasionally
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!open) setBounce(true)
    }, 15000) // reduced bounce frequency
    return () => clearTimeout(timer)
  }, [open])

  const playSound = () => {
    const audio = new Audio("/sounds/ping.mp3")
    audio.volume = 0.4
    audio.play().catch(() => {})
  }

  const handleNavigate = (path: string) => {
    router.push(path)
    setOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = `Quote Inquiry from ${name}`
    const body = `
Customer Name: ${name}
Email: ${email}

Quote/Query:
${query}
    `
    const mailtoLink = `mailto:info@evertruth.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
    setOpen(false)
  }

  return (
    <>
      {/* Floating Icon Button */}
      <button
        onClick={() => {
          setOpen(!open)
          setBounce(false)
        }}
        className={clsx(
          "fixed bottom-20 right-5 z-50 bg-[#093257] hover:bg-[#0a4a73] text-white p-4 rounded-full shadow-xl transition-all duration-300",
          bounce && "animate-bounce"
        )}
        aria-label="Assistant"
      >
        {open ? (
          <X className="w-5 h-5" />
        ) : (
          <AlarmClock className="w-6 h-6 animate-pulse" />
        )}
      </button>

      {/* Assistant Popup */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-80 max-w-full p-5 bg-white border border-gray-200 rounded-xl shadow-2xl z-[60] animate-in fade-in slide-in-from-bottom-5">
          <div className="text-xl font-bold text-[#093257] mb-1">⚡ Quick Help</div>
          <p className="text-sm text-gray-600 mb-4">Enter your details or use the shortcuts below:</p>

          {/* Mini Quote Form */}
          <form className="space-y-2" onSubmit={handleSubmit}>
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Textarea
              placeholder="Product / Quote Request"
              rows={2}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
              className="resize-none"
            />
            <Button
              type="submit"
              className="w-full bg-[#093257] hover:bg-[#0a4a73] text-white font-semibold py-2 mt-1"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit Query
            </Button>
          </form>

          {/* Quick Navigation Buttons */}
          <div className="flex flex-col gap-2 mt-4 text-sm">
            <Button
              variant="outline"
              className="flex items-center gap-2 text-[#093257] border-[#093257] hover:bg-[#093257]/10"
              onClick={() => handleNavigate("/catalog")}
            >
              <Package className="w-4 h-4" />
              Product Catalog
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 text-[#093257] border-[#093257] hover:bg-[#093257]/10"
              onClick={() => handleNavigate("/faqs")}
            >
              <HelpCircle className="w-4 h-4" />
              FAQs
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
