"use client";

import { useEffect, useState } from "react";
import { RoleForgeIcon } from "../components/RoleForgeIcons";

const settingsSections = [
  { id: "account", label: "Account", icon: "settings" },
  { id: "projects", label: "Saved projects", icon: "chart" },
  { id: "usage", label: "Usage", icon: "sparkle" },
  { id: "exports", label: "Exports", icon: "download" },
  { id: "billing", label: "Billing", icon: "lock" },
] as const;

export function SettingsSectionNav() {
  const [activeSection, setActiveSection] = useState<(typeof settingsSections)[number]["id"]>("account");

  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      const nextSection = settingsSections.find((section) => section.id === hash)?.id ?? "account";
      setActiveSection(nextSection);
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
  }, []);

  return (
    <aside className="settings-page-nav" aria-label="Settings sections">
      {settingsSections.map((section) => (
        <a className={activeSection === section.id ? "active" : ""} href={`#${section.id}`} key={section.id}>
          <RoleForgeIcon name={section.icon} size={15} /> {section.label}
        </a>
      ))}
    </aside>
  );
}
