import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Props {
  form: any;
  updateForm: (key: string, value: string) => void;
}

const DeliveryStep: React.FC<Props> = ({ form, updateForm }) => {
  const formats = [
    { value: "pdf", label: "Elegant PDF", price: "", desc: "Instant download" },
    { value: "email", label: "Decorated Email", desc: "Sent directly to the recipient" },
    { value: "paper", label: "Sealed Paper & Envelope", price: "+29.90$", desc: "Printed on premium paper" },
    { value: "frame", label: "Premium Framed Delivery", price: "+59.90$", desc: "Framed letter, delivered to your home" },
  ];

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Plan & Delivery</h2>
      </div>

      <div>
        <RadioGroup value={form.plan} onValueChange={(v) => updateForm("plan", v)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Label
              className={`p-6 rounded-xl border-2 ${form.plan === "standard" ? "border-gold bg-gold/5" : "border-border"} cursor-pointer`}
            >
              <RadioGroupItem value="standard" className="sr-only" />
              <div className="text-xs text-muted-foreground">STANDARD</div>
              <div className="font-display text-3xl font-bold text-foreground mt-2">39$</div>
              <ul className="mt-3 text-sm text-muted-foreground space-y-1">
                <li>Written by an expert</li>
                <li>Delivery in 12H</li>
                <li>Elegant PDF format</li>
              </ul>
            </Label>

            <Label
              className={`p-6 rounded-xl border-2 ${form.plan === "premium" ? "border-gold bg-gold/5" : "border-border"} cursor-pointer relative`}
            >
              <RadioGroupItem value="premium" className="sr-only" />
              <div className="absolute -top-3 right-4 bg-gold text-accent-foreground px-3 py-0.5 rounded-full text-xs font-body font-semibold">Popular</div>
              <div className="text-xs text-muted-foreground">PREMIUM</div>
              <div className="font-display text-3xl font-bold text-foreground mt-2">59$</div>
              <ul className="mt-3 text-sm text-muted-foreground space-y-1">
                <li>Senior expert, PhD in literature</li>
                <li>Express delivery in 6H</li>
                <li>Premium PDF with luxury layout</li>
                <li>1 free revision</li>
              </ul>
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <div className="text-sm font-medium text-muted-foreground mb-2">Delivery speed</div>
        <RadioGroup value={form.deliverySpeed} onValueChange={(v) => updateForm("deliverySpeed", v)} className="flex gap-4">
          <Label className={`px-4 py-3 rounded-lg border-2 ${form.deliverySpeed === "standard" ? "border-primary bg-primary/5" : "border-border"} cursor-pointer`}>
            <RadioGroupItem value="standard" className="sr-only" />
            <div className="font-body">Standard</div>
            <div className="text-xs text-muted-foreground">6–12H depending on plan · Included</div>
          </Label>

          <Label className={`px-4 py-3 rounded-lg border-2 ${form.deliverySpeed === "priority" ? "border-primary bg-primary/5" : "border-border"} cursor-pointer`}>
            <RadioGroupItem value="priority" className="sr-only" />
            <div className="font-body">Priority — 4H</div>
            <div className="text-xs text-muted-foreground">Ultra-fast delivery · +19.90$</div>
          </Label>
        </RadioGroup>
      </div>

      <div>
        <div className="text-sm font-medium text-muted-foreground mb-3">Delivery format</div>
        <RadioGroup value={form.deliveryFormat} onValueChange={(v) => updateForm("deliveryFormat", v)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formats.map((f) => (
              <Label key={f.value} className={`p-4 rounded-lg border-2 ${form.deliveryFormat === f.value ? "border-primary bg-primary/5" : "border-border"} cursor-pointer`}>
                <RadioGroupItem value={f.value} className="sr-only" />
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-display font-semibold text-foreground">{f.label}</div>
                    <div className="text-xs text-muted-foreground mt-2">{f.desc}</div>
                  </div>
                  {f.price && <div className="text-sm font-semibold text-gold">{f.price}</div>}
                </div>
              </Label>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default DeliveryStep;
