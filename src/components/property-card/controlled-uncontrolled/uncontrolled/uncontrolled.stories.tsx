import PropertyCard, {type Property} from "../../basic/value-prop";

import Tabs from ".";

const PROPERTIES: Property[] = [
  {
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
  {
    id: 2,
    description: "This is a modern architectural marvel located in Beverly Hills, CA.",
    agent: {
      name: "John Doe",
      image: "/placeholder.svg?height=300&width=400",
      phone: "+1234567890",
    },
    title: "Barbie House",
    location: "Malibu, CA",
    price: 2850000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=300"],
    features: ["Pool", "Garden", "Smart Home"],
  },
  {
    id: 3,
    description: "This is a modern architectural marvel located in Beverly Hills, CA.",
    agent: {
      name: "John Doe",
      image: "/placeholder.svg?height=300&width=400",
      phone: "+1234567890",
    },
    title: "The White House",
    location: "Washington, DC",
    price: 2850000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=300"],
    features: ["Pool", "Garden", "Smart Home"],
  },
];

const props: React.ComponentProps<typeof Tabs> = {
  value: [
    {
      title: "Featured",
      content: PROPERTIES.slice(0, 2).map((property) => (
        <PropertyCard key={property.id} value={property} />
      )),
    },
    {
      title: "All",
      content: PROPERTIES.map((property) => <PropertyCard key={property.id} value={property} />),
    },
  ],
};

export const Uncontrolled = ({value}: typeof meta.args) => <Tabs value={value} />;

const meta = {
  title: "Controlled & Uncontrolled/Uncontrolled",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  args: props,
};

export default meta;
