"use client";

import { ReactNode } from "react";
import { useState, useRef, useEffect, useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const SidebarNoteItemContent = ({
  id,
  title,
  expandedChildren,
  children,
}: {
  id: string;
  title: string;
  expandedChildren: ReactNode;
  children: ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const selectedId = pathname?.split("/")[2] || null;

  const [isPending] = useTransition();
  const [isExpanded, setIsExpanded] = useState(false);
  const isActive = id === selectedId;

  const itemRef = useRef<HTMLDivElement>(null);
  const prevTitleRef = useRef(title);
  useEffect(() => {
    if (title !== prevTitleRef.current) {
      prevTitleRef.current = title;
      itemRef.current?.classList.add("flash");
    }
  }, [title]);
  return (
    <div
      ref={itemRef}
      onAnimationEnd={() => {
        itemRef.current?.classList.remove("flash");
      }}
      className={[
        "sidebar-note-list-item",
        isExpanded ? "note-expanded" : "",
      ].join(" ")}
    >
      {children}
      <button
        className="sidebar-note-open"
        style={{
          backgroundColor: isPending
            ? "var(--gray-80)"
            : isActive
            ? "var(--tertiary-blue)"
            : "",
          border: isActive
            ? "1px solid var(--primary-border)"
            : "1px solid transparent",
        }}
        onClick={() => {
          const sidebarToggle = document.getElementById(
            "sidebar-toggle"
          ) as HTMLInputElement;
          if (sidebarToggle) {
            sidebarToggle.checked = true;
          }
          router.push(`/note/${id}`);
        }}
      >
        Open note for preview
      </button>
      <button
        className="sidebar-note-toggle-expand"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? (
          <Image
            src="/chevron-down.svg"
            width="10"
            height="10"
            alt="Collapse"
          />
        ) : (
          <Image src="/chevron-up.svg" width="10" height="10" alt="Expand" />
        )}
      </button>
      {isExpanded && expandedChildren}
    </div>
  );
};

export default SidebarNoteItemContent;
