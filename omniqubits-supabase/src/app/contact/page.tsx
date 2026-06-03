"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Clock, Phone, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          message: formData.message
        })
      });


      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setFormSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-obsidian text-cream">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(201,169,110,0.06)_0%,transparent_70%)]" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase">Get in Touch</span>
              <span className="h-px w-12 bg-gold/60" />
            </motion.div>

            <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              Start Your<br />
              <em className="text-gold font-light">Transformation</em>
            </motion.h1>

            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-muted-color text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re a startup ready to launch or an enterprise looking to evolve — we&apos;d love to hear your story. Reach out and let&apos;s craft something exceptional together.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-10">
                <h2 className="font-display text-3xl mb-4">Let&apos;s <em className="text-gold font-light">Connect</em></h2>
                <p className="text-muted-color text-sm leading-relaxed">
                  Ready to transform your business? We&apos;re here to help. Fill out the form and we&apos;ll get back to you within 24 business hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 pb-6 border-b border-gold-subtle">
                  <div className="w-12 h-12 border border-gold-glow flex items-center justify-center text-gold shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-gold text-xs tracking-[0.2em] uppercase mb-1">Email</div>
                    <div className="text-cream-2 text-sm">hello@omniqubits.com</div>
                    <div className="text-muted-color text-xs mt-1">We respond within 24 hours</div>
                  </div>
                </div>

                <div className="flex gap-4 pb-6 border-b border-gold-subtle">
                  <div className="w-12 h-12 border border-gold-glow flex items-center justify-center text-gold shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-gold text-xs tracking-[0.2em] uppercase mb-1">Phone</div>
                    <div className="text-cream-2 text-sm">+1 (555) 123-4567</div>
                    <div className="text-muted-color text-xs mt-1">Mon-Fri, 9am-6pm EST</div>
                  </div>
                </div>

                <div className="flex gap-4 pb-6 border-b border-gold-subtle">
                  <div className="w-12 h-12 border border-gold-glow flex items-center justify-center text-gold shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-gold text-xs tracking-[0.2em] uppercase mb-1">Global HQ</div>
                    <div className="text-cream-2 text-sm">Serving clients across 12+ countries</div>
                    <div className="text-muted-color text-xs mt-1">Virtual + In-person meetings</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 border border-gold-glow flex items-center justify-center text-gold shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-gold text-xs tracking-[0.2em] uppercase mb-1">Response Time</div>
                    <div className="text-cream-2 text-sm">Within 24 business hours</div>
                    <div className="text-muted-color text-xs mt-1">Usually faster!</div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-10 p-6 bg-obsidian-2 border border-gold-subtle">
                <h3 className="font-display text-lg text-cream mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-color">Monday - Friday</span>
                    <span className="text-cream-2">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-color">Saturday</span>
                    <span className="text-cream-2">By appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-color">Sunday</span>
                    <span className="text-cream-2">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
            

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              
            >
              {formSubmitted ? (
                <div className="bg-obsidian-2 border border-gold-subtle p-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-green-400" />
                  </div>
                  <h3 className="font-display text-2xl text-cream mb-3">Message Sent!</h3>
                  <p className="text-muted-color text-sm mb-6">
                    Thank you for reaching out. We&apos;ll be in touch within 24 hours to schedule a consultation.
                  </p>
                  <Button
                    onClick={() => { resetForm(); setFormSubmitted(false); }}
                    variant="outline"
                    className="border-gold-subtle text-cream hover:border-gold hover:text-gold"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-obsidian-2 border border-gold-subtle p-8">
                  <h3 className="font-display text-xl text-cream mb-6">Send us a Message</h3>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <label className="text-muted-color text-xs tracking-[0.2em] uppercase">First Name *</label>
                      <Input
                        placeholder="Alexandra"
                        className="bg-obsidian border-gold-subtle text-cream placeholder:text-muted-color/50"
                        value={formData.firstName}
                        onChange={(e) => updateField("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-muted-color text-xs tracking-[0.2em] uppercase">Last Name *</label>
                      <Input
                        placeholder="Chen"
                        className="bg-obsidian border-gold-subtle text-cream placeholder:text-muted-color/50"
                        value={formData.lastName}
                        onChange={(e) => updateField("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <label className="text-muted-color text-xs tracking-[0.2em] uppercase">Business Email *</label>
                    <Input
                      type="email"
                      placeholder="you@company.com"
                      className="bg-obsidian border-gold-subtle text-cream placeholder:text-muted-color/50"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2 mb-4">
                    <label className="text-muted-color text-xs tracking-[0.2em] uppercase">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="bg-obsidian border-gold-subtle text-cream placeholder:text-muted-color/50"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2 mb-4">
                    <label className="text-muted-color text-xs tracking-[0.2em] uppercase">Company</label>
                    <Input
                      placeholder="Your Company Name"
                      className="bg-obsidian border-gold-subtle text-cream placeholder:text-muted-color/50"
                      value={formData.company}
                      onChange={(e) => updateField("company", e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <label className="text-muted-color text-xs tracking-[0.2em] uppercase">Service Interest</label>
                      <select
                        className="w-full bg-obsidian border border-gold-subtle text-cream px-4 py-2 text-sm focus:outline-none focus:border-gold"
                        value={formData.service}
                        onChange={(e) => updateField("service", e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option>Growth Marketing</option>
                        <option>Brand Strategy</option>
                        <option>Customer Support</option>
                        <option>Technology Solutions</option>
                        <option>Data & Analytics</option>
                        <option>Digital Transformation</option>
                        <option>Full-Suite Engagement</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-muted-color text-xs tracking-[0.2em] uppercase">Budget Range</label>
                      <select
                        className="w-full bg-obsidian border border-gold-subtle text-cream px-4 py-2 text-sm focus:outline-none focus:border-gold"
                        value={formData.budget}
                        onChange={(e) => updateField("budget", e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option>Under $1,000/month</option>
                        <option>$1,000 - $2,500/month</option>
                        <option>$2,500 - $5,000/month</option>
                        <option>$5,000 - $10,000/month</option>
                        <option>$10,000+/month</option>
                        <option>Custom / Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <label className="text-muted-color text-xs tracking-[0.2em] uppercase">Tell Us About Your Goals *</label>
                    <Textarea
                      placeholder="Describe your current challenges, what success looks like for you, and how we can help..."
                      className="bg-obsidian border-gold-subtle text-cream placeholder:text-muted-color/50 min-h-[140px]"
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold-light text-obsidian tracking-[0.15em] uppercase flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-muted-color text-xs text-center mt-4">
                    By submitting this form, you agree to our privacy policy. We&apos;ll never share your information.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map / Global Presence */}
      <section className="py-24 bg-obsidian-2">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Global Reach</span>
            <span className="h-px w-12 bg-gold/60" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Serving <em className="text-gold font-light">Worldwide</em>
          </h2>

          <p className="text-muted-color text-sm max-w-2xl mx-auto mb-10">
            We work with clients across the globe, with team members and partners in North America, Europe, Asia, and Africa. Distance is no barrier to exceptional collaboration.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { region: "North America", offices: "New York, San Francisco" },
              { region: "Europe", offices: "London, Berlin, Zurich" },
              { region: "Asia", offices: "Singapore, Mumbai" },
              { region: "Africa", offices: "Lagos, Nairobi" }
            ].map((item, i) => (
              <div key={i} className="bg-obsidian border border-gold-subtle p-4">
                <div className="text-gold text-xs tracking-[0.15em] uppercase mb-1">{item.region}</div>
                <div className="text-cream-2 text-sm">{item.offices}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}