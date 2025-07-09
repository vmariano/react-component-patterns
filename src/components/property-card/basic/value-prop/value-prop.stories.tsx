import type {Meta} from "@storybook/nextjs-vite";

import PropertyCard from ".";

const props: React.ComponentProps<typeof PropertyCard> = {
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
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    features: ["Pool", "Garden", "Smart Home"],
  },
};

export const ValueProp = (props: typeof meta.args) => <PropertyCard value={props.value} />;

const meta = {
  title: "Basic Components/Value Prop",
  component: PropertyCard,
  parameters: {
    layout: "centered",
  },
  args: props,
} satisfies Meta<typeof PropertyCard>;

export default meta;
