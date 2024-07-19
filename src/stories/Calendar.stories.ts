import type { Meta, StoryObj } from "@storybook/react";

import Calendar from "../index";

const meta = {
  title: "Calendar/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    apiKey: { control: "text" },
    calendars: { control: "object" },
    language: { control: "text" },
    styles: { control: "object" },
  },
} as Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;
export const DefaultCalendar: Story = {
  args: {
    calendars: [
      {
        calendarId:
          "c_b5dad1e398896445b1eb1d20d8da6d43234e5bbaaa391f07bb952f54491efcd2@group.calendar.google.com",
      },
    ],
  },
};
