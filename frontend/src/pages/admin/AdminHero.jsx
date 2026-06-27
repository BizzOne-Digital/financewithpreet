import { useState, useEffect, useRef } from 'react'
import AdminLayout from '../../components/common/AdminLayout'
import API from '../../utils/api'
import toast from 'react-hot-toast'

const UploadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
  </svg>
)

export default function AdminHero() {
  const [form, setForm] = useState({
    headline: '',
    subheadline: '',
    video: '',
    fallbackImage: '',
    ctaPrimary: 'Book Free Consultation',
    ctaSecondary: 'Explore Services',
  })
  const [uploading, setUploading] = useState(false)
  const [uploadingImg, setUploadingImg] = useState(false)
  const videoRef = useRef()
  const imgRef = useRef()

  useEffect(() => {
    API.get('/hero').then(r => {
      if (r.data) setForm(f => ({ ...f, ...r.data }))
    }).catch(() => {})
  }, [])

  const handleVideoUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    const fd = new FormData()
    fd.append('image', file) // cloudinary accepts video too
    try {
      const { data } = await API.post('/upload', fd)
      setForm(f => ({ ...f, video: data.url }))
      toast.success('Video uploaded!')
    } catch { toast.error('Upload failed') }
    finally { setUploading(false) }
  }

  const handleImgUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setUploadingImg(true)
    const fd = new FormData()
    fd.append('image', file)
    try {
      const { data } = await API.post('/upload', fd)
      setForm(f => ({ ...f, fallbackImage: data.url }))
      toast.success('Fallback image uploaded!')
    } catch { toast.error('Upload failed') }
    finally { setUploadingImg(false) }
  }

  const handleSave = async (e) => {
    e.preventDefault()
    try {
      await API.post('/hero', form)
      toast.success('Hero section saved!')
    } catch { toast.error('Error saving.') }
  }

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-primary-800">Hero Section</h1>
        <p className="text-gray-500 mt-1">Manage the homepage hero banner — supports video or image background</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
        <form onSubmit={handleSave} className="space-y-6">

          {/* Headline */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Main Headline</label>
            <input value={form.headline} onChange={e => setForm({ ...form, headline: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Your Family's Financial Future Starts Here" />
          </div>

          {/* Subheadline */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sub Headline</label>
            <textarea value={form.subheadline} onChange={e => setForm({ ...form, subheadline: e.target.value })} rows={3}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>

          {/* CTA Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Primary Button Text</label>
              <input value={form.ctaPrimary} onChange={e => setForm({ ...form, ctaPrimary: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Button Text</label>
              <input value={form.ctaSecondary} onChange={e => setForm({ ...form, ctaSecondary: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
          </div>

          {/* ── Video Upload ── */}
          <div className="p-5 border-2 border-dashed border-primary-200 rounded-2xl bg-primary-50/30">
            <label className="block text-sm font-semibold text-primary-700 mb-1">
              Hero Background Video (.mp4 recommended)
            </label>
            <p className="text-xs text-gray-400 mb-3">This will auto-play silently in the background. Keep under 20MB for fast loading.</p>
            <div className="flex gap-3 items-center">
              <input value={form.video} onChange={e => setForm({ ...form, video: e.target.value })}
                className="flex-1 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                placeholder="Video URL or upload below (e.g. /hero.mp4 or Cloudinary URL)" />
              <input ref={videoRef} type="file" accept="video/*" onChange={handleVideoUpload} className="hidden" />
              <button type="button" onClick={() => videoRef.current.click()} disabled={uploading}
                className="flex items-center gap-2 px-4 py-3 bg-primary-700 hover:bg-primary-800 text-white rounded-xl text-sm font-medium transition-colors disabled:opacity-60 whitespace-nowrap">
                <UploadIcon /> {uploading ? 'Uploading...' : 'Upload Video'}
              </button>
            </div>
            {form.video && (
              <div className="mt-3">
                <video src={form.video} className="w-full h-40 object-cover rounded-xl" muted controls />
              </div>
            )}
          </div>

          {/* ── Fallback Image ── */}
          <div className="p-5 border-2 border-dashed border-gold-200 rounded-2xl bg-gold-50/30">
            <label className="block text-sm font-semibold text-gold-600 mb-1">
              Fallback Image (shown while video loads or on mobile)
            </label>
            <p className="text-xs text-gray-400 mb-3">Used when video is loading or browser blocks autoplay.</p>
            <div className="flex gap-3 items-center">
              <input value={form.fallbackImage} onChange={e => setForm({ ...form, fallbackImage: e.target.value })}
                className="flex-1 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                placeholder="Fallback image URL or upload" />
              <input ref={imgRef} type="file" accept="image/*" onChange={handleImgUpload} className="hidden" />
              <button type="button" onClick={() => imgRef.current.click()} disabled={uploadingImg}
                className="flex items-center gap-2 px-4 py-3 border border-gold-400 text-gold-600 hover:bg-gold-50 rounded-xl text-sm font-medium transition-colors disabled:opacity-60 whitespace-nowrap">
                <UploadIcon /> {uploadingImg ? 'Uploading...' : 'Upload Image'}
              </button>
            </div>
            {form.fallbackImage && (
              <img src={form.fallbackImage} alt="Fallback" className="mt-3 w-full h-36 object-cover rounded-xl" />
            )}
          </div>

          {/* Info box */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-700">
            <p className="font-semibold mb-1">How it works:</p>
            <ul className="space-y-1 text-blue-600 list-disc list-inside">
              <li>Upload your <strong>hero.mp4</strong> video — it will auto-play, loop silently in the background</li>
              <li>Visitors can unmute using the button at the bottom-right of the hero</li>
              <li>The fallback image shows while the video loads</li>
              <li>If no video is set, only the fallback image is displayed</li>
            </ul>
          </div>

          <button type="submit" className="btn-primary px-10 py-3 text-base">
            Save Hero Section
          </button>
        </form>
      </div>
    </AdminLayout>
  )
}