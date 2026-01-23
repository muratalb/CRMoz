export type UserRole = "YONETICI" | "SATIS" | "TEKNIK_OFIS" | "PARTNER";

export const roleLabels: Record<UserRole, string> = {
  YONETICI: "Yönetici",
  SATIS: "Satış",
  TEKNIK_OFIS: "Teknik Ofis",
  PARTNER: "Partner"
};
