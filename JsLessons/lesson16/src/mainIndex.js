import _ from 'lodash';
import dayjs from "dayjs";
import { calc, weeks } from './utils';
import "./index.sass";
import Logo from './logo.svg';

function component() {
    const element = document.createElement('div');
    const img = document.createElement('img');
    img.src = Logo;

    element.innerHTML = dayjs().add(weeks, 'weeks');
    return img;
}

console.log(process.env.S3_API);

document.body.append(component());
