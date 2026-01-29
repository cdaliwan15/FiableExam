import type { Meta, StoryObj } from "@storybook/react-webpack5";
import App from "../App";

const meta = {
  title: "Exam",
  component: App,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EdgeSW: Story = {
  args: {
    input: "0,0 SOUTH",
  },
};

export const EdgeNW: Story = {
  args: {
    input: "0,4 WEST",
  },
};

export const EdgeNE: Story = {
  args: {
    input: "4,4 NORTH",
  },
};

export const EdgeSE: Story = {
  args: {
    input: "4,0 EAST",
  },
};


export const RandomCoordinates1: Story = {
  args: {
    input: "2,3 SOUTH",
  },
};

export const RandomCoordinates2: Story = {
  args: {
    input: "4,2 WEST"
  }
};

export const RandomCoordinates3: Story = {
  args: {
    input: "1,2 EAST"
  }
};

export const InvalidInput1: Story = {
  args: {
    input: "1,2 SAMPLE"
  }
};

export const InvalidInput2: Story = {
  args: {
    input: "1,5 EAST"
  }
};

export const InvalidInput3: Story = {
  args: {
    input: "-1,1 TEST"
  }
};