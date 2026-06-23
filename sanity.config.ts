/**
 * CANNING & DISTRICT RECREATIONAL COMMISSION — Sanity Studio Config
 *
 * Editorial Workflow (how a content update works):
 * ─────────────────────────────────────────────────
 * 1. Staff member navigates to /studio on the live site and logs in.
 * 2. They pick the relevant section from the left sidebar (e.g. "📅 Events").
 * 3. They create or edit a document — all fields are labeled in plain English.
 * 4. They click "Publish" in the top-right corner of the editor.
 * 5. Sanity fires a webhook → Vercel receives it → on-demand revalidation runs.
 * 6. The live website updates within seconds. No developer, no deployment needed.
 *
 * Setting up the Vercel revalidation webhook in Sanity:
 * ──────────────────────────────────────────────────────
 * 1. Go to https://www.sanity.io/manage → your project → API → Webhooks.
 * 2. Click "Add Webhook".
 * 3. Name: "Vercel Revalidation"
 * 4. URL: https://your-vercel-domain.vercel.app/api/revalidate
 * 5. Trigger on: Create, Update, Delete
 * 6. HTTP Headers — add: Authorization: Bearer <SANITY_REVALIDATION_SECRET>
 *    (use the same secret set in your Vercel environment variables)
 * 7. Save. Every publish will now trigger instant site updates.
 */

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import {
  eventSchema,
  programSchema,
  announcementSchema,
  facilitySchema,
  commissionMemberSchema,
  siteSettingsSchema,
} from './sanity/schemas'

export default defineConfig({
  name: 'canning-recreation',
  title: 'Canning Recreation',
  basePath: '/studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  schema: {
    types: [
      eventSchema,
      programSchema,
      announcementSchema,
      facilitySchema,
      commissionMemberSchema,
      siteSettingsSchema,
    ],
  },

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Canning Recreation')
          .items([
            S.listItem()
              .title('📣 Announcements')
              .schemaType('announcement')
              .child(S.documentTypeList('announcement').title('Announcements')),

            S.listItem()
              .title('📅 Events')
              .schemaType('event')
              .child(S.documentTypeList('event').title('Events')),

            S.listItem()
              .title('🏃 Programs')
              .schemaType('program')
              .child(S.documentTypeList('program').title('Programs')),

            S.listItem()
              .title('🏒 Facilities')
              .schemaType('facility')
              .child(S.documentTypeList('facility').title('Facilities')),

            S.listItem()
              .title('👥 Commission Members')
              .schemaType('commissionMember')
              .child(S.documentTypeList('commissionMember').title('Commission Members')),

            S.divider(),

            // Singleton: Site Settings
            S.listItem()
              .title('⚙️  Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
          ]),
    }),
  ],
})
