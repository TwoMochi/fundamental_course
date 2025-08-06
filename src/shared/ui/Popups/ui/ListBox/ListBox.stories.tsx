import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 150 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: (value: string) => {},
    value: 'value',
    items: [
        { value: '1', content: '123wer' },
        { value: '1', content: '12334dfe' },
        { value: '1', content: '12323', disabled: true },
        { value: '1', content: '123423qwe' },
    ],
};

export const topLeft = Template.bind({});
topLeft.args = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: (value: string) => {},
    value: 'value',
    direction: 'top left',
    items: [
        { value: '1', content: '123wer' },
        { value: '1', content: '12334dfe' },
        { value: '1', content: '12323', disabled: true },
        { value: '1', content: '123423qwe' },
    ],
};

export const topRight = Template.bind({});
topRight.args = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: (value: string) => {},
    value: 'value',
    direction: 'top right',
    items: [
        { value: '1', content: '123wer' },
        { value: '1', content: '12334dfe' },
        { value: '1', content: '12323', disabled: true },
        { value: '1', content: '123423qwe' },
    ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: (value: string) => {},
    value: 'value',
    direction: 'bottom right',
    items: [
        { value: '1', content: '123wer' },
        { value: '1', content: '12334dfe' },
        { value: '1', content: '12323', disabled: true },
        { value: '1', content: '123423qwe' },
    ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange: (value: string) => {},
    value: 'value',
    direction: 'bottom left',
    items: [
        { value: '1', content: '123wer' },
        { value: '1', content: '12334dfe' },
        { value: '1', content: '12323', disabled: true },
        { value: '1', content: '123423qwe' },
    ],
};
