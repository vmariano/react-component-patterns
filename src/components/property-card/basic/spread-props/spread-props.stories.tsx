import type {Meta} from "@storybook/nextjs-vite";

import PropertyCard from ".";

const props: React.ComponentProps<typeof PropertyCard> = {
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
};

export const SpreadProps = (props: typeof meta.args) => <PropertyCard {...props} />;

export const ManualProps = (props: typeof meta.args) => (
  <PropertyCard
    agent={props.agent}
    bathrooms={props.bathrooms}
    bedrooms={props.bedrooms}
    description={props.description}
    features={props.features}
    id={props.id}
    images={props.images}
    location={props.location}
    price={props.price}
    sqft={props.sqft}
    title={props.title}
  />
);

const meta = {
  title: "Basic Components/Spread Props",
  component: PropertyCard,
  parameters: {
    layout: "centered",
  },
  args: props,
} satisfies Meta<typeof PropertyCard>;

export default meta;
