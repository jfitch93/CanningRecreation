import { groq } from 'next-sanity'
import { client } from './client'

const revalidate = 60

// ─── Site Settings ────────────────────────────────────────────────────────────
const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  orgName, tagline, address, phone, email, facebookUrl, foundingYear, logo
}`

export async function getSiteSettings() {
  return client.fetch(siteSettingsQuery, {}, { next: { revalidate } })
}

// ─── Announcements ────────────────────────────────────────────────────────────
const announcementsQuery = groq`*[_type == "announcement" && isActive == true]{
  _id, text, colour
}`

export async function getAnnouncements() {
  return client.fetch(announcementsQuery, {}, { next: { revalidate } })
}

// ─── Events ───────────────────────────────────────────────────────────────────
const eventsQuery = groq`*[_type == "event"] | order(date asc){
  _id, title, slug, date, time, location, photo, isFeatured
}`

export async function getEvents() {
  return client.fetch(eventsQuery, {}, { next: { revalidate } })
}

const upcomingEventsQuery = groq`*[_type == "event" && date >= $today] | order(date asc)[0...5]{
  _id, title, slug, date, time, location, photo
}`

export async function getUpcomingEvents() {
  const today = new Date().toISOString().split('T')[0]
  return client.fetch(upcomingEventsQuery, { today }, { next: { revalidate } })
}

// ─── Programs ─────────────────────────────────────────────────────────────────
const programsQuery = groq`*[_type == "program" && isActive == true] | order(_createdAt asc){
  _id, title, slug, category, photo, description, ageRange, schedule, registrationUrl
}`

export async function getPrograms() {
  return client.fetch(programsQuery, {}, { next: { revalidate } })
}

// ─── Facilities ───────────────────────────────────────────────────────────────
const facilitiesQuery = groq`*[_type == "facility"] | order(_createdAt asc){
  _id, name, slug, description, photos, bookingInfo, isComingSoon
}`

export async function getFacilities() {
  return client.fetch(facilitiesQuery, {}, { next: { revalidate } })
}

// ─── Commission Members ───────────────────────────────────────────────────────
const membersQuery = groq`*[_type == "commissionMember"] | order(order asc){
  _id, name, role, photo
}`

export async function getCommissionMembers() {
  return client.fetch(membersQuery, {}, { next: { revalidate } })
}
