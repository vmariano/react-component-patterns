import PropertyCard, {type Property} from "../basic/value-prop";

import WithSearch from ".";

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
  ],
};

export const Search = ({properties}: typeof meta.args) => (
  <WithSearch>
    {(query) => {
      const filteredProperties = properties.filter((property) =>
        property.title.toLowerCase().includes(query.toLowerCase()),
      );

      return (
        <div className="grid grid-cols-2 gap-4">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} value={property} />
          ))}
        </div>
      );
    }}
  </WithSearch>
);

const meta = {
  title: "Render Props/Search",
  component: WithSearch,
  args: props,
};

export default meta;
