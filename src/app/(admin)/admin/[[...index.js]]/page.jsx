"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { useEffect } from "react";
import { revalidatePath } from "next/cache";

export default function Studio() {
  useEffect(() => {
    revalidatePath("/about");
    revalidatePath("/gallery");
    revalidatePath("/services");
  }, []);

  return (
    <section className="px-24">
      <NextStudio config={config} />
    </section>
  );
}
