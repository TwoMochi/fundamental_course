import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero maxime, dolores quaerat cupiditate ratione eius veritatis explicabo sit, nostrum deserunt, hic blanditiis sequi distinctio quisquam aut odit architecto asperiores.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero maxime, dolores quaerat cupiditate ratione eius veritatis explicabo sit, nostrum deserunt, hic blanditiis sequi distinctio quisquam aut odit architecto asperiores.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
