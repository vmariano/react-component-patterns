import type {Meta} from "@storybook/nextjs-vite";

import PropertyCard from ".";

const props: Omit<React.ComponentProps<typeof PropertyCard.Root>, "children"> = {
  value: {
    id: 1,
    description: "This is a modern architectural marvel located in Beverly Hills, CA.",
    agent: {
      name: "John Doe",
      image: "/placeholder.svg?height=300&width=400",
      phone: "+1234567890",
    },
    title: "Modern Architectural Marvel",
    location: "Beverly Hills, CA",
    price: 2850000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=300"],
    features: ["Pool", "Garden", "Smart Home"],
  },
};

export const Managed = (props: typeof meta.args) => (
  <PropertyCard.Root value={props.value}>
    <PropertyCard.Card>
      <PropertyCard.Overlay>
        <PropertyCard.Price />
      </PropertyCard.Overlay>
      <PropertyCard.Gallery />
      <PropertyCard.Content>
        <PropertyCard.Title />
        <PropertyCard.Location />
        <PropertyCard.Description />
        <PropertyCard.Features />
      </PropertyCard.Content>
    </PropertyCard.Card>
  </PropertyCard.Root>
);

const meta = {
  title: "Compound Components/Managed",
  component: PropertyCard.Root,
  parameters: {
    layout: "centered",
  },
  args: props,
} satisfies Meta<typeof PropertyCard.Root>;

export default meta;
