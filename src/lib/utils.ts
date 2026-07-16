import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const WHATSAPP_NUMBER = "91XXXXXXXXXX";

export function buildWhatsAppUrl(data: {
  name: string;
  phone: string;
  pack: string;
  location?: string;
  message?: string;
}) {
  const packLabels: Record<string, string> = {
    "5kg": "5 KG — Trial",
    "10kg": "10 KG — Regular",
    "30-40kg": "30–40 KG — Bulk",
    "fpo-bulk": "FPO / Co-op bulk",
    "not-sure": "Not sure yet",
  };

  const lines = [
    "Namaste, I'd like to enquire about NutriBrix.",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Pack interest: ${packLabels[data.pack] || data.pack}`,
  ];
  if (data.location) lines.push(`District/State: ${data.location}`);
  if (data.message) lines.push(`Message: ${data.message}`);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
