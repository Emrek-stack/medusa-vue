export type TenantStatus = "active" | "invited" | "suspended" | "archived"
export type TenantPlan = "starter" | "growth" | "enterprise"

export type TenantRecord = {
  id: string
  name: string
  slug: string
  domain: string
  plan: TenantPlan
  region: "eu" | "us" | "me"
  users: number
  mrr: number
  status: TenantStatus
  created_at: string
  owner_email: string
}

export const tenantSeed: TenantRecord[] = [
  {
    id: "tenant_01",
    name: "Northwind Labs",
    slug: "northwind-labs",
    domain: "northwind.example.com",
    plan: "enterprise",
    region: "eu",
    users: 48,
    mrr: 1290,
    status: "active",
    created_at: "2026-01-03",
    owner_email: "ops@northwind.example.com",
  },
  {
    id: "tenant_02",
    name: "Bluebird Retail",
    slug: "bluebird-retail",
    domain: "bluebird.example.com",
    plan: "growth",
    region: "us",
    users: 23,
    mrr: 690,
    status: "active",
    created_at: "2026-01-18",
    owner_email: "admin@bluebird.example.com",
  },
  {
    id: "tenant_03",
    name: "Atlas Commerce",
    slug: "atlas-commerce",
    domain: "atlas.example.com",
    plan: "starter",
    region: "me",
    users: 9,
    mrr: 190,
    status: "invited",
    created_at: "2026-02-02",
    owner_email: "owner@atlas.example.com",
  },
  {
    id: "tenant_04",
    name: "Riverstone",
    slug: "riverstone",
    domain: "riverstone.example.com",
    plan: "growth",
    region: "eu",
    users: 15,
    mrr: 490,
    status: "suspended",
    created_at: "2026-02-11",
    owner_email: "hello@riverstone.example.com",
  },
  {
    id: "tenant_05",
    name: "Helios Market",
    slug: "helios-market",
    domain: "helios.example.com",
    plan: "starter",
    region: "us",
    users: 6,
    mrr: 149,
    status: "archived",
    created_at: "2026-02-26",
    owner_email: "support@helios.example.com",
  },
]
