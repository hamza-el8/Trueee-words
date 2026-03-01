import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Props {
  form: any;
  updateForm: (key: string, value: string) => void;
}

const RecipientStep: React.FC<Props> = ({ form, updateForm }) => {
  return (
    <div className="space-y-6 animate-fade-up">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
          Who will receive this <span className="italic text-burgundy-light">letter</span>?
        </h2>
      </div>

      <div>
        <Label className="font-body text-sm font-semibold mb-2 block">Recipient's first name *</Label>
        <Input
          placeholder="Sarah, Alex, Mom..."
          value={form.recipientName}
          onChange={(e) => updateForm("recipientName", e.target.value)}
          className="rounded-lg h-12"
        />
      </div>

      <div>
        <Label className="font-body text-sm font-semibold mb-2 block">Affectionate nickname (optional)</Label>
        <Input
          placeholder="My love, Baby, Mimi..."
          value={form.recipientNickname}
          onChange={(e) => updateForm("recipientNickname", e.target.value)}
          className="rounded-lg h-12"
        />
      </div>

      <div>
        <Label className="font-body text-sm font-semibold mb-3 block">Recipient's gender *</Label>
        <Select value={form.recipientGender} onValueChange={(v) => updateForm("recipientGender", v)}>
          <SelectTrigger className="w-full h-12 rounded-lg bg-background border-border">
            <SelectValue placeholder="Select gender" className="font-body text-muted-foreground" />
          </SelectTrigger>
          <SelectContent className="bg-background border-border">
            <SelectItem value="male" className="font-body cursor-pointer">Male</SelectItem>
            <SelectItem value="female" className="font-body cursor-pointer">Female</SelectItem>
            <SelectItem value="other" className="font-body cursor-pointer">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="font-body text-sm font-semibold mb-3 block">Your relationship *</Label>
        <RadioGroup value={form.relationship} onValueChange={(v) => updateForm("relationship", v)} className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { value: "partner", label: "Partner / Soulmate" },
            { value: "friend", label: "Close friend" },
            { value: "family", label: "Family" },
            { value: "colleague", label: "Colleague / Boss" },
            { value: "other", label: "Other" },
          ].map((rel) => (
            <Label
              key={rel.value}
              className={`flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all text-center text-xs md:text-sm ${form.relationship === rel.value ? "border-primary bg-primary/5" : "border-border"
                }`}
            >
              <RadioGroupItem value={rel.value} className="sr-only" />
              <span className="font-body">{rel.label}</span>
            </Label>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default RecipientStep;
