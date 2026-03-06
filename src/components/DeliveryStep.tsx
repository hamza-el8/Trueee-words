import React, { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Props {
  form: any;
  updateForm: (key: string, value: string) => void;
}

const DeliveryStep: React.FC<Props> = ({ form, updateForm }) => {
  // Set default delivery speed if not set
  useEffect(() => {
    if (!form.deliverySpeed) {
      updateForm("deliverySpeed", "standard");
    }
  }, []);

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

          <RadioGroup
            value={form.deliverySpeed === "standard" ? "" : form.deliverySpeed}
            onValueChange={(v) => updateForm("deliverySpeed", v)}
            className="space-y-4 flex flex-col justify-between"
          >
            <Label
              className={`p-6 rounded-xl border-2 ${form.deliverySpeed === "instant" ? "border-gold bg-gold/5" : "border-border bg-card hover:bg-muted/50 transition-colors"
                } cursor-pointer relative flex flex-col justify-center flex-1 h-[calc(50%-0.5rem)] min-h-[102px]`}
            >
              <RadioGroupItem value="instant" className="sr-only" />
              <div className="absolute -top-3 right-6 bg-[#eba354] text-white px-3 py-0.5 rounded-full text-xs font-medium">Popular</div>
              <div className="flex justify-between items-start mb-1.5">
                <div className="text-[17px] font-display text-foreground leading-tight">Instant Legacy in 3H</div>
                <div className="text-[16px] text-[#eba354] font-semibold whitespace-nowrap ml-4">+ 14,90 $</div>
              </div>
              <div className="text-[13px] text-muted-foreground">
                When emotion can't wait. Priority crafting and delivry
              </div>
            </Label>

            <Label
              className={`p-6 rounded-xl border-2 ${form.deliverySpeed === "scheduled" ? "border-gold bg-gold/5" : "border-border bg-card hover:bg-muted/50 transition-colors"
                } cursor-pointer flex flex-col justify-center flex-1 h-[calc(50%-0.5rem)] min-h-[102px]`}
            >
              <RadioGroupItem value="scheduled" className="sr-only" />
              <div className="flex justify-between items-start mb-1.5">
                <div className="text-[17px] font-display text-foreground leading-tight">Scheduled Impact</div>
                <div className="text-[16px] text-[#eba354] font-semibold whitespace-nowrap ml-4">+ 9,90 $</div>
              </div>
              <div className="text-[13px] text-muted-foreground">
                Precise timing for a moment they will never forget
              </div>
            </Label>
          </RadioGroup>
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

        {((form.deliveryFormat === "email" || form.deliveryFormat === "pdf") || form.deliverySpeed === "scheduled") && (
          <div className="mt-8 animate-fade-in bg-secondary/20 p-6 rounded-xl border border-border">
            <Label className="font-body text-[15px] font-semibold mb-2 block text-foreground">
              Delivery Details *
            </Label>
            <p className="text-[13px] text-muted-foreground mb-4">
              Please provide the recipient's email as well as the delivery date and time.
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[13px] text-muted-foreground">Delivery Date *</Label>
                  <Input
                    type="date"
                    value={form.deliveryDate || ""}
                    min={(() => {
                      const hours = form.deliverySpeed === "instant" ? 3 : 12;
                      const offsetDate = new Date(Date.now() + hours * 60 * 60 * 1000);
                      const userTimeOffset = offsetDate.getTimezoneOffset() * 60000;
                      return new Date(offsetDate.getTime() - userTimeOffset).toISOString().split('T')[0];
                    })()}
                    onChange={(e) => updateForm("deliveryDate", e.target.value)}
                    className="rounded-lg h-12 bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[13px] text-muted-foreground">Delivery Time *</Label>
                  <Input
                    type="time"
                    value={form.deliveryTime || ""}
                    min={(() => {
                      const hours = form.deliverySpeed === "instant" ? 3 : 12;
                      const offsetDate = new Date(Date.now() + hours * 60 * 60 * 1000);
                      const userTimeOffset = offsetDate.getTimezoneOffset() * 60000;
                      const minDateString = new Date(offsetDate.getTime() - userTimeOffset).toISOString().split('T')[0];
                      if (form.deliveryDate === minDateString) {
                        const h = offsetDate.getHours().toString().padStart(2, '0');
                        const m = offsetDate.getMinutes().toString().padStart(2, '0');
                        return `${h}:${m}`;
                      }
                      return undefined;
                    })()}
                    onChange={(e) => updateForm("deliveryTime", e.target.value)}
                    className="rounded-lg h-12 bg-background"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div >
  );
};

export default DeliveryStep;
