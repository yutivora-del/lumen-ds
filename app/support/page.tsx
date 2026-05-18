"use client";

import Link from "next/link";
import { Coffee, Heart, Sparkles, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tiers = [
  {
    name: "Take it",
    amount: "Free",
    cadence: "Always",
    icon: Heart,
    description:
      "Everything Lumen does, you can already use. Copy any component, any token, any docs page. No watermark, no upsell.",
    cta: { label: "Browse components", href: "/components", variant: "outline" as const },
    includes: [
      "All 16 components",
      "All tokens & docs",
      "MIT license — commercial use OK",
      "No attribution required",
    ],
    note: "This is the real product. The tiers below are if you want to chip in.",
  },
  {
    name: "Tip the bar",
    amount: "$5",
    cadence: "One-time",
    icon: Coffee,
    description:
      "A coffee, more or less. Goes toward late nights, new components, and the next coat of paint on the docs.",
    cta: {
      label: "Buy me a coffee",
      href: "https://www.buymeacoffee.com/yuti",
      variant: "default" as const,
    },
    includes: [
      "A thank-you in the changelog",
      "Knowing this still exists because of you",
    ],
    accent: true,
  },
  {
    name: "Studio sponsor",
    amount: "$25",
    cadence: "Monthly",
    icon: Sparkles,
    description:
      "If Lumen saves your team a few hours a month, this is the math. Recurring, cancelable anytime, no obligation either way.",
    cta: {
      label: "Become a sponsor",
      href: "https://github.com/sponsors/yuti",
      variant: "outline" as const,
    },
    includes: [
      "Studio logo in the site footer",
      "Early access to new components",
      "First read on the field-notes essays",
      "A direct line for feedback",
    ],
  },
];

const faqs = [
  {
    q: "Why ask for money if it's MIT?",
    a: "Because I'd like to keep working on it. The license stays the same either way — you owe nothing, and you can't unlock more by paying. The tiers exist for people who've already gotten value and want to send some back.",
  },
  {
    q: "Are components behind any of these tiers locked?",
    a: "No. The free tier is the whole library. Sponsors get a few-day head start on new components, but everything ships to the open repo within the week.",
  },
  {
    q: "Can my company sponsor instead of me personally?",
    a: "Yes — the Studio tier is built for that. The logo placement is intended for companies, agencies, or design teams who want a quiet credit in exchange.",
  },
  {
    q: "What does the money actually fund?",
    a: "Hosting, the Figma file I keep promising, time to build the next batch of components, and very occasionally a real coffee.",
  },
  {
    q: "Can I contribute work instead of money?",
    a: "Always. Open an issue or PR on GitHub — bug reports, new component proposals, and doc fixes are all welcome, and they help more than a tip.",
  },
];

export default function SupportPage() {
  return (
    <>
      {/* HERO */}
      <section className="grain relative overflow-hidden border-b border-line">
        <div className="container py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <Badge variant="outline">
                <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Support
              </Badge>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
                Optional · Always
              </span>
            </div>
            <h1 className="font-display text-display-1 text-balance">
              Lumen is free.{" "}
              <span className="italic text-ink-muted">If it&apos;s useful, you can say so.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
              The library is MIT licensed. Nothing here is gated, watermarked, or held
              back. These tiers exist for people who&apos;ve gotten value out of Lumen
              and want to throw a little back — that&apos;s the whole pitch.
            </p>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className="border-b border-line">
        <div className="container py-20 lg:py-28">
          <div className="mb-12 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
                Three ways
              </p>
              <h2 className="mt-2 font-display text-display-2 text-balance">
                Pay what feels right.{" "}
                <span className="italic text-ink-muted">Or nothing at all.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink-muted">
              Most people will stay in the first column. That&apos;s the design. The
              other two are there if you want them.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-3">
            {tiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.name}
                  className={`relative flex flex-col bg-paper p-8 ${
                    tier.accent ? "lg:py-10" : ""
                  }`}
                >
                  {tier.accent && (
                    <div className="absolute right-6 top-6">
                      <Badge variant="accent">Most loved</Badge>
                    </div>
                  )}
                  <div className="mb-6 flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded border border-line ${
                        tier.accent ? "bg-accent/10 text-accent" : "bg-paper-sunken text-ink-muted"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl tracking-tight">{tier.name}</h3>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
                        {tier.cadence}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-baseline gap-2">
                    <span className="font-display text-4xl tracking-tight">{tier.amount}</span>
                    {tier.cadence === "Monthly" && (
                      <span className="text-sm text-ink-muted">/ month</span>
                    )}
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-ink-muted">{tier.description}</p>

                  <ul className="mb-8 space-y-2 text-sm">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-subtle" />
                        <span className="text-ink">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    {tier.cta.href.startsWith("http") ? (
                      <Button asChild variant={tier.cta.variant} className="w-full">
                        <a href={tier.cta.href} target="_blank" rel="noreferrer">
                          {tier.cta.label}
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <Button asChild variant={tier.cta.variant} className="w-full">
                        <Link href={tier.cta.href}>{tier.cta.label}</Link>
                      </Button>
                    )}
                  </div>

                  {tier.note && (
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
                      {tier.note}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECONDARY: where the money goes */}
      <section className="border-b border-line">
        <div className="container py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
                Transparency
              </p>
              <h2 className="mt-2 font-display text-display-3 text-balance">
                Where it goes.{" "}
                <span className="italic text-ink-muted">No mystery.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm text-ink-muted">
                Solo project, no investors, no growth team. Here&apos;s the rough split if
                anything lands in the jar.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    pct: "40%",
                    label: "Hosting & tooling",
                    body: "Vercel, fonts, the Figma seat. Boring, necessary.",
                  },
                  {
                    pct: "35%",
                    label: "Time on new components",
                    body: "Each one takes a weekend at minimum. The list is long.",
                  },
                  {
                    pct: "20%",
                    label: "The Figma library",
                    body: "Tokens + components, mirroring the code. Long-promised.",
                  },
                  {
                    pct: "5%",
                    label: "An actual coffee",
                    body: "Honesty in advertising. Filter, oat milk, no sugar.",
                  },
                ].map((item) => (
                  <Card key={item.label}>
                    <CardHeader>
                      <span className="font-display text-3xl tracking-tight text-accent">
                        {item.pct}
                      </span>
                      <CardTitle className="text-base">{item.label}</CardTitle>
                      <CardDescription>{item.body}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="border-b border-line">
        <div className="container py-20 lg:py-24">
          <div className="mb-10 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-display-3 text-balance max-w-xl">
              Studios keeping this going.
            </h2>
            <p className="max-w-md text-sm text-ink-muted">
              Your name could be here. It&apos;s quiet placement — no testimonials, no
              cringe — just a thank-you, where it counts.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-paper-sunken p-10">
            <p className="text-center font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
              No sponsors yet. Be the first.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-line">
        <div className="container py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-subtle">
                FAQ
              </p>
              <h2 className="mt-2 font-display text-display-3 text-balance">
                Reasonable questions.
              </h2>
              <p className="mt-4 max-w-md text-sm text-ink-muted">
                Mostly the same ones I&apos;d ask. If something&apos;s missing, the GitHub
                issues are open.
              </p>
            </div>

            <div className="lg:col-span-8">
              <Accordion type="single" collapsible>
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{f.q}</AccordionTrigger>
                    <AccordionContent>{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="grain border-b border-line">
        <div className="container py-20 text-center lg:py-28">
          <h2 className="mx-auto max-w-2xl font-display text-display-2 text-balance">
            Or just{" "}
            <span className="italic text-ink-muted">keep building.</span>{" "}
            That&apos;s allowed too.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-ink-muted">
            The best support is using Lumen, telling a friend, opening a PR. Money is
            optional. Always was.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/components">Browse components</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                Star on GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
