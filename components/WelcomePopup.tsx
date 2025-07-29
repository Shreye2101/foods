import { useEffect, useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function WelcomePopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
    }, 2000) // show after 2s

    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-sm">
        <h2 className="text-lg font-bold mb-2">👋 Welcome to EverTruth Foods</h2>
        <p className="text-sm text-gray-600 mb-4">
          Need bulk pricing, product samples, or a quick quote? I'm here to help!
        </p>
        <button
          onClick={() => {
            setOpen(false)
            // Trigger quote modal or redirect
          }}
          className="bg-[#093257] text-white py-2 px-4 rounded-md w-full"
        >
          Request a Quote
        </button>
      </DialogContent>
    </Dialog>
  )
}
