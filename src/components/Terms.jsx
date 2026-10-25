

export default function Terms() {
  return (
    <main className="min-h-screen bg-white text-[#17151D]">
      {/* Page Hero */}
      <section className="px-5 pb-16 pt-10 sm:px-8 sm:pb-20 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          {/* Breadcrumbs */}
          

          <p className="mb-5 font-dm text-xs font-bold uppercase tracking-[0.25em] text-[#B52BB5]">
            TERMS OF USE
          </p>

          <h1 className="font-manrope text-4xl font-extrabold leading-[1.1] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            About this
            <br />
            website preview.
          </h1>

          <p className="mt-6 max-w-2xl font-dm text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            A design and content preview for review.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="border-t border-gray-100 px-5 py-14 sm:px-8 sm:py-20 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-3xl space-y-10">
            {/* Content and Scope */}
            <article>
              <h2 className="font-manrope text-2xl font-bold tracking-tight sm:text-3xl">
                Content and scope
              </h2>

              <p className="mt-4 font-dm text-base leading-8 text-gray-600">
                Service descriptions are proposed for review. Specific
                responsibilities, suppliers and deliverables are agreed for
                each engagement.
              </p>
            </article>

            {/* Illustrative Imagery */}
            <article>
              <h2 className="font-manrope text-2xl font-bold tracking-tight sm:text-3xl">
                Illustrative imagery
              </h2>

              <p className="mt-4 font-dm text-base leading-8 text-gray-600">
                Sample photography illustrates experience formats. It is not
                evidence of Imprexive client projects, endorsements or results.
              </p>
            </article>

            {/* Enquiries */}
            <article>
              <h2 className="font-manrope text-2xl font-bold tracking-tight sm:text-3xl">
                Enquiries
              </h2>

              <p className="mt-4 font-dm text-base leading-8 text-gray-600">
                The form generates a downloadable brief. It does not send an
                enquiry or create a booking.
              </p>
            </article>

            {/* Final Terms */}
            <article>
              <h2 className="font-manrope text-2xl font-bold tracking-tight sm:text-3xl">
                Final terms
              </h2>

              <p className="mt-4 font-dm text-base leading-8 text-gray-600">
                Company-approved terms must replace this preview notice before
                public launch.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}