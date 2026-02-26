import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Props {
  form: any;
  updateForm: (key: string, value: string) => void;
}

const MessageToneStep: React.FC<Props> = ({ form, updateForm }) => {
  const tones = [
    { value: "passionate", label: "Passionate / Romantic" },
    { value: "gentle", label: "Gentle / Sincere" },
    { value: "humorous", label: "Humorous / Light" },
    { value: "formal", label: "Formal / Respectful" },
    { value: "emotional", label: "Deeply Emotional" },
    { value: "shortandcute", label: "Short & Sweet" },
    { value: "poetic", label: "Deep & Poetic" },
  ];

  const lengths = [
    { value: "short", label: "Short (1 paragraph)", desc: "1 paragraph" },
    { value: "medium", label: "Medium (2–3 paragraphs)", desc: "2-3 paragraphs" },
    { value: "long", label: "Long (3–5 paragraphs)", desc: "3-5 paragraphs" },
  ];

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Your message & tone</h2>
      </div>

      <div>
        <Label className="font-body text-sm font-semibold mb-2 block">Heartfelt message *</Label>
        <Textarea
          placeholder="I want him/her to know how much they mean to me..."
          value={form.heartMessage}
          onChange={(e) => updateForm("heartMessage", e.target.value)}
          className="rounded-lg min-h-[100px]"
        />
      </div>

      <div>
        <Label className="font-body text-sm font-semibold mb-2 block">Additional details (optional)</Label>
        <Textarea
          placeholder="Anecdotes, inside jokes, wishes for the future..."
          value={form.additionalDetails}
          onChange={(e) => updateForm("additionalDetails", e.target.value)}
          className="rounded-lg min-h-[80px]"
        />
      </div>

      <div>
        <Label className="font-body text-sm font-semibold mb-3 block">Desired tone *</Label>
        <RadioGroup value={form.tone} onValueChange={(v) => updateForm("tone", v)} className="flex flex-wrap gap-3">
          {tones.map((t) => (
            <Label
              key={t.value}
              className={`px-4 py-2 rounded-lg border-2 cursor-pointer transition-all text-sm ${
                form.tone === t.value ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <RadioGroupItem value={t.value} className="sr-only" />
              <span className="font-body">{t.label}</span>
            </Label>
          ))}
        </RadioGroup>
      </div>

      <div>
        <Label className="font-body text-sm font-semibold mb-3 block">Length *</Label>
        <RadioGroup value={form.length} onValueChange={(v) => updateForm("length", v)} className="flex gap-3">
          {lengths.map((l) => (
            <Label
              key={l.value}
              className={`px-4 py-2 rounded-lg border-2 cursor-pointer transition-all text-sm ${
                form.length === l.value ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <RadioGroupItem value={l.value} className="sr-only" />
              <div className="font-body text-sm">{l.label}</div>
            </Label>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default MessageToneStep;
