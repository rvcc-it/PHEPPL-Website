"use client";

import React, { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";

interface FloatingWhatsAppProps {
  phoneNumber?: string;
}

export function FloatingWhatsApp({ phoneNumber = "919842212345" }: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false);

  const cleanNumber = phoneNumber.replace(/[^0-9]/g, "");
  const defaultMessage = encodeURIComponent(
    "Hello PHEPPL Team, I am reaching out regarding an engineering project quotation / construction inquiry."
  );
  const waUrl = `https://wa.me/${cleanNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Consultation Popup Card */}
      {isOpen && (
        <div className="mb-3 w-80 bg-panel border border-line rounded-xl shadow-2xl p-4 text-heading animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between pb-3 border-b border-line">
            <div>
              <div className="text-sm font-bold text-heading flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#20A84A] animate-pulse" />
                PHEPPL Technical Desk
              </div>
              <p className="text-[11px] text-body">
                Paanayil Heavy Engineering Projects
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted hover:text-heading p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-body leading-relaxed">
            Need immediate project assistance or technical specifications? Connect directly with our engineering estimation desk via WhatsApp.
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#20A84A] hover:bg-[#19873b] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact PHEPPL on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#20A84A] hover:bg-[#19873b] text-white shadow-2xl shadow-[#20A84A]/40 transition-transform duration-300 hover:scale-105 active:scale-95 border-2 border-line focus:outline-none"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}

