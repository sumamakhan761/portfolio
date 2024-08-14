import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Experience`.
 */
export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

/**
 * Component for "Experience" Slices.
 */
const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading as="h2" size="lg"  className="-mt-10">
        {slice.primary.heading}
      </Heading>
        <div className="ml-5 mt-5 max-w-prose md:ml-6 md:mt-10">
          <Heading as="h3" size="sm">
            {slice.primary.title}
          </Heading>

          <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
            <span>{slice.primary.time_period}</span>{" "}
            <span className="text-3xl font-extralight">/</span>{" "}
            <span>{slice.primary.institution}</span>
          </div>
          <div className="prose prose-lg prose-invert mt-3">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
      )
    </Bounded>
  );
};

export default Experience;