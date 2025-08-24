import React from "react";

export default function BlogLayout({children,}: { children: React.ReactNode }) {
    return <section className="bg-amber-200">{children}</section>
}
