import React from "react";

interface HeadingProps {
  heading: string;
  subheading?: string;
  align?: "left" | "center" | "right";
  paddingTop?: string;
  paddingBottom?: string;
}

const Heading = ({
  heading,
  subheading,
  align = "center",
  paddingTop = "pt-3 md:pt-10",
  paddingBottom = "pb-12",
}: HeadingProps) => {
  const alignment =
    align === "left"
      ? "text-left"
      : align === "right"
        ? "text-right"
        : "text-center";

  return (
    <div className={`${paddingTop} ${paddingBottom}`}>
      <h2
        className={`text-2xl font-bold md:text-4xl ${alignment} transition-all duration-300`}>
        {heading}
      </h2>
      {subheading && (
        <p
          className={`text-muted-foreground mt-5 text-base md:text-lg ${align === "center" ? "mx-auto max-w-3xl" : ""} ${alignment} transition-all duration-300`}>
          {subheading}
        </p>
      )}
    </div>
  );
};

export default Heading;
