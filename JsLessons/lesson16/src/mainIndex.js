import _ from 'lodash';
import dayjs from "dayjs";
import { calc, weeks } from './utils';

function component() {
    const element = document.createElement('div');

    element.innerHTML = dayjs().add(weeks, 'weeks');
    return element;
}

document.body.append(component())
