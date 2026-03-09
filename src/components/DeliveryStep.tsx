import React, { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Props {
  form: any;
  updateForm: (key: string, value: any) => void;
}

const DeliveryStep: React.FC<Props> = ({ form, updateForm }) => {

  const getMinDateTime = () => {
    // 1. Définition du délai selon l'offre choisie
    const hoursToAdd = form.isInstant ? 3 : 12;

    // 2. Calcul du moment limite
    const now = new Date();
    const limit = new Date(now.getTime() + hoursToAdd * 60 * 60 * 1000);

    // 3. Extraction sécurisée de la date (Format YYYY-MM-DD)
    // On utilise le temps local pour éviter le bug du décalage d'un jour à minuit
    const year = limit.getFullYear();
    const month = String(limit.getMonth() + 1).padStart(2, '0');
    const day = String(limit.getDate()).padStart(2, '0');
    const minDateString = `${year}-${month}-${day}`;

    // 4. Extraction de l'heure (Format HH:mm)
    const h = String(limit.getHours()).padStart(2, '0');
    const m = String(limit.getMinutes()).padStart(2, '0');

    return { minDateString, minTimeString: `${h}:${m}` };
  };

  const handleDateChange = (val: string) => {
    const { minDateString, minTimeString } = getMinDateTime();

    if (val && val < minDateString) {
      val = minDateString;
    }
    updateForm("deliveryDate", val);

    if (val === minDateString && form.deliveryTime && form.deliveryTime < minTimeString) {
      updateForm("deliveryTime", minTimeString);
    }
  };

  const handleTimeChange = (val: string) => {
    const { minDateString, minTimeString } = getMinDateTime();
    let currentDate = form.deliveryDate;

    if (!currentDate) {
      currentDate = minDateString;
      updateForm("deliveryDate", minDateString);
    }

    if (currentDate === minDateString && val && val < minTimeString) {
      val = minTimeString;
    } else if (currentDate && currentDate < minDateString) {
      updateForm("deliveryDate", minDateString);
      if (val && val < minTimeString) {
        val = minTimeString;
      }
    }

    updateForm("deliveryTime", val);
  };

  const isDateTimeValid = () => {
    if (!form.deliveryDate || !form.deliveryTime) return true;
    const hoursToAdd = form.isInstant ? 3 : 12;
    const limitDate = new Date(new Date().getTime() + hoursToAdd * 60 * 60 * 1000);
    const selectedDate = new Date(`${form.deliveryDate}T${form.deliveryTime}`);
    return selectedDate >= limitDate;
  };

  const formats = [
    { value: "pdf", label: "Elegant PDF", price: "", desc: "Instant download" },
    { value: "email", label: "Decorated Email", price: "", desc: "Sent directly to the recipient" },
    { value: "paper", label: "Sealed Paper & Envelope", price: "+29.90$", desc: "Printed on premium paper" },
    { value: "frame", label: "Premium Framed Delivery", price: "+59.90$", desc: "Framed letter, delivered to your home" },
  ];

  return (
    <div className="space-y-8 animate-fade-up">
      <div className="text-center mb-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Plan & Delivery</h2>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="p-8 rounded-xl border-2 border-gold bg-gold/5 flex flex-col justify-center min-h-[220px]"
          >
            <div className="text-sm text-muted-foreground uppercase font-semibold mb-1">STANDARD</div>
            <div className="font-display text-5xl font-bold text-foreground mb-6 flex items-baseline gap-1">
              39<span className="text-4xl text-foreground font-serif">$</span>
            </div>
            <ul className="text-[15px] font-medium text-muted-foreground space-y-2.5">
              <li>Written by an expert</li>
              <li>Delivery in 12H</li>
              <li>Elegant PDF format</li>
            </ul>
          </div>

          <div className="space-y-4 flex flex-col justify-between">
            <div
              className={`p-6 rounded-xl border-2 ${form.isInstant ? "border-gold bg-gold/5" : "border-border bg-card hover:bg-muted/50 transition-colors"
                } cursor-pointer relative flex flex-col justify-center flex-1 h-[calc(50%-0.5rem)] min-h-[102px]`}
              onClick={() => updateForm("isInstant", !form.isInstant)}
            >
              <div className="absolute -top-3 right-6 bg-[#eba354] text-white px-3 py-0.5 rounded-full text-xs font-medium">Popular</div>
              <div className="flex justify-between items-start mb-1.5">
                <div className="text-[17px] font-display text-foreground leading-tight">Instant Legacy in 3H</div>
                <div className="text-[16px] text-[#eba354] font-semibold whitespace-nowrap ml-4">+ 14,90 $</div>
              </div>
              <div className="text-[13px] text-muted-foreground">
                When emotion can't wait. Priority crafting and delivry
              </div>
            </div>

            <div
              className={`p-6 rounded-xl border-2 ${form.isScheduled ? "border-gold bg-gold/5" : "border-border bg-card hover:bg-muted/50 transition-colors"
                } cursor-pointer flex flex-col justify-center flex-1 h-[calc(50%-0.5rem)] min-h-[102px]`}
              onClick={() => updateForm("isScheduled", !form.isScheduled)}
            >
              <div className="flex justify-between items-start mb-1.5">
                <div className="text-[17px] font-display text-foreground leading-tight">Scheduled Impact</div>
                <div className="text-[16px] text-[#eba354] font-semibold whitespace-nowrap ml-4">+ 9,90 $</div>
              </div>
              <div className="text-[13px] text-muted-foreground">
                Precise timing for a moment they will never forget
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <div className="text-sm font-semibold text-muted-foreground mb-3 pl-1">Delivery format</div>
        <RadioGroup value={form.deliveryFormat} onValueChange={(v) => updateForm("deliveryFormat", v)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formats.map((f) => (
              <Label
                key={f.value}
                className={`p-5 rounded-xl border-2 ${form.deliveryFormat === f.value ? "border-gold bg-gold/5" : "border-border bg-card hover:bg-muted/50 transition-colors"
                  } cursor-pointer flex flex-col justify-center min-h-[96px]`}
              >
                <RadioGroupItem value={f.value} className="sr-only" />
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="font-display font-semibold text-foreground text-[16px] mb-1">{f.label}</div>
                    <div className="text-[13px] text-muted-foreground">{f.desc}</div>
                  </div>
                  {f.price && <div className="text-[15px] font-semibold text-[#eba354]">{f.price}</div>}
                </div>
              </Label>
            ))}
          </div>
        </RadioGroup>

        {((form.deliveryFormat === "email" || form.deliveryFormat === "pdf") || form.isScheduled || (!form.isInstant && !form.isScheduled)) && (
          <div className="mt-8 animate-fade-in bg-secondary/20 p-6 rounded-xl border border-border">
            <Label className="font-body text-[15px] font-semibold mb-2 block text-foreground">
              Delivery Details *
            </Label>
            <p className="text-[13px] text-muted-foreground mb-4">
              {form.isScheduled && (form.deliveryFormat === "email" || form.deliveryFormat === "pdf")
                ? "Please provide the recipient's email as well as the delivery date and time."
                : form.isScheduled
                  ? "Please provide the exact date and time for delivery."
                  : (!form.isInstant && !form.isScheduled)
                    ? "Please provide the delivery date, time, and recipient email for standard delivery."
                    : "Please provide the email of the person who will receive the letter."}
            </p>
            <div className="space-y-4">
              {(form.deliveryFormat === "email" || form.deliveryFormat === "pdf") && (
                <div className="space-y-2">
                  <Label className="text-[13px] text-muted-foreground">Recipient's Email *</Label>
                  <Input
                    type="email"
                    placeholder="Recipient's Email address"
                    value={form.recipientEmail || ""}
                    onChange={(e) => updateForm("recipientEmail", e.target.value)}
                    className="rounded-lg h-12 bg-background"
                  />
                </div>
              )}

              {(form.isScheduled || (!form.isInstant && !form.isScheduled)) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[13px] text-muted-foreground">Delivery Date *</Label>
                    <Input
                      type="date"
                      value={form.deliveryDate || ""}
                      min={getMinDateTime().minDateString}
                      onChange={(e) => handleDateChange(e.target.value)}
                      className="rounded-lg h-12 bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[13px] text-muted-foreground">Delivery Time *</Label>
                    <Input
                      type="time"
                      value={form.deliveryTime || ""}
                      min={(!form.deliveryDate || form.deliveryDate === getMinDateTime().minDateString) ? getMinDateTime().minTimeString : undefined}
                      onChange={(e) => handleTimeChange(e.target.value)}
                      onClick={(e) => {
                        // If no time is set and we're on the min date, we can proactively update to at least minTime when they click
                        const { minDateString, minTimeString } = getMinDateTime();
                        if (!form.deliveryTime && (!form.deliveryDate || form.deliveryDate === minDateString)) {
                          updateForm("deliveryTime", minTimeString);
                        }
                      }}
                      className="rounded-lg h-12 bg-background"
                    />
                    {!isDateTimeValid() ? (
                      <div className="text-xs text-red-500 mt-1 pl-1 font-medium">
                        Min allowed: {getMinDateTime().minDateString} at {getMinDateTime().minTimeString}
                      </div>
                    ) : (!form.deliveryDate || form.deliveryDate === getMinDateTime().minDateString) ? (
                      <div className="text-xs text-[#eba354] mt-1 pl-1 font-medium">
                        Min time allowed: {getMinDateTime().minTimeString}
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div >
  );
};

export default DeliveryStep;
