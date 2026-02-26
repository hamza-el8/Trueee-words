import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Props {
  form: any;
  updateForm: (key: string, value: string) => void;
}

const OccasionStep: React.FC<Props> = ({ form, updateForm }) => {
  const occasions = [
    { value: "love", label: "Love / Romance" },
    { value: "apology", label: "Apology" },
    { value: "breakup", label: "Breakup" },
    { value: "confession", label: "Confession" },
    { value: "gratitude", label: "Gratitude / Thanks" },
    { value: "event", label: "Special event" },
    { value: "birthday", label: "Birthday" },
    { value: "valentines", label: "Valentine's Day" },
    { value: "proposal", label: "Proposal" },
  ];


  // Letter type options
  const letterTypes = [
    { value: "love", label: "Love Letter" },
    { value: "apology", label: "Apology Letter" },
    { value: "breakup", label: "Breakup Letter" },
    { value: "confession", label: "Confession Letter" },
  ];

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">The occasion & memories</h2>
      </div>

      {/* Letter Type Selection */}
      <div>
        <Label className="font-body text-sm font-semibold mb-3 block">Letter type *</Label>
        <RadioGroup value={form.letterType} onValueChange={(v) => updateForm("letterType", v)} className="flex flex-wrap gap-3">
          {letterTypes.map((t) => (
            <Label
              key={t.value}
              className={`px-4 py-2 rounded-lg border-2 cursor-pointer transition-all text-sm ${
                form.letterType === t.value ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <RadioGroupItem value={t.value} className="sr-only" />
              <span className="font-body">{t.label}</span>
            </Label>
          ))}
        </RadioGroup>
      </div>

      {/* Occasion Selection */}
      <div>
        <Label className="font-body text-sm font-semibold mb-3 block">Occasion *</Label>
        <RadioGroup value={form.occasion} onValueChange={(v) => updateForm("occasion", v)} className="flex flex-wrap gap-3">
          {occasions.map((o) => (
            <Label
              key={o.value}
              className={`px-4 py-2 rounded-lg border-2 cursor-pointer transition-all text-sm ${
                form.occasion === o.value ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <RadioGroupItem value={o.value} className="sr-only" />
              <span className="font-body">{o.label}</span>
            </Label>
          ))}
        </RadioGroup>
      </div>

      <div>
        <Label className="font-body text-sm font-semibold mb-2 block">What makes this person special? *</Label>
        <Textarea
          placeholder="She always makes me smile, supports me in tough times..."
          value={form.specialQualities}
          onChange={(e) => updateForm("specialQualities", e.target.value)}
          className="rounded-lg min-h-[100px]"
        />
      </div>

      <div>
        <Label className="font-body text-sm font-semibold mb-2 block">Favorite memories (optional)</Label>
        <Textarea
          placeholder="Our trip to Paris, that crazy laugh in the park..."
          value={form.memories}
          onChange={(e) => updateForm("memories", e.target.value)}
          className="rounded-lg min-h-[80px]"
        />
      </div>
    </div>
  );
};

export default OccasionStep;
