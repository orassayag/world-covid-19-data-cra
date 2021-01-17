import React from 'react';
import { Helmet } from 'react-helmet';
import { timeUtils } from '../../../utils';

const MetaTags =
    (<Helmet>
        <title data-rh="true">World Covid 19 Data | Covid 19 World Data | {timeUtils.getTitleDate()}</title>
    </Helmet>);

export default MetaTags;