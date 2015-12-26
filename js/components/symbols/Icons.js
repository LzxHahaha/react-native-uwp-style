import Theme from '../../config/theme';
import {Icons as Black} from './blackIcons';
import {Icons as White} from './whiteIcons';

export const Icons = Theme.isDarkStyle ? White : Black;
