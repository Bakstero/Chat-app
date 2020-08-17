/* eslint-disable no-tabs */
import { toaster } from 'evergreen-ui';

export const notify = (props, durationScore) => {
	toaster.notify(props, { duration: durationScore });
};

export const success = (props, durationScore) => {
	toaster.success(props, { duration: durationScore });
};

export const warning = (props, durationScore) => {
	toaster.warning(props, { duration: durationScore });
};

export const danger = (props, durationScore) => {
	toaster.danger(props, { duration: durationScore });
};

export const successWithDescription = (props, descriptionTag) => {
	toaster.success(props, { description: descriptionTag });
};
