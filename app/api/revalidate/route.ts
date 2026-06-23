import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

/**
 * On-demand ISR revalidation endpoint.
 *
 * Wire up in Sanity:
 *   sanity.io/manage → Project → API → Webhooks → Add Webhook
 *   URL: https://your-domain.vercel.app/api/revalidate
 *   Trigger: Create, Update, Delete
 *   HTTP Header: Authorization: Bearer <SANITY_REVALIDATION_SECRET>
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATION_SECRET
  const auth = req.headers.get('authorization')

  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
  }

  try {
    revalidatePath('/')
    revalidatePath('/events')
    revalidatePath('/programs')
    revalidatePath('/facilities')
    revalidatePath('/about')

    return NextResponse.json({ revalidated: true, timestamp: Date.now() })
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating', error: String(err) },
      { status: 500 }
    )
  }
}
