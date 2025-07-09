import PropertyCard, {type Property} from ".";

const props: Property = {
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
};

export const Default = (props: typeof meta.args) => (
  <PropertyCard.Card>
    <PropertyCard.Overlay>
      <PropertyCard.Price price={props.price} />
    </PropertyCard.Overlay>
    <PropertyCard.Gallery images={props.images} />
    <PropertyCard.Content>
      <PropertyCard.Title title={props.title} />
      <PropertyCard.Location location={props.location} />
      <PropertyCard.Description description={props.description} />
      <PropertyCard.Features features={props.features} />
    </PropertyCard.Content>
  </PropertyCard.Card>
);

export const NoGallery = (props: typeof meta.args) => (
  <PropertyCard.Card>
    <PropertyCard.Content>
      <PropertyCard.Title title={props.title} />
      <PropertyCard.Location location={props.location} />
      <PropertyCard.Description description={props.description} />
      <PropertyCard.Features features={props.features} />
    </PropertyCard.Content>
  </PropertyCard.Card>
);

export const SwitchedOrder = (props: typeof meta.args) => (
  <PropertyCard.Card>
    <PropertyCard.Overlay>
      <PropertyCard.Price price={props.price} />
    </PropertyCard.Overlay>
    <PropertyCard.Gallery images={props.images} />
    <PropertyCard.Content>
      <PropertyCard.Title title={props.title} />
      <PropertyCard.Location location={props.location} />
    </PropertyCard.Content>
  </PropertyCard.Card>
);

const meta = {
  title: "Compound Components/Presentational",
  component: PropertyCard,
  parameters: {
    layout: "centered",
  },
  args: props,
};

export default meta;
