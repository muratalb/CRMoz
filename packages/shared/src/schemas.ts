import { z } from "zod";

export const leadSchema = z.object({
  companyName: z.string().min(2),
  contactName: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  city: z.string().optional(),
  country: z.string().default("Türkiye"),
  source: z.enum(["Instagram", "Facebook", "LinkedIn", "Web", "Fuar", "Referans"]),
  status: z.enum(["Yeni", "Temas Edildi", "Nitelikli", "Elendi"]),
  segment: z.enum(["Konut", "Ticari", "EPC", "Bayi"]),
  interest: z.enum(["Panel", "EPC", "Depolama", "EV Şarj"])
});

export const opportunitySchema = z.object({
  title: z.string().min(2),
  expectedPanelsQty: z.number().min(0),
  panelModel: z.string().optional(),
  panelWattage: z.number().min(0),
  targetPricePerWatt: z.number().min(0),
  expectedCloseDate: z.string(),
  probability: z.number().min(10).max(100)
});
