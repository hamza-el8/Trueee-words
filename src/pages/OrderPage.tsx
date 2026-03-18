import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, ArrowRight, Heart, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Checkbox } from "@/components/ui/checkbox";
import RecipientStep from "@/components/RecipientStep";
import OccasionStep from "@/components/OccasionStep";
import MessageToneStep from "@/components/MessageToneStep";
import DeliveryStep from "@/components/DeliveryStep";

const OrderPage = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 5;
  const [promoCodeInput, setPromoCodeInput] = useState("");
  const [discount, setDiscount] = useState(0);

  const steps = [
    { number: 1, label: "Recipient", desc: "Who will receive this letter?" },
    { number: 2, label: "Occasion", desc: "What is the occasion?" },
    { number: 3, label: "Message & Tone", desc: "The content and style" },
    { number: 4, label: "Delivery", desc: "Your option" },
    { number: 5, label: "Summary & Payment", desc: "Confirm your order" },
  ];

  const [form, setForm] = useState({
    letterType: "",
    recipientName: "",
    recipientNickname: "",
    recipientGender: "",
    relationship: "",
    occasion: "",
    specialQualities: "",
    memories: "",
    heartMessage: "",
    additionalDetails: "",
    tone: "",
    length: "",
    plan: "standard",
    deliverySpeed: "",
    deliveryFormat: "",
    email: "",
    fullName: "",
    phone: "",
    deliveryAddress: "",
    recipientEmail: "",
    deliveryDate: "",
    deliveryTime: "",
    isInstant: false,
    isScheduled: false,
    isAnonymous: false,
  });

  const calculateSubtotal = () => {
    let total = 39; // Base price for standard plan

    if (form.isInstant) {
      total += 14.9;
    }
    if (form.isScheduled) {
      total += 9.9;
    }

    switch (form.deliveryFormat) {
      case "paper":
        total += 29.9;
        break;
      case "frame":
        total += 59.9;
        break;
      default:
        break;
    }

    return total;
  };

  const calculateTotal = () => {
    let total = calculateSubtotal();

    if (discount > 0) {
      total = total * (1 - discount);
    }

    return total;
  };

  const applyPromo = () => {
    if (promoCodeInput.trim().toUpperCase() === "PRESTIGE25") {
      setDiscount(0.25);
      toast.success("Promo code applied: -25% off!", { duration: 3000 });
    } else {
      setDiscount(0);
      toast.error("Invalid promo code", { duration: 3000 });
    }
  };

  const updateForm = (key: string, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const canNext = () => {
    if (step === 1) return form.recipientName && form.recipientGender && form.relationship;
    if (step === 2) return form.letterType && form.occasion && form.specialQualities;
    if (step === 3) return form.heartMessage && form.tone && form.length;
    if (step === 4) {
      if (!form.deliveryFormat) return false;

      const requiresDetails = (form.deliveryFormat === "email" || form.deliveryFormat === "pdf") || form.isScheduled || (!form.isInstant && !form.isScheduled);
      if (!requiresDetails) return true;

      if ((form.deliveryFormat === "email" || form.deliveryFormat === "pdf") && !form.recipientEmail) return false;

      const requiresDateTime = form.isScheduled || (!form.isInstant && !form.isScheduled);
      if (requiresDateTime) {
        if (!form.deliveryDate || !form.deliveryTime) return false;

        // Link the date and time to validate against the minimum limit
        const hoursToAdd = form.isInstant ? 3 : 12;
        const limitDate = new Date(new Date().getTime() + hoursToAdd * 60 * 60 * 1000);

        // Construct selected datetime securely
        const selectedDate = new Date(`${form.deliveryDate}T${form.deliveryTime}`);
        if (selectedDate < limitDate) return false;
      }
      return true;
    }
    if (step === 5) return form.email && form.fullName && form.phone && form.deliveryAddress;
    return true;
  };

  const handleOrderSubmit = () => {
    // Remplace l'URL ci-dessous par ton lien exact que l'on voit sur ta capture d'écran
    const stripeTestLink = "https://buy.stripe.com/test_00w4gtfcr7hE9EU0KAbII00";
    
    // Cette ligne envoie l'utilisateur directement sur la page de paiement
    window.location.href = stripeTestLink;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Retour
            </Link>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Commission Your  <span className="italic text-burgundy-light">Masterpiece</span>
            </h1>
            <p className="font-body text-muted-foreground text-sm">Provide the details below to help us craft yourperfect letter. </p>
          </div>

          {/* Progress */}
          <div className="flex justify-between items-start mb-12">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center flex-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg transition-all ${i < step
                    ? "bg-primary text-primary-foreground"
                    : i === step - 1
                      ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                      : "bg-muted text-muted-foreground"
                    }`}
                >
                  {i + 1}
                </div>
                <div className="mt-2 text-center">
                  <p className="font-display font-semibold text-sm text-foreground">{s.label}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className={`absolute w-16 h-0.le5 mt-6 ${i < step - 1 ? "bg-primary" : "bg-muted"}`} style={{ marginLeft: "2rem", top: "38px" }} />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Recipient */}
          {step === 1 && <RecipientStep form={form} updateForm={updateForm} />}

          {/* Step 2: Occasion & Souvenirs */}
          {step === 2 && <OccasionStep form={form} updateForm={updateForm} />}

          {/* Step 3: Message & Tone */}
          {step === 3 && <MessageToneStep form={form} updateForm={updateForm} />}

          {/* Step 4: Delivery */}
          {step === 4 && <DeliveryStep form={form} updateForm={updateForm} />}

          {/* Step 5: Contact & Summary */}
          {step === 5 && (
            <div className="space-y-6 animate-fade-up">
              <div className="text-center mb-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Almost <span className="italic text-burgundy-light">done</span>!
                </h2>
              </div>

              <div>
                <Label className="font-body text-sm font-semibold mb-2 block">Your email *</Label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => updateForm("email", e.target.value)}
                  className="rounded-lg h-12"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="font-body text-sm font-semibold mb-2 block">Full name *</Label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={form.fullName}
                    onChange={(e) => updateForm("fullName", e.target.value)}
                    className="rounded-lg h-12"
                  />
                </div>

                <div>
                  <Label className="font-body text-sm font-semibold mb-2 block">Phone number *</Label>
                  <Input
                    type="tel"
                    placeholder="+1 234 567 8901"
                    value={form.phone}
                    onChange={(e) => updateForm("phone", e.target.value)}
                    className="rounded-lg h-12"
                  />
                </div>
              </div>

              <div className="flex items-start space-x-3 mb-4 mt-2">
                <Checkbox
                  id="anonymous"
                  checked={form.isAnonymous}
                  onCheckedChange={(checked) => updateForm("isAnonymous", checked === true)}
                  className="mt-0.5"
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="anonymous"
                    className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground cursor-pointer"
                  >
                    Send as anonymous
                  </label>
                  <p className="text-[13px] text-muted-foreground">
                    (Check this if you don't want your name to appear in the letter.)
                  </p>
                </div>
              </div>

              <div>
                <Label className="font-body text-sm font-semibold mb-2 block">Delivery address *</Label>
                <Input
                  type="text"
                  placeholder="123 Main St, 10001 New York"
                  value={form.deliveryAddress}
                  onChange={(e) => updateForm("deliveryAddress", e.target.value)}
                  className="rounded-lg h-12"
                />
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border">
                <h4 className="font-display text-lg font-semibold text-foreground mb-4">Summary</h4>
                <div className="space-y-3 font-body text-sm">
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-muted-foreground">Recipient</span>
                    <span className="text-foreground font-medium">{form.recipientName || "—"} {form.recipientGender ? `(${form.recipientGender})` : ""}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-muted-foreground">Letter type</span>
                    <span className="text-foreground font-medium capitalize">{form.letterType || "—"}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-muted-foreground">Tone</span>
                    <span className="text-foreground font-medium capitalize">{form.tone || "—"}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-border">
                    <span className="text-muted-foreground">Length</span>
                    <span className="text-foreground font-medium capitalize">{form.length || "—"}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between pb-2 border-b border-border text-green-600">
                      <span className="font-semibold">Discount</span>
                      <span className="font-medium">-{(discount * 100).toFixed(0)}%</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-2">
                    <span className="font-semibold text-foreground">Total</span>
                    <div className="flex flex-col items-end">
                      {discount > 0 && (
                        <span className="text-muted-foreground line-through text-sm font-medium opacity-70 mb-0.5">
                          {calculateSubtotal().toFixed(2)} $
                        </span>
                      )}
                      <span className="font-display text-xl font-bold text-gold">
                        {calculateTotal().toFixed(2)} $
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Input
                  type="text"
                  placeholder="Promo code (e.g. WELCOME20)"
                  value={promoCodeInput}
                  onChange={(e) => setPromoCodeInput(e.target.value)}
                  className="rounded-lg h-12 uppercase flex-1"
                />
                <Button
                  onClick={applyPromo}
                  variant="outline"
                  className="h-12 px-6 rounded-lg font-body font-semibold"
                >
                  Apply
                </Button>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 gap-4">
            {step > 1 ? (
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="rounded-full font-body px-8 h-12"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
            ) : (
              <div />
            )}
            {step < totalSteps ? (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={!canNext()}
                className="bg-primary hover:bg-burgundy-light text-primary-foreground rounded-full font-body px-8 h-12 transition-all disabled:opacity-50"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleOrderSubmit}
                disabled={!canNext()}
                className="bg-gold hover:bg-gold-light text-accent-foreground rounded-full font-body px-8 h-12 shadow-gold hover:scale-105 transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit my order
              </Button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderPage;
