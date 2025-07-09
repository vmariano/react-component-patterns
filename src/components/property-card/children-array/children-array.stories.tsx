import PropertyCard, {type Property} from "../basic/value-prop";

import FadeInGrid from ".";

const props: {properties: Property[]} = {
  properties: [
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
    {
      id: 4,
      description: "This is a modern architectural marvel located in Beverly Hills, CA.",
      agent: {
        name: "John Doe",
        image: "/placeholder.svg?height=300&width=400",
        phone: "+1234567890",
      },
      title: "Penthouse",
      location: "New York, NY",
      price: 2850000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3200,
      images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=300"],
      features: ["Pool", "Garden", "Smart Home"],
    },
    {
      id: 5,
      description: "This is a modern architectural marvel located in Beverly Hills, CA.",
      agent: {
        name: "John Doe",
        image: "/placeholder.svg?height=300&width=400",
        phone: "+1234567890",
      },
      title: "Pentagon House",
      location: "Washington, DC",
      price: 2850000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3200,
      images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=300"],
      features: ["Pool", "Garden", "Smart Home"],
    },
    {
      id: 6,
      description: "This is a modern architectural marvel located in Beverly Hills, CA.",
      agent: {
        name: "John Doe",
        image: "/placeholder.svg?height=300&width=400",
        phone: "+1234567890",
      },
      title: "Some other house",
      location: "Washington, DC",
      price: 2850000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3200,
      images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=300"],
      features: ["Pool", "Garden", "Smart Home"],
    },
  ],
};

export const FadeIn = ({properties}: typeof meta.args) => (
  <FadeInGrid>
    <h1>Hola</h1>
    <h1>Mundo</h1>
    <h1>Soy</h1>
    <h1>Goncy</h1>
    {properties.map((property) => (
      <PropertyCard key={property.id} value={property} />
    ))}
  </FadeInGrid>
);

const meta = {
  title: "Children Array/Fade In",
  component: FadeInGrid,
  args: props,
};

export default meta;
