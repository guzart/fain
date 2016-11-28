// @flow

import { flexFeature } from './feature';

const flexEnabled = flexFeature(
  (enabledStyle: any) => enabledStyle,
  (_, disabledStyle: any) => disabledStyle,
);

export default flexEnabled;
