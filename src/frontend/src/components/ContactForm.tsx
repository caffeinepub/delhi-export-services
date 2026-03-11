import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";

export default function ContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const submitMutation = useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      serviceType: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      await actor.submitInquiry(
        data.name,
        data.email,
        data.phone,
        data.serviceType,
        data.message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        message: "",
      });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-card p-6 rounded-lg shadow-soft">
      {showSuccess && (
        <div className="mb-6 p-4 bg-secondary/20 border border-secondary/30 rounded-lg flex items-center gap-3 animate-fade-in">
          <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
          <p className="text-sm text-foreground">
            Thank you for your message! We'll get back to you soon.
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground resize-none"
            placeholder="Tell us how we can help you..."
          />
        </div>
        <button
          type="submit"
          disabled={submitMutation.isPending}
          className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {submitMutation.isPending ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
        {submitMutation.isError && (
          <p className="text-sm text-destructive">
            Failed to send message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
