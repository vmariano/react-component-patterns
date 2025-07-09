import type {Meta} from "@storybook/nextjs-vite";

import {PropertyCardContainer} from ".";

const props: React.ComponentProps<typeof PropertyCardContainer> = {
  id: 1,
};

export const Container = (props: typeof meta.args) => <PropertyCardContainer id={props.id} />;

const meta = {
  title: "Container & Presentational/Container",
  component: PropertyCardContainer,
  parameters: {
    layout: "centered",
  },
  args: props,
} satisfies Meta<typeof PropertyCardContainer>;

export default meta;
