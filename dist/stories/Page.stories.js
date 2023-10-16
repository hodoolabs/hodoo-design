var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { within, userEvent } from '@storybook/testing-library';
import { Page } from './Page';
const meta = {
    title: 'Example/Page',
    component: Page,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};
export default meta;
export const LoggedOut = {};
// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedIn = {
    play: ({ canvasElement }) => __awaiter(void 0, void 0, void 0, function* () {
        const canvas = within(canvasElement);
        const loginButton = yield canvas.getByRole('button', {
            name: /Log in/i,
        });
        yield userEvent.click(loginButton);
    }),
};
