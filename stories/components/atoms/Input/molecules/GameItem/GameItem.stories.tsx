import { Meta } from "@storybook/react";
import GameItem, {
  GameItemProps,
} from "../../../../../../components/molecules/GameItem";

export default {
  title: "Components/Molecules/GameItem",
  component: GameItem,
} as Meta;

const Template = (args: GameItemProps) => <GameItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  gameTitle: "Mobile Legends",
  gameType: "Mobile",
  imageThumnail: "/img/Thumbnail-1.png"
};
