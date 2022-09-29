import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, quaerat animi.
    A officia quos sequi non ab. Vero doloremque beatae recusandae, voluptas quisquam nam
    saepe, accusamus, sequi placeat sunt fugiat.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
