import { Text } from "@/components";

export const Typography = () => {
  return (
    <>
      <Text as="p" size="7xl" className="mb-4" weight="bold">
        Display
      </Text>
      <h1 className="mb-4">Heading 1</h1>
      <h2 className="mb-4">Heading 2</h2>
      <h3 className="mb-4">Heading 3</h3>
      <h4 className="mb-4">Heading 4</h4>
      <Text as="p" size="lg" className="mb-4" weight="normal">
        Paragraph 1
      </Text>
      <Text as="p" size="base" className="mb-4" weight="normal">
        Paragraph 2
      </Text>
    </>
  );
};
