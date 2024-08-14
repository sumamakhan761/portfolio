import { ImageField } from "@prismicio/types"; // Adjust the import based on your setup
import { PrismicNextImage } from "@prismicio/next";

import { SliceComponentProps } from "@prismicio/react";

export type ImageProps = {
  slice: {
    primary: {
      image: ImageField;
    };
  };
};

const Image = ({ slice }: ImageProps): JSX.Element => {
  return (
    <PrismicNextImage
      field={slice.primary.image}
      className="not-prose w-full h-full rounded-md my-10 md:my-14 lg:my-16"
    />
  );
};

export default Image;
