"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function Studio() {

  return (
    <section className="px-24">
      <NextStudio config={config} />
    </section>
  );
}
