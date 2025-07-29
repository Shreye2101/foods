"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Package, DollarSign, HelpCircle, Sparkles, Send } from "lucide-react"

export function PopupGuide() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("seen-welcome-popup")
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setOpen(true)
        sessionStorage.setItem("seen-welcome-popup", "true")
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleNavigate = (path: string) => {
    router.push(path)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md w-full text-center py-6 px-4 bg-white border border-gray-200 rounded-lg shadow-2xl">
        <div className="text-2xl font-bold text-[#093257] mb-2 flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6 animate-bounce" />
          Welcome to EverTruth Foods!
        </div>
        <p className="text-sm text-gray-600 mb-5">
          🚀 Let’s get you moving fast. Need products, pricing, or a quick quote? I’ve got you covered!
        </p>

        <div className="flex flex-col gap-3">
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 text-[#093257] border-[#093257] hover:bg-[#093257]/10"
            onClick={() => handleNavigate("/catalog")}
          >
            <Package className="w-4 h-4" />
            Explore Product Catalog
          </Button>

          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 text-[#093257] border-[#093257] hover:bg-[#093257]/10"
            onClick={() => handleNavigate("/pricing")}
          >
            <DollarSign className="w-4 h-4" />
            View Pricing / Bulk Inquiry
          </Button>

          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 text-[#093257] border-[#093257] hover:bg-[#093257]/10"
            onClick={() => handleNavigate("/faqs")}
          >
            <HelpCircle className="w-4 h-4" />
            Browse FAQs
          </Button>

          <Button
            className="bg-[#093257] hover:bg-[#0a4a73] text-white font-semibold py-2"
            onClick={() => handleNavigate("/pricing")}
          >
            <Send className="w-4 h-4 mr-1" />
            Request a Quote
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
