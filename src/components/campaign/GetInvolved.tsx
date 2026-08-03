import { useState, type FormEvent } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LOCATIONS } from "@/lib/campaign-data";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\s-]{7,20}$/, "Enter a valid phone number"),
  location: z.string().min(1, "Please select your location"),
  pollingStation: z.string().trim().min(2, "Enter your polling station").max(120),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function GetInvolved() {
  const [values, setValues] = useState({
    fullName: "",
    phone: "",
    location: "",
    pollingStation: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const set = (k: keyof typeof values, v: string) => {
    setValues((prev) => ({ ...prev, [k]: v }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setStatus("loading");
    // Simulated submission — wire up to Lovable Cloud when a backend is added.
    setTimeout(() => setStatus("done"), 900);
  };

  return (
    <section id="get-involved" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <span className="text-sm font-bold uppercase tracking-widest text-green">
            Get Involved
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold sm:text-4xl">
            Join the movement for Gesusu Ward
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Volunteers are the heartbeat of this campaign. Register below and our team will reach
            out on WhatsApp with how you can help in your area.
          </p>
          <ul className="mt-6 space-y-3 text-foreground/90">
            {["Mobilise your neighbourhood", "Represent us at your polling station", "Champion the manifesto"].map(
              (t) => (
                <li key={t} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green" /> {t}
                </li>
              ),
            )}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] sm:p-8">
            {status === "done" ? (
              <div className="flex flex-col items-center py-10 text-center">
                <div className="animate-pop-in grid h-20 w-20 place-items-center rounded-full bg-green/15 text-green">
                  <CheckCircle2 className="h-11 w-11" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-extrabold">Karibu! You're in.</h3>
                <p className="mt-2 max-w-sm text-muted-foreground">
                  Thank you, {values.fullName.split(" ")[0] || "friend"}. The Dennis Ondati Omari
                  team will be in touch with you on WhatsApp soon.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => {
                    setValues({ fullName: "", phone: "", location: "", pollingStation: "" });
                    setStatus("idle");
                  }}
                >
                  Register another supporter
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={values.fullName}
                    onChange={(e) => set("fullName", e.target.value)}
                    placeholder="e.g. Jane Kemunto"
                  />
                  {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (WhatsApp)</Label>
                  <Input
                    id="phone"
                    inputMode="tel"
                    value={values.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="e.g. 0712 345 678"
                  />
                  {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location / Sub-location</Label>
                  <Select value={values.location} onValueChange={(v) => set("location", v)}>
                    <SelectTrigger id="location">
                      <SelectValue placeholder="Select your area" />
                    </SelectTrigger>
                    <SelectContent>
                      {LOCATIONS.map((l) => (
                        <SelectItem key={l.id} value={l.name}>
                          {l.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.location && <p className="text-sm text-destructive">{errors.location}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pollingStation">Polling Station</Label>
                  <Input
                    id="pollingStation"
                    value={values.pollingStation}
                    onChange={(e) => set("pollingStation", e.target.value)}
                    placeholder="e.g. Gesusu Primary School"
                  />
                  {errors.pollingStation && (
                    <p className="text-sm text-destructive">{errors.pollingStation}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="green"
                  size="lg"
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" /> Submitting…
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" /> Register as a Volunteer
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
